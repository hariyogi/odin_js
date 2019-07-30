const tictactoeBoard = (() => {
    "user strict";

    const WIN_PATTERN = 
    [[0,1,2],
     [3,4,5],
     [6,7,8],
     [0,3,6],
     [1,4,7],
     [2,5,8],
     [0,4,8],
     [2,4,6]];

    const MAIN_BOARD = document.createElement("div");
    const PAPAN_SCORE = document.createElement("p");

    let _privPlayerOne = null;
    let _privPlayerTwo = null;
    let _privWhoseTurn = 0;
    let _privPinPostion = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let _privFlagStop = false;
    
    ////// Private Method //////

    /**
     * Untuk menyiapkan papan permainan.
     * @param {*} element Wadah (Harus DIV);
     */
    const _privSetBoard = element => {
        PAPAN_SCORE.textContent = `Player One : ${_privPlayerOne.getScore()} || Player Two : ${_privPlayerTwo.getScore()}`;
        MAIN_BOARD.className = "board-game";
        element.append(PAPAN_SCORE, MAIN_BOARD);
        _privSetCellBoard();
    };

    /**
     * Untuk menyipakan kotak di papan permainan
     */
    const _privSetCellBoard = () => {
        let index = 0;
        for(let row = 1; row <= 3; row++){
            for(let col = 1; col <= 3; col++){
                const cell = document.createElement("div");
                cell.className = "cell-board";
                cell.style.gridArea = `${row} / ${col}`;
                cell.setAttribute("data-index", index);
                cell.addEventListener("click", e =>{
                    if(_privFlagStop) return;
                    _privPlayGame(e.target);
                });
                MAIN_BOARD.appendChild(cell);
                index++;
            }
        }
    };

    /**
     * Untuk event listener
     * @param {*} element Kotak permainan 
     */
    const _privPlayGame = element => {
        const indexPostion = element.getAttribute("data-index");
        if(_privPinPostion[indexPostion]) return;
        if(_privWhoseTurn === 1){
            element.textContent = _privPlayerOne.getPin();
            _privPinPostion[indexPostion] = 1;
            _privWhoseTurn = 2;
        }else{
            element.textContent = _privPlayerTwo.getPin();
            _privPinPostion[indexPostion] = 2;
            _privWhoseTurn = 1;
        }
        
        // Check kemenangan
        const theWinner = _privCheckWinner();
        
        if(theWinner === 1){
            _privPlayerOne.setScore();
            _privUpdPapanScore();
            _privDisableBoard();
        }else if (theWinner === 2) {
            _privPlayerTwo.setScore();
            _privUpdPapanScore();
            _privDisableBoard();
        }else {
            if(_privCheckDraw()){
                console.log("DRAWW....");
                _privDisableBoard();
            }
        }

    };

    /**
     * Check siapa yang menang
     * @returns number (1 : Player 1 menang, 2 : Player 2 menang, 0 : Belum ada yang menang)
     */
    const _privCheckWinner = () => {
        for(let main = 0; main < WIN_PATTERN.length; main++){
            let playerOne = 0;
            let playerTwo = 0;
            for(let child = 0; child < 3; child++){
                if(_privPinPostion[WIN_PATTERN[main][child]] === 1){
                    playerOne++;
                    if(playerOne >= 3) return 1;
                }else if(_privPinPostion[WIN_PATTERN[main][child]] === 2){
                    playerTwo++;
                    if(playerTwo >= 3) return 2;
                }
            }
        }
        return 0;
    };

    /**
     * Check apakah draw
     */
    const _privCheckDraw = () => {
        return _privPinPostion.every(x => x > 0);
    };

    /**
     * Update papan score
     * @todo belum selesai
     */
    const _privUpdPapanScore = () => {
        PAPAN_SCORE.textContent = `Player One : ${_privPlayerOne.getScore()} || Player Two : ${_privPlayerTwo.getScore()}`;
    };

    /**
     * Disable MAIN BOARD
     */
    const _privDisableBoard = () => {
        _privFlagStop = true;
    };
    

    // Public Method
    
    /**
     * Membuat papan permainan (Harus implementasi setPlayer() dulu)
     * @param {element} elements "DIV" element 
     */
    const makeABoard = elements => {
        if(elements.tagName !== "DIV") throw "Element harus div";
        if(_privPlayerOne === null || _privPlayerTwo === null) throw "Harus implementasi player dulu";
        _privFlagStop = false;
        _privSetBoard(elements);
    };

    /**
     * Set player kedalam peramianan
     * @param {object} player1 playerFactory
     * @param {object} player2 playerFactory
     */
    const setPlayer = (player1, player2) => {
        _privPlayerOne = player1;
        _privPlayerTwo = player2;
        _privWhoseTurn = 1;
    };

    /**
     * Reset MAIN BOARD
     */
    const resetBoard = () =>{
        _privFlagStop = false;
        _privPinPostion = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        _privWhoseTurn = 1;
        const allCell = MAIN_BOARD.childNodes;
        allCell.forEach( (value, index, listObj) => {
            value.textContent = "";
        });
    };

    /**
     * Check permianan sudah di buat apa belum
     */
    const isInit = () =>{
        return (_privPlayerOne === null) ? false : true;
    }

    return {
        makeABoard, setPlayer, resetBoard, isInit,
    };
})();