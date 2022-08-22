const playerArray = [];

function display(allPlayer) {

    const body = document.getElementById("name-update");
    body.innerHTML = "";

    for (let i = 0; i < 5; i++) {
        const name = playerArray[i].playerName;

        const li = document.createElement('ol')
        li.innerHTML = `
       <th>${i + 1}</th>. <td>${name}</td> `;
        body.appendChild(li)

    }
}


function addToPlayer(element) {

    element.addToPlayer = true;

    const playerName = element.parentNode.parentNode.children[0].innerText;


    const playerObj = {
        playerName: playerName
    }

    playerArray.push(playerObj)


    display(playerArray);

}