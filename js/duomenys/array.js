/* 
Array - masyvas, listas, sarasas, matrica, kolekcija

*/

const empty = [];
console.log(empty);

/*
const marks = [10, 2, 8, 4, 6];
console.log(marks);

const mark1 = 10;
const mark2 = 2;
const mark3 = 8;
const mark4 = 4;
const mark5 = 6;

const sum = mark1 + mark2 + mark3 + mark4 + mark5;
const count = 5; 

const average1 = sum / count;
console.log(average1);

*/

const marks = [10, 2, 8, 4, 6];
console.log(marks);

const sum2 = marks[0] + marks[1] + marks[2] + marks[3] + marks[4];
const count2 = marks.length;
const average2 = sum2 / count2;

console.log('Kiekis', count2);
console.log('Vidurkis', average2);

console.log('>>>', marks[0]);
console.log('>>>', marks[1]);
console.log('>>>', marks[2]);
console.log('>>>', marks[3]);
console.log('>>>', marks[4]);

console.clear();

//10, 2, 8, 4, 6

let sum3 = 0;
let index = 0;



sum3 += marks[index++];
sum3 += marks[index++];
sum3 += marks[index++];
sum3 += marks[index++];
sum3 += marks[index++];

console.log(sum3);

/*
// kai rasant ++index, pradet nuo -1, tuomet pirma prideda 0 ir paima reikalinga reiksme 

let sum4 = 0;
let index1 = -1;
sum4 += marks[++index1];
sum4 += marks[++index1];
sum4 += marks[++index1];
sum4 += marks[++index1];
sum4 += marks[++index1];

*/
console.clear();

function marksAverage(marks) {
    if (marks.length === 0) {
        return 'Vidurkis: nera pazymiu';
    }

let sum = 0;

    //
    
  return 'Vidurkis: ' + (sum / marks.length);
}


const jonoPazymiai = [];
console.log(jonoPazymiai);
console.log(marksAverage(jonoPazymiai));

jonoPazymiai.push(10);
console.log(jonoPazymiai);
console.log(marksAverage(jonoPazymiai));

jonoPazymiai.push(2);
console.log(jonoPazymiai);
console.log(marksAverage(jonoPazymiai));

jonoPazymiai.push(8);
console.log(jonoPazymiai);
console.log(marksAverage(jonoPazymiai));

jonoPazymiai.push(4);
console.log(jonoPazymiai);
console.log(marksAverage(jonoPazymiai));