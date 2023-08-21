const text = document.querySelector(".second-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Eating";
  }, 0);

  setTimeout(() => {
    text.textContent = "Lifestyle";
  }, 4000);

  setTimeout(() => {
    text.textContent = "Sleeping";
  }, 8000);
};

textLoad();
setInterval(textLoad, 12000);

const panels = document.querySelectorAll(".panel");
const prev = document.getElementById("prevButton");
const next = document.getElementById("nextButton");
const prevProgram = document.getElementById("prevButtonPrgram");
const nextProgram = document.getElementById("nextButtonProgram");
const programs = document.querySelectorAll(".all-programs-card");
let currentActive = 0;
let currentActiveProgram = 0;

next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > panels.length) {
    currentActive = panels.length;
  }

  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 0;
  }
  update();
});

function update() {
  removeActiveClasses();
  panels[currentActive].classList.remove("hidden");

  if (currentActive === 0) {
    prev.disabled = true;
  } else if (currentActive === panels.length - 1) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.add("hidden");
  });
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
nextProgram.addEventListener("click", () => {
  currentActiveProgram++;

  if (currentActiveProgram > programs.length) {
    currentActiveProgram = programs.length;
  }

  updateProgram();
});

prevProgram.addEventListener("click", () => {
  currentActiveProgram--;
  if (currentActiveProgram < 1) {
    currentActiveProgram = 0;
  }
  updateProgram();
});

function updateProgram() {
  removeActiveClassesProgram();
  programs[currentActiveProgram].classList.remove("hidden");

  if (currentActiveProgram === 0) {
    prevProgram.disabled = true;
  } else if (currentActiveProgram === programs.length - 1) {
    nextProgram.disabled = true;
  } else {
    prevProgram.disabled = false;
    nextProgram.disabled = false;
  }
}

function removeActiveClassesProgram() {
  programs.forEach((program) => {
    program.classList.add("hidden");
  });
}
