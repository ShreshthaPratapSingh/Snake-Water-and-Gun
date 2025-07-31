let SystemChoiceNumber = Math.floor(Math.random() * 3) + 1;
let SystemChoice;
let PlayerPoints = 0;
let SystemPoints = 0;
let GetSnake = document.getElementsByClassName("snake")[0];
let GetWater = document.getElementsByClassName("water")[0];
let GetGun = document.getElementsByClassName("gun")[0];
let GetResults = document.getElementsByClassName("ResultsText")[0];
let GetYourScore = document.getElementsByClassName("YourScoreText")[0];
let GetSystemScore = document.getElementsByClassName("SystemScoreText")[0];
let GetPlayerChoice = document.getElementsByClassName("YouText")[0];
let GetSystemChoice = document.getElementsByClassName("SystemText")[0];
let GetMainGame = document.getElementsByClassName("MainGameHere")[0];

function CreateRestartBtn() {
  const restartSector = document.createElement("div");
  restartSector.className = "restartSector";

  const Restart = document.createElement("button");
  Restart.textContent = "Restart Game";
  Restart.className = "RestartButton";

  GetMainGame.appendChild(restartSector);
  restartSector.appendChild(Restart);

  Restart.addEventListener("click", function () {
    location.reload();
  });
}
function checkGameOver() {
  if (PlayerPoints + SystemPoints === 10) {
    GetGun.classList.add("disabled");
    GetSnake.classList.add("disabled");
    GetWater.classList.add("disabled");
    GetPlayerChoice.innerHTML = "Your Choice: ";
    GetSystemChoice.innerHTML = "System Choice: ";
    if (PlayerPoints > SystemPoints) {
      GetResults.innerHTML =
        "Result: The Game ends with the winner being Player!";
    }
    if (SystemPoints > PlayerPoints) {
      GetResults.innerHTML =
        "Result: The Game ends with the winner being System!";
    }
    if (SystemPoints === PlayerPoints) {
      GetResults.innerHTML = "Result: The Game ends in a draw!";
    }
    CreateRestartBtn();
  }
}
function getSystemChoice() {
  let SystemChoiceNumber = Math.floor(Math.random() * 3) + 1;
  if (SystemChoiceNumber === 1) {
    return "snake";
  } else if (SystemChoiceNumber === 2) {
    return "water";
  } else if (SystemChoiceNumber === 3) {
    return "gun";
  }
}

GetSnake.addEventListener("click", function () {
  SystemChoice = getSystemChoice();
  if (SystemChoice === "water") {
    PlayerPoints++;
    GetPlayerChoice.innerHTML = "Your Choice: Snake";
    GetSystemChoice.innerHTML = "System Choice: Water";
    GetYourScore.innerHTML = `Your Score: ${PlayerPoints}`;
    GetSystemScore.innerHTML = `System Score: ${SystemPoints}`;
    GetResults.innerHTML = "Result: Player Wins!";
  } else if (SystemChoice === "gun") {
    GetPlayerChoice.innerHTML = "Your Choice: Snake";
    GetSystemChoice.innerHTML = "System Choice: Gun";
    SystemPoints++;
    GetYourScore.innerHTML = `Your Score: ${PlayerPoints}`;
    GetSystemScore.innerHTML = `System Score: ${SystemPoints}`;
    GetResults.innerHTML = "Result: System Wins!";
  } else if (SystemChoice === "snake") {
    GetPlayerChoice.innerHTML = "Your Choice: Snake";
    GetSystemChoice.innerHTML = "System Choice: Snake";
    GetYourScore.innerHTML = `Your Score: ${PlayerPoints}`;
    GetSystemScore.innerHTML = `System Score: ${SystemPoints}`;
    GetResults.innerHTML = "Result: Draw";
  }
  checkGameOver();
});
GetWater.addEventListener("click", function () {
  SystemChoice = getSystemChoice();
  if (SystemChoice === "snake") {
    SystemPoints++;
    GetPlayerChoice.innerHTML = "Your Choice: Water";
    GetSystemChoice.innerHTML = "System Choice: Snake";
    GetYourScore.innerHTML = `Your Score: ${PlayerPoints}`;
    GetSystemScore.innerHTML = `System Score: ${SystemPoints}`;
    GetResults.innerHTML = "Result: System Wins!";
  } else if (SystemChoice === "gun") {
    PlayerPoints++;
    GetPlayerChoice.innerHTML = "Your Choice: Water";
    GetSystemChoice.innerHTML = "System Choice: Gun";
    GetYourScore.innerHTML = `Your Score: ${PlayerPoints}`;
    GetSystemScore.innerHTML = `System Score: ${SystemPoints}`;
    GetResults.innerHTML = "Result: Player Wins!";
  } else if (SystemChoice === "water") {
    GetPlayerChoice.innerHTML = "Your Choice: Water";
    GetSystemChoice.innerHTML = "System Choice: Water";
    GetYourScore.innerHTML = `Your Score: ${PlayerPoints}`;
    GetSystemScore.innerHTML = `System Score: ${SystemPoints}`;
    GetResults.innerHTML = "Result: Draw";
  }
  checkGameOver();
});
GetGun.addEventListener("click", function () {
  SystemChoice = getSystemChoice();
  if (SystemChoice === "snake") {
    PlayerPoints++;
    GetPlayerChoice.innerHTML = "Your Choice: Gun";
    GetSystemChoice.innerHTML = "System Choice: Snake";
    GetYourScore.innerHTML = `Your Score: ${PlayerPoints}`;
    GetSystemScore.innerHTML = `System Score: ${SystemPoints}`;
    GetResults.innerHTML = "Result: Player Wins!";
  } else if (SystemChoice === "water") {
    SystemPoints++;
    GetPlayerChoice.innerHTML = "Your Choice: Gun";
    GetSystemChoice.innerHTML = "System Choice: Water";
    GetYourScore.innerHTML = `Your Score: ${PlayerPoints}`;
    GetSystemScore.innerHTML = `System Score: ${SystemPoints}`;
    GetResults.innerHTML = "Result: System Wins!";
  } else if (SystemChoice === "gun") {
    GetPlayerChoice.innerHTML = "Your Choice: Gun";
    GetSystemChoice.innerHTML = "System Choice: Gun";
    GetYourScore.innerHTML = `Your Score: ${PlayerPoints}`;
    GetSystemScore.innerHTML = `System Score: ${SystemPoints}`;
    GetResults.innerHTML = "Result: Draw";
  }
  checkGameOver();
});
