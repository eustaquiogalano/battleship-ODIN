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
        [4, 3],
      ],
      batShip2
    );

    gameboard.placeBattleShip([[0, 4]], batShip1);

    const batShipSpecial = createBattleship(1);
    gameboard.placeBattleShip([[0, 0]], batShipSpecial);

    console.log(batShip3);
    console.log(batShip2);
    console.log(batShip1);
    console.log(gameboard);

    // expect(gameboard.).toBe('a');
  });

  test('Check hits on ships', () => {
    const gameboard = createGameboard();

    let isHit = gameboard.checkHitOnShips(
      [
        [0, 1],
        [1, 1],
        [2, 3],
      ],
      [1, 1]
    );

    expect(isHit).toBe(true);
  });
});
