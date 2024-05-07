
/*
Matematiniai operatoriai:
- aritmetiniai: +, -, /, *, **, %, ++, --
-priskyrimo: +=, -=, /=, *=, **=, %=

*/

/*
const turinys = 0;       "Pinigines turinys"
const papildymas = 10;                    //Pinigines papildymas//
const pildymas1 = turinys + papildymas;   // Turinys po papildymo//
const pildymas2 = 90;                     // Papildyta 90//
const pinigineslesos = pildymas1 + pildymas2; //Galutinis pinigines turinys//
console.log(pinigineslesos);

const A = 3;
const B = 5;
sum = A + B;
console.log(sum);
*/

/*
let makaronai = 2;
console.log(makaronai);

makaronai = makaronai + 2;
console.log(makaronai);

makaronai = makaronai + 2;
console.log(makaronai);

makaronai += 1;
console.log(makaronai);

makaronai--
console.log(makaronai);

console.clear();

let g = 6;
console.log(g);
//pirmiau spausdina, po to padidina
console.log(g++);
//pirmiau padidina, po to spausdina
console.log(++g);


console.clear();
*/

//Namu darbai - Mini uzduotys

//Kintamuju inicijavimas ir veiksmai

//1 su skaiciaus tipo reiksmemis

const x = 3;
console.log(x);
const y = 9;
console.log(y);
const z = 5;
console.log(z);

//susumuoti visus skaiciaus kintamuosius

const sum = x + y + z;
console.log(sum);

//2 su teksto tipo reiksmemis
const personalName = 'Rasa';
console.log(personalName);

const midleName = 'Gabriele';
console.log(midleName);

const surname = 'Zukauskaite';
console.log(surname);

//sujungti visus teksto kintamuosius su tarpais.
const text = personalName + ' ' + midleName + ' ' + surname;
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

let marksT1 = ['diena', 'siandien', 'sauleta', 'yra', 'grazi'];
console.log(marksT1);

//sujungti saraso vertes su tarpu ir kableliu.
console.log(marksT1[0]);
console.log(marksT1[1]);
console.log(marksT1[2]);
console.log(marksT1[3]);
console.log(marksT1[4]);

console.log(marksT1[1] +' ' + marksT1[3] + ' ' + marksT1[2] + ', ' + marksT1[4] +' ' + marksT1[0]);

let marksT2 = ['gera', 'darbai', 'reikalinga', 'namu', 'praktika'];
console.log(marksT2);

//sujungti saraso vertes su tarpu ir kableliu.
console.log(marksT2[0]);
console.log(marksT2[1]);
console.log(marksT2[2]);
console.log(marksT2[3]);
console.log(marksT2[4]);

console.log(marksT2[3] + ' ' + marksT2[1] + ' ' + marksT2[2] + ', ' + marksT2[0] +' ' + marksT2[4]);

const marksT3 = ['geresne', 'bus', 'siltesne', 'rytoj', 'diena'];
console.log(marksT3);

//sujungti saraso vertes su tarpu ir kableliu.
console.log(marksT3[0]);
console.log(marksT3[1]);
console.log(marksT3[2]);
console.log(marksT3[3]);
console.log(marksT3[4]);

console.log(marksT3[3] +' ' + marksT3[1] + ' ' + marksT3[0] + ', ' + marksT3[2] +' ' + marksT3[4]);

//Kintamuju palyginimas

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

    