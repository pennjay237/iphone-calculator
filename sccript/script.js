let currentInput = "0";
let operator = null;
let previousInput = null;

function updateScreen() {
    document.getElementById("screen").innerText = currentInput;
}

function inputDigit(digit) {
    if (currentInput === "0") {
        currentInput = String(digit);
    } else {
        currentInput += digit;
    }
    updateScreen();
}

function inputDecimal() {
    if (!currentInput.includes(".")) {
        currentInput += ".";
    }
    updateScreen();
}

function inputOperator(op) {
    if (previousInput === null) {
        previousInput = currentInput;
    } else {
        calculate();
    }
    operator = op;
    currentInput = "0";
}

function clearScreen() {
    currentInput = "0";
    previousInput = null;
    operator = null;
    updateScreen();
}

function negate() {
    currentInput = String(parseFloat(currentInput) * -1);
    updateScreen();
}

function percent() {
    currentInput = String(parseFloat(currentInput) / 100);
    updateScreen();
}

function calculate() {
    if (operator && previousInput !== null) {
        let result;
        switch (operator) {
            case "+":
                result = parseFloat(previousInput) + parseFloat(currentInput);
                break;
            case "-":
                result = parseFloat(previousInput) - parseFloat(currentInput);
                break;
            case "*":
                result = parseFloat(previousInput) * parseFloat(currentInput);
                break;
            case "/":
                result = parseFloat(previousInput) / parseFloat(currentInput);
                break;
        }
        currentInput = String(result);
        operator = null;
        previousInput = null;
        updateScreen();
    }
}

updateScreen();