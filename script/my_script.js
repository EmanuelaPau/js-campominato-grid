// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

const myGrid = document.getElementById('my_grid');
console.log(`My grid element is ${myGrid}`);

/**
 * createCellElement create 100 elements cell for a grid
 * @returns 100 cell elements
 */

// Questo non funzionera' per il bonus
function createCellElement(tagName, className) {

    const myCell = document.createElement(tagName);
    myCell.className += className;
    return myCell;
}

const playButton = document.querySelector('.playbutton');
console.log(`My button element is ${playButton}`);

playButton.addEventListener('click', function () {
    // reset 
    myGrid.innerHTML = "";
    for (i = 1; i <= 100; i++) {
        const appendMyCell = createCellElement("div", "cell");
        appendMyCell.innerHTML = '<p>' + i + '</p>'



        myGrid.appendChild(appendMyCell);
    }

})
