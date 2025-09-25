class Gameboard {
  constructor() {
    this.board = [
      ['a', 'b', 'c', 'd', 'e'],
      ['a', 'b', 'c', 'd', 'e'],
      ['a', 'b', 'c', 'd', 'e'],
      ['a', 'b', 'c', 'd', 'e'],
      ['a', 'b', 'c', 'd', 'e'],
    ];
  }

  // get the ship object
  // get the coordinates (row, column)
  // place it on the board
  placeBattleShip(coordinates, battleship) {
    battleship.setPlacement(coordinates);

    for (let [row, column] of coordinates) {
      this.board[row][column] = 'SHIP';
    }
  }

  receiveAttack(x, y) {
    //some implementation
  }
}

export function createGameboard() {
  return new Gameboard();
}
