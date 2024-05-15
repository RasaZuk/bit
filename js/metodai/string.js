/* 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/

const word = 'Labas rytas, Lietuva!';

console.log(word);


//kai reikia isrinkti simboli
console.log(word[0]);

//isimti simboli, (jei nera reiksmes neduos jokio uzraso)
console.log('.chartAt');
console.log('Labas rytas, Lietuva!'.charAt(2));

console.log('---------');
console.log('charCodeAt()');
//grazina dvejetainiu pagrindu (pozicija toje abeceleje)
console.log(word.charCodeAt(0));
console.log(word.charCodeAt(5));

console.log('---------');
console.log('.concat()');
//sujungia kelis stringus (su n kiekiu stringu)
console.log('Labas'.concat('rytas'));
console.log('Labas'.concat('rytas', 'Lietuva'));
//tas pats rezultatas kaip virsuje
//console.log('Labas'.concat('rytas').concat('Lietuva'));

console.log('---------');
console.log('.endsWith()');
//baigiasi su!  nurodant 'teksta', privalo grieztai sutapti
console.log('labas'.endsWith('s'));
console.log('labas'.endsWith('gg'));
console.log('labas'.endsWith('bas'));


//gali buti ir keli simboliai
console.log('---------');
console.log('.startsWith()');
console.log('labas'.startsWith('x'));
console.log('labas'.startsWith('ggssbgfh'));
console.log('labas'.startsWith('l'));
console.log('labas'.startsWith('L'));
console.log('labas'.startsWith('lab'));


//ieskoma tiksli viena stringo atkarpa, ats - true/false
console.log('---------');
console.log('includes()');
console.log('Pomidoras'.includes('x'));
console.log('Pomidoras'.includes('o'));
console.log('Pomidoras'.includes('dora'));
console.log('Pomidoras'.includes('oda'));

//ieskoma tikslesne info
//(grazina stringo indeksa nuo kur prasideda)
console.log('---------');
console.log('indexOf()');
console.log('Pomidoras'.indexOf('x'));
console.log('Pomidoras'.indexOf('P'));
console.log('Pomidoras'.indexOf('m'));
console.log('Pomidoras'.indexOf('m'));
console.log('Pomidoras'.indexOf('o'));
//imant paieska nuo kitos pozicijos
console.log('Pomidoras'.indexOf('o', 2));

//kartoja tiek kartu kiek nurodyta
console.log('---------');
console.log('repeat()');
console.log('A'.repeat(10));
console.log('Labas'.repeat(5));
console.log('Labas'.repeat(NaN));
console.log('Labas'.repeat(0));
console.log('Labas'.repeat(3.5));

console.log('------');

//pakeicia pirma kuri randa
console.log('replace()');
console.log('Pomidoras'.replace('P', 'B'));
console.log('Pomidoras'.replace('o', 'x'));
console.log('Pomidoras'.replace('o', '_').replace('o', '_'));
console.log('Pomidoras'.replace('mido', 'uku'));
console.log('Pomidoras'.replace('AAA', 'BBB'));

//pakeicia viska
console.log('------');
console.log('replaceAll');
console.log('Pomidoras'.replaceAll('o', '-'));
console.log('Aaaaa'.replaceAll('a', 'c'));

//nuo kurios pozicijos paimti kas lieka
console.log('------');
console.log('slice()');
console.log('Pyragelis'.slice());
console.log('Pyragelis'.slice(0));
console.log('Pyragelis'.slice(1));
console.log('Pyragelis'.slice(3));
console.log('------');
//paimti nuo galo
const p = 'pyragelis';
console.log(p.slice(-3));
console.log(p.slice(p.length - 3));

console.log('------');
//duodant karpymui pradzia ir pabaiga
//pradzia imtinai, pabaiga neimtinai!
console.log('Pyragelis'.slice(2, 4));