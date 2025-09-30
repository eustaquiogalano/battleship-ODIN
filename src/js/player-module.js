import { createGameboard } from './gameboard-module';
import { createBattleship } from './ship-module';

class Player {
  constructor(name, type, boardSize = 5) {
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

export function createHumanPlayer(name) {
  let humanPlayer = new Player(name, 'HUMAN');
  return humanPlayer;
}

export function createComputerPlayer(name) {
  let computerPlayer = new Player(name, 'COMPUTER');
  return computerPlayer;
}
