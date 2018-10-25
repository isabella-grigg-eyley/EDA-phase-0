document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!

function randBool() {
    // generates random boolean
    if (Math.round(Math.random()) == 1) {
        return true;
    } else {
        return false;
    }
}

function declareBoard() {
    let boardSize = 9;
    let boardSqRt = Math.sqrt(boardSize);
    // make sure there are less than a max amount of mines on board
    let maxMines = Math.round(boardSize/2);
    let numMines = 0;
    let rowVal = 0;
    let colVal = 0;
    let isMineVal = randBool();
    let hiddenVal = true;
    let surroundingMinesVal = 0;
    let isMarkedVal = false;

    for (let i = 0; i < boardSize; i++) {
        if (isMineVal == true) {
            numMines++;
        }
        if (numMines >= maxMines) {
            isMineVal = false;
        }
        board.cells[i] = {
            row: rowVal, 
            col: colVal, 
            isMine: isMineVal, 
            hidden: hiddenVal, 
            surroundingMines: surroundingMinesVal, 
            isMarked: isMarkedVal
        }
        // if row is greater than or equal to square root of boardSize-1, set row to 0 and col + 1
        // else: row++;
        if (colVal >= (boardSqRt - 1)) {
            colVal = 0;
            rowVal++;
        } else {
            colVal++;
        }
        isMineVal = randBool();
        console.log("cell info: " + board.cells[i].row + board.cells[i].col + board.cells[i].isMine);
    }
}

var board = {
    cells: []
};

function startGame () {
  // Don't remove this function call: it makes the game work!
  
  declareBoard();
  for (let i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
}
  lib.initBoard();
  document.addEventListener("click", checkForWin);
  document.addEventListener("onContextMenu", checkForWin);
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
    var canWin = true;
    
    for (let i = 0; i < board.cells.length; i++) {
        let currentCell = board.cells[i];
        if (currentCell.isMine == true && currentCell.isMarked == false) {
            canWin = false;
            break;
        } else if (currentCell.isMine == false && currentCell.hidden == true) {
            canWin = false;
            break;
        } 
    }
    if (canWin == true) {
        lib.displayMessage("You win!");
        console.log("Won")
        reset();
    }    
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

function reset() {
    board = {
        cells: []
    };
    console.log(board.cells[1].isMine);
    startGame();
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
    let count = 0;
    var surrounding = lib.getSurroundingCells(cell.row, cell.col);
    for (let i = 0; i < surrounding.length; i++) {
        if (surrounding[i].isMine == true) {
            count++;
        } 
    }
    return count;
}

