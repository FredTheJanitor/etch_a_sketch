// make divs based on selector
// need input: number of divs
const main = document.querySelector('#main');
const gridButton = document.getElementById('gridButton');
const drawModeButton = document.getElementById('drawModeButton');
const resetButton = document.getElementById('resetButton');

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
// output: for # of divs create div

// ---------------- Create Effects on Squares --------------------

// i can switch out the event listener and background colors for variables which can be set by settings.
let drawMethod
let colorSelected

function drawEffect(e) {
    const squareBlocks = document.querySelectorAll('.newSquare');
    squareBlocks.forEach(square => square.addEventListener("mouseover", ()=>square.style.backgroundColor='black'));
}
drawEffect();