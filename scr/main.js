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
});

numberButtons.forEach(button => {
    button.addEventListener('click', updateScreenHelper);
});

window.addEventListener('load', () => {
    console.log('loaded');
    clearScreen();
});

let operator

document.addEventListener('keydown', (event) => {
    let key = event.key;
    if (isFinite(key)) {
        keyPress(key);
    }
    else if (key === '+' || key === '-' || key === 'x' || key === '/') {
        operator = key;
        operation();
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
    else {
        screenResult.innerText += this.value;
    }

}

function clearBottom() {
    screenResult.innerHTML = '';
}

function operation() {
    screenHelper.innerText = screenResult.innerText;
    clearBottom();
    
    if (operator !== undefined) {
        return
    }
    else {
        operator = this.value;
    }
}

function equal() {
    let a = Number(screenHelper.textContent);
    let b = Number(screenResult.textContent);

    if (a ===  0 || b === 0) {
        clearBottom()
        return
    }

    else {
        let result = 0;
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
                result = a / b;
                break;
        }

        screenResult.innerText = result;
        screenHelper.innerText = '';
        operator = undefined;
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