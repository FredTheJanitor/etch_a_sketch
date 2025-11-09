// make divs based on selector
// need input: number of divs

let gridSize = prompt('Enter a number 1-100');
function createGrid(gridSize) {
    for (let i = 0; i<(gridSize*gridSize); i++) {
        const gridSquare = document.createElement('div')
        gridSquare.id = 'gridSquare'
        // let squareSize = `(70/${gridSize})-.5`+"vw";
        // gridSquare.style.flex = `0 0 ((1/${gridSize})*100)%`
        document.querySelector('#main').appendChild(gridSquare);
    }
}
createGrid(gridSize);
// output: for # of divs create div