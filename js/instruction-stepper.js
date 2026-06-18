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
      "Remove lid SA and verify that the required items are present.",
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
    title: "Photograph the T-8 Setup",
    instruction:
      "Take photos of the complete T-8 setup. Make sure the SA, SA lid, TA, optional CA and T-8 tool are visible. Use multiple photos if needed.",
    warning: null,
    images: [],
    checks: [
      "Photos of all required items have been taken"
    ]
  },
  {
    title: "Verify FAES RTM Label",
    instruction:
      "Check whether a FAES RTM label is present. If it is missing, place a new label on the left side of the front panel.",
    warning: null,
    images: [],
    checks: [
      "One FAES RTM label is present"
    ]
  },
  {
    title: "Print Sequence Labels",
    instruction:
      "Print two sequence labels using Altec.",
    warning: null,
    images: [],
    checks: [
      "Two sequence labels have been printed"
    ]
  },
  {
    title: "Apply Sequence Labels",
    instruction:
      "Apply the sequence labels to the outer CA of the tool, the SA and the TA.",
    warning: null,
    images: [],
    checks: [
      "Sequence label applied to the outer CA",
      "Sequence label applied to the SA",
      "Sequence label applied to the TA"
    ]
  },
  {
    title: "Inspect Stickers and Document Holders",
    instruction:
      "Inspect all stickers, labels and document holders. Record missing stickers and remove old stickers, labels and document holders.",
    warning: null,
    images: [],
    checks: [
      "SA ISPM code checked",
      "SA non-clean handling stickers checked",
      "SA returnable transport label checked",
      "TA warning cleanroom labels checked",
      "TA returnable transport label checked"
    ]
  },
  {
    title: "SA Inspection",
    instruction:
      "Inspect the SA for loose or missing parts. Verify that the lid protection strips are present, green foam parts are securely attached and the interior is complete.",
    warning: null,
    images: [],
    checks: [
      "No loose or missing SA parts found",
      "Lid protection strips are present",
      "Green foam parts are securely attached",
      "SA interior is complete"
    ]
  },
  {
    title: "Assess Cleaning Requirements",
    instruction:
      "Determine whether additional cleaning is required to meet Grade 5 standards.",
    warning: null,
    images: [],
    checks: [
      "Grade 5 cleaning requirement assessed"
    ]
  },
  {
    title: "TA Inspection",
    instruction:
      "Inspect the TA exterior and interior. Verify that hardware and fittings are secure, the HPL layer is undamaged, foam parts are present and the interior is complete. Report an issue if a condition is not met.",
    warning: null,
    images: [],
    checks: [
      "Hardware and fittings are present and secure",
      "HPL layer is undamaged",
      "Foam parts are present",
      "TA cleaning requirement assessed",
      "TA interior is complete"
    ]
  },
  {
    title: "Remove CA",
    instruction:
      "Remove the outer and inner CA and store them safely for reuse later. Keep the TA closed as much as possible to reduce contamination. Note additional cleaning time in AFAS when required.",
    warning: null,
    images: [],
    checks: [
      "Outer CA removed",
      "Inner CA removed",
      "CA parts stored safely for reuse",
      "Clean Assy availability checked",
      "Additional cleaning time noted in AFAS when required"
    ]
  },
  {
    title: "Wear Gloves",
    instruction:
      "Put on gloves before continuing. Inspect all four red poles. Rotate each pole counterclockwise using one hand. Each pole must rotate only a quarter turn.",
    warning:
      "Wear gloves before continuing with this step. Contamination must be avoided.",
    images: [],
    checks: [
      "Gloves worn",
      "All four red poles inspected",
      "Dark blue part is present and hand fastened",
      "Pink part is present and hand fastened",
      "Light green part is present and hand fastened",
      "Yellow part is present and hand fastened",
      "Orange part is present and hand fastened",
      "Light blue part is present and hand fastened",
      "Dark green part is present and hand fastened"
    ]
  },
  {
    title: "Verify Pillars and Release Pins",
    instruction:
      "Check that all pillars are present and hand fastened. Verify that the pink and light-blue parts are fully threaded.",
    warning: null,
    images: [],
    checks: [
      "Dark blue pillar is present and hand fastened",
      "Green pillar is present and hand fastened",
      "Red pillar is present and hand fastened",
      "Orange pillars are present and hand fastened",
      "Pink parts are fully threaded",
      "Light-blue parts are fully threaded"
    ]
  },
  {
    title: "Base Plate Assembly Check",
    instruction:
      "Check that all required parts are present and correctly mounted on the base plate. Verify that the required screws are present and properly installed.",
    warning: null,
    images: [],
    checks: [
      "Yellow parts are present and mounted correctly",
      "Green part is present and mounted correctly"
    ]
  },
  {
    title: "Place Cyan Bracket",
    instruction:
      "Place the cyan bracket on the base plate. Fasten it with two M4x20 screws and align it with one M4x12 dowel pin.",
    warning: null,
    images: [],
    checks: [
      "Cyan bracket placed in the correct position",
      "Two M4x20 screws fastened",
      "Dowel pin seated"
    ]
  },
  {
    title: "Place Green Block",
    instruction:
      "Place the green block on the base plate. Fasten it with four M5x30 screws and align it with one M4x12 dowel pin.",
    warning: null,
    images: [],
    checks: [
      "Green block placed in the correct position",
      "Four M5x30 screws fastened",
      "Dowel pin seated"
    ]
  },
  {
    title: "Place Green Guide Caps",
    instruction:
      "Place seven green guide caps on the base plate in the correct positions.",
    warning: null,
    images: [],
    checks: [
      "Seven green guide caps placed in the correct positions"
    ]
  },
  {
    title: "Place Orange Block",
    instruction:
      "Place the orange block on the base plate in the correct orientation. Fasten it with four M4x20 screws and align it with one M4x12 dowel pin.",
    warning: null,
    images: [],
    checks: [
      "Orange block placed in the correct position",
      "Orange block oriented correctly",
      "Four M4x20 screws fastened",
      "Dowel pin seated"
    ]
  },
  {
    title: "Place Purple Guide Caps",
    instruction:
      "Place four purple guide caps on the base plate and fasten each one with an M3x16 screw.",
    warning: null,
    images: [],
    checks: [
      "Four purple guide caps placed in the correct positions",
      "Four M3x16 screws fastened"
    ]
  },
  {
    title: "Place Yellow Man Cap",
    instruction:
      "Place one yellow man cap on the base plate and fasten it with an M5x25 screw.",
    warning: null,
    images: [],
    checks: [
      "Yellow man cap placed in the correct position",
      "M5x25 screw fastened"
    ]
  },
  {
    title: "Surface Inspection",
    instruction:
      "Check the pillars for dents and burrs. Mark exceptionally large dents and burrs with a red permanent marker.",
    warning: null,
    images: [],
    checks: [
      "Pillars inspected for dents and burrs",
      "Large dents marked with a red marker when required",
      "Large burrs marked with a red marker when required"
    ]
  },
  {
    title: "Underside Presence Check",
    instruction:
      "Compare the underside of the T-8 with the reference image. Confirm the count of each screw type.",
    warning: null,
    images: [],
    checks: [
      "Eight red M6x20 screws present",
      "Thirteen blue M5x12 screws present",
      "Four yellow M4x12 screws present",
      "Three green M3x8 screws present"
    ]
  },
  {
    title: "Underside Condition Check",
    instruction:
      "Check that feet, pole mounting points and screws are present and hand tightened. Mark exceptionally large burrs with a red permanent marker. Return the T-8 to its original orientation.",
    warning: null,
    images: [],
    checks: [
      "All feet are present",
      "All pole mounts are present",
      "All screws are present",
      "Large burrs marked with a red marker when required",
      "T-8 returned to its original orientation"
    ]
  },
  {
    title: "Repackage Tool into CA",
    instruction:
      "Place the tool into the CA selected earlier.",
    warning: null,
    images: [],
    checks: [
      "Tool fits inside the CA without forcing"
    ]
  },
  {
    title: "Place CA into TA",
    instruction:
      "Place the CA into the TA and close the lid.",
    warning: null,
    images: [],
    checks: [
      "CA seated flat inside the TA",
      "TA lid fully closed"
    ]
  },
  {
    title: "Place TA into SA",
    instruction:
      "Place the TA into the SA and close the lid.",
    warning: null,
    images: [],
    checks: [
      "TA seated flat inside the SA",
      "SA lid fully closed"
    ]
  },
  {
    title: "Confirm and Close DWI",
    instruction:
      "Confirm that all previous steps are complete. Closing this step submits the DWI to AFAS.",
    warning: null,
    images: [],
    checks: [
      "All previous steps marked complete",
      "Unit ready to leave the station"
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

const totalSteps = t8Steps.length;

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

function updateNextStepButton() {
  const isLastStep = currentStepIndex === t8Steps.length - 1;

  nextStepButton.classList.toggle(
    "instruction-navigation-button--finish",
    isLastStep
  );

  if (isLastStep) {
    nextStepButton.textContent = "Finish";
    nextStepButton.setAttribute("aria-label", "Finish instruction");
    return;
  }

  nextStepButton.innerHTML = `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 6L15 12L9 18"></path>
    </svg>
  `;

  nextStepButton.setAttribute("aria-label", "Next step");
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
  updateNextStepButton();
}

previousStepButton.addEventListener("click", () => {
  if (currentStepIndex === 0) {
    return;
  }

  currentStepIndex -= 1;
  renderStep();
});

nextStepButton.addEventListener("click", () => {
  const isLastStep = currentStepIndex === t8Steps.length - 1;

  if (isLastStep) {
    sessionStorage.removeItem("activeInstructionId");
    sessionStorage.removeItem("activePackageCode");

    window.location.href = "index.html";
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