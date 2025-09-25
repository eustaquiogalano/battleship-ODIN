import { createBattleship } from '../ship-module';

test('First battleship hit 3 times', () => {
  let newShip = createBattleship(3);

  newShip.hit();
  newShip.hit();
  newShip.hit();

  expect(newShip.sunk).toBe(true);
});
