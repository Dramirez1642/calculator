// Basic Math Operations

const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a*b;
}

const divide = function(a, b) {
    return a/b;
}


// Variables definition
let currentNum = '';
let previousNum;
let operator;

let displayElem = document.querySelector('.display');
displayElem.textContent = currentNum;

// The operate function that will call the above functions
const operate = function(a, b, operator) {
    if (operator == 'add') {
        return add(a, b);
    }
    else if (operator == 'subtract') {
        return subtract(a, b);
    }
    else if (operator == 'multiply') {
        return multiply(a, b);
    }
    else if (operator == 'divide') {
        return divide(a, b);
    }
}

// Display code
const populateDisplay = function(input) {
    console.log(input)
    if (input != '0') {
        currentNum = currentNum + input;
        displayElem.textContent = currentNum;
    }
    else if (input == '0') {
        if (currentNum != '') {
            currentNum = currentNum + input;
            displayElem.textContent = currentNum;
        }
    }
}


let buttons = document.querySelector('.buttons')
buttons.addEventListener('click', function(e) {
    populateDisplay(e.target.id)
})



