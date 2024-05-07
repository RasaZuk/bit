/*
Function - funkcija, perpanaudojama logika
() - parametru blokas
{} - logikos blokas
Input => Function() => Output
*/

/*
function funkcijosPavadinimas() {
    return
}
*/
/*
function funkcijosPavadinimas() {

}
const a = funkcijosPavadinimas();
console.log(a);

function empty(){
}

function giveMeFive() {
    return 5;

}
console.log(giveMeFive());

function intro(name, lastname) {
    return'Laba diena, as esu ' + name +' ' + lastname + '!';
}

console.log(intro('Jonas', 'Jonaitis'));
console.log(intro('Petras', 'Petraitis'));
console.log(intro('Rasa', 'Zukauskaite'));

function multiply(firstNumber, secondNumber){
    return firstNumber * secondNumber;
}

console.log(multiply(-2, 8));
console.log(multiply(3.14, 2));
*/


/*
//Mano vardas yra Jonas, man 99 metai ir as megstu cepelinus.
//Mano vardas yra Maryte, man 88 metai ir as megstu balionus.
function iLike(name, age, item ) {
    return 'Mano vardas yra ' + name + ', man ' + age + ' metai ir as megstu ' + item + '.';

}

console.log(iLike('Jonas', '99', 'cepelinai'));
console.log(iLike('Maryte', '88', 'balionus'));
*/


/*
function price(value) {
    const PVM = 21;
    const PriceIncrease = 1 + PVM / 100;
        const priceForSale = value * PriceIncrease;

    return priceForSale;
}

console.log(price(100));
console.log(price(150));
*/

//Dictionary: ZODIS, ZODIS, ZODIS.

function words(w1, w2, w3) {
    let sentence = 'Dictionary: ';
    sentence += w1;
    sentence += ', ';
    sentence += w2;
    sentence += ', ';
    sentence += w3;
    sentence += '.';
   
    return sentence; 
}
console.log(words('labas', 'rytas', 'Lietuva'));


