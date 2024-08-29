(function() {


// Variables definition
let currentNum = '0';
let previousNum;
let operator = '';

let displayElem = document.querySelector('.display');
displayElem.textContent = currentNum;

// The operate function that will call the above functions
const operate = function(a, b, operator) {
    if (operator == 'add') {
        return Number(a) + Number(b);
    }
    else if (operator == 'subtract') {
        return Number(a) - Number(b);
    }
    else if (operator == 'multiply') {
        return Number(a) * Number(b);
    }
    else if (operator == 'divide') {
        return Number(a) / Number(b);
    }
}

// Display code
const populateDisplay = function(input) {
    //debugger
    if (input == 'clear-everything') {
        currentNum = '';
        previousNum = '';
        operator = '';
    }
    else if (input == 'clear-current') {
        currentNum = '';
    }
    else if (input == 'equals') {
        if (previousNum != '') {
            currentNum = operate(previousNum, currentNum, operator);
            previousNum = '';
            operator = ''
        }
    }
    else if (input == '%') {
        currentNum = Number(currentNum)/100;
        //alert("Not implemented, it's just for the look. Go look up what this button actually does on the windows calculator and tell me you can explain what the fuck that is.")
    }
    else if (input == 'backspace'){
        currentNum = currentNum.toString().slice(0, currentNum.toString().length - 1);
    }
    else if (input == 'square') {
        currentNum = Number(currentNum) * Number(currentNum);     
    }
    else if (input == 'square-root') {
        currentNum = Math.sqrt(Number(currentNum));
    }
    else if (input == 'reciprocal') {
        currentNum = 1 / currentNum;
        displayElem.textContent = currentNum;
    }
    else if (input == 'decimal')  {
        if (!currentNum.toString().includes('.')) {
            currentNum = currentNum + '.';
        }
    }
    else if (input == 'sign') {
        currentNum = currentNum - 2*(currentNum)
    }
    else if (isNaN(Number(input)) && operator != "") {
            alert("An operator has already been chosen! Press equals to finish your operation.")
    }
    else if (isNaN(Number(input)) && operator == "") {
        operator = input;
        previousNum = currentNum;
        currentNum = '';
    }
    else if (input == '0' && currentNum == '0'){
        console.log("Doing nothing for leading zeros. Easy solution. :)")
    }
    else {
        currentNum = currentNum + input;
    }
    displayElem.textContent = Number(currentNum);
}



let buttons = document.querySelector('.buttons')
buttons.addEventListener('click', function(e) {
    populateDisplay(e.target.id)
})


})()




