const numbers = document.querySelectorAll('.number');
const percent = document.querySelector('#percent');
const reset = document.querySelector('#reset');
const backspace = document.querySelector('#delete');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('#equal');

let final = '';
let answer = '';
let temp = '';

numbers.forEach(number => number.addEventListener('click', e => {
    const display = document.querySelector('#display');
    final += e.target.textContent;
    display.textContent = final;
}))

percent.addEventListener('click', e => {
    const display = document.querySelector('#display');
    final += '%';
    display.textContent = final;
})

reset.addEventListener('click', e => {
    const display = document.querySelector('#display');
    const t = document.querySelector('#answer');

    final = '';
    answer = '';
    temp = '';

    display.textContent = final;
    t.textContent = temp;
})

backspace.addEventListener('click', e => {
    const display = document.querySelector('#display');
    final = display.textContent.slice(0, -1);
    display.textContent = final;
})

operators.forEach(operator => operator.addEventListener('click', e => {
    const display = document.querySelector('#display');
    const t = e.target.getAttribute('id');

    switch (t) {
        case ('divide'):
            final += '/';
            display.textContent = final;
            break;

        case ('multiply'):
            final += 'x';
            display.textContent = final;
            break;

        case ('subtract'):
            final += '-';
            display.textContent = final;
            break;

        case ('sum'):
            final += '+';
            display.textContent = final;
            break;
    }
}))

equal.addEventListener('click', e => {
    const display = document.querySelector('#display');
    const t = document.querySelector('#answer');

    if (display.textContent.length !== 0) {

        answer = display.textContent.replaceAll('+', '|+|')
            .replaceAll('-', '|-|')
            .replaceAll('x', '|x|')
            .replaceAll('/', '|/|')
            .split('|')

        answer = answer.map((e, i) => {
            if (i % 2 === 0) {
                if (e.endsWith('%')) {
                    e = +e.slice(0, 2) / 100.0;
                    return e;
                }
                else if (e === '') {
                    return;
                }
                else if (typeof +e === 'number') {
                    return +e;
                }
            }
            else {
                return e;
            }
        })

        let op = answer.filter(e => typeof e === 'string')

        if (op.includes('+') || op.includes('-') || op.includes('x') || op.includes('/')) {
            op.forEach(e => {

                switch (e) {
                    case '+':
                        temp = answer[0] + answer[2];
                        answer.splice(0, 3, temp);
                        break;

                    case '-':
                        temp = answer[0] - answer[2];
                        answer.splice(0, 3, temp);
                        break;

                    case 'x':
                        temp = answer[0] * answer[2];
                        answer.splice(0, 3, temp);
                        break;

                    case '/':
                        if (answer[2] !== 0.0) {
                            temp = answer[0] / answer[2];
                            answer.splice(0, 3, temp);
                        }
                        break;
                }
            })
        }
        else {
            temp = answer[0];
        }

        if (!isNaN(temp)) {
            if (Number.isInteger(temp)) {
                t.textContent = temp
            }
            else {
                t.textContent = temp.toFixed(4);
            }
        }
        else { return; }

    }
    else { return; }
})