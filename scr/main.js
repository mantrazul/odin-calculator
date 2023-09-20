const buttons = document.querySelectorAll('.number');
const endgame = document.querySelector('.equal')

buttons.forEach(button => {
    button.addEventListener('click', addDisplay, false);
  });



function addDisplay() {
    let calcString = ""
    screen = document.querySelector(".screen-helper");
    screen.textContent += this.value;
    screen.textContent = calcString
}


endgame.addEventListener('click', process, false)

//variables

function process() {
    screen = document.querySelector(".equal")
    screenString = screen.textContent

    procs = screenString.split(/[.\-=/_]/)
    let num1 = procs[0]
    let num2 = procs[2]
    let operator = procs[1]

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
    let result = a + b
    return console.log(result)
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