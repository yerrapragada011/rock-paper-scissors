function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors']

  const choice = choices[Math.floor(Math.random() * choices.length)]

  return choice
}

let playerScore = 0
let computerScore = 0

const rockBtn = document.querySelector('#rock')
const paperBtn = document.querySelector('#paper')
const scissorsBtn = document.querySelector('#scissors')
const results = document.querySelector('#results')
const finalResults = document.querySelector('#finalResults')
const yourScoreCount = document.querySelector('#yourScore')
const computerScoreCount = document.querySelector('#computerScore')

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    results.innerHTML = 'Tie game!'
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerScore++
    yourScoreCount.innerHTML = 'Your score is: ' + playerScore
    computerScoreCount.innerHTML = 'The computer score is: ' + computerScore
    results.innerHTML = 'Paper beats rock!'
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore++
    yourScoreCount.innerHTML = 'Your score is: ' + playerScore
    computerScoreCount.innerHTML = 'The computer score is: ' + computerScore
    results.innerHTML = 'Rock beats scissors!'
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore++
    yourScoreCount.innerHTML = 'Your score is: ' + playerScore
    computerScoreCount.innerHTML = 'The computer score is: ' + computerScore
    results.innerHTML = 'Paper beats rock!'
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerScore++
    yourScoreCount.innerHTML = 'Your score is: ' + playerScore
    computerScoreCount.innerHTML = 'The computer score is: ' + computerScore
    results.innerHTML = 'Scissors beats paper!'
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerScore++
    yourScoreCount.innerHTML = 'Your score is: ' + playerScore
    computerScoreCount.innerHTML = 'The computer score is: ' + computerScore
    results.innerHTML = 'Rock beats scissors!'
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore++
    yourScoreCount.innerHTML = 'Your score is: ' + playerScore
    computerScoreCount.innerHTML = 'The computer score is: ' + computerScore
    results.innerHTML = 'Scissors beats paper!'
  }
}

function calculateScore() {
  if (playerScore == 5) {
    finalResults.innerHTML = 'You win!'
    rockBtn.disabled = true
    paperBtn.disabled = true
    scissorsBtn.disabled = true
  } else if (computerScore == 5) {
    finalResults.innerHTML = 'You lose!'
    rockBtn.disabled = true
    paperBtn.disabled = true
    scissorsBtn.disabled = true
  } else if (playerScore == 0 || computerScore == 0) {
    finalResults.innerHTML = ''
  }
}

function game() {
  rockBtn.addEventListener('click', () => {
    let playerSelection = 'rock'
    let computerSelection = getComputerChoice()
    playRound(playerSelection, computerSelection)
    calculateScore()
  })
  paperBtn.addEventListener('click', () => {
    let playerSelection = 'paper'
    let computerSelection = getComputerChoice()
    playRound(playerSelection, computerSelection)
    calculateScore()
  })
  scissorsBtn.addEventListener('click', () => {
    let playerSelection = 'scissors'
    let computerSelection = getComputerChoice()
    playRound(playerSelection, computerSelection)
    calculateScore()
  })
}

game()
