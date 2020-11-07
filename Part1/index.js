const winningBoard = [[0,1,2],
                      [3,4,5],
                      [6,7,8],
                      [0,3,6],
                      [1,4,7],
                      [2,5,8],
                      [0,4,8],
                      [2,4,6]
                      ];

let moveArray = [];

let play = (boxId) => {
  let move = document.getElementById(boxId);
  let player = document.getElementById('player');

  if (player.innerText === 'X') {
    player.innerText = 'O';
    move.innerText = 'X';
    moveArray[boxId] = 'X';
  } else {
    player.innerText = 'X';
    move.innerText = 'O';
    moveArray[boxId] = 'O';
  }

  for (let i = 0; i < winningBoard.length; i++) {
    let first = winningBoard[i][0];
    let second = winningBoard[i][1];
    let third = winningBoard[i][2];

    if (moveArray[first] === player.innerText && moveArray[second] === player.innerText && moveArray[third] === player.innerText) {
      alert(`Player ${player.innerText} wins!`);
      return;
    }
    if (!moveArray.includes(undefined) && moveArray.length === 9) {
      alert(`CAT's game`);
      return;
    }
  }
}