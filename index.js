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

// draw-mode bug:
// when you select draw-mode the event listener is still present on squares with previous
// listener mode, so right now it needs to be reset to add the new listener
//  -- Goal: be able to switch drawing methods without resetting grid
//  -- goal idea:  remove listeners from existing squares, and replace with new
// also GridSize is auto resetting to 16, which might not really be an issue if the previous
// is fixed but keep that in mind

drawModeButton.addEventListener("click", selectDrawMode);
function selectDrawMode() {
    main.innerHTML='';
    drawMethod = prompt('select draw method');
    createGrid(gridSize);
    drawEffect();
}


// ---------------- Create Effects on Squares --------------------

// i can switch out the event listener and background colors for variables which can be set by settings.


