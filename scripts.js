function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() *3) +1;
    console.log(randomNumber)

    if (randomNumber == 1) {
        let computerSelection = "Rock"
        console.log(computerSelection);
    } else if (randomNumber == 2) {
        let computerSelection = "Paper"
        console.log(computerSelection);
    } else {
        let computerSelection = "Scissors"
        console.log(computerSelection);
    }
}

function 
