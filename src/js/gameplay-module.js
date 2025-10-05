import { displayGrid, displayShips } from './DOM-manipulator';
import { createComputerPlayer, createHumanPlayer } from './player-module';

export function startGame(playerName, size) {
  let human = createHumanPlayer(playerName, size);
  let computer = createComputerPlayer(size);

  displayGrid();
  placeDefaultShipCoordinates(human, computer);
  displayShips(human, '#user-board');

  return human;
}

function placeDefaultShipCoordinates(human, computer) {
  human.gameboard.placeBattleShip([[0, 0]], human.battleships[0]);
  human.gameboard.placeBattleShip(
    [
      [2, 1],
      [2, 2],
    ],
    human.battleships[1]
  );
  human.gameboard.placeBattleShip(
    [
      [1, 4],
      [2, 4],
      [3, 4],
    ],
    human.battleships[2]
  );

  computer.gameboard.placeBattleShip([[4, 4]], computer.battleships[0]);
  computer.gameboard.placeBattleShip(
    [
      [4, 1],
      [4, 2],
    ],
    computer.battleships[1]
  );
  computer.gameboard.placeBattleShip(
    [
      [1, 1],
      [1, 2],
      [1, 3],
    ],
    computer.battleships[2]
  );
}
