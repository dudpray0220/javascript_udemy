const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// input 필드에서 input 값 가져옴
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// 계산 로그 생성
function createAndWriteLog(operator, beforeCalc, inputNumber) {
  const calcLog = `${beforeCalc} ${operator} ${inputNumber}`;
  outputResult(currentResult, calcLog); // from vendor.js file
}

function writeToLog(operator, prevResult, inputNumber, result) {
  const logEntry = {
    operation: operator,
    prevResult: prevResult,
    number: inputNumber,
    result: result,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();

  if (
    (calculationType !== 'ADD' &&
      calculationType !== 'SUBTRACT' &&
      calculationType !== 'MULTIPLY' &&
      calculationType !== 'DIVIDE') ||
    !enteredNumber
  ) {
    return;
  }

  const initialResult = currentResult; // 계산 전 초기값
  let mathOperator;

  if (calculationType === 'ADD') {
    currentResult += enteredNumber; // 계산 후 값
    mathOperator = '+';
  } else if (calculationType === 'SUBTRACT') {
    currentResult -= enteredNumber;
    mathOperator = '-';
  } else if (calculationType === 'MULTIPLY') {
    currentResult *= enteredNumber;
    mathOperator = '*';
  } else if (calculationType === 'DIVIDE') {
    currentResult /= enteredNumber;
    mathOperator = '/';
  }
  createAndWriteLog(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult('ADD');
}

function subtract() {
  calculateResult('SUBTRACT');
}

function multiple() {
  calculateResult('MULTIPLY');
}

function divide() {
  calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiple);
divideBtn.addEventListener('click', divide);
