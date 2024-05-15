const matrix = [10, 2, 8, 4, 6];

console.log(matrix);

for (let i = 0; i < matrix.length; i++) {
    console.log(i, '-', matrix[i]);
}

const students = [
    [10, 9, 8, 7],
    [6, 5, 8, 2, 9],
    [7, 6, 9],
    [6, 5]
]

//kaip gauti pirmoojo studento pazymius (su indeksu 0)
console.log(students[0]);

// antro studento
console.log(students[1]);

// gauti pirmo studento (Jono) pirma pazymi
const jonoPazymiai = students[0];
console.log(jonoPazymiai[0]);
console.log(jonoPazymiai[1]);

//arba uzsukti cikla
//for (let i = 0; i < jonoPazymiai.length; i++) {
//   console.log('jonas', jonoPazymiai[i]);
//}


//arba su students [
//for (let i = 0; i < students[0].length; i++) {
//   console.log('jonas', students[0][i]);
//}


console.log('-----');
//antro (Marytes pazymiai)
const marytesPazymiai = students[1];
console.log(marytesPazymiai[0]);
console.log(marytesPazymiai[1]);