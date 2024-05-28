/* 
DESTRUKTURIZAVIMAS
gimininga siela - spread
*/

const a = [10, 2, 8, 4, 6];
//pirma masyvo reiksme
const first = a[0];
//antra reiksme
const second = a[1];
//visos likusios nuo 2
const rest = a.slice(2);

console.log(first);
console.log(second);
console.log(rest);

//antras masyvas
const b = [10, 2];
//antro masyvo pirma reiksme
const first2 = b[0]
//antro masyvo antra reiksme
const second2 = b[1]
//likusieji antro masyvo (atvaizduoja tik skliaustelius nes po 2 nieko nera)
const rest2 = b.slice(2);

console.log(first2);
console.log(second2);
console.log(rest2);

//galima parasyt trumpiau
const dict = ['labas', 'rytas', 'Lietuva', 'sakau', 'tau'];
const [word1, word2, ...restOfDict] = dict;
console.log(word1);
console.log(word2);
console.log(restOfDict);
//kad gauti pirma/antra reiksme is zodyno tiesiog apgaubti [] (to tipo skliaustai)
//jei dict [], tai ir reiksmes [], vadinasi destrukturizavimas
//uzrasoma kaireje lygybes puseje
//! visada imasi is eiles!
// ...restOf - surenka visas likusias reiksmes

function giveMeTwoNumbers() {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    return [a, b];
}
//destrukturizuojam kintamuosius
const res1 = giveMeTwoNumbers();
//n1 - pirmasis kintamasis, n2 - antrasis
//const [n1, n2] = res1;
//tuomet res1 is karto restrukturizuojama ir gaunasi
//tokiu atveju negalima pamatyti originalaus masyvo
//su salyga, kad zinom jog grizo masyvas arba objektas
const [n1, n2] = giveMeTwoNumbers();
console.log(n1 + n2);


//su antru
//galima pamatyti originalu masyva 'res2' 
const res2 = giveMeTwoNumbers();
const [n3, n4] = res2;
console.log(res2, n3 + n4);

//pvz su objektu
const person = {
    name: 'Ona',
    age: 66,
    isMarried: true,
};

//papildoma taisykle objektams!
//objekte susije raktiniais rysiais {} ir keisti negalima
//issitraukimo eiliskuma galima rinktis, bet raktu keisti negalima
const { age, name, ...restDetails } = person;
console.log(age);
console.log(name);
console.log(restDetails);  //surinks viska kas ne destrukt.
//jei nieko nera objekte atsakyma paraso tiesiog sklausteliais {}


function food() {
    const list = [
        { title: 'cepelinai', count: 2 },
        { title: 'Saltibarsciai', count: 1 },
        { title: 'svogunu lasikai', count: 10 },
    ]
    return list[Math.floor(Math.random() * list.length)];
}

const { title, count } = food();
const sentence1 = `Valgysi: ${title}; Kiekis: ${count}.`

console.log(sentence1);

// leidzia viena karta destruk. su tokia struktura
//reikia susikurti antra 
const f2 = food();
const title2 = f2.title;
const count2 = f2.count;
const sentence2 = `Valgysi: ${title2}; Kiekis: ${count2}.`
console.log(sentence2);

// norint priskiriti kita pavadinima darbui su objektu
//const { title: kitasPavadinimas } = food;
//console.log(kitasPavadinimas);

//norint generuoti daugiau sukuriama taip
//taip yra tik su objetais
//const { title: f1Title, count: f1Count } = food;
//const sentence2 = `Valgysi: ${title2}; Kiekis: ${count2}.`
//console.log(sentence2);

//i funkcijos parametrus galima irasyti ...x ir subegs visi parametrai

console.clear();


//...list i si kintamaji buvo surinkti VISI parametrai
function drinks(...list) {
    return `Gerimu kiekis: ${list.length}.`;
}

console.log(drinks('a', 'b', 'c'))

function iLike(name, ...list) {
    //...list turi buti tik vienas ir visada paskutinis
    //...list pateikia reiksmes !
    return `${name} megsta ${list.length} spalvas.`;
}
console.log(iLike('Jonas', 'red', 'blue'));
console.log(iLike('Maryte', 'white', 'black', '50greys'));
console.log(iLike('Petras'));

function nextFunc(a, b, c, ...restParams) {
    return null;
}

//KO NEGALIMA ! ...rest jau ne paskutinis
//function nextFunc(a, b, c, ...restParams, d) {
//return null;
//}


console.log('----NAUJI PAVYZDZIAI---- ')
console.log(Math.max(10, 7));
console.log(Math.min(10, 7));

const marks = [10, 2, 8, 4, 6];
console.log(Math.max(...marks));
console.log(Math.min(...marks));
//... numeta masyvo skliaustus ir mato pavienes reiksmes


