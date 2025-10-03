import { createGameboard } from './gameboard-module';
import { createBattleship } from './ship-module';

class Player {
  constructor(name = 'Player 1', type, boardSize = 5) {
    this.name = name;
    this.type = type;
    this.gameboard = createGameboard(boardSize);
    this.battleships = [
      createBattleship(1),
      createBattleship(2),
      createBattleship(3),
    ];
  }
}

export function createHumanPlayer(name, size) {
  let humanPlayer = new Player(name, 'HUMAN', size);
  return humanPlayer;
}

export function createComputerPlayer(name, size) {
  let computerPlayer = new Player(name, 'COMPUTER', size);
  return computerPlayer;
}
