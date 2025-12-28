// Step 1: Get references to all HTML elements
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const addBtn = document.getElementById('addBtn');
const subtractBtn = document.getElementById('subtractBtn');
const multiplyBtn = document.getElementById('multiplyBtn');
const divideBtn = document.getElementById('divideBtn');
const clearBtn = document.getElementById('clearBtn');
const resultDisplay = document.getElementById('result');

// Step 2: Function to get and validate numbers
function getNumbers() {
    // Get values from input fields
    const num1 = num1Input.value;
    const num2 = num2Input.value;
    
    // Check if inputs are empty
    if (num1 === '' || num2 === '') {
        resultDisplay.textContent = 'Please enter both numbers!';
        resultDisplay.classList.add('error');
        return null;
    }
    
    // Convert strings to numbers
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    
    // Check if they are valid numbers
    if (isNaN(number1) || isNaN(number2)) {
        resultDisplay.textContent = 'Invalid numbers!';
        resultDisplay.classList.add('error');
        return null;
    }
    
    // Remove error class if it exists
    resultDisplay.classList.remove('error');
    
    // Return both numbers as an object
    return { number1, number2 };
}

// Step 3: Function to display result
function displayResult(result) {
    resultDisplay.textContent = result;
    resultDisplay.classList.remove('error');
}

// Step 4: Addition function
function add() {
    const numbers = getNumbers();
    if (numbers === null) return;
    
    const result = numbers.number1 + numbers.number2;
    displayResult(result);
}

// Step 5: Subtraction function
function subtract() {
    const numbers = getNumbers();
    if (numbers === null) return;
    
    const result = numbers.number1 - numbers.number2;
    displayResult(result);
}

// Step 6: Multiplication function
function multiply() {
    const numbers = getNumbers();
    if (numbers === null) return;
    
    const result = numbers.number1 * numbers.number2;
    displayResult(result);
}

// Step 7: Division function
function divide() {
    const numbers = getNumbers();
    if (numbers === null) return;
    
    // Check for division by zero
    if (numbers.number2 === 0) {
        resultDisplay.textContent = 'Cannot divide by zero!';
        resultDisplay.classList.add('error');
        return;
    }
    
    const result = numbers.number1 / numbers.number2;
    // Round to 4 decimal places
    displayResult(result.toFixed(4));
}

// Step 8: Clear function
function clearAll() {
    num1Input.value = '';
    num2Input.value = '';
    resultDisplay.textContent = '0';
    resultDisplay.classList.remove('error');
    num1Input.focus();
}

// Step 9: Add event listeners to all buttons
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
clearBtn.addEventListener('click', clearAll);

// Step 10: Allow Enter key to perform addition (default operation)
num1Input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        add();
    }
});

num2Input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        add();
    }
});
