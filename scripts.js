let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;
let roundWinner = '';

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() *3) +1;
    //console.log(randomNumber)

    if (randomNumber == 1) {
        computerSelection = "rock"
        //console.log(computerSelection);
    } else if (randomNumber == 2) {
        computerSelection = "paper"
        //console.log(computerSelection);
    } else {
        computerSelection = "scissors"
      //  console.log(computerSelection);
    }
    return computerSelection;
}

function getPlayerChoice() {
    let playerSelection = prompt("Rock, Paper or Scissors?");
    //console.log(playerSelection);
    return playerSelection;
}



function playRound(playerSelection, computerSelection) {

    computerSelection = getComputerChoice().toLowerCase();
    //console.log(computerSelection);
    playerSelection = getPlayerChoice().toLowerCase();
    //console.log(playerSelection);

    if (computerSelection == playerSelection) {
        return "It's a tie!";
        roundWinner = 'tie';
        //console.log("It's a tie!");
    } else if (
        (computerSelection == "rock" && playerSelection == "scissors" ) ||
        (computerSelection == "paper" && playerSelection == "rock") ||
        (computerSelection == "scissors" && playerSelection == "paper")) {
            return `The Computer won! ${computerSelection} beats ${playerSelection}`;
            roundWinner = 'computer'
            //console.log(`The Computer won! ${computerSelection} beats ${playerSelection}`);
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors" ) ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")){
            return `You won! ${playerSelection} beats ${computerSelection}`;
            roundWinner = 'player'
            //console.log(`You won! ${playerSelection} beats ${computerSelection}`);
    } else {
        return "Error"
    }
    
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
        if (roundWinner == 'computer') {
            computerScore++;
            console.log(playerScore + " : " + computerScore); 
        } else if (roundWinner == 'player') {
            playerScore++;
            console.log(playerScore + " : " + computerScore); 
        } else {
            console.log(playerScore + " : " + computerScore); 
        }
    }
}