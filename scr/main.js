const buttons = document.querySelectorAll('.number');
const endgame = document.querySelector('.equal')

buttons.forEach(button => {
    button.addEventListener('click', addDisplay, false);
  });



function addDisplay() {
    let calcString = ""
    screen = document.querySelector(".screen-helper");
    screen.textContent += this.value;
}


endgame.addEventListener('click', process)

//variables


function process() {
    screen = document.querySelector(".screen-helper")
    screenString = screen.textContent

    procs = screenString.split('+')
    let num1 = procs[0]
    let num2 = procs[1]
    let operator = "+"

    Operator(num1, operator, num2)
}

function Operator(num1, operator, num2) {

    switch(operator) {
        case "+":
            add(num1, num2);
            break;
    }
}



function add(a, b) {
    let result = parseInt(a) + parseInt(b)
    screen = document.querySelector(".screen-helper")
    screen.textContent = result
}

// function minus(a, b) {
//     let result = a - b
//     return console.log(result)
// }

// function divide(a, b) {
//     let result = a / b
//     return console.log(result)
// }

// function multi(a, b) {
//     let result = a * b
//     return console.log(result)
// }