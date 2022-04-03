'use strict'

let round = 0
let pScore = 0
let cScore = 0

const show = document.querySelectorAll('.weapon')

let weapons = [...show]
let chosenWeapons = weapons.forEach(weapon => weapon.style.visibility = 'hidden')

let gameRound = document.getElementById('round')
gameRound.textContent = round
let pyScore = document.getElementById('playerScore')
pyScore.textContent = pScore
let robotScore = document.getElementById('pcScore')
robotScore.textContent = cScore

function playRound (ele) {
  let playerSelection = ele.value
  let answers = ['scissors', 'rock', 'paper']
  let computerSelection = answers[Math.floor(Math.random() * answers.length)]

  round++
  gameRound.textContent = round

  weapons.forEach(el => el.id !== playerSelection ? el.style.visibility = 'hidden' : '')
  
  switch (true) {
    case playerSelection === 'rock' && computerSelection === "scissors": 
      pScore++
      pyScore.textContent = pScore
      break
    case playerSelection === 'paper' && computerSelection === "rock":
      pScore++
      pyScore.textContent = pScore
      break
    case playerSelection === 'scissors' && computerSelection === "paper":
      pScore++
      pyScore.textContent = pScore
      break
    case playerSelection === computerSelection:
      break
    default:
      cScore++
      robotScore.textContent = cScore
  }
}

function disable(ele) {
  let playerSelection = ele.value
  document.getElementById(`${playerSelection}`).disabled = true
  document.getElementById(`${playerSelection}`).visibility = 'visible'
  playRound(ele)
}

function game() {
  const start = document.getElementById('start')
  const again = document.getElementById('again')
  const restart = document.getElementById('restart')

  weapons.forEach(el => el.style.visibility = 'visible')
  weapons.forEach(el => el.disabled = false)

  if (pScore < 5 && cScore < 5 && round < 5) {
    start.style.display = 'none'
    restart.style.display = 'none'
    again.style.visibility = 'visible'
  } else {
    again.style.display = 'none'
    weapons.forEach(el => el.style.visibility = 'hidden')
    document.getElementById('roundWinner').textContent = pScore > cScore ? ' The player won' : ' The computer won' 
    restart.style.display = 'initial'
  }
}

function restart() {
  const restart = document.getElementById('restart')
  restart.style.display = 'none'
  round = 0
  pScore = 0
  cScore = 0
  gameRound.textContent = round
  pyScore.textContent = pScore
  robotScore.textContent = cScore
  game()
}