let userBoard;
let computerBoard;

function getGameboards() {
  if (!userBoard || !computerBoard) {
    userBoard = document.querySelector('#user-board');
    computerBoard = document.querySelector('#enemy-board');
  }

  return { userBoard, computerBoard };
}

export function displayGrid(size = 5) {
  // let userBoard = document.querySelector('#user-board');
  // let computerBoard = document.querySelector('#enemy-board');

  const { userBoard, computerBoard } = getGameboards();
  createCell(userBoard, size);
  createCell(computerBoard, size);
}

function createCell(gameboard, size) {
  let grid = gameboard;

  for (let col = 0; col <= size - 1; col++) {
    for (let row = 0; row <= size - 1; row++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.row = row; // e.g. "1"
      cell.dataset.col = col; // e.g. "3"
      cell.textContent = ``; // optional label
      grid.appendChild(cell);
    }
  }
}

export function displayShips(player, parentClass) {
  for (let i = 0; i < player.battleships.length; i++) {
    for (let [x, y] of player.battleships[i].gameboardPlacement) {
      document.querySelector(
        `${parentClass} [data-row='${x}'][data-col='${y}']`
      ).style.backgroundColor = 'blue';
    }
  }
}

export function markTarget(coordinate) {
  coordinate.target.style.backgroundColor = 'red';
}

export function clearGameboards() {
  const { userBoard, computerBoard } = getGameboards();

  userBoard.innerHTML = '';
  computerBoard.innerHTML = '';
}
