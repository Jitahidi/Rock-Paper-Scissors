
let playerScore = 0;
let computerScore = 0;
let tie = 0;

//Play Round Function

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        tie++;
    }
    else if(playerSelection == 'rock'){
        if(computerSelection == 'paper'){
            computerScore++;
        }else{
            playerScore++;
        }
    }
    else if(playerSelection == 'scissors'){
        if(computerSelection == 'rock'){
            computerScore++;
        }else{
            playerScore++;
        }
    }
    else if(playerSelection == 'paper'){
        if(computerSelection == 'scissors'){
            computerScore++;
        }else{
            playerScore++;
        }
    }
}

//Game Function

function game() {
    let round = 1;
    for (let i = 0; i < 5; i++) {
        
        function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
            let value = getRandomIntInclusive(1,3);
        
        function getComputerChoice() {
            if(value === 1) {
                return "rock"
            } else if(value === 2) {
                return "paper"
            } else {
                return "scissors"
            }
        }
        
        let playerSelect = prompt("Do you choose 'Rock', 'Paper' or 'Scissors'?");
        let playerSelection = playerSelect.toLowerCase();
        
        computerSelection = getComputerChoice();

        playRound(playerSelection, computerSelection);

        console.log("Round: " + round);
        console.log("compSelection: " + computerSelection);
        console.log("playerSelection: " + playerSelection);
        console.log("playerScore: " + playerScore);
        console.log("computerScore: " + computerScore);
        console.log("tie: " + tie);
 
//Display Round Winner

        if(playerSelection === computerSelection){
            console.log("it's a tie!");
        }
        else if(playerSelection == 'rock'){
            if(computerSelection == 'paper'){
                console.log("computer won!");
            }else{
                console.log("player won!");
            }
        }
        else if(playerSelection == 'scissors'){
            if(computerSelection == 'rock'){
                console.log("computer won!");
            }else{
                console.log("player won!");
            }
        }
        else if(playerSelection == 'paper'){
            if(computerSelection == 'scissors'){
                console.log("computer won!");
            }else{
                console.log("player won!");
            }
        }

//Display Game Winner

        if(round === 5 && playerScore > computerScore) {
            console.log("Game Over: Player Won! " + "PlayerScore " + playerScore + " ComputerScore " + computerScore);
        } else if(round === 5 && computerScore > playerScore) {
            console.log("Game Over: Computer Won! " + "ComputerScore " + computerScore + " PlayerScore " + playerScore);
        } else if (round === 5 && playerScore === computerScore) {
            console.log("Game Over: It's a tie! " + "PlayerScore " + playerScore + " ComputerScore " + computerScore);
        }
       
        round++;
      } 
}

game();

