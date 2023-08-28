const cells = document.querySelectorAll(".cell");
const info = document.querySelector("#info");
const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

startGame();

function startGame(){
    cells.forEach(cell => cell.addEventListener("click",cellClicked));
    document.querySelector("#reset").addEventListener("click",restartGame);
    info.textContent = `${currentPlayer}'s turn`;
    running = true;


    function cellClicked(){
        const cellIndex = this.getAttribute("cellIndex");
        if(options[cellIndex] != "" || !running){
            return;
        }
        updateCell(this,cellIndex);
        checkWinner();
    };

    
    function updateCell(cell,index){
        options[index] = currentPlayer;
        cell.textContent = currentPlayer;
    };
    

    function changePlayer(){
        currentPlayer = (currentPlayer == "X"? "O": "X");
        info.textContent = `${currentPlayer}'s turn`
    };
    

    function checkWinner(){
        let roundwon = false;
        for(let i = 0; i < winConditions.length; i++){
            let condition = winConditions[i];
            let cellA = options[condition[0]];
            let cellB = options[condition[1]];
            let cellC = options[condition[2]];
            if(cellA == "" || cellB == "" || cellC == ""){
                continue;
            }
            if(cellA == cellB && cellB == cellC){
                roundwon = true;
                break;
            }
        }
        
        if(roundwon){
            info.textContent = `${currentPlayer} wins!`;
            running = false;
        }
        else if(!options.includes("")){
            info.textContent = `Draw!`;
        }
        else{
            changePlayer();
        }
    };

    function restartGame(){
        currentPlayer = "X";
        options = ["", "", "", "", "", "", "", "", ""];
        info.textContent = `${currentPlayer}'s turn`;
        cells.forEach(cell => cell.textContent = "");
        running = true;
    };
};



