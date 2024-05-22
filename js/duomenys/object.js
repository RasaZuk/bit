/*
OBJECT - objektas
*/

const empty = {};
console.log(empty);


//const stud1 = ['Jonas', 99, true];
//const stud2 = ['Maryte', 88, false];
//const stud3 = ['Petras', 77, false];
//const stud4 = ['Ona', 66, true];



//tikslas surinkti info nesvabu eiliskumas
//key value  - pvz age: 99
const stud1 = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
}
console.log(stud1);
console.log(stud1.age);
console.log(stud1.isMarried);

const stud2 = {
    name: 'Maryte',
    isMarried: false,
    age: 88,
}
console.log(stud2.name);
console.log(stud2.isMarried);

const students = [
    { name: 'Jonas', age: 99, isMarried: true },
    { name: 'Maryte', age: 88, isMarried: false },
    { name: 'Petras', age: 77, isMarried: false },
    { name: 'Ona', age: 66, isMarried: true },
];

//suskaiciouti studentu kieki (masyvo ilgis);
//console.log(students.length);

//paskutinio studento visa informacija
//console.log(students[students.length - 1]);

//arba paskutinis su .at
//console.log(students.at(-1));

//paskutinio studento vardas
//console.log(students.at(-1).name);
//console.log(students.at(-1).age);

//konkretaus studento duomenys
//console.log(students[1].name);

//apie visus studentus pamatyt toki sakini
//Sveiki, as VARDAS, man XX metu ir esu/nesu vedes.

function introduction(stud) {
    const status = stud.isMarried ? 'esu' : 'nesu';
    return `Sveiki, as ${stud.name}, man ${stud.age} metu ir ${status} vedes.`;
}

for (let i = 0; i < students.length; i++) {
    console.log(introduction(students[i]));
}
