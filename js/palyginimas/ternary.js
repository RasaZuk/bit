/*
UNARY - vienybe kai dirbama su vienu elementu
a++, b--
BINARY = dvejybe, kai, dirbama su dviem elementais
(a+b)
TERNARY - trejybe, kai logikoje dalyvauja trys nariai
(a?b:c)
*/

let a = 0;

const d = 1 + (2 > 3 ? 4 : 5);
console.log(d);

const e = 1 > 2 ? 3 : 4 + 5;
console.log(e);


//su stringais
const f = 'labas'.length > 0 ? 'ilgas' : 'tuscias';
console.log(f);

const g = 'pomidoras'[0];
console.log(g);

//jei nezinom konkrecios pozicijos, paima stringo indeksa
const z = 'pomidoras'[1 < 2 ? 0 : 5];
console.log(z);
const zzz = 'pomidoras'[1 > 2 ? 0 : 6];
console.log(zzz);

//kitas indeksas
const zez = 'pomidoras'[2 + (1 > 2 ? 0 : 5)];
console.log(zez);

//variantas
const mIndex = 2 + (1 < 2 ? 0 : 5);
const m = 'pomidoras'[mIndex];
console.log(m);

/*
jeigu skaicius yra teigiamas, tai ji sumuojame su savimi;
jeigu skaicius yra neigiamas tai is jo atimame 10
*/
const sum = (a, b) => a + b;
const diff = (a, b) => a - b;

const n = 7;
const ats = sum(n, n);
console.log(ats);

//kitas viriantas
const k = -5;
const ats1 = diff(k, 10);
console.log(ats1);


//apjungiant abu virsuje variantus

//if (n > 0) {
// const atsakymas = sum(n, n);
//} else {
//    const atsakymas = diff(n, 10);
//}
//console.log(atsakymas)

//pergrupuojant gautusi taip
const atsakymas = n > 0 ? sum(n, n) : diff(n, 10);


//CONST ir LET galioja tarp ju artimiausiu riestiniu skliaustu!!!
//nebent jie yra vieno lygio (viename paciame faile)
//reikia ivesti let! pries if