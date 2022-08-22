// budget calculation 
document.getElementById('calculate').addEventListener('click', function () {

    const perPlayerField = inputField('per-player-field');



    const playerAmount = perPlayerField * playerArray.length;
    setElementById('player-expense', playerAmount);

})