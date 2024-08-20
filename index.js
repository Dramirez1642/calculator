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
let num1 = 0;
let num2;
let operator;


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

let display;

