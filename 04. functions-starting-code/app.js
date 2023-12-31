const startGameBtn = document.getElementById('start-game-btn');
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WIN = 'PLAYER WIN';
const RESULT_COMPUTER_WIN = 'COMPUTER WIN';

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${PAPER}, ${SCISSORS}?`, '').toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid value. We chose ${DEFAULT_USER_CHOICE} for you`);
    return;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.33) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
  pChoice === cChoice
    ? RESULT_DRAW
    : (pChoice === ROCK && cChoice === SCISSORS) ||
      (pChoice === SCISSORS && cChoice === PAPER) ||
      (pChoice === PAPER && cChoice === ROCK)
    ? RESULT_PLAYER_WIN
    : RESULT_COMPUTER_WIN;

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }

  gameIsRunning = true;
  console.log('Game Start!');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;

  // truthy 일때만
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice);
  }
  let message = `player : ${
    playerChoice || DEFAULT_USER_CHOICE
  } VS computer: ${computerChoice}, result : `;

  if (winner === RESULT_DRAW) {
    message += 'draw...';
  } else if (winner === RESULT_PLAYER_WIN) {
    message += 'player win!';
  } else {
    message += 'computer win!';
  }
  console.log(message);
  gameIsRunning = false;
});

// function test
const combine = (resultHandler, operator, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for (const num of numbers) {
    if (operator === 'SUM') {
      sum += validateNumber(num);
    } else {
      sum -= validateNumber(num);
    }
  }
  resultHandler(sum);
};

const showResult = (message, result) => {
  console.log(`${message} ${result}`);
};

combine(
  showResult.bind(this, 'The result after adding all numbers is '),
  'SUM',
  2,
  3,
  'a',
  5,
  6,
  7,
  8,
  9,
  10,
);
combine(
  showResult.bind(this, 'The result after subtracting all numbers is '),
  'SUBTRACT',
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
);
