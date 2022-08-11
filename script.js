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

let playerSelection = ''
const rock = document.querySelector('#imagerock')
const paper = document.querySelector('#imagepaper')
const scissors = document.querySelector('#imagescissors')

playerScore = 0
computerScore = 0
function oneroundgame(playerSelection, computerSelection) {
    
        var computerSelection = getComputerChoice();

        if (computerSelection === playerSelection) {
            console.log(`It's a tie, nobody gets a point!
                        Player Points: ${playerScore}
                        Computer Points: ${computerScore}
            `)
            document.getElementById('textmessage').innerHTML = "It's a tie, nobody gets a point!"
            if (playerScore === 5 || computerScore === 5) {
                
            }

        } else if (computerSelection === "rock" && playerSelection === "scissors") {
            computerScore++;
            console.log(`You lost, rock beats scissors!
                        Player Points: ${playerScore}
                        Computer Points: ${computerScore}
            `)
            document.getElementById('textmessage').innerHTML = 'You lost, rock beats scissors!'
            if (playerScore === 5 || computerScore === 5) {
                
            }

        } else if (computerSelection === "rock" && playerSelection === "paper") {
            playerScore++;
            console.log(`You won, paper beats rock!
                        Player Points: ${playerScore}
                        Computer Points: ${computerScore}
            `)
            document.getElementById('textmessage').innerHTML = 'You won, paper beats rock!'
            if (playerScore === 5 || computerScore === 5) {
            
            }

        } else if (computerSelection === "paper" && playerSelection === "scissors") {
            playerScore++;
            console.log(`You won, scissors beats paper!
                        Player Points: ${playerScore}
                        Computer Points: ${computerScore}
            `)
            document.getElementById('textmessage').innerHTML = 'You won, scissors beats paper!'
            
            if (playerScore === 5 || computerScore === 5) {
                
            }

        } else if (computerSelection === "paper" && playerSelection === "rock") {
            computerScore++;
            console.log(`You lost, paper beats rock!
                        Player Points: ${playerScore}
                        Computer Points: ${computerScore}
            `)
            document.getElementById('textmessage').innerHTML = 'You lost, paper beats rock!'

            if (playerScore === 5 || computerScore === 5) {
                
            }

        } else if (computerSelection === "scissors" && playerSelection === "rock") {
            playerScore++;
            console.log(`You won, rock beats scissors!
                        Player Points: ${playerScore}
                        Computer Points: ${computerScore}
            `)
            document.getElementById('textmessage').innerHTML = 'You won, rock beats scissors!'

            if (playerScore === 5 || computerScore === 5) {
                
            }

        } else if (computerSelection === "scissors" && playerSelection === "paper") {
            computerScore++;
            console.log(`You lost, scissors beats paper!
                        Player Points: ${playerScore}
                        Computer Points: ${computerScore}
            `) 
            document.getElementById('textmessage').innerHTML = 'You lost, scissors beats paper!'


            if (playerScore === 5 || computerScore === 5) {
                
            }

        } else {
            console.log("Make sure to type in either 'rock', 'paper', or 'scissors'. Typing anything else may cause the code to not work properly!")
        }        
        
}


rock.addEventListener('click', () => {
    playerSelection = 'rock'
    oneroundgame(playerSelection, getComputerChoice());
    document.getElementById('scoreComputer').innerHTML = computerScore
    document.getElementById('scorePlayer').innerHTML = playerScore
});

paper.addEventListener('click', () => {
    playerSelection = 'paper'
    oneroundgame(playerSelection, getComputerChoice());
    document.getElementById('scoreComputer').innerHTML = computerScore
    document.getElementById('scorePlayer').innerHTML = playerScore
});

scissors.addEventListener('click', () => {
    playerSelection = 'scissors'
    oneroundgame(playerSelection, getComputerChoice());
    document.getElementById('scoreComputer').innerHTML = computerScore
    document.getElementById('scorePlayer').innerHTML = playerScore
});











 
        
