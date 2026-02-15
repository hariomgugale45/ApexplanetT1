const rocket = document.getElementById("rocket");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const startBtn = document.getElementById("startBtn");
const gameArea = document.getElementById("gameArea");

let score = 0;
let time = 15;
let timer;

function moveRocket() {
  const maxX = gameArea.clientWidth - 40;
  const maxY = gameArea.clientHeight - 40;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  rocket.style.left = x + "px";
  rocket.style.top = y + "px";
}

rocket.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;
  moveRocket();
});

startBtn.addEventListener("click", () => {
  score = 0;
  time = 15;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = time;

  rocket.style.display = "block";
  moveRocket();

  clearInterval(timer);

  timer = setInterval(() => {
    time--;
    timeDisplay.textContent = time;

    if (time <= 0) {
      clearInterval(timer);
      rocket.style.display = "none";
      alert("Game Over! Your score: " + score);
    }
  }, 1000);
});
