

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() *3) +1;
    console.log(randomNumber)

    if (randomNumber == 1) {
        let ComputerChoice = "Rock"
        console.log(ComputerChoice);
    } else if (randomNumber == 2) {
        let ComputerChoice = "Paper"
        console.log(ComputerChoice);
    } else {
        let ComputerChoice = "Scissors"
        console.log(ComputerChoice);
    }
}

