//REVERSE ARRAY METODAI
//let array = [1, 2, 3, 4, 5];

//type1
//let reversedArray = array.reverse();
//console.log('type1', reversedArray);


//type2 for loop
//declare empty loop

//let reversedArray = [];
//for (let i = array.length - 1; i >= 0; i--) {
//    reversedArray.push(array[i])
//}
//console.log('type2', reversedArray);

//TYPE3, map(), unshift()

//let reversedArray = [];
//array.map((value) => reversedArray.unshift(value)
//)
//console.log('type3', reversedArray);

//TYPE4, only map()
//let reversedArray = array.map((value, i) =>
//   array[array.length - i - 1]
//)
//console.log('type4', reversedArray);

//TYPE5, using sloce(), reverse()
//slice returns a shallow copy of the given array
//let reversedArray = array.slice(0, array.length).reverse();
//console.log('type5', reversedArray);

//TYPE6, for ..of, unshift
//let reversedArray = [];
//for (let element of array) {
//    reversedArray.unshift(element)

//console.log('type6', reversedArray);


const text = 'pomidoras';
let reverseText = '';

for (let i = 0; i < text.length; i++) {
    const symbol = text[i];
    reverseText = symbol + reverseText
        ;
}
console.log(text, '---->', reverseText);

//TEKSTO REVERSE su for of
//sukeista ciklo eilute

let reverseText2 = '';

for (const symbol of text) {
    reverseText2 = symbol + reverseText2;
}

console.log(text, '---->', reverseText2);

//susumuoti masyvo visus narius
//rekom. parasyt 0 
const marks = [10, 2, 4, 6, 8];
const sum = marks.reduce((tarpineSuma, item) => tarpineSuma + item, 0);
console.log(sum);

//SUDETI STRINGU SIMBOLIU SUMA
const dict = ['labas', 'rytas', 'sakau', 'tau', 'Lietuva'];
const symbolsIsInDict = dict.reduce((t, w) => t + w.length, 0);
console.log(symbolsIsInDict);

//atvaizduoti pirmas raides
const firstLetters = dict.reduce((t, w) => t + w[0], '');
console.log(firstLetters);

const firstLetters2 = dict.reduce((t, w) => t + w[0], 'Pirmos raides:');
console.log(firstLetters2);


//suskaiciuoti KIEK masyve yra teigiamu skaiciu
let array = [1, 2, 5, -5, 9, -4];

for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        sum++;
    }
    return sum;
}

// suskaiciuoti visus TEIGIAMUS skaicius
for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        sum += array[i];
    }
    return sum;
}

//NEIGIAMU skaiciu kvardratu suma
for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
        sum += array[i] ** 2;
    }
    return sum;
}

//kiek skaiciu patenka i intervala 25-75 IMTINAI
let range = 0;
if (array[i] >= 25 && array[i] <= 75) {   //patikrina kiek is ju tenkina salygas
    range++     // grazina kiek is ju atitinka salygas
}

//kiek skaiciu yra 0-iniai
function nuliniai(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            count++;
        }
        return count;
    }

    //kiek skaiciu dalinasi is 3 be liekanos
    function liekana(array) {
        let count = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 3 === 0) {
                count++; //kiek skaiciu
            }
            return count;
        }

        //NEIGIAMU skaiciu vidurki
        function vidurkis(array) {
            let count = 0;
            let sum = 0;
            let average = 0;
            for (let i = 0; i < array.length; i++) {
                if (array[i] < 0) {
                    count++;
                    sum += array[i;]
                }
                return sum / count;
            }