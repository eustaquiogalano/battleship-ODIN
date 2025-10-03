import { displayGrid } from './DOM-manipulator';
import { createHumanPlayer } from './player-module';

export function startGame(playerName, size) {
  let human = createHumanPlayer(playerName, size);
  displayGrid();
  return human;
}
