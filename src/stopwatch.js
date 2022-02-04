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
let hours = document.getElementById("hours");
// time innerHTML

let secondBase = 0;
let minuteBase = 0;
let hourBase = 0;

let startT;

function startStopwatch() {
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

function startTimer() {}

function startTime() {
  if (stopwatch.classList.contains("highlight")) {
    startStopwatch();
  } else {
    startTimer();
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
  let timerInputs = document.querySelectorAll('input[type="number"]');
  console.log(timerInputs[2].value);
  for (i = 0; i < timerInputs.length; i++) {
    console.log(timerInputs[i].value);
    if (timerInputs[i].value === null) {
      timerInputs[i].value = 0;
    }
  }
  let hourInput = document.getElementById("hoursTimer").value;
  let minuteInput = document.getElementById("minutesTimer").value;
  let secondInput = document.getElementById("secondsTimer").value;

  hourBase = hourInput;
  minuteBase = minuteInput;
  secondBase = secondInput;

  hours.innerHTML = hourInput.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  minutes.innerHTML = hourInput.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  seconds.innerHTML = hourInput.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
}

start.addEventListener("click", startTime);
pause.addEventListener("click", pauseTimer);
reset.addEventListener("click", resetTimer);
setTime.addEventListener("click", setTimer);
