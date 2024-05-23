/*
SPREAD operatorius
destrukturizavimas
*/
//value by reference
//kompleksines reiksmes dalijasi atmintini
const a = [1, 2, 3];
const b = a;

console.log(a);
console.log(b);

//overridinam reiksme
a[0] = 44;
console.log(a);
console.log(b);
b[2] = 777;

console.log(a);
console.log(b);

let c = 7;
let d = c;

console.log(c, d);

//...Spread ARRAY
const e = [1, 2, 3];
//... isspredina masyva, o 'e' masyva 'e'
//tik pirmo lygio info isspredina
const f = [...e];
console.log(e, f);

e[0] = 111;
console.log(e, f);

f[2] = 999;
console.log(e, f);

const g = [0, ...e, 4, 5];
console.log(g);

const h = [...e, ...e, ...e, 777];
console.log(h);

console.clear();

//...spread OBJECT su {}

const obj1 = { name: 'Jonas', age: 99 };
const obj2 = obj1;

obj1.name = 'Maryte';
console.log(obj1);
console.log(obj2);

obj2.age = 88;
console.log(obj1);
console.log(obj2);

const obj3 = { brand: 'Audi', model: '80' };
const obj4 = { ...obj3 };

console.log(obj3);
console.log(obj4);

obj3.brand = 'Volvo';
console.log(obj3);
console.log(obj4);

obj4.model = 'S40';
console.log(obj3);
console.log(obj4);

//NEGALIMA is OBJEKTO spreadinti i MASYVA,
//NEGALIMA is MASYVO spreadinti i OBJEKTA,


const person = {
    name: 'Petras',
    age: 77,
}

const address = {
    city: 'Miestas',
    street: 'Gatve 123',
    number: 45,
}


//isreiksti visa info
const fullPersonDetails = { ...person, ...address };
console.log(fullPersonDetails);

//galimas uzrasymas
const fullPersonDetails1 = {
    ...person,
    ...address,
    id: 1111111,
    phone: 86658996588,
};
console.log(fullPersonDetails1);
console.log(fullPersonDetails1.id);

//galima istraukti atskirus 
//eiliskumas spreadinimui nesvarbu

//jei raktai identiski, nuskaitant ivyks overraidinimas ir liks paskutine atejusi info

//panasumai
//stringas yra supaprastintas array
//Array yra supaprastintas objektas
const str = 'abc';
const arr = [
    'a', //0
    'b', //1
    'c' //2
];
const obj = {
    0: 'a', //0
    1: 'b' //1
};

console.log(str[1], arr[1], obj[1]);

//i masyva isspredinti NELEIDZIA
// i objekta spredinam viska