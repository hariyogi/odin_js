
function playerFactory(name, pin){
    'use strict';
    let _privScoreWin = 0;
    let _privSide = -1;
    const getName = () => name;
    const getPin = () => pin;
    const getScore = () => _privScoreWin;
    const getSide = () => _privSide;
    const setSide = side => {_privSide = side;};
    const setScore = () => {_privScoreWin++;};

    return {getName, getPin, getScore, setScore, getSide, setSide};
}

const mainBoard = document.getElementById("board");
const _btnPvp = document.getElementById("player");
const _btnPvb = document.getElementById("bot");
const _btnMainLagi = document.getElementById("main-lagi");

_btnPvp.addEventListener("click", e =>{
    let playerOne = prompt("Masukan Nama Player 1 ", "Bimbim").toUpperCase();
    let playerTwo = prompt("Masukan Nama Player 2 ", "Dogo").toUpperCase();
    setBoard(playerOne, playerTwo, tictactoeBoard.PLAYER);
});

_btnPvb.addEventListener("click", e =>{
    let playerOne = prompt("Masukan Nama Player 1 ", "Bimbim").toUpperCase();
    setBoard(playerOne, "KOMPUTER", tictactoeBoard.BOT);
});

_btnMainLagi.addEventListener("click", () =>{
    if(!tictactoeBoard.isInit()) return;
    tictactoeBoard.resetBoard();
});

function setBoard(playerOne, playerTwo, lawan){
    tictactoeBoard.setPlayer(playerFactory(playerOne, "X"), playerFactory(playerTwo, "O"), lawan);
    if(tictactoeBoard.isInit()){
        tictactoeBoard.resetBoard();
    }else {
        tictactoeBoard.makeABoard(mainBoard);
    }
}

