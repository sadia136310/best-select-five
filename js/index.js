const playerArray = [];

function display(allPlayer) {
    // console.log(allPlayer);
    const body = document.getElementById("name-update");
    body.innerHTML = "";

    for (let i = 1; i <= 5; i++) {
        // console.log(playerArray[i].playerName);
        const name = playerArray[i].playerName;

        const tr = document.createElement('tr')
        tr.innerHTML = `
       <tr>${i}</tr>
       
       <td>${name}</td>

        `;
        body.appendChild(tr)

    }
}
function addToPlayer(element) {
    // console.log(element.parentNode.parentNode.children[0])
    const playerName = element.parentNode.parentNode.children[0].innerText;
    // console.log(playerName);

    const playerObj = {
        playerName: playerName
    }

    playerArray.push(playerObj)
    console.log(playerArray);
    console.log(playerArray.length);

    display(playerArray);
}

// budget calculation 
function inputField() {

}

document.getElementById('calculate').addEventListener('click', function () {

    const perPlayerField = inputField('per-player-field');

    const playerAmount = perPlayerField * 5;

    const playerTotal = setElementById('player-expense', playerAmount);


})