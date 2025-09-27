class Player {
  constructor(name, gameboard) {
    this.name = name;
    this.gameboard = gameboard;
  }
}

export function createHumanPlayer(name, gameboard) {
  let humanPlayer = new Player(name, gameboard);
  humanPlayer.type = 'HUMAN';
  return humanPlayer;
}

export function createComputerPlayer(name, gameboard) {
  let computerPlayer = new Player(name, gameboard);
  computerPlayer.type = 'COMPUTER';
  return computerPlayer;
}
