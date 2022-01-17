function openForm() {
  document.getElementById("workout-form").style.display = "block";
}

function closeForm() {
  document.getElementById("workout-form").style.display = "none";
}

function zoomOut() {
  let mountain = document.getElementById("mountain-img");
  mountain.style.width = "700px";
}

function zoomIn() {
  let mountain = document.getElementById("mountain-img");
  mountain.style.width = "2100px";
}
