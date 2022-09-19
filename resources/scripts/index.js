// Elements
const welcomeScreen = document.getElementById(`welcome-screen`);
const gameScreen = document.getElementById(`game-screen`);
const startGameButton = document.getElementById(`start-game-button`);
const userName = document.getElementById(`username`);
const userSelection = document.getElementById(`user-selection`);
const goButton = document.getElementById(`go-button`);
const scoreParagraph = document.getElementById(`score`);
const gameHistoryParagraph = document.getElementById(`game-history`);

// instantiate the game object from the `RockPaperScissors` class.
let game;

// hide game screen
gameScreen.classList.add(`d-none`);

// updateScoreTallyUI
function updateScoreTallyUI(){
  var score = game.score;
  var user_name = game.username;
  scoreParagraph.innerText = `${user_name.value}: ${score.user} v CPU: ${score.cpu}`;
}

// updateGameHistoryUI
function updateGameHistoryUI(){
  gameHistoryParagraph.innerText = "";
  gameHistoryParagraph.innerText = game.gameHistoryLog;
}

// start-game-button EventListener
startGameButton.addEventListener(`click`, function () {
  game = new RockPaperScissors(userName);
  gameScreen.classList.remove(`d-none`);
  welcomeScreen.classList.add(`d-none`);
  event.preventDefault();
  // Complete
});

// go-button EventListener
goButton.addEventListener(`click`, function () {
  game.play(userSelection.options[userSelection.selectedIndex].text);
  updateScoreTallyUI();
  updateGameHistoryUI();
  event.preventDefault();
});

// If you're doing the extra-credit, uncomment the below: reset-game-button
// resetGameButton.addEventListener(`click`, function(e) { 
  
// });