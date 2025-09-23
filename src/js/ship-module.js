class Ship {
  constructor(length, numberOfHit = 0, sunk = false) {
    this.length = length;
    this.sunk = sunk;
    this.numberOfHit = numberOfHit;
  }

  hit() {
    this.numberOfHit++;
    this.isSunk();
    return this.numberOfHit;
  }

  isSunk() {
    if (this.length === this.numberOfHit) {
      this.sunk = true;
    }
  }
}

export function createBattleship(length, numberOfHit, sunk) {
  return new Ship(length, numberOfHit, sunk);
}
