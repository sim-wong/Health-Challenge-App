let start = document.getElementById("start");
let pause = document.getElementById("pause");
let reset = document.getElementById("reset");
let setTime = document.getElementById("set-timer");

function startTimer() {
  console.log("hi");
}
function pauseTimer() {
  console.log("hi");
}

function resetTimer() {
  console.log("hi");
}
function setTimer() {
  document.getElementById("timer-set").style.display = "block";
}

function closeForm() {
  document.getElementById("timer-set").style.display = "none";
}

start.addEventListener("click", startTimer);
pause.addEventListener("click", pauseTimer);
reset.addEventListener("click", resetTimer);
setTime.addEventListener("click", setTimer);
