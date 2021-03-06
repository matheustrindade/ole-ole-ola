function addClassById(id, classes) {
  "use-strict";

  const elem = document.getElementById(id);
  const currentClassNames = elem.className || "";
  elem.className = `${currentClassNames} ${classes}`;
}

function addClassAfterTime(id, classNames, time) {
  "use strict";
  setTimeout(() => {
    addClassById(id, classNames);
  }, time);
}

function shriknkPauseButton() {
  "use strict";
  addClassAfterTime("pause-button-container", "shrink", 2300);
}

function startMusic() {
  const audio = new Audio("./sound/ole_ola_lula.mp3");
  audio.play();
}

function creteElement(elemName) {}

function handleClickLogo() {
  "use strict";

  addClassById("pt-logo", "party--expanded");
  addClassById("main", "start");

  shriknkPauseButton();

  addClassAfterTime("alert-sound", "show", 3500);

  //3500ms + 3000ms animation above
  addClassAfterTime("countdown", "show", 9000);

  //9000ms + 1s animation above
  addClassAfterTime("pt-logo", "party--shutdown-lights", 12000);

  setTimeout(startMusic, 13000);
}
