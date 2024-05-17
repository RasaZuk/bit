//Namu darbai - Mini uzduotys

//Kintamuju inicijavimas ir veiksmai

//1 su skaiciaus tipo reiksmemis

/*
const x = 3;
console.log(x);
const y = 9;
console.log(y);
const z = 5;
console.log(z);

//susumuoti visus skaiciaus kintamuosius

const sum99 = x + y + z;
console.log(sum99);

//2 su teksto tipo reiksmemis
const string1 = 'Rasa';
console.log(string1);

const string2 = 'Gabriele';
console.log(string2);

const string3 = 'Zukauskaite';
console.log(string3);

//sujungti visus teksto kintamuosius su tarpais.
const text = string1 + ' ' + string2 + ' ' + string3;
console.log(text);


//3 saraso tipo kintamieji su 5 skaiciu tipo reiksmemis

const marks1 = [3, 5, 7, 9, 15];
console.log(marks1);

//apskaiciuoti verte pagal logika 1-2+3-4+5
const logika1 = marks1[0] - marks1[1] + marks1[2] - marks1[3] + marks1[4];
console.log(logika1);

const marks2 = [1, 3, 5, 7, 9];
console.log(marks2);

//apskaiciuoti verte pagal logika 1-2+3-4+5
const logika2 = marks2[0] - marks2[1] + marks2[2] - marks2[3] + marks2[4];
console.log(logika2);

const marks3 = [2, 4, 6, 8, 10];
console.log(marks3);

//apskaiciuoti verte pagal logika 1-2+3-4+5

const logika3 = marks3[0] - marks3[1] + marks3[2] - marks3[3] + marks3[4];
console.log(logika3);


//4 sukurti 3 saraso tipo kintam. su 5 teksto reiksmemis

let marksT1 = ['liepa', 'uosis', 'tuja', 'kadagys', 'azuolas'];

console.log(marksT1);

//sujungti saraso vertes su tarpu ir kableliu atbuline tvarka.

console.log(marksT1[4] + ', ' + marksT1[3] + ', ' + marksT1[2] + ', ' + marksT1[1] + ', ' + marksT1[0]);

let marksT2 = ['tulpe', 'narcizas', 'ramune', 'roze', 'bijunas'];
console.log(marksT2);

//sujungti saraso vertes su tarpu ir kableliu.

console.log(marksT2[4] + ', ' + marksT2[3] + ', ' + marksT2[2] + ', ' + marksT2[1] + ', ' + marksT2[0]);

const marksT3 = ['morka', 'svogunas', 'salota', 'ridikas', 'krapai'];
console.log(marksT3);

//sujungti saraso vertes su tarpu ir kableliu.

console.log(marksT3[4] + ', ' + marksT3[3] + ', ' + marksT3[2] + ', ' + marksT3[1] + ', ' + marksT3[0]);



//KINTAMUJU PALYGINIMAS

//Skaiciaus tipo kintamieji

const skaicius1 = 7;
const skaicius2 = 9;

if (skaicius1 > skaicius2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');  //a skaiciaus tipo kuris didesnis
}

if (skaicius1 < skaicius2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');  //b skaiciaus tipo kuris mazesnis
}


if (skaicius1 === skaicius2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');  //c ar jie lygus
}


if (skaicius1 != skaicius2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');  //d ar jie nelygus
}

if (skaicius1 >= skaicius2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');  //e kuris didesnis arba lygus
}

if (skaicius1 <= skaicius2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');  //e kuris mazesnis arba lygus
}


//2. isvesti teksto tipo kintamuju ilgius

console.log(string1, string1.length);

console.log(string2, string2.length);

console.log(string3, string3.length);

//3. Tarpusavyje palyginti teksto tipo kintamųjų ilgius:

//a kuris didesnis

if (string1.length < string2.length) {
    console.log('taip');
} else {
    console.log('Ne');
}
//b kuris mazesnis
if (string1.length > string2.length) {
    console.log('taip');
} else {
    console.log('Ne');
}

//c ar jie lygus
if (string1.length === string2.length) {
    console.log('taip');
} else {
    console.log('Ne');
}

//d ar jie nelygus


//e kuris didesnis arba lygus
if (string1.length >= string2.length) {
    console.log('taip');
} else {
    console.log('Ne');
}

//f kuris mazesnis arba lygus
if (string1.length <= string2.length) {
    console.log('taip');
} else {
    console.log('Ne');
}

//4. Isvesti saraso tipo kintamuju ilgius
console.log(marksT1, marksT1.length);

console.log(marksT2, marksT2.length);
console.log(marksT3, marksT3.length);


//5. Tarpusavyje palyginti saraso tipo kintamuju ilgius

//a, kuris didesnis

//b, kuris mazesnis

//c, ar jie lygus

//d, ar jie nelygus

//e, kuris didesnis arba lygus

//f, kuris mazesnis arba lygus

console.clear();


//CIKLO FOR PANAUDOJIMAS


//1 suskaiciuoti suma imtinai '0...0'
let sum = 0;
for (let i = 0; i <= 0; i++) {
}
console.log(sum);



//suskaiciuoti suma imtinai '0...4'

let ciklas = 0;
for (let i = 0; i <= 4; i++) {
    ciklas += i;
}
console.log(ciklas);


//suskaiciuoti suma imtinai '0...100'
let simtas = 0;
for (let i = 0; i <= 100; i++) {
    simtas += i;
}
console.log(simtas);



//suskaiciuoti suma imtinai '574...815'
let skaicius = 0;

for (let i = 574; i <= 815; i++) {
    skaicius += i;
}
console.log(skaicius);


//suskaiciuoti suma imtinai '-50...50'
let penki = 0;
for (let i = -50; i <= 50; i++) {
    penki += i;
}
console.log(penki);


//suskaiciuoti suma imtinai '-70...30'

let naujas = 0;
for (let i = -70; i <= 30; i++) {
    naujas += i;
}
console.log(naujas);

console.log('2 budas --------');

//KITAS BUDAS

function intervalSum(startas, pabaiga) {
    let answer = 0;

    for (let i = startas; i <= pabaiga; i++) {
        answer += i;

    }

    return answer;
}
console.log(intervalSum(0, 0));
console.log(intervalSum(0, 4));
console.log(intervalSum(0, 100));
console.log(intervalSum(574, 815));
console.log(intervalSum(-50, 50));
console.log(intervalSum(-70, 30));




console.log('CIKLAI');

//Ciklai 2. panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo

const tekstas = ['b', 'u', 'r', 'o', 'k', 'a', 's'];


for (let i = tekstas.length - 1; i >= 0; i--) {
    console.log(i, tekstas[i]);

}

//antras dublis pabandymui
const dublis = [2, 4, 6, 8];
for (let i = dublis.length - 1; i >= 0; i--) {
    console.log(i, dublis[i]);
}



//tekstas reverse - NEPAVYKO!

function reverseString(text) {
    let answer = '';

    for (let i = 0; i < text.length; i++); {
        answer += text[text.length - 1 - i];
    }
    return answer;
}
console.log(reverseString('labukas'), '>>>>', 'sakubal');

//galimas variantas dedant is galo i prieki
for (let i =0; i < text.length; i++) {
    answer = text [i] + answer;
}

//galima imti indeksus is galo
for (let i = text.length - 1; i >=0; i--) {
    answer += text[i];
}
*/

console.log('>>>>>>>');

//Ciklas 3. skaiciai su liekanomis

function numberCount(startas, finisas, zingsnis) {
    let answer = 0;

    for (let i = startas; i <= finisas; i++) {
        //console.log(i);
        //jeigu skaiciu dalinant is step liekana yra nulis, tai answer didiname vienetu
        if (i % zingsnis === 0) {
            answer++;
        }

    }

    return 'Skaiciu intervale tarp ' + startas + ' ir ' + finisas + ', ' + 'besidalijanciu be liekanos is ' + zingsnis + ' yra ' + answer + ' vienetai.';

}
console.log(numberCount(0, 11, 3));
console.log(numberCount(0, 11, 5));
console.log(numberCount(0, 11, 7));

console.log(numberCount(8, 31, 3));
console.log(numberCount(8, 31, 5));
console.log(numberCount(8, 31, 7));

console.log(numberCount(-18, 18, 3));
console.log(numberCount(-18, 18, 5));
console.log(numberCount(-18, 18, 7));