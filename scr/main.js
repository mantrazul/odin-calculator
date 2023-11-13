screenHelper = document.querySelector('.screen-helper');
screenResult= document.querySelector('.result');
numberButtons = document.querySelectorAll('.number');
resetButton = document.querySelector('.reset');

window.addEventListener('load', () => {
    console.log('loaded');
    clearScreen();
});

function clearScreen() {
    screenHelper.innerHTML = '';
    screenResult.innerHTML = '';
}

function updateScreenHelper() {
    screenResult.textContent += this.value;
}

numberButtons.forEach(button => {
    button.addEventListener('click', updateScreenHelper);
});

resetButton.addEventListener('click', clearScreen);