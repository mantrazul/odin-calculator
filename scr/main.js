screenHelper = document.querySelector('.screen-helper');
screenResult= document.querySelector('.result');

window.addEventListener('load', (e) => {
    console.log('loaded');
    clearScreen();
});

function clearScreen() {
    screenHelper.innerHTML = '';
    screenResult.innerHTML = '';
}