let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;
let roundWinner = '';

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() *3) +1;
    

    if (randomNumber == 1) {
        computerSelection = "rock"
        
    } else if (randomNumber == 2) {
        computerSelection = "paper"
        
    } else {
        computerSelection = "scissors"
      
    }
    return computerSelection;
}


function playRound(playerSelection, computerSelection) {

    computerSelection = getComputerChoice().toLowerCase();
    console.log(computerSelection);
    //playerSelection = "";
    

    if (computerSelection == playerSelection) {
        console.log("It's a tie!")
        //return "It's a tie!";
        roundWinner = 'tie';
        
    } else if (
        (computerSelection == "rock" && playerSelection == "scissors" ) ||
        (computerSelection == "paper" && playerSelection == "rock") ||
        (computerSelection == "scissors" && playerSelection == "paper")) {
            roundWinner = 'computer';
            console.log(`The Computer won! ${computerSelection} beats ${playerSelection}`)
            //return `The Computer won! ${computerSelection} beats ${playerSelection}`;
            
            
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors" ) ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")){
            roundWinner = 'player';
            console.log(`You won! ${playerSelection} beats ${computerSelection}`)
            //return `You won! ${playerSelection} beats ${computerSelection}`;
            
            
    } else {
        return "Error"
    }
    
}

const rockBtn = document.querySelector(".rock");
rockBtn.addEventListener('click', () => {
    let playerSelection = "rock";
    playRound(playerSelection, computerSelection);
});

const papBtn = document.querySelector(".paper");
papBtn.addEventListener('click', () => {
    let playerSelection = "paper";
    playRound(playerSelection, computerSelection);
});

const sciBtn = document.querySelector(".scissors");
sciBtn.addEventListener('click', () => {
    let playerSelection = "scissors";
    playRound(playerSelection, computerSelection);
});