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
//const k = -5;
//const ats1 = diff(k, 10);
//console.log(ats1);


//apjungiant abu virsuje variantus

//if (n > 0) {
//    const atsakymas3 = sum(n, n);
//} else {
//    const atsakymas3 = diff(n, 10);
//}
//console.log(atsakymas3)

//pergrupuojant gautusi taip
//const atsakymas = n > 0 ? sum(n, n) : diff(n, 10);

/*
CONST ir LET galioja tarp ju artimiausiu riestiniu skliaustu!!!
nebent jie yra vieno lygio (viename paciame faile)
reikia ivesti let! pries if
*/

/*
jei tekstas yra trumpas (t.y iki 5 simboliu), tai grazink pirma simboli
priesingu atveju - paskutini simboli
*/

//kintamajam priskirta logika
const first = s => s[0];
//const last = s => s[s.length - 1];
const last = s => s.at(-1);

//.at vienas is stringo metodu

console.log(first('Labas'));
console.log(last('Labas'));

const text1 = 'Labas';
const strAts1 = text1.length < 5 ? first(text1) : last(text1);
console.log(strAts1);
//iki 5 simboliu o 'Labas' yra [0...4]

const funcToCall = text1.length < 5 ? first : last;
const strAts2 = funcToCall(text1);
console.log(funcToCall);
console.log(strAts2);

console.log('kitas pavyzdys');
const jonasMarks = [];
const maryteMarks = [10, 2, 8, 4, 6];

function emptyMarksArray() {
    return 'Studentas neturi pazymiu, todel negalime apskaiciuoti jo pazymiu vidurkio';
}
function marksAverage(marks) {
    let sum = 0;

    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    const count = marks.length;
    const average = sum / count;
    return average;
}
//jei neturi pazymiu kviecia jonas.MarksArray, jei turi marks.Average
const jonasFunc = jonasMarks.length === 0 ? emptyMarksArray : marksAverage;
const jonasAverage = jonasFunc(jonasMarks);
console.log(jonasAverage);

const maryteFunc = maryteMarks.length === 0 ? emptyMarksArray : marksAverage;

const maryteAverage = maryteFunc(maryteMarks);
console.log(maryteAverage);