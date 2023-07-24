let currentResult = '';

function appendNumber(number) {
    currentResult += number;
    updateResult();
}

function appendOperator(operator) {
    currentResult += operator;
    updateResult();
}

function clearResult() {
    currentResult = '';
    updateResult();
}

function calculate() {
    try {
        const result = eval(currentResult);
        currentResult = result.toString();
        updateResult();
    } catch (error) {
        currentResult = '';
        updateResult();
        alert('Invalid calculation');
    }
}

function updateResult() {
    document.getElementById('result').value = currentResult;
}
