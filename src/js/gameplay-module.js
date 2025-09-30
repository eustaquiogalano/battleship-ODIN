import { createGameboard } from './gameboard-module';
import { createHumanPlayer } from './player-module';

export function startGame() {
  let human = createHumanPlayer('John');

  return human;
}
