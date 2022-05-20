// Placeholders for First & Second number and Mathematics operators (ie: + | - | X | /)
let firstNumber = '';
let operator = '';
let secondNumber = '';

// Events setting

// ZERO '0' button
const zero = document.querySelector('.zero');

zero.addEventListener('click', e => {

    if (operator === '') {
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
    if (operator === '') {
        if (firstNumber === '' || firstNumber.at(1) === '.') {
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

    if (firstNumber === '' || operator !== '') {
        return;
    }
    else {
        operator = e.target.textContent;
        userInput.textContent = `${firstNumber} ${operator}`;
    }
}))

// delete button
const del = document.querySelector('.delete');

del.addEventListener('click', e => {
    if (secondNumber) {
        secondNumber = secondNumber.slice(0, -1)

        if (secondNumber) {
            const userInput = document.querySelector('#user-input');
            userInput.textContent = `${firstNumber} ${operator} ${secondNumber}`;
        }
        else {
            const userInput = document.querySelector('#user-input');
            userInput.textContent = `${firstNumber} ${operator}`;
        }
    }
    else if (operator) {
        operator = '';

        const userInput = document.querySelector('#user-input');
        userInput.textContent = firstNumber;
    }
    else if (firstNumber) {
        firstNumber = firstNumber.slice(0, -1)

        const userInput = document.querySelector('#user-input');
        userInput.textContent = firstNumber;
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
})

// number button (1 - 9 only)
const numbers = document.querySelectorAll('.number');

numbers.forEach(num => num.addEventListener('click', e => {
    const exclude = e.target.textContent === '0' || e.target.textContent === '.'

    if (exclude) {
        return;
    }
    else {
        if (operator === '') {
            firstNumber += e.target.textContent;

            const userInput = document.querySelector('#user-input');
            userInput.textContent = firstNumber;
        }
        else {
            secondNumber += e.target.textContent;

            const userInput = document.querySelector('#user-input');
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