let currentMoleTile;
let currentPlantTile;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {
    //set up the grid for the game board in the HTML
    for (let i = 0; i < 9; i++) {
        //creates a div tag with id 0-8
        let tile = document.createElement('div');
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setMole, 1000); //calls the mole every 1 second
    setInterval(setPlant, 2000); //calls the plant every 2 seconds
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {
    if (gameOver) {
        return;
    }

    if (currentMoleTile) {
        currentMoleTile.innerHTML = "";
    }
    
    let mole = document.createElement('img');
    mole.src = './images/monty-mole.png';

    let num = getRandomTile();
    if (currentPlantTile && currentPlantTile.id === num) {
        return;
    }
    currentMoleTile = document.getElementById(num);
    currentMoleTile.appendChild(mole);
}

function setPlant() {
    if (gameOver) {
        return;
    }

    if (currentPlantTile) {
        currentPlantTile.innerHTML = "";
    }

    let plant = document.createElement("img");
    plant.src = "./images/piranha-plant.png";

    let num = getRandomTile();
    if (currentMoleTile && currentMoleTile.id === num) {
        return;
    }
    currentPlantTile = document.getElementById(num);
    currentPlantTile.appendChild(plant);
}

//reload the page on a click
function handleClick() {
    window.location.reload();
}

//check if the tile clicked has the mole
function selectTile() {
    if (gameOver) {
        return;
    }

    if (this == currentMoleTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString();
    } else if (this == currentPlantTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true;
        let resetBtn = document.createElement("button");
        resetBtn.innerText = "TRY AGAIN";
        document.getElementById("score").appendChild(resetBtn);
        resetBtn.addEventListener("click", handleClick);
    }
}