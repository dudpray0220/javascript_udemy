const defaultResult = 0;
const OPERATOR_ADD = 'ADD';
const OPERATOR_SUBTRACT = 'SUBTRACT';
const OPERATOR_MULTIPLY = 'MULTIPLY';
const OPERATOR_DIVIDE = 'DIVIDE';

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

function calculate(operation) {
  const enteredNumber = getUserNumberInput();

  if (
    (operation !== OPERATOR_ADD &&
      operation !== OPERATOR_SUBTRACT &&
      operation !== OPERATOR_MULTIPLY &&
      operation !== OPERATOR_DIVIDE) ||
    !enteredNumber
  ) {
    return;
  }

  const initialResult = currentResult; // 계산 전 초기값
  let mathOperator;

  if (operation === OPERATOR_ADD) {
    currentResult += enteredNumber; // 계산 후 값
    mathOperator = '+';
  } else if (operation === OPERATOR_SUBTRACT) {
    currentResult -= enteredNumber;
    mathOperator = '-';
  } else if (operation === OPERATOR_MULTIPLY) {
    currentResult *= enteredNumber;
    mathOperator = '*';
  } else if (operation === OPERATOR_DIVIDE) {
    currentResult /= enteredNumber;
    mathOperator = '/';
  }
  createAndWriteLog(mathOperator, initialResult, enteredNumber);
  writeToLog(operation, initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', calculate.bind(this, OPERATOR_ADD));
subtractBtn.addEventListener('click', calculate.bind(this, OPERATOR_SUBTRACT));
multiplyBtn.addEventListener('click', calculate.bind(this, OPERATOR_MULTIPLY));
divideBtn.addEventListener('click', calculate.bind(this, OPERATOR_DIVIDE));
