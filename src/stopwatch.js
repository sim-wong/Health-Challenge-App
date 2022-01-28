// tool selector

let stopwatch = document.getElementById("stopwatch-tool");
let timer = document.getElementById("timer-tool");
let counter = document.getElementById("counter");

function stopwatchSelect() {
  timer.classList.remove("highlight");
  stopwatch.classList.add("highlight");
  counter.innerHTML = "00:00:00";
}

function timerSelect() {
  timer.classList.add("highlight");
  stopwatch.classList.remove("highlight");
  counter.innerHTML = "00:05:00";
}

stopwatch.addEventListener("click", stopwatchSelect);
timer.addEventListener("click", timerSelect);

//Stopwatch

// time controls

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
