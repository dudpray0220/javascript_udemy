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

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult; // 계산 전 초기값
  currentResult += enteredNumber; // 계산 후 값
  createAndWriteLog('+', initialResult, enteredNumber);
  writeToLog('ADD', initialResult, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteLog('-', initialResult, enteredNumber);
  writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiple() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteLog('*', initialResult, enteredNumber);
  writeToLog('MULTIPLE', initialResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteLog('/', initialResult, enteredNumber);
  writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiple);
divideBtn.addEventListener('click', divide);
