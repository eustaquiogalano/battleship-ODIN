import { startGame } from '../gameplay-module';
import { displayShips } from '../DOM-manipulator';

describe('Test gameplay module methods', () => {
  test('players', () => {
    let john = startGame('John', 10);

    john.gameboard.placeBattleShip([[0, 0]], john.battleships[0]);
    john.gameboard.placeBattleShip(
      [
        [2, 1],
        [2, 2],
      ],
      john.battleships[1]
    );
    john.gameboard.placeBattleShip(
      [
        [1, 4],
        [2, 4],
        [3, 4],
      ],
      john.battleships[2]
    );

    console.log(john.battleships[0].gameboardPlacement);
    console.log(john.battleships[1].gameboardPlacement);
    console.log(john.battleships[2].gameboardPlacement);
    console.log(john.gameboard);
  });
});
