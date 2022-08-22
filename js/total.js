document.getElementById('total-calculate').addEventListener('click', function () {

    const managerField = inputField('manager');
    const coachField = inputField('coach');
    const totalCalculate = managerField + coachField;



    const totalAmountIs = getExpenseElementById('player-expense')
    const finalAmount = totalAmountIs + totalCalculate;

    setElementById('final-total', finalAmount);






})