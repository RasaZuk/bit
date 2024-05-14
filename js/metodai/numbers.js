/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
*/

// pagal panaudojima yra skaitmenys!, baigtine reiksme
//visiems ne skaiciaus grazina false

console.log('Number.isFinite()');
console.log(Number.isFinite(56395));
console.log(Number.isFinite(-395));
console.log(Number.isFinite(563.95));
console.log(Number.isFinite(-6.395));
console.log(Number.isFinite(0));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(-Infinity));
console.log(Number.isFinite(NaN));

console.log('------------------');
console.log('isFinite()');
console.log(isFinite(56395));
console.log(isFinite(-395));
console.log(isFinite(563.95));
console.log(isFinite(-6.395));
console.log(isFinite(0));
console.log(isFinite(Infinity));
console.log(isFinite(-Infinity));
console.log(isFinite(NaN));

console.log('------------------');
console.log('isNaN()');
console.log(isNaN(-395));
console.log(isNaN(563.95));
console.log(isNaN(-6.395));
console.log(isNaN(0));
console.log(isNaN(Infinity));
console.log(isNaN(-Infinity));
console.log(isNaN(NaN));

//sveikasis skaicius, dazniausiai is teksto - sveikasis skaicius
//suformavo skaiciaus reiksme (skaiciuoti, palyginti t.t.)
//iki kablelio, ir tada numeta
console.log('------------------');
console.log('(parseInt)');

const a = '87';
const b = parseInt('87');
console.log(typeof a);
console.log(typeof b);

console.log(parseInt('95'));
console.log(parseInt('-395'));
console.log(parseInt('0'));
console.log(parseInt('3.95'));
console.log(parseInt('-6.395'));
console.log('--------');
console.log(parseInt('Nan'));
console.log(parseInt('Infinity'));
console.log(parseInt('Grybu karas'));
console.log(parseInt(''));
console.log('--------');
console.log(parseInt('123abc'));
console.log(parseInt('abc123'));
console.log(parseInt('123abc123abc'));
console.log(parseInt('abc123abc123'));
console.log(parseInt('125e5'));
console.log(parseInt('1.25e5'));


//desimtainiai, palieka po kablelio
console.log('------------------');
console.log('parseFloat()');

console.log(parseFloat('87'));
console.log(parseFloat('-99'));
console.log(parseFloat('0'));
console.log(parseFloat('3.14'));
console.log(parseFloat('-3.14'));
console.log(parseFloat('Nan'));
console.log(parseFloat('Infinity'));
console.log(parseFloat('-Infinity'));
console.log(parseFloat('123abc'));
console.log(parseFloat('abc123'));
console.log(parseFloat('123abc123abc'));
console.log(parseFloat('abc123abc123'));
console.log(parseFloat('125e5'));
console.log(parseFloat('1.25e5'));

//sutvarko skaiciu
//jei narsykleje nuo 0 iki 20
//jei node.js/serveris tada nuo 0 iki 100
//returnina stringas
console.log('------------------');
console.log('Number.toFixed()');

const d = 5.25;
console.log(d);
console.log(d.toFixed(9));


//is stringo i number
console.log(parseFloat(d.toFixed(9)));