let playerTurn = true;
let computerMoveTimeout = 0;

const gameStatus = {
    MORE_MOVES_LEFT: 1,
    HUMAN_WINS: 2,
    COMPUTER_WINS: 3,
    DRAW_GAME: 4
};

window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    const newBtn = document.getElementById("newGameButton");
    newBtn.addEventListener("click", newGame);
    const buttons = getGameBoardButtons();
    for (let button of buttons) {
        button.addEventListener("click", function () { boardButtonClicked(button); });
    }

    newGame();
}

function getGameBoardButtons() {
    return document.querySelectorAll("#gameBoard > button");
}

function checkForWinner() {

    const buttons = getGameBoardButtons();


    const possibilities = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6] // diagonals
    ];


    for (let indices of possibilities) {
        if (buttons[indices[0]].innerHTML !== "" &&
            buttons[indices[0]].innerHTML === buttons[indices[1]].innerHTML &&
            buttons[indices[1]].innerHTML === buttons[indices[2]].innerHTML) {


            if (buttons[indices[0]].innerHTML === "X") {
                return gameStatus.HUMAN_WINS;
            }
            else {
                return gameStatus.COMPUTER_WINS;
            }
        }
    }

    for (let button of buttons) {
        if (button.innerHTML !== "X" && button.innerHTML !== "O") {
            return gameStatus.MORE_MOVES_LEFT;
        }
    }

    return gameStatus.DRAW_GAME;
}

function newGame() {
    clearTimeout(computerMoveTimeout);
    computerMoveTimeout = 0

    const buttons = getGameBoardButtons();
    for (let button of buttons) {
        button.innerHTML = "";
        button.className = "";
        button.disabled = false;
    }

    playerTurn = true

    document.getElementById("turnInfo").textContent = "Your turn"

}

function boardButtonClicked(button) {

    if (playerTurn) {
        button.innerHTML = "X";
        button.classList.add("x");
        button.disabled = true;
        switchTurn()
    }
}

function switchTurn() {
    let status = checkForWinner();
    let turnInfo = document.getElementById("turnInfo")
    if (status == 1) {
        playerTurn = !playerTurn;
        if (playerTurn == false) {
            turnInfo.textContent = "Computer's turn"
            computerMoveTimeout = setTimeout(makeComputerMove(), 1000)
        }
        if (playerTurn == true) {
            turnInfo.textContent = "Your turn"
        }
    } else if (status == 2 || status == 3 || status == 4) {
        playerTurn = false;
        if (status == 2) {
            turnInfo.textContent = "You win!"
        }
        if (status == 3) {
            turnInfo.textContent = "Computer wins!"
        }
        if (status == 4) {
            turnInfo.textContent = "Draw game"
        }
    }

}

function makeComputerMove() {
    const buttons = getGameBoardButtons();
    flag = true;
    while (flag) {
        let index = Math.floor(Math.random() * 9);
        if (buttons[index].disabled == false) {
            buttons[index].innerHTML = 'O';
            buttons[index].classList.add("o");
            buttons[index].disabled = true;
            flag = false
        }
    }
    switchTurn()

}