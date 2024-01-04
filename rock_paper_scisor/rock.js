

const ROCK = 1;
const PAPER = 2;
const SCISSOR = 3;

const DATA = {"rock" : ROCK, "paper" : PAPER, "scissor" : SCISSOR};

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
    let playerSelection;
    let computer;
    let result;
    for(let x = 0; x <5; x++){
        playerSelection = prompt("Please enter your choice: rock, paper or scissor: ").toLowerCase();
        console.log(playerSelection, DATA[playerSelection]);
        computer = getComputerChoice(1,4);
        console.log("computer choice", computer);
        result = playRound(DATA[playerSelection], computer);
        console.log(result);
    }

}

game();