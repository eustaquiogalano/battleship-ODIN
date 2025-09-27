class Gameboard {
  constructor(size = 5) {
    this.board = Array.from({ length: size }, () => Array(size).fill('     '));
    this.isLost = false;
  }

  // get the ship object
  // get the coordinates (row, column)
  // place it on the board
  placeBattleShip(coordinates, battleship) {
    battleship.setPlacement(coordinates);

    for (let [row, column] of coordinates) {
      this.board[row][column] = 'SHIP ';
    }
  }

  receiveAttack(enemyAttack, battleships) {
    for (let ship of battleships) {
      if (this.checkHitOnShips(ship.gameboardPlacement, enemyAttack)) {
        ship.hit();
        this.board[enemyAttack[0]][enemyAttack[1]] = ' HIT ';
        break;
      }

      this.board[enemyAttack[0]][enemyAttack[1]] = 'MISS ';
    }
  }

  checkHitOnShips(shipPlacement, enemyHitMark) {
    return shipPlacement.some(
      row =>
        row.length === enemyHitMark.length &&
        row.every((val, i) => val === enemyHitMark[i])
    );
  }

  verifyAllShipsSunk(battleships) {
    for (let ship of battleships) {
      if (!ship.sunk) {
        return false;
      }
    }
    this.isLost = true;
    return true;
  }
}

export function createGameboard() {
  return new Gameboard();
}
