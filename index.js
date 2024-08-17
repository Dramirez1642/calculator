// Basic Math Operations

const addition = function(a, b) {
    return a + b;
};

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
let num1 = 123;
let num2;
let operator;

// Initial population of the display and creation of variable for further changes
const currentNum = document.querySelector('.display')




// Function to grab number and set numbers based on input
const setNum = function(input) {
    if (input == 'equals') {
        if (operator === undefined) {
            alert('There is no operator selected!');
        }
        else {
            if (operator == 'addition'){ 

            }
        }
    }
}



const button = document.querySelectorAll('button');

button.addEventListener('click', e=> {});

