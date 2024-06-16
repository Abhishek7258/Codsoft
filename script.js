const calculator = {
    displayValue: '',
};

function updateDisplay() {
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
}

function evaluateExpression() {
    try {
        calculator.displayValue = eval(calculator.displayValue.replace(/×/g, '*').replace(/÷/g, '/')).toString();
    } catch {
        calculator.displayValue = 'Error';
    }
}

updateDisplay();

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', event => {
    const { target } = event;
    const { value } = target;

    if (!target.matches('button')) {
        return;
    }

    if (value === 'all-clear') {
        calculator.displayValue = '';
    } else if (value === '=') {
        evaluateExpression();
    } else {
        calculator.displayValue += value;
    }

    updateDisplay();
});
