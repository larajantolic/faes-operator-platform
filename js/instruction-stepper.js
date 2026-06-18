const t8Steps = [
  {
    title: "Setup Verification",
    instruction:
      "Check the T-8 for two triangle markings. If the markings are present, continue with this instruction. If the markings are not present, use the T-28 manual instead.",
    warning: null,
    images: [],
    checks: [
      "Two triangle markings are present",
      "All required items are present"
    ]
  },
  {
    title: "Verify T-8 Contents",
    instruction:
      "Remove lid SA and verify that all required items are present.",
    warning: null,
    images: [],
    checks: [
      "1× TA is present",
      "1× SA is present",
      "1× CA is present, if included",
      "1× Tool T-8 is present"
    ]
  },
  {
    title: "Wear Gloves",
    instruction:
      "Put on gloves before continuing. Inspect all four red poles and rotate each pole counterclockwise using one hand. Each pole must rotate only a quarter turn.",
    warning:
      "Gloves are mandatory before continuing with this step.",
    images: [],
    checks: [
      "Gloves worn",
      "All four red poles inspected",
      "Each pole rotates only a quarter turn"
    ]
  }
];

let currentStepIndex = 0;

const instructionStepLabel = document.querySelector("#instruction-step-label");
const instructionStepTitle = document.querySelector("#instruction-step-title");
const instructionText = document.querySelector("#instruction-text");
const instructionWarning = document.querySelector("#instruction-warning");
const instructionCheckList = document.querySelector("#instruction-check-list");
const instructionStepCounter = document.querySelector("#instruction-step-counter");

const instructionStepLayout = document.querySelector("#instruction-step-layout");
const instructionImagePanel = document.querySelector("#instruction-image-panel");
const instructionImageList = document.querySelector("#instruction-image-list");

const previousStepButton = document.querySelector("#previous-step-button");
const nextStepButton = document.querySelector("#next-step-button");

const backToLibraryButton = document.querySelector("#back-to-library-button");
const leaveInstructionDialog = document.querySelector("#leave-instruction-dialog");
const stayInInstructionButton = document.querySelector("#stay-in-instruction-button");
const confirmLeaveInstructionButton = document.querySelector(
  "#confirm-leave-instruction-button"
);

const totalSteps = 27;

function renderChecks(checks) {
  instructionCheckList.innerHTML = "";

  checks.forEach((check) => {
    const checkButton = document.createElement("button");

    checkButton.className = "instruction-check";
    checkButton.type = "button";

    checkButton.innerHTML = `
      <span class="instruction-check__box" aria-hidden="true"></span>
      <span>${check}</span>
    `;

    checkButton.addEventListener("click", () => {
      checkButton.classList.toggle("instruction-check--completed");
    });

    instructionCheckList.appendChild(checkButton);
  });
}

function renderWarning(warning) {
  if (!warning) {
    instructionWarning.hidden = true;
    instructionWarning.innerHTML = "";
    return;
  }

  instructionWarning.hidden = false;

  instructionWarning.innerHTML = `
    <span class="instruction-warning__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path d="M12 3L22 20H2L12 3Z"></path>
        <path d="M12 9V14"></path>
        <circle cx="12" cy="17.5" r="1"></circle>
      </svg>
    </span>

    <span class="instruction-warning__text">${warning}</span>
  `;
}

function renderImages(images) {
  instructionImageList.innerHTML = "";

  if (!images || images.length === 0) {
    instructionImagePanel.hidden = true;
    instructionStepLayout.classList.add("instruction-step-layout--no-images");
    instructionStepLayout.classList.remove("instruction-step-layout--with-images");
    return;
  }

  instructionImagePanel.hidden = false;
  instructionStepLayout.classList.remove("instruction-step-layout--no-images");
  instructionStepLayout.classList.add("instruction-step-layout--with-images");

  images.forEach((image) => {
    const imageElement = document.createElement("img");
    imageElement.src = image.src;
    imageElement.alt = image.alt;

    instructionImageList.appendChild(imageElement);
  });
}

function renderStep() {
  const step = t8Steps[currentStepIndex];
  const stepNumber = currentStepIndex + 1;

  instructionStepLabel.textContent = `Step ${stepNumber} of ${totalSteps}`;

  instructionStepTitle.innerHTML = `
    <span>${stepNumber}.</span>
    ${step.title}
  `;

  instructionText.textContent = step.instruction;
  instructionStepCounter.textContent = `${stepNumber} / ${totalSteps}`;

  renderWarning(step.warning);
  renderImages(step.images);
  renderChecks(step.checks);

  previousStepButton.hidden = currentStepIndex === 0;
}

previousStepButton.addEventListener("click", () => {
  if (currentStepIndex === 0) {
    return;
  }

  currentStepIndex -= 1;
  renderStep();
});

nextStepButton.addEventListener("click", () => {
  if (currentStepIndex >= t8Steps.length - 1) {
    return;
  }

  currentStepIndex += 1;
  renderStep();
});

backToLibraryButton.addEventListener("click", () => {
  leaveInstructionDialog.showModal();
});

stayInInstructionButton.addEventListener("click", () => {
  leaveInstructionDialog.close();
});

confirmLeaveInstructionButton.addEventListener("click", () => {
  sessionStorage.removeItem("activeInstructionId");
  sessionStorage.removeItem("activePackageCode");

  window.location.href = "index.html";
});

leaveInstructionDialog.addEventListener("click", (event) => {
  if (event.target === leaveInstructionDialog) {
    leaveInstructionDialog.close();
  }
});

renderStep();