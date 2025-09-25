import { createGameboard } from '../gameboard-module';
import { createBattleship } from '../ship-module';

test('Battleship placement in the board', () => {
  const gameboard = createGameboard();

  const batShip3 = createBattleship(3);
  gameboard.placeBattleShip(
    [
      [1, 1],
      [2, 1],
      [3, 1],
    ],
    batShip3
  );

  const batShip2 = createBattleship(2);
  gameboard.placeBattleShip(
    [
      [3, 3],
      [4, 3],
    ],
    batShip2
  );

  const batShip1 = createBattleship(1);
  gameboard.placeBattleShip([[0, 4]], batShip1);

  const batShipSpecial = createBattleship(1);
  gameboard.placeBattleShip([[0, 0]], batShipSpecial);

  console.log(batShip3);
  console.log(batShip2);
  console.log(batShip1);
  console.log(gameboard);

  // expect(gameboard.).toBe('a');
});
