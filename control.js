// Placeholders for First & Second number and Mathematics operators (ie: + | - | X | /)
let firstNumber = '';
let operator = '';
let secondNumber = '';
let calculation = '';

// Events setting

// ZERO '0' button
const zero = document.querySelector('.zero');

zero.addEventListener('click', e => {

    if (!operator) {
        if (firstNumber.length === 1 && firstNumber.at(0) === '0') {
            return;
        }
        else {
            firstNumber += e.target.textContent;

            const userInput = document.querySelector('#user-input');
            userInput.textContent = firstNumber;
        }
    }
    else {
        if (secondNumber.length === 1 && secondNumber.at(0) === '0') {
            return;
        }
        else {
            secondNumber += e.target.textContent;

            const userInput = document.querySelector('#user-input');
            userInput.textContent = `${firstNumber} ${operator} ${secondNumber}`;
        }
    }
})

// decimal '.' button
const decimal = document.querySelector('.decimal');

decimal.addEventListener('click', e => {
    if (!operator) {
        if (!firstNumber || firstNumber.at(1) === '.') {
            return;
        }
        else {
            firstNumber += e.target.textContent;

            const userInput = document.querySelector('#user-input');
            userInput.textContent = firstNumber;
        }
    }
    else {
        if (secondNumber === '' || secondNumber.at(1) === '.') {
            return;
        }
        else {
            secondNumber += e.target.textContent;

            const userInput = document.querySelector('#user-input');
            userInput.textContent = `${firstNumber} ${operator} ${secondNumber}`;
        }
    }
})

// Maths operators button (+ | - | X | /)
const operators = document.querySelectorAll('.operator');

operators.forEach(op => op.addEventListener('click', e => {

    const userInput = document.querySelector('#user-input');
    const result = document.querySelector('#calculate');

    if (firstNumber && !operator) {
        operator = e.target.textContent;
        userInput.textContent = `${firstNumber} ${operator}`;
    }
    else if (calculation) {
        firstNumber = result.textContent;
        operator = e.target.textContent;
        secondNumber = '';
        userInput.textContent = `${firstNumber} ${operator}`;
        calculation = '';
    }
    else {
        return;
    }
}))

// delete button
const del = document.querySelector('.delete');

del.addEventListener('click', e => {

    const userInput = document.querySelector('#user-input');
    const result = document.querySelector('#calculate');

    if (secondNumber) {
        secondNumber = secondNumber.slice(0, -1)

        if (secondNumber) {
            userInput.textContent = `${firstNumber} ${operator} ${secondNumber}`;
        }
        else {
            userInput.textContent = `${firstNumber} ${operator}`;
        }
    }
    else if (operator && !secondNumber) {
        operator = '';
        userInput.textContent = firstNumber;
    }
    else if (firstNumber) {
        firstNumber = firstNumber.slice(0, -1)
        userInput.textContent = firstNumber;
    }
    else {
        result.textContent = '';
    }
})

// reset button >> reset everyting
const reset = document.querySelector('.reset');

reset.addEventListener('click', e => {
    firstNumber = '';
    operator = '';
    secondNumber = '';

    const userInput = document.querySelector('#user-input');
    userInput.textContent = '';

    const result = document.querySelector('#calculate');
    result.textContent = '';
})

// number button (1 - 9 only)
const numbers = document.querySelectorAll('.number');

numbers.forEach(num => num.addEventListener('click', e => {
    const userInput = document.querySelector('#user-input');
    const result = document.querySelector('#calculate');

    if (e.target.textContent === '0' || e.target.textContent === '.') {
        return;
    }
    else {
        if (!operator) {
            firstNumber += e.target.textContent;
            userInput.textContent = firstNumber;
        }
        else if (operator && !result) {
            secondNumber += e.target.textContent;
            userInput.textContent = `${firstNumber} ${operator} ${secondNumber}`;
        }
        else {
            secondNumber += e.target.textContent;
            userInput.textContent = `${firstNumber} ${operator} ${secondNumber}`;
        }
    }
}))

// percentage button

const percentage = document.querySelector('.percentage');

percentage.addEventListener('click', e => {
    if (operator === '') {
        if (firstNumber === '' || firstNumber.endsWith('%')) {
            return;
        }
        else {
            firstNumber += e.target.textContent;

            const userInput = document.querySelector('#user-input');
            userInput.textContent = firstNumber;
        }
    }
    else {
        if (secondNumber === '' || secondNumber.endsWith('%')) {
            return;
        }
        else {
            secondNumber += e.target.textContent;

            const userInput = document.querySelector('#user-input');
            userInput.textContent = `${firstNumber} ${operator} ${secondNumber}`;
        }
    }
})

// 'equal' button
const equal = document.querySelector('#equal');

equal.addEventListener('click', e => {

    function operate(firstNumber, operator, secondNumber) {

        let result = '';

        switch (operator) {
            case '+':
                result = firstNumber + secondNumber;
                return Number.isInteger(result) ? result : Number.parseFloat(result).toFixed(4);
                break;

            case '-':
                result = firstNumber - secondNumber;
                return Number.isInteger(result) ? result : Number.parseFloat(result).toFixed(4);
                break;

            case 'x':
                result = firstNumber * secondNumber;
                return Number.isInteger(result) ? result : Number.parseFloat(result).toFixed(4);
                break;

            case '/':
                result = secondNumber === 0.0 ? 'ERROR' : firstNumber / secondNumber;
                if (result !== 'ERROR') {
                    result = Number.parseFloat(result).toFixed(4);
                    return result;
                }
                else {
                    return 'ERROR'
                }
                break;
        }
    }

    const result = document.querySelector('#calculate');

    if (secondNumber) {
        let a = firstNumber.endsWith('%') ? +firstNumber.slice(0, -1) / 100.0 : +firstNumber;
        let b = secondNumber.endsWith('%') ? +secondNumber.slice(0, -1) / 100.0 : +secondNumber;

        result.textContent = operate(a, operator, b)
        calculation = 'on'
    }
    else {
        return;
    }
})

// transition effect on any button
const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('click', function (e) {
    this.classList.add('btn-click');

    this.addEventListener('transitionend', function (e) {
        if (e.propertyName === 'transform') {
            this.classList.remove('btn-click');
        }
        else {
            return;
        }
    })
}))
