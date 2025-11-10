// ------------ variables --------------------------

const main = document.querySelector('#main');
const gridButton = document.getElementById('gridButton');
const drawModeButton = document.getElementById('drawModeButton');
const resetButton = document.getElementById('resetButton');

// ------------ create original Grid using FlexBox ----------

let gridSize = 16;
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
createGrid(gridSize);
drawEffect();
// output: for # of divs create div

// ---------------- Create Button Actions ---------------------

gridButton.addEventListener("click", makeNewGrid)
function makeNewGrid() {
    main.innerHTML='';
    const gridSize = prompt('enter grid size');
    createGrid(gridSize);
    drawEffect();
}


// ---------------- Create Effects on Squares --------------------

// i can switch out the event listener and background colors for variables which can be set by settings.
let drawMethod
let colorSelected

function drawEffect(e) {
    const squareBlocks = document.querySelectorAll('.newSquare');
    squareBlocks.forEach(square => square.addEventListener("mouseover", ()=>square.style.backgroundColor='black'));
}
