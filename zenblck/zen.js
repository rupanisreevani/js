let timer;
let totalSeconds = 25 * 60;
let running = false;

const timeDisplay = document.getElementById("timeDisplay");
const startBtn = document.getElementById("startBtn");
const skipBtn = document.getElementById("skipBtn");
const prog = document.getElementById("prog");

updateTime();

startBtn.addEventListener("click", () => {
  if (!running) startTimer();
  else stopTimer();
});

skipBtn.addEventListener("click", () => {
  stopTimer();
  totalSeconds = 25 * 60;
  updateTime();
  prog.style.width = "0%";
});

function startTimer() {
  running = true;
  startBtn.textContent = "Stop";

  timer = setInterval(() => {
    if (totalSeconds <= 0) {
      stopTimer();
      alert("Focus session completed!");
      return;
    }

    totalSeconds--;
    updateTime();
    updateProgress();
  }, 1000);
}

function stopTimer() {
  running = false;
  clearInterval(timer);
  startBtn.textContent = "Start Focus";
}

function updateTime() {
  let m = Math.floor(totalSeconds / 60);
  let s = totalSeconds % 60;
  timeDisplay.textContent = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function updateProgress() {
  let percent = ((25 * 60 - totalSeconds) / (25 * 60)) * 100;
  prog.style.width = percent + "%";
}
