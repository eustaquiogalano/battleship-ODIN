export function displayGrid(size = 5) {
  let grid = document.querySelector('#user-board');

  for (let col = 0; col <= size - 1; col++) {
    for (let row = 0; row <= size - 1; row++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.row = row; // e.g. "1"
      cell.dataset.col = col; // e.g. "3"
      cell.textContent = `R${row}C${col}`; // optional label
      grid.appendChild(cell);
    }
  }
}
