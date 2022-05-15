// const result = document.querySelector('#display');
const numbers = document.querySelectorAll('.number');
const icons = document.querySelectorAll('img');

let total = '';

function displayNumber(e) {
    const display = document.querySelector('#display');
    const number = e.target.getAttribute('id');

    total += number;
    display.textContent = total;
}

function operators(e) {
    const display = document.querySelector('#display');
    let result = display.textContent;

    const action = e.target.getAttribute('id');

    console.log(result);

    switch (action) {
        case 'del':
            total = result.slice(0, -1);
            display.textContent = total;
            console.log(total);
    }
}

numbers.forEach(num => num.addEventListener('click', displayNumber))
icons.forEach(icon => icon.addEventListener('click', operators));