const defaultResult = 0;
let currentResult = defaultResult

function add(num1, num2) {
    const result = num1 + num2;
    alert(`result is ${result}`);
}

add(1, 2);
add(5, 5)

currentResult = currentResult + 10;
outputResult(currentResult, '');