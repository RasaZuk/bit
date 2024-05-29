// [1, 2, 3] -> [2, 4, 6]

function double(list) {
    const result = [];

    for (const item of list) {
        result.push(item * 2);
    }
    return result;

}

const a1 = [1, 2, 3];
console.log(a1, double(a1));

const a2 = [10, 2, 8, 4, 6];
console.log(a2, double(a2));

function triple(list) {   //patrigubinta
    const result = [];

    for (const item of list) {
        result.push(item * 3);
    }
    return result;

}


//universali funkcija map
//transformacija

function map(list, transformFunc) {
    const result = [];

    for (const item of list) {
        result.push(transformFunc(item));
    }
    return result;
}

console.log(map(a1, n => n * 2)); //n=>n*2 transformoujanti funkcija
console.log(map(a2, n => n * 3));

//norim grazinti visur 0
console.log(map(a2, n => 0));

//norim n padidinti 1
//su visais nariais elgiamasi vienodai
console.log(map(a2, n => n + 1));
console.log(map(a2, n => (2 * n + 1) % 10));

//Masyvai turi metoda MAP
//ant masyvo mapinu ir formuoju 
console.log('--------');
console.log(a1);
console.log(a1.map(n => n * 2));

//trnsfprmuota pagal logika
console.log(a2);
console.log(a2.map(n => n * 3));

console.log('---Masyvas su raidem');
//isskaiciuoja zodziu ilgius
console.log(['Labas', 'rytas', 'Lietuva'].map(s => s.length));
//noriu paimti 0 pozicijos indeksa (visu zodziu parodo)
console.log(['Labas', 'rytas', 'Lietuva'].map(s => s[0]));
//visa laika paskutines pozicijos indeksus parodo
console.log(['Labas', 'rytas', 'Lietuva'].map(s => s.charAt(s.length - 1)));

const firstSymbol = s => s[0];
const lastSymbol = s => s[s.length - 1];
console.log(['Labas', 'rytas', 'Lietuva'].map(firstSymbol));
console.log(['Labas', 'rytas', 'Lietuva'].map(lastSymbol));

//jei logika trumpa rasyti rodykline funkcija const = x =>...

console.clear();

//norim padidinti pazymius +1
const marks = [10, 2, 8, 4, 6];
const updatedMarks = marks.map(n => n + 1 > 10 ? 10 : n + 1);
console.log(updatedMarks);

function increaseMarks(mark) {
    if (mark === 10) {
        return 10;
    }
    return mark + 1;
}

//pameni koks masyvas
//mapini (rekonstruojams masyvas)
//transformacija atliekanti logika)

const updatedMarks2 = marks.map(increaseMarks);
console.log(updatedMarks2);

//reikia sukurti masyva tik su teigiamais skaiciais
const randomNumbers = [10, -3, 3.14, 5, 777, -13, -2.72];

//filter esme palikti tik tai ko reikia
//skliaustuose irasyt atrankos kriterijus(true/false)
const positiveNumbers = randomNumbers.filter(n => n >= 0);
console.log(positiveNumbers);

//isfiltruojnt negatyvius numerius
const negativeNumbers = randomNumbers.filter(n => n < 0);
console.log(negativeNumbers);

//pasilikti integer skaicius (sveikieji skaiciai)
const integerNumbers = randomNumbers.filter(n => n % 1 === 0);
console.log(integerNumbers);

//pasilikti desimtainius skicius
const decimalNumbers = randomNumbers.filter(n => n % 1 !== 0);
console.log(decimalNumbers);

const randomData = [10, -3, 'labas', 3.14, 5, [], 777, -13, -2.72];

//atrinkti teigiamus ir ne neigiamus, sveikuosius skaicius
//formuoti kad nebutu !==
//arba kad butu ===

const tss = randomData
    .filter(n => Number.isInteger(n))
    .filter(n => n > 0);


const tss2 = randomData
    .filter(n => typeof n === 'number')
    .filter(n => isFinite(n))
    .filter(n => n >= 0)
    .filter(n => n % 1 === 0);

console.log(tss2);

const tss3 = randomData.filter(n => Number.isInteger(n) && n >= 0);

console.log(tss3);

//SORT

const dictionary = ['labas', 'rytas', 'asla', 'medis', 'zuvis'];
console.log(dictionary);
//isrikiuoti abeceles tvarka
//TRANSFORMUOJA []!!! negrazina originalaus masyvo
dictionary.sort();
console.log(dictionary);

//1 yra raide A, tada 2 yra B ir t.t.
//tekstines abeceles principas
const jonasMarks = [10, 2, 143, 8, 11, 4, 100, 117, 6, 201, 10000];
console.log(jonasMarks);

//neigiamas, a eina i prieki
//         0, a ir b lieka savo vietose
//teigiamas skaicius, a eina i gala

//jei ateina (5, 7)

jonasMarks.sort((a, b) => a - b);
console.log(jonasMarks);


//o jeigu norisi atbulai, sukeisti a su b
jonasMarks.sort((a, b) => b - a);
console.log(jonasMarks);

const students = [
    { name: 'Jonas', average: 7 },
    { name: 'Marytes', average: 10 },
    { name: 'Petras', average: 4 },
    { name: 'Ona', average: 2 },
]

//isdelioti vidurkio didejimo tvarka
//kai yra kompleksinis duomenu tipas (skaiciai, string)
//a ir b objektai!!
//reikia listi i kiekvieno objekto vidu (pvz: average, name)
students.sort((a, b) => a.average - b.average);
console.log(students);
console.log('Maziausias vidurkis:', students[0].average);
console.log('Maziausio autorius:', students[0].name);

console.log('Didziausias vidurkis:', students.at(-1).average);
console.log('Didziausio autorius:', students.at(-1).name);


//jei norim issortinti vardus pagal abecele objekte
//pagal ka sortinam! Name!!

function varduPalyginimas(a, b) {
    if (a.name < b.name) {
        return -1;
    } else if (a.name === b.name) {
        return 0;
    } else {
        return 1;
    }
}
students.sort(varduPalyginimas);
console.log(students);
