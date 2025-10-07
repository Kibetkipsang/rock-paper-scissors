// create random computer picks from the three choices, put them in an array and make the computer randomly choose by index
// player choices are manual and after player choice we compare it to the computer choice
// add event listeners to player choices
// if player and computer choices match, thats a draw and if not we set the conditions
// create random indexes for computer to chose from
// Result tag should update with every winner



const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const computerButton = document.querySelector('.btn')
const scores = document.querySelector('.scores')
const playerResult = document.querySelector('.player')
const computerResult = document.querySelector('.computer')
const resultMessage = document.querySelector('.result-tag')
const startGame = document.querySelector('.start')
const playerResultEmoji = document.querySelector('.player-result')

let playerScore = 0;
let computerScore = 0;

// play happens after player makes his choice
function playerChoice(choice){
    console.log(`${choice}`)
    if (choice === 'rock') {
        playerResultEmoji.textContent = '✊'
    }else if(choice === 'paper'){
        playerResultEmoji.textContent = '✋'
    }else{
        playerResultEmoji.textContent= '✌'
    }

    // playerResultEmoji.textContent = `${choice}`
    const computer = computerChoice()
    const result = winner(choice, computer)
    scoreBoard(result);
}

// event listener to every player's choice
rock.addEventListener('click', () => {
    playerChoice('rock')
})
paper.addEventListener('click', () => {
    playerChoice('paper')
})
scissors.addEventListener('click', () => {
    playerChoice('scissors')
})

// randomize the computer selection according to index
function computerChoice(){
    const choices = ['rock', 'paper', 'scissors']
    let randomChoice = Math.floor(Math.random() * 3) 
    const compChoice = choices[randomChoice];

    if (compChoice === 'rock') {
        computerButton.textContent = '✊'
    }else if(compChoice === 'paper'){
        computerButton.textContent = '✋'
    }else{
        computerButton.textContent= '✌'
    }

    return compChoice;

}


// determine the winner
function winner(player, computer){
    
    if (player === computer){
        console.log('what a draw')
        resultMessage.textContent = `Draw !!`
    }else if((player === 'rock' && computer === 'scissors') || (player === 'paper' && computer === 'rock') || (player === 'scissors' && computer === 'paper')){
        console.log('Player won')
        resultMessage.textContent = `Player Won !!`
        return 'player'
    }else{
        console.log('computer won')
        resultMessage.textContent = `Computer Won !!`
        return 'computer'
    }
}

// event listeners to restart the game
startGame.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    playerResult.textContent = `Player : 0`
    computerResult.textContent = `0 : Computer`
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
})

// display score on score board
function scoreBoard(result) {
  if (result === 'player') {
    playerScore++;
  } else if (result === 'computer') {
    computerScore++;
  }

  if (playerScore >= 20 || computerScore >= 20){
    resultMessage.textContent = 'Game Over'
    computerResult.textContent = ``;
    computerResult.appendChild(startGame);
    playerResult.textContent = playerScore >= 20 ? 'Player Wins!' : 'Computer Wins!'
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    return;
  }

  computerResult.textContent = `${computerScore} : Computer`;
  playerResult.textContent = `Player : ${playerScore}`;
  
}

