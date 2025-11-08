// make divs based on selector
// need input: number of divs

let gridSize = prompt('Enter a number 1-100');
function createGrid(gridSize) {
    for (let i = 0; i<gridSize; i++) {
        const gridSquare = document.createElement('div')
        gridSquare.id = 'gridSquare'
        gridSquare.textContent = 'test'
        gridSquare.style.backgroundColor = 'white'
        gridSquare.style.flexBasis = `2/${gridSize}`
        gridSquare.style.flexShrink = 'none'
        document.querySelector('#main').appendChild(gridSquare);
    }
}
createGrid(gridSize);
// output: for # of divs create div