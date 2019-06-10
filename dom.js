let p1button = document.querySelector(".p1-button");
let p2button = document.querySelector(".p2-button");
let p1Points = document.querySelector(".p1Points");
let p2Points = document.querySelector(".p2Points");
let resetButton = document.querySelector(".reset");
let p1display = document.getElementById("p1-display");
let p2display = document.getElementById("p2-display");
let numInput = document.querySelector("input[type='number']");
let numUpTo = document.getElementById("play-up-to");
let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let winningScore = 5;

p1button.addEventListener("click", function() {
  if (!gameOver) {
    p1Score++;
      if (p1Score === winningScore) {
        gameOver = true;
        p1display.classList.add("winner")
        p1display.innerHTML = "Player 1 WINS!"
      }
    p1Points.innerHTML = p1Score;
  }
});

p2button.addEventListener("click", function() {
  if (!gameOver) {
    p2Score++;
      if (p2Score === winningScore) {
        gameOver = true;
        p2display.classList.add("winner");
        p2display.innerHTML = "Player 1 WINS!"
      }
    p2Points.innerHTML = p2Score;
  }
})

resetButton.addEventListener("click", function() {
  reset();
});

function reset() {
  p1Score = 0;
  p2Score = 0;
  gameOver = false;
  // PLAYER 1 RESET
  p1display.classList.remove("winner");
  p1display.innerHTML = "Player 1"
  p1Points.innerHTML = 0;

  // PLAYER 2 RESET
  p2display.classList.remove("winner");
  p2display.innerHTML = "Player 2"
  p2Points.innerHTML = 0;
}

numInput.addEventListener("change", function() {
  // if (this.value >= 0) {
    numUpTo.innerHTML = this.value;
    winningScore = parseInt(this.value);
    reset();
  // }
})