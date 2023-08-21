const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const player = document.querySelector(".playerIcon");
const com = document.querySelector(".comIcon");

let choice;

function playRound(choice){

}


rock.addEventListener("click", () => {
    choice = document.querySelector("#playerRock");
    playRound(choice);
})

paper.addEventListener("click",() => {
    choice = document.querySelector("#playerPaper");
    playRound(choice);

})

scissors.addEventListener("click",() => {
    choice = document.querySelector("#playerScissors");
    playRound(choice);

})