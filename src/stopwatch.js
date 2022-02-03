// tool selector

let stopwatch = document.getElementById("stopwatch-tool");
let timer = document.getElementById("timer-tool");
let counter = document.getElementById("counter");

function stopwatchSelect() {
  timer.classList.remove("highlight");
  stopwatch.classList.add("highlight");
  counter.innerHTML = "00:00:00";
  setTime.style.display = "none";
}

function timerSelect() {
  timer.classList.add("highlight");
  stopwatch.classList.remove("highlight");
  counter.innerHTML = "00:20:00";
  setTime.style.display = "inline";
}

stopwatch.addEventListener("click", stopwatchSelect);
timer.addEventListener("click", timerSelect);

//Stopwatch

// time controls

let start = document.getElementById("start");
let pause = document.getElementById("pause");
let reset = document.getElementById("reset");
let setTime = document.getElementById("set-timer");
let seconds = document.getElementById("seconds");
let minutes = document.getElementById("minutes");
// time innerHTML

let secondBase = 0;
let minuteBase = 0;
let hourBase = 0;

let startT;

function startTime() {
  if (!startT) {
    startT = setInterval(function addSecond() {
      secondBase = secondBase + 1;
      let updatedSecond = secondBase.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      seconds.innerHTML = updatedSecond;
      if (secondBase > 59) {
        secondBase = 0;
        resetSecond = secondBase.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        });
        seconds.innerHTML = resetSecond;
        minuteBase = minuteBase + 1;
        let updatedMinute = minuteBase.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        });
        minutes.innerHTML = updatedMinute;
      }
      if (minuteBase > 59) {
        minuteBase = 0;
        resetMinute = minuteBase.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        });
        minutes.innerHTML = resetMinute;
        hourBase = hourBase + 1;
        resetHour = hourBase.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        });
        hours.innerHTML = resetHour;
      }
    }, 1000);
  }
}

function startTimer() {
  if (stopwatch.classList.contains("highlight")) {
    startTime();
  } else {
    console.log("bye");
  }
}
function pauseTimer() {
  if (stopwatch.classList.contains("highlight")) {
    clearInterval(startT);
    startT = null;
  } else {
    console.log("bye");
  }
}

function resetTimer() {
  if (stopwatch.classList.contains("highlight")) {
    clearInterval(startT);
    startT = null;
    secondBase = 0;
    minuteBase = 0;
    hourBase = 0;
    seconds.innerHTML = secondBase.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
    minutes.innerHTML = minuteBase.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
    hours.innerHTML = hourBase.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
  } else {
    console.log("bye");
  }
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
