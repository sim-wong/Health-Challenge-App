// Sprite Tabs

// adding an event listner to tabs
// tab id in HTML should be set to "tab-x" where x is
// the number of the tab

let numberOfTabs = document
  .getElementById("tab-ul")
  .getElementsByTagName("li").length;

function openTab(event) {
  let targetId = event.target.id;

  for (i = 1; i <= numberOfTabs; i++) {
    let tabId = `tab-${i}`;
    let tabDiv = `tab-div-${i}`;
    tabDiv = document.getElementById(`${tabDiv}`);

    if (tabId === targetId) {
      tabDiv.style.display = "block";
    } else {
      tabDiv.style.display = "none";
    }
  }
}

for (i = 1; i <= numberOfTabs; i++) {
  let tabId = `tab-${i}`;
  document.getElementById(`${tabId}`).addEventListener("click", openTab);
}

// Game page

let mountain = document.getElementById("mountain-img");
let positionLeft = 0;
let positionBottom = 0;

function openForm() {
  document.getElementById("workout-form").style.display = "block";
}

function closeForm() {
  document.getElementById("workout-form").style.display = "none";
}

function zoomOut() {
  mountain.style.width = "700px";
}

function zoomIn() {
  mountain.style.width = "2100px";
}

function moveUp() {
  let currentPosition = newPosition();
  console.log(currentPosition);

  function newPosition() {
    positionBottom -= 75;

    if (positionBottom >= -750) {
      return positionBottom;
    } else {
      positionBottom = -750;
    }
  }
  if (
    currentPosition >= -750 &&
    currentPosition <= 0 &&
    currentPosition != undefined
  ) {
    mountain.style.bottom = positionBottom + "px";
  }
}

function moveDown() {
  let currentPosition = newPosition();
  console.log(currentPosition);

  function newPosition() {
    positionBottom += 75;

    if (positionBottom <= 0) {
      return positionBottom;
    } else {
      positionBottom = 0;
    }
  }
  if (
    currentPosition >= -750 &&
    currentPosition <= 0 &&
    currentPosition != undefined
  ) {
    mountain.style.bottom = positionBottom + "px";
  }
}

function moveLeft() {
  let currentPosition = newPosition();
  console.log(currentPosition);

  function newPosition() {
    positionLeft += 75;

    if (positionLeft <= 0) {
      return positionLeft;
    } else {
      positionLeft = 0;
    }
  }
  if (
    currentPosition >= -750 &&
    currentPosition <= 0 &&
    currentPosition != undefined
  ) {
    mountain.style.left = positionLeft + "px";
  }
}

function moveRight() {
  let currentPosition = newPosition();
  console.log(currentPosition);

  function newPosition() {
    positionLeft -= 75;

    if (positionLeft >= -675) {
      return positionLeft;
    } else {
      positionLeft = -675;
    }
  }
  if (
    currentPosition >= -675 &&
    currentPosition <= 0 &&
    currentPosition != undefined
  ) {
    mountain.style.left = positionLeft + "px";
  }
}
