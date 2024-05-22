/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

//sitas objektas jau yra JavaScript'e

//konstantos
console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT2);

//metodas yra kaip funkcija!!!
//Math bibliotekos metodai

console.log('.abs - absoliutine verte');
//skaicius be zenklo(numeta minusa)
console.log(Math.abs(7));
console.log(Math.abs(-7));
console.log(Math.abs(-3.14));
console.log(Math.abs(-Math.PI));
console.log(Math.abs(Math.PI));

console.log('.cbrt');
//kubine saknis, 
console.log(Math.cbrt(8));
console.log(Math.cbrt(27));
console.log(Math.cbrt(125));

console.log('.ceil ----- lubos');
//lubos, apvalina i virsu (iki arciausio sveiko desineje)
console.log(Math.ceil(5));
console.log(Math.ceil(0));
console.log(Math.ceil(-5));
console.log(Math.ceil(3.14));
console.log(Math.ceil(-3.14));

console.log('.floor ----grindys');
//jei duodi sveikus tai grista sveiki
//jei teigiamas - grizta mazesnis (apvalinamas i mazesne puse, kaire)
console.log(Math.floor(5));
console.log(Math.floor(0));
console.log(Math.floor(-5));
console.log(Math.floor(3.9));
console.log(Math.floor(-3.14));

console.log('.round ----- apvalinimas');
//matematinis apvalinimas, nuo 0.5 i virsu
console.log(Math.round(5));
console.log(Math.round(0));
console.log(Math.round(-5));
console.log(Math.round(-3.14));

console.log(Math.round(3.0001));
console.log(Math.round(3.49999));
console.log(Math.round(3.5));
console.log(Math.round(3.5001));
console.log(Math.round(3.9999));

console.log('.trunc -----lieka sveikoji dalis');
//nuima po kablelio, pasilieka tik sveikaja dali
console.log(Math.trunc(5));
console.log(Math.trunc(0));
console.log(Math.trunc(-5));
console.log(Math.trunc(-3.0001));
console.log(Math.trunc(-3.49999));
console.log(Math.trunc(-3.5));
console.log(Math.trunc(-3.5001));
console.log(Math.trunc(-3.9999));

console.log('.exp ----- ');
//grazina laipsnio rodikli??
console.log(Math.exp(2));
console.log(Math.E ** 2);

console.log('.fround -----');
//neaiski paskirtis
console.log(Math.fround(5));
console.log(Math.fround(0));
console.log(Math.fround(-5));
console.log(Math.fround(3.1415));
console.log(Math.fround(-3.1415));

console.log('.hypot -----saknis');
//istraukia sakni, neribotas kiekis skaiciu
console.log(Math.hypot());
console.log(Math.hypot(3, 4));
//analogiskai .hypot
//console.log(Math.sqrt(3**2 + 4 **2));
console.log(Math.hypot(1, 1, 1, 1));
console.log(Math.hypot(2, 2, 2, 2));

console.log('.imul -----');
//returnina 32-ju bitu
console.log(Math.imul(10, 17));

console.log('.max -----');
console.log(Math.max(1, 3));
console.log(Math.max(-1, -3));
console.log(Math.max(-1, -3, 2, 5, 9));

console.log('.min -----');
//nepriima MASYVO!
console.log(Math.min(1, 3));
console.log(Math.min(-1, -3, 2, 5, 9));

console.log('.pow -----');
//kelimas laipsniu
console.log(Math.pow(2, 3));
//tas pats 
//console.log(2 ** 3);

console.log('.random -----atsitiktiniai skaiciai');
//intervale nuo [0 iki 10)
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

console.log('.sign --------');
console.log(Math.sign(5));
console.log(Math.sign(-5));
console.log(Math.sign(3.1415));
console.log(Math.sign(-3.1455));
console.log(Math.sign(0));
console.log(Math.sign(-0));
//-2, -1, -0, 0, 1, 2, 3
console.log(Math.sign(Infinity));
console.log(Math.sign(-Infinity));
console.log(Math.sign(NaN));

console.log('.sqrt --------');
//istraukia kvadratine sakni
console.log(Math.sqrt(4));
console.log(Math.sqrt(9));
console.log(Math.sqrt(81));
console.log(Math.sqrt(-4), '2i');
console.log(Math.sqrt(-81), '9i');
// minusiniai skaiciai saknies - menamieji skaiciai
// i*i = -1


