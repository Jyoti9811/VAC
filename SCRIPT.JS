let display = document.getElementById('display');

function appendNumber(number) {
    display.value += number;
}

function appendOperation(operation) {
    display.value += operation;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateSquareRoot() {
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch (error) {
        display.value = 'Error';
    }
}

function calculatePower() {
    try {
        display.value = Math.pow(eval(display.value), 2);
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateSine() {
    try {
        display.value = Math.sin(eval(display.value));
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateCosine() {
    try {
        display.value = Math.cos(eval(display.value));
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateTangent() {
    try {
        display.value = Math.tan(eval(display.value));
    } catch (error) {
        display.value = 'Error';
    }
}
