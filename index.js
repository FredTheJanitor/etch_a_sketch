// ------------ variables --------------------------

const main = document.querySelector('#main');
const gridButton = document.getElementById('gridButton');
const drawModeButton = document.getElementById('drawModeButton');
const resetButton = document.getElementById('resetButton');



// ------------ create original Grid using FlexBox ----------
let drawMethod = "mouseover"
let colorSelected = "black"
let gridSize = 16;

createGrid(gridSize);
drawEffect();

function createGrid(dimensions) {
    for (i=0;i<dimensions*dimensions;i++) {
        const newSquare = document.createElement('div');
        newSquare.classList.add('newSquare');
        // newSquare.textContent = `number: ${i}`
        const newSquareSize = (30/dimensions);
        console.log(newSquareSize);
        newSquare.style.width = `${newSquareSize}vw`
        newSquare.style.height = `${newSquareSize}vw`
        main.appendChild(newSquare);  
    }
}
function drawEffect(e) {
    const squareBlocks = document.querySelectorAll('.newSquare');
    squareBlocks.forEach(square => square.addEventListener(drawMethod, ()=>square.style.backgroundColor=colorSelected));
}

// ---------------- Create Button Actions ---------------------

gridButton.addEventListener("click", makeNewGrid);
function makeNewGrid() {
    main.innerHTML='';
    const gridSize = prompt('enter grid size');
    createGrid(gridSize);
    drawEffect();
}

resetButton.addEventListener("click", removeColor);
function removeColor() {
    document.querySelectorAll('.newSquare').forEach(square=>square.style.backgroundColor="")
}

drawModeButton.addEventListener("click", selectDrawMode);
function selectDrawMode() {
    drawMethod = prompt('select draw method');
}


// ---------------- Create Effects on Squares --------------------

// i can switch out the event listener and background colors for variables which can be set by settings.


