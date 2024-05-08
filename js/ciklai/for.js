/*
For - pagrindinis ciklas (eng loop)

i = skaiciuos kelinta tai iteracija
i++ tas pats kas i= i+1, arba i+=1 arba ++i
*/

console.log('STARTAS');

for (let i = 3; i < 8; i++) {
    console.log(i);
}

console.log('FINISAS');

console.clear();

const colors = ['white', 'black', 'red', 'green', 'blue', 'violet'];


for (let i = 0; i < colors.length; i++) {
    console.log(i, colors[i]);

}

console.log('--------');

//is galo i prieki israsymas
//length istrauks neteisinga (6), tuomet reikia minusuot 1
// i>=0 kad paimtu pirma reiksme arba i > -1

for (let i = colors.length - 1; i >= 0; i--) {
    console.log(i, colors[i]);
}

console.log('-----');
//ciklas eina mazejimo tvarka, o reiksmes didejimo

for (let i = colors.length - 1; i >= 0; i--) {
    console.log(i, colors[colors.length - 1 - i]);
}

console.clear();

const marks = [10, 2, 8, 4, 6];

let sum = 0;
for (let i = 0; i < marks.length; i++) {
    sum += marks[i];

}
console.log(sum / marks.length);

console.clear();

const jonas = [];
const maryte = [10, 2];
const petras = [9, 8, 7];
const ona = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function marksAverage(marks) {
    if (marks.length === 0) {
        return 'Nera pazymiu';
    }
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }

    return sum / marks.length;
}

console.log(marksAverage(jonas));
console.log(marksAverage(maryte));
console.log(marksAverage(petras));
console.log(marksAverage(ona));