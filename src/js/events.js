import { startGame } from './gameplay-module';

export function initClickEvents() {
  document.querySelector('#start-button').addEventListener('click', () => {
    startGame();
  });
}
