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
const [n1, n2] = res1;

console.log(res1, n1 + n2);

//su antru 
const res2 = giveMeTwoNumbers();
const [n3, n4] = res2;
console.log(res2, n3 + n4);


