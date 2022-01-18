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
    positionBottom -= 100;

    if (positionBottom >= -1200) {
      return positionBottom;
    } else {
      positionBottom = -1200;
    }
  }
  if (
    currentPosition >= -1200 &&
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
    positionBottom += 100;

    if (positionBottom <= 0) {
      return positionBottom;
    } else {
      positionBottom = 0;
    }
  }
  if (
    currentPosition >= -1200 &&
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
    positionLeft += 100;

    if (positionLeft <= 0) {
      return positionLeft;
    } else {
      positionLeft = 0;
    }
  }
  if (
    currentPosition >= -1200 &&
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
    positionLeft -= 100;

    if (positionLeft >= -1200) {
      return positionLeft;
    } else {
      positionLeft = -1200;
    }
  }
  if (
    currentPosition >= -1200 &&
    currentPosition <= 0 &&
    currentPosition != undefined
  ) {
    mountain.style.left = positionLeft + "px";
  }
}
