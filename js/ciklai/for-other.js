//didejimo tvarka

const words = ['Labas', 'rytas', 'Lietuva', 'sakau', 'tau'];

//fOR ciklas
for (let i = 0; i < words.length; i++) {
    const word = words[i];
    console.log(i, word);
}

//FOR - OF ciklas, (sutvarko i ir t.t)
for (const word of words) {
    console.log(word);      //paduoda pavienius zodzius be indekso

}

const students = [
    { name: 'Jonas', age: 99 },
    { name: 'Maryte', age: 88 },
    { name: 'Petras', age: 77 },
    { name: 'Ona', age: 66 },
];

//rankiniu budu sekamas indeksas
for (let i = 0; i < students.length; i++) {
    const student = students[i];
    console.log(i, students);

}

//istraukia automatiskai, 
//jis neturi indekso, ir bus is eiles (kaires i desine)
for (const student of students) {
    console.log('--', student);
}

//jei reikia for of tureti indeksu
let forOfi = 0;
for (const student of students) {
    console.log('--', forOfi++, student);
}

//jei ++forOfi ivyksta kitas panaudojimas
//let forOfi = -1; ir ++forOfi;


//WHILE
//uzduoti klausima ir ka daryt
console.log('WHILE PANAUDOJIMAS');
const words2 = ['Labas', 'rytas', 'Lietuva', 'sakau', 'tau'];
let whileI = 0;

//while kintamasis issikeliamas pries cikla
//lengvai pasidaro begalinis ciklas
while (whileI < words2.length) {
    console.log('while', whileI, words2[whileI]);
    whileI++;
}

console.log('------');
//isdarkytas for
let i = 0;
for (; i < words2.length;) {
    console.log('for:', i, words2[i]);
    i++;
}


//cikluose galima naudoti 'break'
let whileI2 = 0;
while (true) {
    console.log(whileI2++);
    if (whileI2 > 10) {
        break;
    }
}

console.log('pvz su break masyve');
//pvz su masyvu
const marks = [10, 2, 8, 4, 6];
for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);

    if (marks[i] === 8) {
        break;
    }
}

console.log('pvz su val ir min');
//intervalas 5 min intervalu
for (let h = 1; h <= 12; h++) {
    for (let m = 0; m < 60; m += 5) {
        console.log(`${h}:${m}`);
        if (m > 13) {  //tarkim break nuo 13 min
            break;  //stabdo artimiausia tevini cikla
        }
    }
}

const hackerMarks = [10, 8, 2, 6, 4];
let sum = 0;
for (const mark of hackerMarks) {
    sum += mark;
}

console.log(sum / hackerMarks.length);

//ignoruoti neteisingas reiksmes ir nebus draudiama
//draudima atliks 'continue'
//let sum = 0;
//let count = 0;  //skaiciuoti kad ismestu neiimamas reiksmes
//for (const mark of hackerMarks) {
//    if (typeof mark !=='number'
//        || mark > 10  //atsikrato dideliu reiksmiu
//        || mark < 1  //neigiamu
//        || mark %1 !==0) { //desimtainiu
//        continue;
//    }
//   sum += mark;
//    count++;
//}
//console.log(sum / count);


//jei deti pozityviai type of ===number ir && tuomet nenaudojam continue


//Do-while pasidometi