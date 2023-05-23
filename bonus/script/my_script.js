// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

const myGrid = document.getElementById('my_grid');
console.log(`My grid element is ${myGrid}`);

/**
 * createCellElement create 100 elements cell for a grid
 * @returns 100 cell elements
 */

function createCellElement(tagName, className) {

    const myCell = document.createElement(tagName);
    myCell.className += className;
    return myCell;
}

const playButton = document.querySelector('.playbutton');

const difficultySelector = document.querySelector('select');

/**
 * Function that creates a grid with cells
 * @param numCells the number of cells in the grid
 */

function createGrid(numCells, classToAdd) {

    myGrid.classList.add('grid-border');
    for (i = 1; i <= numCells; i++) {
        const appendMyCell = createCellElement("div", "cell");
        appendMyCell.innerHTML = '<p>' + i + '</p>'
        appendMyCell.classList.add(classToAdd);

        appendMyCell.addEventListener('click', function () {
            appendMyCell.classList.toggle('selected');
        })
        myGrid.appendChild(appendMyCell);
    }
}

playButton.addEventListener('click', function () {
    // reset 
    myGrid.innerHTML = "";
    if (difficultySelector.value == '1') {
        // alert('hard');
        createGrid('100', 'hard')

    } else if (difficultySelector.value == '2') {
        // alert('medium');
        createGrid('81', 'medium')
    } else {
        // alert('easy');
        createGrid('49', 'easy')
    }
})

// myGrid.classList.add('grid-border');
//         for (i = 1; i <= 100; i++) {
//             const appendMyCell = createCellElement("div", "cell");
//             appendMyCell.innerHTML = '<p>' + i + '</p>'

//             appendMyCell.addEventListener('click', function () {
//                 appendMyCell.classList.toggle('selected');
//             })
//             myGrid.appendChild(appendMyCell);
//         }