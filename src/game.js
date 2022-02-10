function openForm() {
  document.getElementById("workout-form").style.display = "block";
}

function closeForm() {
  document.getElementById("workout-form").style.display = "none";
}

// function zoomOut() {
//   mountain.style.width = "700px";
// }

// function zoomIn() {
//   mountain.style.width = "2100px";
// }

// Sprite movement
let sprite = document.getElementById("sprite-mountain");
let x = 0;

if (x === 0) {
  sprite.style.right = 615 + "px";
  sprite.style.top = 450 + "px";
} else if (x === 1) {
  sprite.style.right = 515 + "px";
  sprite.style.top = 450 + "px";
} else if (x === 2) {
  sprite.style.right = 455 + "px";
  sprite.style.top = 450 + "px";
} else if (x === 3) {
  sprite.style.right = 392 + "px";
  sprite.style.top = 385 + "px";
} else if (x === 4) {
  sprite.style.right = 287 + "px";
  sprite.style.top = 318 + "px";
} else if (x === 5) {
  sprite.style.right = 198 + "px";
  sprite.style.top = 256 + "px";
} else if (x === 6) {
  sprite.style.right = 138 + "px";
  sprite.style.top = 193 + "px";
} else if (x === 7) {
  sprite.style.right = 37 + "px";
  sprite.style.top = 166 + "px";
} else if (x === 8) {
  sprite.style.right = 350 + "px";
  sprite.style.top = 379 + "px";
} else if (x === 9) {
  sprite.style.right = 210 + "px";
  sprite.style.top = 139 + "px";
} else if (x === 10) {
  sprite.style.right = 26 + "px";
  sprite.style.top = 130 + "px";
} else if (x === 11) {
  sprite.style.right = 184 + "px";
  sprite.style.top = 348 + "px";
} else if (x === 12) {
  sprite.style.right = 81 + "px";
  sprite.style.top = 268 + "px";
} else if (x === 13) {
  sprite.style.right = 200 + "px";
  sprite.style.top = 284 + "px";
} else if (x === 14) {
  sprite.style.right = 289 + "px";
  sprite.style.top = 202 + "px";
} else if (x === 15) {
  sprite.style.right = 170 + "px";
  sprite.style.top = 188 + "px";
} else if (x === 16) {
  sprite.style.right = 50 + "px";
  sprite.style.top = 174 + "px";
} else if (x === 17) {
  sprite.style.right = 102 + "px";
  sprite.style.top = 124 + "px";
} else if (x === 18) {
  sprite.style.right = 158 + "px";
  sprite.style.top = 70 + "px";
}
// Game page

let mountain = document.getElementById("mountain-img");
let positionRight = sprite.style.right;
positionRight = positionRight.slice(0, -2);
positionRight = parseInt(positionRight);
let defaultRight = positionRight;
let positionTop = sprite.style.top;
positionTop = positionTop.slice(0, -2);
positionTop = parseInt(positionTop);
let defaultTop = positionTop;
let positionLeft = 0;
let positionBottom = 0;
let topOffset = 750;
let rightOffset = 675;
let bottomOffset = 0;
let leftOffset = 0;

if (x >= 8 && x <= 10) {
  positionLeft = -450;
  positionBottom = -225;
  mountain.style.left = positionLeft + "px";
  mountain.style.bottom = positionBottom + "px";
  topOffset = 525;
  bottomOffset = 225;
  rightOffset = 225;
  leftOffset = 450;
} else if (x >= 11 && x <= 18) {
  positionLeft = -675;
  positionBottom = -450;
  mountain.style.left = positionLeft + "px";
  mountain.style.bottom = positionBottom + "px";
  topOffset = 300;
  bottomOffset = 450;
  rightOffset = 0;
  leftOffset = 675;
}

function moveUp() {
  let currentPosition = newPosition();

  function newPosition() {
    positionBottom -= 75;
    positionTop += 75;

    if (positionBottom >= -750) {
      return positionBottom;
    } else {
      positionBottom = -750;
      positionTop = defaultTop + topOffset;
    }
  }
  if (
    currentPosition >= -750 &&
    currentPosition <= 0 &&
    currentPosition != undefined
  ) {
    mountain.style.bottom = positionBottom + "px";
    sprite.style.top = positionTop + "px";
  }
}

function moveDown() {
  let currentPosition = newPosition();

  function newPosition() {
    positionBottom += 75;
    positionTop -= 75;

    if (positionBottom <= 0) {
      return positionBottom;
    } else {
      positionBottom = 0;
      positionTop = defaultTop - bottomOffset;
    }
  }
  if (
    currentPosition >= -750 &&
    currentPosition <= 0 &&
    currentPosition != undefined
  ) {
    mountain.style.bottom = positionBottom + "px";
    sprite.style.top = positionTop + "px";
  }
}

function moveLeft() {
  let currentPosition = newPosition();

  function newPosition() {
    positionLeft += 75;
    positionRight -= 75;

    if (positionLeft <= 0) {
      return positionLeft;
    } else {
      positionLeft = 0;
      positionRight = defaultRight - leftOffset;
    }
  }
  if (
    currentPosition >= -750 &&
    currentPosition <= 0 &&
    currentPosition != undefined
  ) {
    mountain.style.left = positionLeft + "px";
    sprite.style.right = positionRight + "px";
    console.log(positionRight);
  }
}

function moveRight() {
  let currentPosition = newPosition();

  function newPosition() {
    positionLeft -= 75;
    positionRight += 75;

    if (positionLeft >= -675) {
      return positionLeft;
    } else {
      positionLeft = -675;
      positionRight = defaultRight + rightOffset;
    }
  }
  if (
    currentPosition >= -675 &&
    currentPosition <= 0 &&
    currentPosition != undefined
  ) {
    mountain.style.left = positionLeft + "px";
    sprite.style.right = positionRight + "px";
    console.log(positionRight);
  }
}

// rules

function openRules() {
  if (rulesDisplay.classList.contains("hide")) {
    rulesDisplay.classList.remove("hide");
  } else {
    rulesDisplay.classList.add("hide");
  }
}

let rulesDisplay = document.getElementById("rules-explained");

let rules = document.getElementById("rules-question");
rules.addEventListener("click", openRules);
