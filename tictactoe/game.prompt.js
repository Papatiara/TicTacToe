const prompt = require('prompt');

let board = {
  1: ' ',
  2: ' ',
  3: ' ',
  4: ' ',
  5: ' ',
  6: ' ',
  7: ' ',
  8: ' ',
  9: ' '
};

const markBoard = (position, mark) => {
  board[position] = mark.toUpperCase();
}

const printBoard = () => {
  console.log('\n' +
  ' ' + board[1] + ' | ' + board[2] + ' | ' + board[3] + '\n' +
  ' ---------\n' +
  ' ' + board[4] + ' | ' + board[5] + ' | ' + board[6] + '\n' +
  ' ---------\n' +
  ' ' + board[7] + ' | ' + board[8] + ' | ' + board[9] + '\n');
}

const isInt = (value) => {
  let x;
    if (isNaN(value)) {
      return false;
    }
    x = parseFloat(value);
    return (x | 0) === x;
}

const validateMove = (position) => {
    return (isInt(position) && board[position] === ' ')
}

let winCombinations = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7],
                       [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

const checkWin = (player) => {
  let i, j, markCount
    for (i = 0; i < winCombinations.length; i++) {
      markCount = 0;
        for (j = 0; j < winCombinations[i].length; j++) {
          if (board[winCombinations[i][j]] === player) {
              markCount++;
          }
          if (markCount === 3) {
            return true;
          }
        }
    }
    return false;
}

const checkTie = () => {
    for (let i = 1; i <= Object.keys(board).length; i++) {
        if (board[i] === ' ') {
            return false;
        }
    }
    return true;
}

const playTurn = (player) => {

    console.log('Your turn player: ' + player);
    prompt.start();
    prompt.get(['position'], function (err, result) {

    if (validateMove(result.position) === true) {
      markBoard(result.position, player);
      printBoard();
      if (checkWin(player) === true) {
        console.log('Winner Winner!');
          return;
        }
      if (checkTie() === true) {
        console.log('Tie Game');
        return;
      }
      if (player === 'X') {
        playTurn('O');
      } else {
        playTurn('X');
      }
      } else {
        console.log('incorrect input please try again...');
        playTurn(player);
        }
    });
}

console.log('Game started: \n' +
    ' 1 | 2 | 3 \n' +
    ' --------- \n' +
    ' 4 | 5 | 6 \n' +
    ' --------- \n' +
    ' 7 | 8 | 9 \n');

playTurn('X');