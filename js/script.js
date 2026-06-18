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