// make divs based on selector
// need input: number of divs
const main = document.querySelector('#main');
let gridSize = prompt('Enter a number 1-100');
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

function zenMode() {
    const squareBlocks = document.querySelectorAll('.newSquare');
    squareBlocks.forEach(square => square.addEventListener("mouseover", drawEffect));
}

// issue with drawEffect is it will change the backgroundColor of ALL squares
// I want it to see just the square where mouseover happened, and change THAT ones style
function drawEffect(e) {
    const squareBlocks = document.querySelectorAll('.newSquare');
    squareBlocks.forEach(square => square.addEventListener("mouseover", ()=>square.style.backgroundColor='black'));
}
zenMode();