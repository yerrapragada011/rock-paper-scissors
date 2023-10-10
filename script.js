function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors']

  const choice = choices[Math.floor(Math.random() * choices.length)]

  return choice
}

let playerScore = 0
let computerScore = 0

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log('Tie game!')
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerScore++
    console.log('You lose! Paper beats rock')
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore++
    console.log('You win! Rock beats scissors')
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore++
    console.log('You win! Paper beats rock')
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerScore++
    console.log('You lose! Scissors beats paper')
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerScore++
    console.log('You lose! Rock beats scissors')
  } else {
    playerScore++
    console.log('You win! Scissors beats paper')
  }
}

function game() {
  const playerSelection = prompt('Rock, Paper, Scissors').toLowerCase()
  const computerSelection = getComputerChoice()
  playRound(playerSelection, computerSelection)
}

game()
game()
game()
game()
game()

if (playerScore > computerScore) {
    console.log('You win!')
} else {
    console.log('You lose!')
}