screenHelper = document.querySelector('.screen-helper');
screenResult= document.querySelector('.result');
numberButtons = document.querySelectorAll('.number');
resetButton = document.querySelector('.reset');
operatorButton = document.querySelectorAll('.operator');
equalButton = document.querySelector('.equal2');
pointButton = document.querySelector('.point');
deleteButton = document.querySelector('.del');


resetButton.addEventListener('click', clearScreen);

equalButton.addEventListener('click', equal);

pointButton.addEventListener('click', pointCheck);

deleteButton.addEventListener('click', deleteLast);

operatorButton.forEach(button => {
    button.addEventListener('click', operation);
    button.addEventListener('click', colorOperator);
});

numberButtons.forEach(button => {
    button.addEventListener('click', updateScreenHelper);
});

window.addEventListener('load', () => {
    console.log('loaded');
    clearScreen();
});

let operator = "";
let result

document.addEventListener('keydown', (event) => {
    let key = event.key;
    if (isFinite(key)) {
        keyPress(key);
        console.log(operator, "key")
    }
    else if (key === '+' || key === '-' || key === 'x' || key === '/') {
        operator = key;
        console.log(operator)
        operation();
        keyBoardColorOperator();
    }

    else {
        switch(key) {
            case 'Enter':
                equal();
                break;
            case '.':
                pointCheck();
                break;
            case 'Backspace':
                deleteLast();
                break;

            case 'c':
                clearScreen();
                break;
        }
    }
});

function keyPress(key) {

    if (screenResult.textContent === '0') {
        clearBottom();
    }
    screenResult.textContent += key;
}

function clearScreen() {
    screenHelper.innerHTML = '';
    screenResult.innerHTML = '';
}

function updateScreenHelper() {
    if (this.value === '0' && screenResult.innerText === '') {
        clearBottom();
    }
    else if (screenResult.innerText === '0') {
        clearBottom();

    }
    screenResult.innerText += this.value;


}

function clearBottom() {
    screenResult.innerHTML = '';
}

function operation() {

    if (operator === "") {
        operator = this.value;
    }

    screenHelper.innerText = screenResult.innerText;
    clearBottom();
}

function equal() {
    let a = Number(screenHelper.textContent);
    let b = Number(screenResult.textContent);
    console.log(a, b, operator)

    if (a ===  0 || b === 0) {
        clearBottom()
        return
    }

    else {
        switch (operator) {
            case '+':
                result = a + b;
                break;
            case '-':
                result = a - b;
                break;
            case 'x':
                result = a * b;
                break;
            case '/':
                if (a % b !== 0) {
                    result = (a / b).toFixed(2);
                }
                else {
                    result = a / b;
                }
                break;
        }

        screenResult.innerText = result;
        screenHelper.innerText = '';
        operator = "";
        removeColorOperator();
    }
}

function pointCheck() {
    if (screenResult.innerText.includes('.')) {
        return;
    }
    else {
        screenResult.innerText += '.';
    }
}

function deleteLast() {
    screenResult.innerText = screenResult.innerText.slice(0, -1);
}

function colorOperator() {

    this.classList.add('active');

    if (this.classList.contains('active')) {
        operatorButton.forEach(button => {
            if (button !== this) {
                button.classList.remove('active');
            }

        });
    }
}

function keyBoardColorOperator() {
    removeColorOperator();
    switch(operator) {
        case '+':
            operatorButton[0].classList.add('active');
            console.log(operatorButton[0]);
            break;
        case '-':
            operatorButton[1].classList.add('active');
            break;
        case '/':
            operatorButton[2].classList.add('active');
            break;
        case 'x':
            operatorButton[3].classList.add('active');
            break;
    }
}

function removeColorOperator() {
    operatorButton.forEach(button => {
        button.classList.remove('active');
    });
}