const playerArray = [];

function display(allPlayer) {
    // console.log(allPlayer);
    const body = document.getElementById("name-update");
    body.innerHTML = "";

    for (let i = 0; i < 5; i++) {
        // console.log(playerArray[i].playerName);
        const name = playerArray[i].playerName;

        const tr = document.createElement('tr')
        tr.innerHTML = `
       <tr>${i + 1}</tr>
       
       <td>${name}</td>

        `;
        body.appendChild(tr)

    }
}


function addToPlayer(element) {

    element.addToPlayer = true;
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


