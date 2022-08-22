function inputField(input) {

    const inputElement = document.getElementById(input);
    const inputFeildString = inputElement.value;
    const inputField = parseFloat(inputFeildString);
    // inputElement.value = '';
    return inputField;

}

function getExpenseElementById(elementId) {
    const expenseElementValue = document.getElementById(elementId);
    const expenseElementString = expenseElementValue.innerText;
    const expenseElement = parseFloat(expenseElementString);
    // expenseElementValue.innerText = '';
    return expenseElement;
}

function setElementById(element, newvalue) {
    const playerAmount = document.getElementById(element);
    playerAmount.innerText = newvalue;

}


