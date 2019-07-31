const tictactoeBoard = (() => {
    "user strict";

    const PLAYER = "player";
    const BOT = "bot";

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
    const PAPAN_PENGUMUMUMAN = document.createElement("p");

    let _privPlayerOne = null;
    let _privPlayerTwo = null;
    let _privWhoseTurn = 0;
    let _privPinPostion = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let _privFlagStop = false;
    let _privFlagCreated = false;
    let _privComputerPlay = false;
    
    ////// Private Method //////

    /**
     * Untuk menyiapkan papan permainan.
     * @param {*} element Wadah (Harus DIV);
     */
    const _privSetBoard = element => {
        PAPAN_SCORE.className = "board";
        PAPAN_SCORE.textContent = `${_privPlayerOne.getName()} : ${_privPlayerOne.getScore()} || ${_privPlayerTwo.getName()} : ${_privPlayerTwo.getScore()}`;
        PAPAN_PENGUMUMUMAN.className = "board";
        PAPAN_PENGUMUMUMAN.style.marginTop = "16px";
        PAPAN_PENGUMUMUMAN.classList.add("hidden");
        MAIN_BOARD.className = "board-game";
        element.append(PAPAN_SCORE, MAIN_BOARD,  PAPAN_PENGUMUMUMAN);
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
                cell.addEventListener("click", _privPlayGame);
                MAIN_BOARD.appendChild(cell);
                index++;
            }
        }
        _privFlagCreated = true;
    };

    /**
     * Untuk event listener
     * @param {*} element Kotak permainan 
     */
    const _privPlayGame = e => {
        if(_privFlagStop) return;
        const element = e.target;
        const indexPostion = element.getAttribute("data-index");
        if(_privPinPostion[indexPostion]) return;
        if(_privWhoseTurn === 1){
            element.textContent = _privPlayerOne.getPin();
            _privPinPostion[indexPostion] = 1;
            _privWhoseTurn = 2;
        }else if(_privWhoseTurn === 2 && !_privComputerPlay){
            element.textContent = _privPlayerTwo.getPin();
            _privPinPostion[indexPostion] = 2;
            _privWhoseTurn = 1;
        }

        // Komputer Play
        if(_privWhoseTurn === 2 && _privComputerPlay){
            const bestMove = _privMinimax(_privPinPostion, 2);
            if(bestMove.index !== undefined){
                const cell = document.querySelector(`div[data-index="${bestMove.index}"]`);
                cell.textContent = _privPlayerTwo.getPin();
                _privPinPostion[bestMove.index] = 2;
            }
            _privWhoseTurn = 1;
        }
        
        // Check kemenangan
        const theWinner = _privCheckWinner();
        
        if(theWinner[0] === 1){
            _privDrawWinLine(theWinner[1], _privPlayerOne);
        }else if (theWinner[0] === 2) {
            _privDrawWinLine(theWinner[1], _privPlayerTwo);
        }else {
            if(_privCheckDraw()){
                _privShowPengumuman("DRAW....");
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
                    if(playerOne >= 3) return [1, WIN_PATTERN[main]];
                }else if(_privPinPostion[WIN_PATTERN[main][child]] === 2){
                    playerTwo++;
                    if(playerTwo >= 3) return [2, WIN_PATTERN[main]];
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
        PAPAN_SCORE.textContent = `${_privPlayerOne.getName()} : ${_privPlayerOne.getScore()} || ${_privPlayerTwo.getName()} : ${_privPlayerTwo.getScore()}`;
    };

    /**
     * Disable MAIN BOARD
     */
    const _privDisableBoard = () => {
        _privFlagStop = true;
    };

    /**
     * Panggil fungsi jika sudah menemukan pemenang
     * @param {array} posArry WIN_PATTERN
     * @param {obj} player Siapa yang menang
     */
    const _privDrawWinLine = (posArry, player) => {
        player.setScore();
        _privUpdPapanScore();
        posArry.forEach(element =>{
            const cell = document.querySelector(`div[data-index="${element}"]`);
            cell.classList.add("winning-line");
        });
        _privDisableBoard();
        _privShowPengumuman(`${player.getName()} MENANG`);
    };

    /**
     * Menampilkan papan pengumuman
     * @param {string} msg pesan yang ingin di tampilkan
     */
    const _privShowPengumuman = msg => {
        if(PAPAN_PENGUMUMUMAN.classList.contains("hidden")){
            PAPAN_PENGUMUMUMAN.classList.remove("hidden");
        }
        PAPAN_PENGUMUMUMAN.textContent = msg;
    };

    ////// Minimax Algorithm //////

    const _privCheckAvaibleSpot = mainBoard =>{
        let spotKosong = [];
        mainBoard.forEach((value, index) =>{
            if(value === 0) spotKosong.push(index);
        });
        return spotKosong;
    };

    const _privMinimax = (newBoard, player) => {
        let avaibleSpot = _privCheckAvaibleSpot(newBoard);
        let winCondtion = _privCheckWinner();
        if(winCondtion[0] === 1){
            return {score: -10};
        }else if(winCondtion[0] === 2){
            return {score: 10};
        }else if(avaibleSpot.length <= 0){
            return {score: 0};
        }

        let moves = [];
        for(let i = 0; i < avaibleSpot.length; i++){
            let move = {};
            move.index = avaibleSpot[i];
            newBoard[avaibleSpot[i]] = player;
            if(player === 2){
                let result = _privMinimax(newBoard, 1);
                move.score = result.score;
            }else{
                let result = _privMinimax(newBoard, 2);
                move.score = result.score;
            }
            newBoard[avaibleSpot[i]] = 0;
            moves.push(move);
        }

        let bestMove;
        if(player === 2){
            let bestScore = -10000;
            for(let bot = 0; bot < moves.length; bot++){
                if(moves[bot].score > bestScore){
                  bestScore = moves[bot].score;
                  bestMove = bot;
                }
            }
        }else{
            let bestScore = 10000;
            for(var pl = 0; pl < moves.length; pl++){
                if(moves[pl].score < bestScore){
                  bestScore = moves[pl].score;
                  bestMove = pl;
                }
            }
        }
        return moves[bestMove];
    };

    ////// END Minimax Algorithm //////

    ////// END Private Method //////

    ////// Public Method //////
    
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
    const setPlayer = (player1, player2, oppenent) => {
        _privPlayerOne = player1;
        _privPlayerOne.setSide(1);
        _privPlayerTwo = player2;
        _privPlayerTwo.setSide(2);
        if(oppenent === BOT){
            _privComputerPlay = true;
        }else {
            _privComputerPlay = false;
        }
        _privWhoseTurn = 1;
    };

    /**
     * Reset MAIN BOARD
     */
    const resetBoard = (cmd) =>{
        _privFlagStop = false;
        _privPinPostion = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        _privWhoseTurn = 1;
        const allCell = MAIN_BOARD.childNodes;
        allCell.forEach( (value, index, listObj) => {
            value.textContent = "";
            if(value.classList.contains("winning-line")){
                value.classList.remove("winning-line");
            }
        });
        PAPAN_PENGUMUMUMAN.classList.add("hidden");
        _privUpdPapanScore();
    };

    /**
     * Check permianan sudah di buat apa belum
     */
    const isInit = () =>{
        return _privFlagCreated;
    };

    ////// END Public Method //////

    return {
        makeABoard, setPlayer, resetBoard, isInit, PLAYER, BOT
    };
})();