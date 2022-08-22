const playerArray = [];

function display(allPlayer) {
    // console.log(allPlayer);
    if (allPlayer.length > 5) {
        allPlayer.pop();
    }

    const body = document.getElementById("name-update");
    body.textContent = "";

    for (let i = 0; i < 5; i++) {
        const name = playerArray[i].playerName;

        const li = document.createElement('ol')
        li.innerHTML = `
       <th>${i + 1}</th>. <td>${name}</td> `;
        body.appendChild(li)

    }
}


function addToPlayer(element) {
    element.style.backgroundColor = 'gray';
    element.addToPlayer = true;

    const playerName = element.parentNode.parentNode.children[0].innerText;
    const playerObj = {
        playerName: playerName
    }
    playerArray.push(playerObj);

    if (playerArray.length > 5) {
        alert('You didnot add more than five');
    }


    display(playerArray);



}