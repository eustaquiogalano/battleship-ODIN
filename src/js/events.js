import { markTarget } from './DOM-manipulator';
import {
  attackGameboard,
  checkWinner,
  getPlayers,
  startGame,
} from './game-controller';

let human;
let computer;

export function initClickEvents() {
  document.querySelector('#start-button').addEventListener('click', () => {
    startGame();
    ({ human, computer } = getPlayers());
  });

  document.querySelector('#enemy-board').addEventListener('click', event => {
    if (!computer || !event.target.dataset.row) return;
    markTarget(event);
    attackGameboard(
      [Number(event.target.dataset.row), Number(event.target.dataset.col)],
      computer
    );
    checkWinner(human, computer);
  });
}
