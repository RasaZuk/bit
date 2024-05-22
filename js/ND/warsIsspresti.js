/*
https://www.codewars.com/kata/54147087d5c2ebe4f1000805/train/javascript/66450550eb652e1dffad765f

function _if(bool, func1, func2) {
  if (bool){
    return func1();
  }
  return func2();
}

SUVEIKE!
//kiti variantai
function _if(bool, func1, func2) {
  return bool ? func1() : func2();
}

const _if = (bool, func1, func2) => bool ? func1() : func2();

function _if(bool, func1, func2) {
  if (bool) { func1(); }
  else { func2(); }
}
*/


/*
https://www.codewars.com/kata/53da6d8d112bd1a0dc00008b/train/javascript

function reverseList(list) {
    let number = [];
    for (let i = list.length - 1; i >= 0; i--) {
        //console.log(i, list[i])
        number.push(list[i]);
    }
    return number;
}

//console.log(reversList[1, 2, 3, 4]);

function reverseList(list) {
  return list.reverse();
}

const reverseList = list => list.reverse();


function reverseList(list) {
  return list.slice().reverse();
}

function reverseList(list) {
  var array = [];
  for (var i = list.length-1; i >= 0; i --){
    array.push(list[i]);
  }
  return array;
}

function reverseList(list) {
  return [...list].reverse();
}
*/

/*
https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript


function doubleInteger(i) {
    return i;
}

//variantai
//return i * 2;

//const doubleInteger = i => 2 * i;

//return i+i;

console.log(doubleInteger(5));

*/

/*
https://www.codewars.com/kata/523b623152af8a30c6000027/train/javascript


//const number = 5;

function square(number) {
    return number * number;
}
console.log(square(3));

const square = (n) => n * n;
*/

/*
https://www.codewars.com/kata/555a67db74814aa4ee0001b5/train/javascript

function testEven(n) {
  if (n % 2 == 0) {
    return (true);
  } else {
    return (false);
  }
}

//kitas variantas
function testEven(n) {
  return n % 2 === 0 ? true : false;
}

const testEven = n => !(n % 2);

function testEven(n) {
  //*** THIS IS BEST PRACTICE
  const [integerPart, decimalPart] = n.toString().split(".");
  if (integerPart === "") {
    return false;
  }
  if (decimalPart === undefined) {
    return parseInt(integerPart) % 2 === 0;
  } else if (decimalPart === "" || decimalPart === "0") {
    return parseInt(integerPart) % 2 === 0;
  } else {
    return false;
  }
}
*/

/*
https://www.codewars.com/kata/50654ddff44f800200000007/train/javascript?collection=front-end-by-rimantas-1

function solution(a, b) {
    let solution = (a.length > b.length) ? b + a + b : a + b + a;
    return solution;
}

console.log(solution('45', '1'));
console.log(solution('13', '200'));
console.log(solution('Soon', 'Me'));
console.log(solution('U', 'False'));
*/

/*
https://www.codewars.com/kata/55a996e0e8520afab9000055/train/javascript

function cookie(x) {
    if (typeof x === 'string') {
        return 'Who ate the last cookie? It was Zach!';
    } else if (typeof x === 'number') {
        return 'Who ate the last cookie? It was Monica!';
    } else {
        return 'Who ate the last cookie? It was the dog!';
    }
}

function cookie(x) {
  var t = typeof x
  var who = t=="string" ? 'Zach' : t=="number" ? 'Monica' : 'the dog'
  return `Who ate the last cookie? It was ${who}!`
}


function cookie(x){
  return `Who ate the last cookie? It was ${({string: "Zach", number: "Monica"}[typeof x] || "the dog")}!`;
}

function cookie(x){
  return typeof x == "string" ? "Who ate the last cookie? It was Zach!" : typeof x == "number" ? "Who ate the last cookie? It was Monica!" : "Who ate the last cookie? It was the dog!";
}

cookie = x => `Who ate the last cookie? It was ${x.big ? 'Zach' : x.toFixed ? 'Monica' : 'the dog'}!`
*/

/*
https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript

function removeExclamationMarks(s) {
    return (s.replaceAll('!', ''));
}

//.replace('!', '')

//buvo !!
console.log(removeExclamationMarks("Hello World!!"));
*/
