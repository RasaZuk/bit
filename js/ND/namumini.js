//Funkcijos

//1 

/*
function tusciaFunkcija() {
    return false;
}

console.log(tusciaFunkcija());

//2. Daugyba

function multiply(firstNumber, secondNumber) {
    const answer = firstNumber * secondNumber;
    return answer;
}
console.log(multiply(1, 2));
console.log(multiply(5, 2));
console.log(multiply(1, 5));
 

//3. funkcija 'skaitmenuKiekisSkaiciuje'

function skaitmenuKiekis(number) {
    if (typeof number !== 'number') {
        return 'Netinkamo tipo reiksme';
    }
    //const numberAsString = number.toString(); arba
    const numberAsString = '' + number;
    let count = numberAsString.length;

    return count;
}
// arba return ('' + number).length;

// kitas variantas
function numberSize(n) {
    const nAsText = '' + n;
    return nAsText.length;
}


console.log(skaitmenuKiekis(5), '>>>>', '1');
console.log(skaitmenuKiekis(781), '>>>>', '3');
console.log(skaitmenuKiekis(37060123456), '>>>>', '11');
console.log(skaitmenuKiekis(true));
console.log(skaitmenuKiekis('asd'));
//console.log(skaitmenuKiekis(NaN));
//console.log(skaitmenuKiekis(Infinity));
//console.log(skaitmenuKiekis(-Infinity));



if (typeof j !== 'number') {
    return ('Netinkamo tipo reiksme');

} else if (typeof j === 0); {
    console.log(j.length);
}
return j.length;
*/

//4 Funkcija. Didziausias skaicius sarase

/*
//a priima viena kintamaji
function vienas(a) {
    return vienas;
}

//b. jei perduotas kint. nera is saraso tai ismeta 'Pateikta...

let a = 'dfhshs';
function vienas(a) {
    if (typeof a === 'string') {
        return 'Pateikta netinkamo tipo reiksme';
    }
}


//c. jei sarasas tuscias, tai ismeta pranesima 'pateiktas...
function tuscias(a) {
    if (typeof a !== 'number') {
        return ('Pateiktas sarasas negali buti tuscias');
    }
}
console.log(tuscias());


//d. priesingu atveju funkcija tesia darba
//if (typeof arrow === []) {
//return 'Pateiktas sarasas negali buti tuscia



//e, pereina visa sarasa ir atskiram kintamajam isimena max skaiciu

function didziausiasSkaiciusSarase(arr) {
    let biggest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > biggest) {
            biggest = arr[i];
            if (typeof arr === 'string') {
                console.log('Pateikta netinkamo tipo reiksme');
            } else {
                console.log('Pateiktas sarasas negali buti tuscias');
            }
        } return biggest;
    }
}


console.log(didziausiasSkaiciusSarase([1]));
console.log(didziausiasSkaiciusSarase([1, 2, 3]));
console.log(didziausiasSkaiciusSarase([-5, 78, 14, 0, 18]));
console.log(didziausiasSkaiciusSarase([69, 69, 69, 69, 66]));
console.log(didziausiasSkaiciusSarase([-1, -2, -3, -4, -5, -6, -7, -8]));
//console.log(didziausiasSkaiciusSarase('pomidoras'));
//console.log(didziausiasSkaiciusSarase([]));

console.clear();
*/

//5. Funkcija isrinktiRaides
//a, priima du kintamuosius
function isrinktiRaides(tekstas, [y]) {
    if (typeof x !== 'number') {
        return 'Pirmasis kintamasis yra netinkamo tipo';
    }
    if (x >= 100) {
        return 'Pirmojo kintamojo reiksme yra netinkamo dydzio';
    }
    if (typeof y !== 'number') {
        return 'Antrasis kintamasis yra netinkamo tipo';
    }
    if (y > 0) {
        console.log(y);
    } else {
        return 'Antrasis kintamasis turi buti didesnis uz nuli';
    }
}



//i. isrinkti raides kas antra
console.log((abcdefg).replace[2]);
