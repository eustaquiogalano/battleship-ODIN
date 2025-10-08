import { displayGrid, markTarget } from './DOM-manipulator';
import {
  attackGameboard,
  checkWinner,
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
    resetGame();
    startGame();
    ({ human, computer } = getPlayers());
  });

  enemyBoard.addEventListener('click', event => {
    if (!computer || !event.target.dataset.row) return;
    markTarget(event);
    attackGameboard(
      [Number(event.target.dataset.row), Number(event.target.dataset.col)],
      computer
    );
    checkWinner(human, computer);
  });

  resetButton.addEventListener('click', () => {
    resetGame(human, computer);
    console.log(human);
    console.log(computer);
    displayGrid();
  });
}
