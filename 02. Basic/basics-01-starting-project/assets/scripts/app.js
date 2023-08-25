const defaultResult = 0;
let currentResult = defaultResult;

// input 필드에서 input 값 가져옴
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// 계산 로그 생성
function createAndWriteLog(operator, beforeCalc, inputNumber) {
  const calcLog = `${beforeCalc} ${operator} ${inputNumber}`;
  outputResult(currentResult, calcLog); // from vendor.js file
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult; // 계산 전 초기값
  currentResult = currentResult + enteredNumber; // 계산 후 값
  createAndWriteLog('+', initialResult, enteredNumber);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteLog('-', initialResult, enteredNumber);
}

function multiple() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWriteLog('*', initialResult, enteredNumber);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createAndWriteLog('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiple);
divideBtn.addEventListener('click', divide);
