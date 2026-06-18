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