const getUserChoice = userInput => { userInput = userInput.toLowerCase(); 
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('error, please type : rock, paper, scissors')
  }
};

const getComputerChoice = computerChoice => { randomNum = Math.floor(Math.random() * 3)
switch (randomNum) {
  case 0:
  return 'rock';
  case 1:
  return 'paper';
  case 2:
  return 'scissors'
  default:
  return 'error 404 not found'
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
      return 'the game is tie';
  };
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The Computer Won';
    } else {
      return 'You won!';
    }
  }
if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The Computer Won';
      } else {
        return 'You won!';
      }
    }
if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'the computer won!'
    } else {
      return 'You won!'
    }

  }
if (userChoice === 'bomb') {
  if (computerChoice === 'paper' || computerChoice === 'rock' || computerChoice === 'scissors') {
    return 'You won!'
  }
}

}

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('you threw: ' + userChoice);
  console.log('the computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
