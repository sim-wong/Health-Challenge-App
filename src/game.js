let mountain = document.getElementById("mountain-img");

let currentMountainPositionBottom = mountain.offsetTop;

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
