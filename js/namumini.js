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
 */

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

console.log(skaitmenuKiekis(5), '>>>>', '1');
console.log(skaitmenuKiekis(781), '>>>>', '3');
console.log(skaitmenuKiekis(37060123456), '>>>>', '11');
console.log(skaitmenuKiekis(true));
console.log(skaitmenuKiekis('asd'));
//console.log(skaitmenuKiekis(NaN));
//console.log(skaitmenuKiekis(Infinity));
//console.log(skaitmenuKiekis(-Infinity));


/*
    if (typeof j !== 'number') {
        return ('Netinkamo tipo reiksme');

    } else if (typeof j === 0); {
        console.log(j.length);
    }
    return j.length;
}
*/