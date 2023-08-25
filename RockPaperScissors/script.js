const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const player = document.querySelector(".playerIcon");
const com = document.querySelector(".comIcon");
const gameResult = document.querySelector("#gameResult");

let wins = 0;
let losses = 0;
let games = 0;

let choice;
let comChoice;

let pastChoice;
let comPastChoice;

function playRound(choice){
    console.log(pastChoice);
    if(pastChoice){
        pastChoice.style.display = "none";
    }

    if (comPastChoice){
        comPastChoice.style.display = "none";
    }

    comChoice = comDecision();

    comChoice.style.display = "block";
    choice.style.display = "block";
    result = compare(choice.id.slice(6), comChoice.id.slice(3));

    if(result == "win"){
        document.querySelector("#winCounter").textContent = wins += 1;
        gameResult.textContent = "You WIN!"
    }

    else if(result == "lose"){
        document.querySelector("#loseCounter").textContent = losses += 1;
        gameResult.textContent = "You LOSE!"
    }

    else{
        gameResult.textContent = "Its a DRAW!"
    }
    document.querySelector("#gameCounter").textContent = games += 1;
    
    pastChoice = choice;
    comPastChoice = comChoice;
    

    function comDecision(){
        let comChoice = Math.floor(Math.random() * 3) + 1;
        switch(comChoice){
            case 1: return document.querySelector("#comRock");

            case 2: return document.querySelector("#comPaper");

            case 3: return document.querySelector("#comScissors")
        }
    }

    function compare(choice,comChoice){
        if(choice == comChoice){
            return "draw";
        }

        else if(choice == "Rock"){
            return comChoice == "Paper"? "lose" : "win";
        }

        else if(choice == "Paper"){
            return comChoice == "Scissors"? "lose" : "win";
        }

        else if(choice == "Scissors"){
            return comChoice == "Rock"? "lose" : "win";
        }
    }
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