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

