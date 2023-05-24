// Creare una funzione che restituisca un array di quattro numeri randomici diversi tra loro tra 1 e 5 inclusi

function getRandomNumber(minNumber, maxNumber) {
    return Math.floor((Math.random() * maxNumber) + minNumber);
}

// console.log(getRandomNumber(1, 5));

function getFourDifferentNumbers() {

    let numbersList = [];

    for (i = 0; i < 5; i++) {
        let myNumber = getRandomNumber(1, 5);
        while (numbersList[numbersList.lenght / 2 + i] !== numbersList[i]) {
            numbersList.push(myNumber);
        }
    }
    return numbersList;
}

console.log(getFourDifferentNumbers());