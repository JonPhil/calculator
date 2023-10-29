const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const screen = document.querySelector('.screen');
const currentOperand = document.querySelector('[data-current-operand');
const previousOperand = document.querySelector('[data-previous-operand');
const clearButton = document.querySelector('#clear');
const deleteButton = document.querySelector('#delete');
const equal = document.querySelector('#equal');
const decimal = document.querySelector('#decimal');

let firstNumber = '',
    operator = null,
    secondNumber = '';
    decimalCount = 0;

numbers.forEach(number => {
    number.addEventListener('click', () => {
        currentOperand.textContent += number.value;
    });
});
clearButton.addEventListener('click', () => {
    currentOperand.textContent = '';
    previousOperand.textContent = '';
});
deleteButton.addEventListener('click', () => {
    currentOperand.textContent 
    = currentOperand.textContent.slice(0, -1);  
});
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        currentOperand.textContent += ' ' + operator.value;
        previousOperand.textContent = currentOperand.textContent
        currentOperand.textContent = '';
    });
});
decimal.addEventListener('click', () => {
    if (Array.from(currentOperand.textContent).includes('.')) {
        return;
    } else {
    currentOperand.textContent += decimal.value;
    };
});
equal.addEventListener('click', () => {
    numberTxt = previousOperand.textContent;
    firstNumber = parseFloat(numberTxt);
    a = firstNumber;
    operator = previousOperand.textContent.slice(-1);
    secondNumber = currentOperand.textContent;
    b = secondNumber;
    result = operate(operator, a, b);
    finalResult = result.toFixed(2);
    currentOperand.innnerHTML = '';
    currentOperand.textContent = finalResult;
    previousOperand.textContent = '';
});

function add(a, b) {
    return a + b;
};
function subtract(a, b) {
    return a - b;
};
function multiply(a, b) {
    return a * b;
};
function divide(a, b) {
    return a / b;
};
function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case '+':
            return add(a, b)
        case '-':
            return subtract(a, b)
        case '*':
            return multiply(a, b)
        case '/':
            if (b === 0) return null
            else return divide(a, b)
        default:
            return null       
    };
};