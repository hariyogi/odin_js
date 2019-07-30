'use strict';

function playerFactory(name, pin){
    let _privScoreWin = 0;
    let _privPositionTaken = [0,0,0,0,0,0,0,0,0];
    const getName = () => name;
    const getPin = () => pin;
    const getScore = () => _privScoreWin;
    const setScore = () => {_privScoreWin++;};

    return {getName, getPin, getScore, setScore};
}

const mainBoard = document.getElementById("board");
const _btnMulai = document.getElementById("mulai");
const _btnMainLagi = document.getElementById("main-lagi");

_btnMulai.addEventListener("click", () =>{
    if(tictactoeBoard.isInit()) return;
    tictactoeBoard.setPlayer(playerFactory("Bimbim", "X"), playerFactory("Kontol", "O"));
    tictactoeBoard.makeABoard(mainBoard);
});

_btnMainLagi.addEventListener("click", () =>{
    if(!tictactoeBoard.isInit()) return;
    tictactoeBoard.resetBoard();
});

