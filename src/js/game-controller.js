import { clearGameboards, displayGrid, displayShips } from './DOM-manipulator';
import { createComputerPlayer, createHumanPlayer } from './player-module';

let human;
let computer;

export function startGame(playerName, size) {
  human = createHumanPlayer(playerName, size);
  computer = createComputerPlayer(size);

  displayGrid();
  placeDefaultShipCoordinates(human, computer);
  displayShips(human, '#user-board');
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

export function attackGameboard(coordinates, player) {
  player.gameboard.receiveAttack(coordinates, player.battleships);
  console.log(player.battleships);
}

export function getPlayers() {
  return { human, computer };
}

export function checkWinner(human, computer) {
  if (!human.gameboard.isLost && computer.gameboard.isLost) {
    alert('user wins');
  }
}

export function resetGame() {
  clearGameboards();
  human = null;
  computer = null;
}
