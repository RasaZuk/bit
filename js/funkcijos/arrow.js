/* 
ARROW FUNCTION - rodykline funkcija, lambda funkcija
*/

const n1 = 7;
const n2 = 5;


//function declaration
function sum(a, b) {
    return a + b;
}
console.log(`${n1} + ${n2} = ${sum(n1, n2)}`);

/*
function diff(a, b) {
    return a - b;
}
console.log(`${n1} - ${n2} = ${diff(n1, n2)}`);
*/

//priskiriama funkcine logika
//kintamajam priskiriama anonimine funkcija
const diff1 = function (a, b) {
    return a - b;
}
console.log(`${n1} - ${n2} = ${diff1(n1, n2)}`);


//pries funkcija iskelima const
const multi = function (a, b) {
    return a * b;
}
console.log(`${n1} * ${n2} = ${multi(n1, n2)}`);


//arrow function
const multi2 = (a, b) => {
    return a * b;
}
console.log(`${n1} * ${n2} = ${multi2(n1, n2)}`);

const div = (a, b) => {
    return a / b;
}
console.log(`${n1} / ${n2} = ${div(n1, n2)}`);


//jeigu logikos bloke yra tik VIENA procedura tai galima nerasyt {return} - !skliaustai ir return!
const div1 = (a, b) => a / b;
console.log(`${n1} / ${n2} = ${div1(n1, n2)}`);


//arrow function
//jeigu parametru bloke yra tik VIENAS parametras
//tai galima nerasyti sklaistu () const square = n => n * n;
const square = (n) => n * n;
console.log(`${n1} * ${n1} = ${square(n1)}`);
console.log(`${n2} * ${n2} = ${square(n2)}`);

//pvz su stringu
function hi(name) {
    return `Hi, my name is ${name}!`;
}
console.log(hi('Jonas'));
console.log(hi('Maryte'));


const abbr = (a, b) => a[0] + '.' + b[0] + '.'
console.log(abbr('Chuck', 'Norris'));

const abbr2 = (a, b) => `${a[0]}.${b[0]}.`;

//galima iskviesti console.log pries ir po funkcijos
//function hoisting
function vienas() {
    return 'VIENAS';
}
console.log(vienas());


//funkcija ANTRAS kuri grazina stringa
//galima console.log tik po const (funcijos)
const antras = () => 'ANTRAS';
console.log(antras());