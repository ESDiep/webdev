//const { doc } = require("prettier");


const ROCK = 1;
const PAPER = 2;
const SCISSOR = 3;

const DATA = {"Rock" : 1, "Paper" : 2, "Scissor" : 3};

//randomly generate a number between 1 and 3
function getComputerChoice(min, max ) {

    return Math.floor(Math.random() * (max - min) + min);

}


//one round of RPS

function playRound(playerSelection, computerSelection) {
    let result;

    if(playerSelection === 1 ){
        switch(computerSelection) {
            case 1:
                result = "TIE";
                break;
            case 2:
                result = "You lose! Paper beats rock. ";
                break;
            case 3:
                result = "You win! Rock beats scissor";
                
        }
     } else if( playerSelection === 2){
            switch(computerSelection) {
                case 1:
                    result = "You win! Paper beats rock";
                    break;
                case 2:
                    result = "TIE";
                    break;
                case 3:
                    result = "You lose! Scissor cuts paper. ";
        }
     } else if( playerSelection === 3){
            switch(computerSelection) {
                case 1:
                    result = "You lose! Rock beats scissor. ";
                    break;
                case 2:
                    result = "You win! Scissor cuts paper.";
                    break;
                case 3:
                    result = "TIE"; 
        }
    }

    return result;
}

function game(){
    const btnName = ["Rock", "Paper", "Scissor"];
    const body = document.querySelector("body");
    const btnDiv = document.createElement("div");
    btnDiv.setAttribute("class", "button");
    body.appendChild( btnDiv);


    const p = document.createElement("P");
    body.appendChild(p);

    for(let i = 0; i < 3; i++){
        const btn = document.createElement("button");
        btn.textContent = btnName[i];
        btnDiv.appendChild(btn);
        btn.addEventListener("click", (event) => {
            console.log(event.target.textContent);
            let playerChoice = DATA[event.target.textContent];
            console.log(playerChoice);
            let result = playRound(playerChoice,getComputerChoice(1,4));

            
            p.textContent = result;
           

        });

    }
    

}

game();