/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

const marks = [10, 2, 8, 4, 6];
const abc = ['a', 'b', 'c', 'd', 'e']

console.log('\n concat-------');
//pridedami i masyvo gala/ arba pavienes reiksmes arba kitus masyvus
//is keliu padaro viena
console.log([...marks].concat([1, 2, 3]));
//pavienes reiksmes
console.log([...marks].concat(4, 5));
//reiksmiu iterpimo kombinatorika neaktuali
console.log([...marks].concat(4, 5, [1, 2, 3]));
//galima su spread
console.log([...marks, 4, 5, ...[1, 2, 3]]);


console.log('\n .copyWithin-------');
//gazina dali saves i tam tikra vieta
//pirma pozicija kur daroma
// antra ir trecia, kuria orig. masyvo dali overridinti
console.log([...marks].copyWithin(2, 0, 1));

console.log('\n .fill-------');
//uzpildo reiksmes duotomis
console.log([...marks].fill(0));
console.log([...marks].fill('labas'));
//nuo antros pozicijos
console.log([...marks].fill(0, 2));
console.log([...marks].fill('', 1, 3));

//panaudojimas - kai reikia suformuoti nauja masyva

//pvz, sukuriant 15 
//const penkiolikaZuikiu = new Array(15);
//console.log(penkiolikaZuikiu);
//uzpildyti tuscia array 
const penkiolikaZuikiu = new Array(15).fill('zuikis');
console.log(penkiolikaZuikiu);

console.log('\n .flat-------');
//islygina masyva viena karta
console.log([1, 2, 3].flat());
console.log([1, [2, 4], 3].flat());
//dvieju lygiu masyvas
console.log([1, [[2, 4], 3, [5, 6]], 7].flat());
//kad nereiketu kelis kartus flatinti irasyti rekursijos kieki
console.log([1, [[2, 4], 3, [5, 6]], 7].flat(2));
//galimas ir toks uzrasymas console.log([1, [[2, 4], 3, [5, 6]], 7].flat().flat());

console.log('\n .includes()-------');
//atsakys ar yra masyve/stringe ar nera
console.log([...marks].includes(0));
console.log([...marks].includes(1));
console.log([...marks].includes(4));
console.log([[1], [2], [3], [4]].includes([2]));

console.log('\n .indexOf()-------');
//jei nera tokios reiksmes grazina -1, kitu atveju indeksa
//eina is kaires i desine
console.log([...marks].indexOf('labas'));
console.log([...marks].indexOf(10));
//negalima ieskoti tarkim dvieju skaiciu einanciu salia

//antra reiksme isreiskia nuo kurios vietos iesko
console.log([...marks].indexOf(10, 1));

//ispletus masyva (10), jau randa reiksme
console.log([...marks, 10].indexOf(10, 1));

console.log('\n .join()-------');
console.log(abc);
console.log([...abc].join(', '));
console.log([...marks].join(', '));
console.log([...abc].join(' xXx '));
console.log([...marks].join(' xXx '));
console.log([...abc].join(''));
console.log([...marks].join(''));

console.log('\n .lastIndexOf()-------');
//ziurint is galo (desines puses)
console.log([...marks].lastIndexOf(10));
console.log([...marks].lastIndexOf(4));
//papildytas masyvas
console.log([...marks, 7, 9, 4, 3].join(', '));
console.log([...marks, 7, 9, 4, 3].lastIndexOf(4));

console.log('\n .pop()-------');
//ateme paskutini indeksa
//t.y. grazina tai ka pasalina, ir to paciu numeta is masyvo
//galima kartoti ir vis numes is galo, po viena is galo
const marks2 = [...marks];
console.log([...marks2].pop());

console.log('\n .push()-------');
//apendina i gala (i desine) ir returnina naujaji masyvo ilgi
const marks3 = [...marks];
console.log(marks3);
console.log(marks3.push(7));
console.log(marks3.push(8));
console.log(marks3.push(100));

console.log('\n .unshift()-------');
//naujojo masyvo ilgis ir nauja ikelia i masyvo prieki
const marks4 = [...marks];
console.log(marks4);
console.log(marks4.unshift(0));
console.log(marks4.unshift(1));
console.log(marks4.unshift(2));
console.log(marks4);

console.log('\n .shift()-------');
//pasalina priekyje esancia reiksme
const marks5 = [...marks];
console.log(marks5);
console.log(marks5.shift());
console.log(marks5.shift());
console.log(marks5.shift());
console.log(marks5);

console.log('\n .reverse()-------');
//apvercia
console.log([...marks]);
console.log([...marks].reverse());

const demo = ['Labas', 'rytas', 'Lietuva', '!'];
console.log(demo);
demo.reverse();  //pakeicia 
console.log(demo);

//demo pakeicia originala
//tuomet pasikeist i const
const reversedDemo = demo.reverse();

