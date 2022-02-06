// SOUNDS
let audioElement1 = document.getElementById("alarm");
audioElement1.setAttribute("preload", "auto");
audioElement1.autobuffer = true;

function playAlarm() {
  audioElement1.load();
  audioElement1.play();
}

function stopAlarm() {
  audioElement1.pause();
}

// tool selector

let stopwatch = document.getElementById("stopwatch-tool");
let timer = document.getElementById("timer-tool");
let counter = document.getElementById("counter");

function stopwatchSelect() {
  timer.classList.remove("highlight");
  stopwatch.classList.add("highlight");
  setStart();
  setTime.style.display = "none";
  resetTimer();
  if (start.classList.contains("start")) {
    console.log("has class");
  } else {
    setStart();
  }
}
function timerSelect() {
  timer.classList.add("highlight");
  stopwatch.classList.remove("highlight");
  setTime.style.display = "inline-block";
  setStart();
  clearInterval(stopwatchCounter);
  timerSecondBase = 0;
  timerMinuteBase = 20;
  timerHourBase = 0;

  seconds.innerHTML = timerSecondBase.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  minutes.innerHTML = timerMinuteBase.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  hours.innerHTML = timerHourBase.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
}

stopwatch.addEventListener("click", stopwatchSelect);
timer.addEventListener("click", timerSelect);

// Start to Pause CSS

function setStart() {
  start.classList.remove("pause");
  start.classList.add("start");
  start.innerHTML = `<i class="fas fa-play"></i> Start`;
  stopAlarm();
}

function setPause() {
  start.classList.remove("start");
  start.classList.add("pause");
  start.innerHTML = `<i class="fas fa-pause"></i> Pause`;
}

// Button functions

let secondBase = 0;
let minuteBase = 0;
let hourBase = 0;

let timerSecondBase = 3;
let timerMinuteBase = 3;
let timerHourBase = 3;

let stopwatchCounter;

function startStopwatch() {
  stopwatchCounter = setInterval(function addSecond() {
    console.log(stopwatchCounter);
    secondBase = secondBase + 1;
    let updatedSecond = secondBase.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
    seconds.innerHTML = updatedSecond;
    if (secondBase > 9) {
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
    if (minuteBase > 9) {
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

function startTimer() {
  seconds.innerHTML = timerSecondBase.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  minutes.innerHTML = timerMinuteBase.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  hours.innerHTML = timerHourBase.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  stopwatchCounter = setInterval(function minusSecond() {
    if (timerSecondBase > 0) {
      timerSecondBase = timerSecondBase - 1;
      seconds.innerHTML = timerSecondBase.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
    } else {
      if (timerMinuteBase > 0 && timerMinuteBase < 59) {
        timerMinuteBase = timerMinuteBase - 1;
        minutes.innerHTML = timerMinuteBase.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        });
        timerSecondBase = 59;
        seconds.innerHTML = timerSecondBase.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        });
      } else {
        timerSecondBase = 59;
        seconds.innerHTML = timerSecondBase.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        });
      }
    }
    if (timerHourBase > 0) {
      timerHourBase = timerHourBase - 1;
      hours.innerHTML = timerHourBase.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      timerMinuteBase = 59;
      minutes.innerHTML = timerMinuteBase.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
    } else {
      timerHourBase = 0;
      hours.innerHTML = timerHourBase.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
    }
    if (timerSecondBase === 0 && timerMinuteBase === 0 && timerHourBase === 0) {
      clearInterval(stopwatchCounter);
      playAlarm();
    }
  }, 1000);
}

function startTime() {
  if (stopwatch.classList.contains("highlight")) {
    if (start.classList.contains("start")) {
      setPause();
      startStopwatch();
    } else {
      setStart();
      clearInterval(stopwatchCounter);
    }
  } else {
    if (timer.classList.contains("highlight")) {
      if (start.classList.contains("start")) {
        setPause();
        startTimer();
      } else {
        setStart();
        clearInterval(stopwatchCounter);
      }
    }
  }
}

function resetTimer() {
  clearInterval(stopwatchCounter);
  if (stopwatch.classList.contains("highlight")) {
    setStart();
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
    setStart();
    closeForm();
    stopAlarm();
  }
}

function setTimer() {
  document.getElementById("timer-set").style.display = "block";
}

function closeForm(secondBase, minuteBase, hourBase) {
  console.log(secondBase, hourBase, minuteBase);
  setStart();
  document.getElementById("timer-set").style.display = "none";
  let timerInputs = document.querySelectorAll('input[type="number"]');
  for (i = 0; i < timerInputs.length; i++) {
    if (timerInputs[i].value == "") {
      timerInputs[i].value = 0;
    }
  }
  let hourInput = parseInt(document.getElementById("hoursTimer").value);
  let minuteInput = parseInt(document.getElementById("minutesTimer").value);
  let secondInput = parseInt(document.getElementById("secondsTimer").value);

  if (secondBase !== undefined) {
    timerHourBase = hourBase;
    timerMinuteBase = minuteBase;
    timerSecondBase = secondBase;
  } else {
    timerHourBase = hourInput;
    timerMinuteBase = minuteInput;
    timerSecondBase = secondInput;
  }

  hours.innerHTML = timerHourBase.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  minutes.innerHTML = timerMinuteBase.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  seconds.innerHTML = timerSecondBase.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
}

let start = document.querySelector(".start");
let reset = document.getElementById("reset");
let setTime = document.getElementById("set-timer");
let seconds = document.getElementById("seconds");
let minutes = document.getElementById("minutes");
let hours = document.getElementById("hours");

start.addEventListener("click", startTime);
reset.addEventListener("click", resetTimer);
setTime.addEventListener("click", setTimer);

// timer presets

function setFiveMin() {
  closeForm(0, 5, 0);
}

function setTenMin() {
  closeForm(0, 10, 0);
}

function setTwentyMin() {
  closeForm(0, 20, 0);
}

function setThirtyMin() {
  closeForm(0, 30, 0);
}

function setSixtyMin() {
  closeForm(0, 0, 1);
}

let fiveMin = document.getElementById("five-min");
let tenMin = document.getElementById("ten-min");
let twentyMin = document.getElementById("twenty-min");
let thirtyMin = document.getElementById("thirty-min");
let sixtyMin = document.getElementById("sixty-min");

fiveMin.addEventListener("click", setFiveMin);
tenMin.addEventListener("click", setTenMin);
twentyMin.addEventListener("click", setTwentyMin);
thirtyMin.addEventListener("click", setThirtyMin);
sixtyMin.addEventListener("click", setSixtyMin);
