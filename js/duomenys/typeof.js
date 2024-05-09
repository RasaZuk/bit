/*
Duomens tipo nustatymo operatorius

TYPEOF
*/
function empty() {

}

console.log(typeof 5);
console.log(typeof 'NaN');
console.log(typeof Infinity);
console.log(typeof '');
console.log(typeof 'labas');
console.log(typeof ' ');
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof []);
console.log(typeof [1, 2, 3]);
console.log(typeof {});
console.log(typeof empty);

//kai reikia patikrinti ar TAI yra MASYVAS 

console.log(Array.isArray([]));

console.log('---------')

if (25 === null) {
    console.log('taip');
} else {
    console.log('ne');
}


// tik vienu atveju teisinga
if (null === null) {
    console.log('taip');
} else {
    console.log('ne');
}
console.clear();

const a = 12658;
const aType = typeof a;

console.log(a);

if (typeof a === 'string') {
    console.log('As dirbu su STRING');
} else {
    console.log('As dirbu ne su STRING');
}
