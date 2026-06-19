const sidebar = document.querySelector(".sidebar");
const sidebarToggleButton = document.querySelector(".sidebar-collapse-button");

const reportsGrid = document.querySelector("#reports-grid");
const reportsEmptyState = document.querySelector("#reports-empty-state");
const reportFilterButtons = document.querySelectorAll("[data-status-filter]");

const activeStatuses = new Set([
  "Resolved",
  "In review",
  "Waiting for review"
]);

function updateSidebarToggleState() {
  if (!sidebar || !sidebarToggleButton) {
    return;
  }

  const isExpanded = sidebar.classList.contains("sidebar--expanded");

  sidebarToggleButton.setAttribute("aria-expanded", String(isExpanded));
  sidebarToggleButton.setAttribute(
    "aria-label",
    isExpanded ? "Close navigation" : "Open navigation"
  );
}

if (sidebar && sidebarToggleButton) {
  sidebarToggleButton.addEventListener("click", () => {
    sidebar.classList.toggle("sidebar--expanded");
    updateSidebarToggleState();
  });

  updateSidebarToggleState();
}

function getSavedIssueReports() {
  try {
    const savedReports = localStorage.getItem("faesIssueReports");

    return savedReports ? JSON.parse(savedReports) : [];
  } catch (error) {
    console.error("Could not load saved issue reports.", error);
    return [];
  }
}

function getStatusClass(status) {
  if (status === "Resolved") {
    return "resolved";
  }

  if (status === "In review") {
    return "review";
  }

  return "waiting";
}

function formatReportDate(dateString) {
  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return "Unknown date";
  }

  const day = date.getDate();

  function getOrdinal(number) {
    const remainder = number % 10;
    const remainderHundred = number % 100;

    if (remainder === 1 && remainderHundred !== 11) {
      return `${number}st`;
    }

    if (remainder === 2 && remainderHundred !== 12) {
      return `${number}nd`;
    }

    if (remainder === 3 && remainderHundred !== 13) {
      return `${number}rd`;
    }

    return `${number}th`;
  }

  return `${date.toLocaleString("en-US", {
    month: "long"
  })} ${getOrdinal(day)}`;
}

function createReportCard(report) {
  const statusClass = getStatusClass(report.status);

  const reportCard = document.createElement("article");
  reportCard.className = `report-card report-card--${statusClass}`;

  const reportContent = document.createElement("div");
  reportContent.className = "report-card__content";

  const reportTitle = document.createElement("h2");
  reportTitle.className = "report-card__title";
  reportTitle.textContent = report.title;

  const reportMeta = document.createElement("p");
  reportMeta.className = "report-card__meta";
  reportMeta.textContent =
    `${report.instructionName}: Step ${report.stepNumber} • ${formatReportDate(report.createdAt)}`;

  const reportStatus = document.createElement("span");
  reportStatus.className = `report-status report-status--${statusClass}`;
  reportStatus.textContent = report.status;

  reportContent.appendChild(reportTitle);
  reportContent.appendChild(reportMeta);

  reportCard.appendChild(reportContent);
  reportCard.appendChild(reportStatus);

  return reportCard;
}

function renderReports() {
  if (!reportsGrid || !reportsEmptyState) {
    return;
  }

  const allReports = getSavedIssueReports();

  const visibleReports = allReports.filter((report) => {
    return activeStatuses.has(report.status);
  });

  reportsGrid.innerHTML = "";

  if (visibleReports.length === 0) {
    reportsEmptyState.hidden = false;
    return;
  }

  reportsEmptyState.hidden = true;

  visibleReports.forEach((report) => {
    reportsGrid.appendChild(createReportCard(report));
  });
}

function updateFilterButtonStates() {
  reportFilterButtons.forEach((button) => {
    const status = button.dataset.statusFilter;
    const isDisabled = !activeStatuses.has(status);

    button.classList.toggle("report-filter--inactive", isDisabled);
    button.setAttribute("aria-pressed", String(isDisabled));
  });
}

reportFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const status = button.dataset.statusFilter;

    if (activeStatuses.has(status)) {
      activeStatuses.delete(status);
    } else {
      activeStatuses.add(status);
    }

    updateFilterButtonStates();
    renderReports();
  });
});

updateFilterButtonStates();
renderReports();