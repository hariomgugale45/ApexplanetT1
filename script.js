document.addEventListener("DOMContentLoaded", function () {

  const apple = document.getElementById("apple");
  const orange = document.getElementById("orange");
  const strawberry = document.getElementById("strawberry");
  const scoreDisplay = document.getElementById("score");
  const timeDisplay = document.getElementById("time");
  const highScoreDisplay = document.getElementById("highScore");
  const startBtn = document.getElementById("startBtn");
  const gameArea = document.getElementById("gameArea");

  const gameOverScreen = document.getElementById("gameOverScreen");
  const gameOverText = document.getElementById("gameOverText");
  const restartBtn = document.getElementById("restartBtn");

  let score = 0;
  let time = 30;
  let timer;

  let highScore = localStorage.getItem("highScore") || 0;
  highScoreDisplay.textContent = highScore;

  function moveFruit(fruit) {
    const maxX = gameArea.clientWidth - 70;
    const maxY = gameArea.clientHeight - 70;
    fruit.style.left = Math.random() * maxX + "px";
    fruit.style.top = Math.random() * maxY + "px";
  }

  function moveAll() {
    moveFruit(apple);
    moveFruit(orange);
    moveFruit(strawberry);
  }

  function endGame(message) {
    clearInterval(timer);

    apple.style.display = "none";
    orange.style.display = "none";
    strawberry.style.display = "none";

    if (score > highScore) {
      highScore = score;
      localStorage.setItem("highScore", highScore);
      highScoreDisplay.textContent = highScore;
    }

    gameOverText.textContent = message + " | Final Score: " + score;
    gameOverScreen.classList.add("active");
  }

  function startGame() {
    score = 0;
    time = 30;

    scoreDisplay.textContent = score;
    timeDisplay.textContent = time;

    gameOverScreen.classList.remove("active");

    apple.style.display = "flex";
    orange.style.display = "flex";
    strawberry.style.display = "flex";

    moveAll();

    clearInterval(timer);

    timer = setInterval(() => {
      time--;
      timeDisplay.textContent = time;

      if (time <= 0) {
        endGame("Time's Up!");
        return;
      }

      moveAll();
    }, 1000);
  }

  apple.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
    moveAll();
  });

  orange.addEventListener("click", () => {
    endGame("You clicked Orange! Game Over 😅");
  });

  strawberry.addEventListener("click", () => {
    endGame("You clicked Strawberry! Game Over 😅");
  });

  startBtn.addEventListener("click", startGame);
  restartBtn.addEventListener("click", startGame);

});
