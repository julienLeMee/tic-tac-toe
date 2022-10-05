const cells = document.querySelectorAll('.cell');
const reset = document.getElementById('reset');

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

cells.forEach((cell) => {
  cell.addEventListener('click', (event) => {
    if (event.target.textContent === '') {
      event.target.textContent = 'X';
      event.target.style.color = '#f19a3e';
    } else if (event.target.textContent === 'X') {
      event.target.textContent = 'O';
      event.target.style.color = '#8EDCE6';
    } else {
      event.target.textContent = '';
    }
    checkWinner();
    // event.target.classList.add('orange-player');
  });
});

function checkWinner() {
  let winner = null;
  winningConditions.forEach((condition) => {
    if (
      cells[condition[0]].textContent === 'X' &&
      cells[condition[1]].textContent === 'X' &&
      cells[condition[2]].textContent === 'X'
    ) {
      winner = 'X';
    }
    if (
      cells[condition[0]].textContent === 'O' &&
      cells[condition[1]].textContent === 'O' &&
      cells[condition[2]].textContent === 'O'
    ) {
      winner = 'O';
    }
  });
  if (winner === 'X') {
    document.getElementById('winner').textContent = 'X is the winner!';
  } else if (winner === 'O') {
    document.getElementById('winner').textContent = 'O is the winner!';
  }
  else {
    document.getElementById('winner').textContent = '';
  }
}

reset.addEventListener('click', () => {
  // recharger la page
  location.reload();
});

// jouer chacun son tour : X puis O puis X puis O :
