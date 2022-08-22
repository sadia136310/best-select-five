// budget calculation 
document.getElementById('calculate').addEventListener('click', function () {

    const perPlayerField = inputField('per-player-field');

    const playerAmount = perPlayerField * 5;

    setElementById('player-expense', playerAmount);


})