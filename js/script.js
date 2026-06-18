const sidebar = document.querySelector(".sidebar");
const sidebarToggleButton = document.querySelector(".sidebar-collapse-button");

function updateSidebarToggleState() {
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


const instructionSearchInput = document.querySelector("#instruction-search");
const instructionCards = [...document.querySelectorAll(".instruction-card")];
const searchEmptyState = document.querySelector("#search-empty-state");

function normaliseSearchText(text) {
  return text.toLowerCase().trim();
}

function filterInstructions(searchTerm) {
  const normalisedSearchTerm = normaliseSearchText(searchTerm);
  let visibleCardCount = 0;

  instructionCards.forEach((card) => {
    const cardText = normaliseSearchText(card.textContent);
    const matchesSearch = cardText.includes(normalisedSearchTerm);

    card.hidden = !matchesSearch;

    if (matchesSearch) {
      visibleCardCount += 1;
    }
  });

  if (searchEmptyState) {
    searchEmptyState.hidden = visibleCardCount !== 0;
  }
}

if (instructionSearchInput) {
  instructionSearchInput.addEventListener("input", (event) => {
    filterInstructions(event.target.value);
  });
}

const t8InstructionCard = document.querySelector(
  '[data-open-modal="instruction-preview"]'
);

const instructionPreviewDialog = document.querySelector(
  "#instruction-preview-dialog"
);

const packageCodeDialog = document.querySelector("#package-code-dialog");

const closePreviewButton = document.querySelector("#close-preview-button");
const startInstructionButton = document.querySelector(
  "#start-instruction-button"
);

const cancelPackageCodeButton = document.querySelector(
  "#cancel-package-code-button"
);

const confirmPackageCodeButton = document.querySelector(
  "#confirm-package-code-button"
);

const packageCodeInput = document.querySelector("#package-code-input");
const packageCodeError = document.querySelector("#package-code-error");

function closeDialogWhenBackdropIsClicked(dialog) {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
}

if (instructionPreviewDialog) {
  closeDialogWhenBackdropIsClicked(instructionPreviewDialog);
}

if (packageCodeDialog) {
  closeDialogWhenBackdropIsClicked(packageCodeDialog);
}

if (t8InstructionCard && instructionPreviewDialog) {
  t8InstructionCard.addEventListener("click", () => {
    instructionPreviewDialog.showModal();
  });
}

if (closePreviewButton && instructionPreviewDialog) {
  closePreviewButton.addEventListener("click", () => {
    instructionPreviewDialog.close();
  });
}

if (
  startInstructionButton &&
  instructionPreviewDialog &&
  packageCodeDialog &&
  packageCodeInput
) {
  startInstructionButton.addEventListener("click", () => {
    instructionPreviewDialog.close();

    packageCodeInput.value = "";
    packageCodeError.hidden = true;

    packageCodeDialog.showModal();
    packageCodeInput.focus();
  });
}

if (cancelPackageCodeButton && packageCodeDialog) {
  cancelPackageCodeButton.addEventListener("click", () => {
    packageCodeDialog.close();
  });
}

if (
  confirmPackageCodeButton &&
  packageCodeDialog &&
  packageCodeInput &&
  packageCodeError
) {
  confirmPackageCodeButton.addEventListener("click", () => {
    const packageCode = packageCodeInput.value.trim();

    if (!packageCode) {
      packageCodeError.hidden = false;
      packageCodeInput.focus();
      return;
    }

    sessionStorage.setItem("activeInstructionId", "t8");
    sessionStorage.setItem("activePackageCode", packageCode);

    packageCodeDialog.close();

    console.log("Instruction started", {
      instructionId: "t8",
      packageCode,
    });
  });
}

if (packageCodeInput && packageCodeError) {
  packageCodeInput.addEventListener("input", () => {
    packageCodeError.hidden = true;
  });
}