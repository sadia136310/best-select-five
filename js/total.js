document.getElementById('total-calculate').addEventListener('click', function () {

    const managerField = inputField('manager');
    const CoachField = inputField('coach');
    const totalCalculate = managerField + CoachField;



    const playerExpenseIs = getExpenseElementById('player-expense')
    const final = playerExpenseIs + totalCalculate;

    const otherAmount = setElementById('final-total', final);






})