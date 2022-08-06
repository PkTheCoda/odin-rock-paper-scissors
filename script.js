function getComputerChoice() {
    const original_answer = Math.floor(Math.random() * 3) + 1;
    var computerChoice = ""

    if (original_answer === 1) {
        var computerChoice = "rock"
    } else if (original_answer === 2) {
        var computerChoice = "paper"
    } else if (original_answer === 3) {
        var computerChoice = "scissors"
    }

    return computerChoice
}


function oneroundgame(playerSelection, computerSelection) {
    playerScore = 0
    computerScore = 0
   for (let computerScore = 0; computerScore <= 4;) { 
        var computerSelection = getComputerChoice();
        var playerSelection = prompt("Choose Rock, Paper, or Scissors")
        var realPlayerSelection = playerSelection.toLowerCase()
        var winMessage = ""

        if (computerSelection === playerSelection) {
            console.log(`It's a tie, nobody gets a point!
                        Player Points: ${playerScore}
                        Computer Points: ${computerScore}
            `)

            if (playerScore === 5 || computerScore === 5) {
                break;
            }

        } else if (computerSelection === "rock" && playerSelection === "scissors") {
            computerScore++;
            console.log(`You lost, rock beats scissors!
                        Player Points: ${playerScore}
                        Computer Points: ${computerScore}
            `)

            if (playerScore === 5 || computerScore === 5) {
                break;
            }

        } else if (computerSelection === "rock" && playerSelection === "paper") {
            playerScore++;
            console.log(`You won, paper beats rock!
                        Player Points: ${playerScore}
                        Computer Points: ${computerScore}
            `)

            if (playerScore === 5 || computerScore === 5) {
                break;
            }

        } else if (computerSelection === "paper" && playerSelection === "scissors") {
            playerScore++;
            console.log(`You won, scissors beats paper!
                        Player Points: ${playerScore}
                        Computer Points: ${computerScore}
            `)
            
            if (playerScore === 5 || computerScore === 5) {
                break;
            }

        } else if (computerSelection === "paper" && playerSelection === "rock") {
            computerScore++;
            console.log(`You lost, paper beats rock!
                        Player Points: ${playerScore}
                        Computer Points: ${computerScore}
            `)

            if (playerScore === 5 || computerScore === 5) {
                break;
            }

        } else if (computerSelection === "scissors" && playerSelection === "rock") {
            playerScore++;
            console.log(`You won, rock beats scissors!
                        Player Points: ${playerScore}
                        Computer Points: ${computerScore}
            `)

            if (playerScore === 5 || computerScore === 5) {
                break;
            }

        } else if (computerSelection === "scissors" && playerSelection === "paper") {
            computerScore++;
            console.log(`You lost, scissors beats paper!
                        Player Points: ${playerScore}
                        Computer Points: ${computerScore}
            `) 

            if (playerScore === 5 || computerScore === 5) {
                break;
            }

        } else {
            console.log("Make sure to type in either 'rock', 'paper', or 'scissors'. Typing anything else may cause the code to not work properly!")
        }
    }
        
        
}

oneroundgame();







