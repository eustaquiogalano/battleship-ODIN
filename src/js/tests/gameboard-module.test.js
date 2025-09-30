import { createGameboard } from '../gameboard-module';
import { createBattleship } from '../ship-module';

describe('Gameboard tests', () => {
  let gameboard;
  let batShip1;
  let batShip2;
  let batShip3;

  beforeAll(() => {
    gameboard = createGameboard();
    batShip1 = createBattleship(1);
    batShip2 = createBattleship(2);
    batShip3 = createBattleship(3);
  });

  test('Battleship placement in the board', () => {
    gameboard.placeBattleShip(
      [
        [1, 1],
        [2, 1],
        [3, 1],
      ],
      batShip3
    );

    gameboard.placeBattleShip(
      [
        [3, 3],
        [3, 4],
      ],
      batShip2
    );

    gameboard.placeBattleShip([[0, 4]], batShip1);

    console.log(batShip3);
    console.log(batShip2);
    console.log(batShip1);
    console.log(gameboard);

    // expect(gameboard.).toBe('a');
  });

  test('Check hits on ships', () => {
    let isHit = gameboard.checkHitOnShips(
      [
        [0, 1],
        [1, 1],
        [2, 3],
      ],
      [1, 1]
    );

    expect(isHit).toBe(true);

    // attack on ships
    gameboard.receiveAttack([0, 4], [batShip1, batShip2, batShip3]);
    gameboard.receiveAttack([3, 3], [batShip1, batShip2, batShip3]);
    gameboard.receiveAttack([3, 4], [batShip1, batShip2, batShip3]);
    gameboard.receiveAttack([1, 1], [batShip1, batShip2, batShip3]);
    gameboard.receiveAttack([2, 1], [batShip1, batShip2, batShip3]);
    gameboard.receiveAttack([3, 1], [batShip1, batShip2, batShip3]);

    // attack missed
    // gameboard.receiveAttack([0, 0], [batShip1, batShip2, batShip3]);
    // gameboard.receiveAttack([0, 1], [batShip1, batShip2, batShip3]);
    // gameboard.receiveAttack([0, 2], [batShip1, batShip2, batShip3]);
    // gameboard.receiveAttack([0, 3], [batShip1, batShip2, batShip3]);
    // gameboard.receiveAttack([1, 0], [batShip1, batShip2, batShip3]);
    // gameboard.receiveAttack([1, 2], [batShip1, batShip2, batShip3]);
    // gameboard.receiveAttack([1, 3], [batShip1, batShip2, batShip3]);
    // gameboard.receiveAttack([1, 4], [batShip1, batShip2, batShip3]);
    // gameboard.receiveAttack([2, 0], [batShip1, batShip2, batShip3]);
    // gameboard.receiveAttack([2, 2], [batShip1, batShip2, batShip3]);
    // gameboard.receiveAttack([2, 3], [batShip1, batShip2, batShip3]);
    // gameboard.receiveAttack([2, 4], [batShip1, batShip2, batShip3]);
    // gameboard.receiveAttack([3, 0], [batShip1, batShip2, batShip3]);
    // gameboard.receiveAttack([3, 2], [batShip1, batShip2, batShip3]);
    // gameboard.receiveAttack([3, 4], [batShip1, batShip2, batShip3]);
    // gameboard.receiveAttack([4, 0], [batShip1, batShip2, batShip3]);
    // gameboard.receiveAttack([4, 1], [batShip1, batShip2, batShip3]);
    // gameboard.receiveAttack([4, 2], [batShip1, batShip2, batShip3]);
    // gameboard.receiveAttack([4, 4], [batShip1, batShip2, batShip3]);

    console.log(batShip3);
    console.log(batShip2);
    console.log(batShip1);
    console.log(gameboard);

    expect(batShip3.sunk).toBe(true);
    expect(batShip1.sunk).toBe(true);
  });

  test('Verify if all the ships been sunk', () => {
    let allSunk = gameboard.verifyAllShipsSunk([batShip1, batShip2, batShip3]);

    expect(allSunk).toBe(true);
  });
});
