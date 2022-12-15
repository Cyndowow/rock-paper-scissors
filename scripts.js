let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;
let roundWinner = '';

const div = document.querySelector('#announcement');

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
};

function playRound(playerSelection, computerSelection) {

    computerSelection = getComputerChoice().toLowerCase();
    console.log(computerSelection);
    //playerSelection = "";
    

    if (computerSelection == playerSelection) {
        roundWinner = 'tie';
        score();
        scoreCheck();
        return;
        
    } else if (
        (computerSelection == "rock" && playerSelection == "scissors" ) ||
        (computerSelection == "paper" && playerSelection == "rock") ||
        (computerSelection == "scissors" && playerSelection == "paper")) {
            roundWinner = 'computer';
            score();
            scoreCheck();
            return;
        
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors" ) ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")){
            roundWinner = 'player';
            score();
            scoreCheck();
            return;
            
            
    } else {
        return "Error"
    }
    
    function score() {
        if (roundWinner == 'computer') {
            computerScore++;
            const pcWin = document.createElement('div');
            pcWin.classList.add('div');
            pcWin.textContent = `The Computer won! ${computerSelection} beats ${playerSelection}. ${playerScore} : ${computerScore}`;
            div.appendChild(pcWin);
    } else if (roundWinner == 'player') {
        playerScore++;
        const pcWin = document.createElement('div');
        pcWin.classList.add('div');
        pcWin.textContent = `You won! ${playerSelection} beats ${computerSelection}. ${playerScore} : ${computerScore}`;
        div.appendChild(pcWin);
    } else if (roundWinner = 'tie') {
        const pcWin = document.createElement('div');
        pcWin.classList.add('div');
        pcWin.textContent = `It's a tie! Both of you picked ${playerSelection}. ${playerScore} : ${computerScore}`;
        div.appendChild(pcWin);
    } else {
        const pcWin = document.createElement('div');
        pcWin.classList.add('div');
        pcWin.textContent = `Oops. Something went wrong`;
        div.appendChild(pcWin);
    }
    }
}

function scoreCheck() {
if (playerScore == 5 || computerScore == 5) {
    const result = document.createElement('h3');
    result.classList.add('h3');
    result.textContent = `We have a Winner: ${playerScore} : ${computerScore}`;
    div.appendChild(result);
}};



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