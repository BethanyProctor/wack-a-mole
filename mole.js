let currentMoleTile;

window.onload = function() {
    setGame();
}

function setGame() {
    //set up the grid for the game board in the HTML
    for (let i = 0; i < 9; i++) {
        //creates a div tag with id 0-8
        let tile = document.createElement('div');
        tile.id = i.toString();
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setMole, 2000); //every 2 seconds
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {
    if (currentMoleTile) {
        currentMoleTile.innerHTML = "";
    }
    
    let mole = document.createElement('img');
    mole.src = './monty-mole.png';

    let num = getRandomTile();
    currentMoleTile = document.getElementById(num);
    currentMoleTile.appendChild(mole);
}