import { displayGrid, markTarget } from './DOM-manipulator';
import {
  attackGameboard,
  checkWinner,
  generateRandomCoordinates,
  getPlayers,
  resetGame,
  startGame,
} from './game-controller';

let startButton = document.querySelector('#start-button');
let enemyBoard = document.querySelector('#enemy-board');
let resetButton = document.querySelector('#reset-button');

let human;
let computer;

export function initClickEvents() {
  startButton.addEventListener('click', () => {
    // before starting the game reset the DOM first by using
    // the resetGame() function
    resetGame();

    // start game
    // initialize the human and computer player objects
    // in game-controller module
    startGame();

    // fetch the initialized human and computer player objects
    // deconstruct in the same name
    ({ human, computer } = getPlayers());
  });

  enemyBoard.addEventListener('click', event => {
    if (!computer || !event.target.dataset.row) return;
    markTarget(event);
    attackGameboard(
      [Number(event.target.dataset.row), Number(event.target.dataset.col)],
      computer
    );
    attackGameboard(generateRandomCoordinates(), human);
    checkWinner(human, computer);
  });

  resetButton.addEventListener('click', () => {
    resetGame(human, computer);
    console.log(human);
    console.log(computer);
    displayGrid();
  });
}
