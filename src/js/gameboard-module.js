class Gameboard {
  constructor(size = 5) {
    this.board = Array.from({ length: size }, () => Array(size).fill('     '));
    this.isLost = false;
    this.coordinatesAttackedList = [];
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
    let isHit = false;
    for (let ship of battleships) {
      if (this.checkHitOnShips(ship.gameboardPlacement, enemyAttack)) {
        ship.hit();
        this.board[enemyAttack[0]][enemyAttack[1]] = ' HIT ';
        this.verifyAllShipsSunk(battleships);
        isHit = true;
        break;
      }
    }
    if (!isHit) {
      this.board[enemyAttack[0]][enemyAttack[1]] = 'MISS ';
    }
    this.addToAttackedList(enemyAttack);
  }

  checkHitOnShips(shipPlacement, enemyHitMark) {
    return shipPlacement.some(
      row =>
        row.length === enemyHitMark.length &&
        row.every((val, i) => val === enemyHitMark[i])
    );
  }

  verifyAllShipsSunk(battleships) {
    this.isLost = battleships.every(ship => {
      return ship.sunk;
    });

    return this.isLost;
  }

  addToAttackedList(enemyAttack) {
    if (!this.checkHitOnShips(this.coordinatesAttackedList, enemyAttack)) {
      this.coordinatesAttackedList.push([enemyAttack[0], enemyAttack[1]]);
      return false;
    } else {
      console.log(enemyAttack);
      console.log('listed already');
      return true;
    }
  }
}

export function createGameboard() {
  return new Gameboard();
}
