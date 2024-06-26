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


/*
https://www.codewars.com/kata/50ee6b0bdeab583673000025/train/javascript



const a = 'code';
const b = "wa.rs";
const name = a + b;


console.log(name);
//console.log(name, "codewa.rs");

*/

/*
https://www.codewars.com/kata/53af2b8861023f1d88000832/train/javascript

function areYouPlayingBanjo(name) {
  if (name.startsWith('r')) {
    return name + ' plays banjo';
  } else if (name.startsWith('R')) {
    return name + ' plays banjo';
  } else {
    return name + ' does not play banjo';
  }
  return name;
}

console.log(areYouPlayingBanjo("Adam"));
console.log(areYouPlayingBanjo("Paul"));
console.log(areYouPlayingBanjo("Ringo"));
console.log(areYouPlayingBanjo("bravo"));
console.log(areYouPlayingBanjo("rolf"));

function areYouPlayingBanjo(name) {
  if (name[0].toLowerCase() === 'r') {
    return name + ' plays banjo';
  } else {
    return name + ' does not play banjo';
  }
}

function areYouPlayingBanjo(name) {
  // Implement me
  if (name[0] == 'R' || name[0] == 'r')
    return name + " plays banjo";
  else
    return name + " does not play banjo";
}

function areYouPlayingBanjo(name) {
  return name[0].toLowerCase() == "r" ? name + " plays banjo" : name + " does not play banjo";
}


const areYouPlayingBanjo = name => name.startsWith('R') || name.startsWith('r') ? `${name} plays banjo` : `${name} does not play banjo`

*/

/*
https://www.codewars.com/kata/514aa0dc21607ae236000017/train/javascript

let name = 'Abe'

const greetAbe = () => 'Hello, ' + name + '!'

let name1 = 'Ben'

const greetBen = () => 'Hello, ' + name1 + '!'


console.log(greetAbe());
console.log(greetBen());

const greet = name =>
    () => `Hello, ${name}!`;
const greet_abe = greet(`Abe`);
const greet_ben = greet(`Ben`);


console.log('isreiksta per array');

const arr = ['Abe', 'Ben']

const greet_abe = function () {
    return "Hello, " + arr[0] + '!';
};

const greet_ben = function () {
    return "Hello, " + arr[1] + '!';
};
*/

/*
  https://www.codewars.com/kata/514a7ac1a33775cbb500001e/train/javascript

function mystery() {
  let results = { sanity: 'Hello' };
  return results;
}
console.log(mystery(), 'Mystery has not returned to sanity');
*/

/*
  https://www.codewars.com/kata/51c8991dee245d7ddf00000e/train/javascript

let array = ["The greatest victory is that which requires no battle"];
const myArray = array.split();

function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
}

const reverseWords = (str) => str.split(" ").reverse().join(" ");

function reverseWords(str) {
  return str.trim().split(' ').reverse().join(' ');
}

function reverseWords(str) {
    let reverse = [];
    let words = str.split(" ");
    for (let i = words.length - 1; i >= 0; i--) {
        reverse.push(words[i]);
    }
    return reverse.join(" ")
}


//reverseWords = s => s.split(' ').reverse().join(' ')

console.log(reverseWords("hello world!"));
console.log(reverseWords("yoda doesn't speak like this"), "this like speak doesn't yoda")
//console.log(reverseWords("foobar()"));
//console.log(reverseWords("kata editor"));
//console.log(reverseWords("row row row your boat"), "boat your row row row")
//console.log(reverseWords(""), "")
*/

/*
https://www.codewars.com/kata/56dec885c54a926dcd001095


function opposite(number) {
    return (-number);

}

console.log(opposite(1));
console.log(opposite(0));
console.log(opposite(4.25));
console.log(opposite(-12525220.3325));
*/


/*
https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/javascript


function areaOrPerimeter(a, b) {
    if (a !== b) {
        result = (a + b) * 2;
    } else {
        result = a * a;
    }
    return result;
}

const areaOrPerimeter = function (l, w) {
    return l === w ? l * w : 2 * (l + w)
};

const areaOrPerimeter = (l, w) => l === w ? l * w : 2 * (l + w);



const areaOrPerimeter = function (l, w) {
    if (w == l) {
        return w * l;
    }
    else {
        return 2 * l + 2 * w;
    }
};


console.log(areaOrPerimeter(3, 3));
console.log(areaOrPerimeter(6, 10));

*/


/*
https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript



function century(year) {
    let number = Math.ceil(year / 100);
    return number;
}
console.log(century(1705));
console.log(century(1900));
console.log(century(1601));
console.log(century(2000));
console.log(century(89));


const century = year => year % 100 === 0 ? parseInt(year / 100) : parseInt(year / 100) + 1;

const century = year => Math.ceil(year / 100);
*/


/*
https://www.codewars.com/kata/515e188a311df01cba000003/train/javascript?collection=front-end-by-rimantas-1


function getPlanetName(id) {
  let name = id;
  switch (name) {
    case 1:
      name1 = 'Mercury'
      break;
    case 2:
      name2 = 'Venus'
      break;
    case 3:
      name3 = 'Earth'
      break;
    case 4:
      name4 = 'Mars'
      break;
    case 5:
      name5 = 'Jupiter'
      break;
    case 6:
      name6 = 'Saturn'
      break;
    case 7:
      name7 = 'Uranus'
      break;
    case 8:
      name8 = 'Neptune'
  }
  return name;
}


console.log(getPlanetName(2));
//console.log(getPlanetName(5));
//console.log(getPlanetName(3));


function getPlanetName(id) {
  return {
    1: 'Mercury',
    2: 'Venus',
    3: 'Earth',
    4: 'Mars',
    5: 'Jupiter',
    6: 'Saturn',
    7: 'Uranus',
    8: 'Neptune'
  }[id]
}

const getPlanetName = id => ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'][id - 1];

function getPlanetName(i) {
  return (['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'])[i - 1];
}

*/

/*https://www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript


function well(x) {
    let count = 0;

    for (const idea of x) {
        if (idea === 'good')
            count++;
    }
    if (count === 0) {
        return 'Fail!';
    } else if (count < 3) {
        return 'Publish!';
    } else {
        return 'I smell a series!';
    }
}

const well = x => {
    const good_count = x.filter(x => x == 'good').length;
    return good_count < 1 ? 'Fail!' :
        good_count < 3 ? 'Publish!' : 'I smell a series!';
}


function well(x) {
    const count = x.reduce((s, v) => s + (v == 'good'), 0);
    return count ? count > 2 ? 'I smell a series!' : 'Publish!' : 'Fail!';
}

const well = x => {
    let count = x.filter(el => el == 'good').length
    return count > 2 ? 'I smell a series!' : count > 0 ? 'Publish!' : 'Fail!';
}

const well = x => x.includes('good') ? x.filter(s => s == 'good').length < 3 ? 'Publish!' : 'I smell a series!' : 'Fail!';

function well(x) {
    let res = []
    res = x.filter(el => el == 'good')
    if (res.length > 2) {
        return 'I smell a series!'
    } else if (res.length > 0 && res.length <= 2) {
        return 'Publish!'
    } else if (res.length < 1) {
        return 'Fail!'
    }
}

function well(x) {
    let y = x.filter(el => el == 'good').length;
    if (y > 0 && y < 3) {
        return 'Publish!';
    } else if (y > 2) {
        return 'I smell a series!';
    } else { return 'Fail!'; }
};

const well = x => {
    let ideas = x.filter(y => y === 'good').length
    switch (true) {
        case ideas == 0: return 'Fail!'; break;
        case ideas < 3: return 'Publish!'; break;
        case ideas > 2: return 'I smell a series!'
    }

}

console.log(well(['bad', 'bad', 'bad']));
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']));
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']));
*/

/*
https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript



function bmi(weight, height) {
    let bmi = weight / (height ** 2);
    if (bmi <= 18.5) {
        return "Underweight";
    } else if (bmi > 18.5 && bmi <= 25.0) {
        return "Normal";
    } else if (bmi > 25 && bmi <= 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}


console.log(bmi(80, 1.80));
console.log(bmi(70, 1.63));

const bmi = (w, h, bmi = w / h / h) => bmi <= 18.5 ? "Underweight" :
    bmi <= 25 ? "Normal" :
        bmi <= 30 ? "Overweight" : "Obese";


function bmi(weight, height) {
    let bmi = weight / (height * height);
    switch (true) {
        case bmi <= 18.5:
            return "Underweight";
        case bmi <= 25.0:
            return "Normal";
        case bmi <= 30.0:
            return "Overweight";
        case bmi > 30:
            return "Obese";
    }
}

function bmi(weight, height) {
    const bmi = weight / (height * height);
    if (bmi <= 18.5) return "Underweight";
    if (bmi <= 25) return "Normal";
    if (bmi <= 30) return "Overweight";
    return "Obese";
}
*/


/*
https://www.codewars.com/kata/57a083a57cb1f31db7000028/train/javascript
*/

/*
function powersOfTwo(n) {
  const arr = [];
  for (let i = 0; i <= n; i++)
    arr.push(Math.pow(2, i))
  return arr;
}

console.log(powersOfTwo(0));
console.log(powersOfTwo(1));
console.log(powersOfTwo(4));

function powersOfTwo(n) {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push(2 ** i);
  }
  return arr;
}

// map method
const powersOfTwo = n => Array(n + 1).fill(2).map((e, i) => e ** i)
*/

/* reverse is Violetos
https://www.codewars.com/kata/5168bb5dfe9a00b126000018

function solution(str) {
    return str.split('').reverse().join('');
}

console.log(solution('world'));
console.log(solution('hello'));
console.log(solution(''));
console.log(solution('h'));

*/

/*
https://www.codewars.com/kata/5808dcb8f0ed42ae34000031/train/javascript


function switchItUp(number) {
    switch (number) {
        case 1:
            return 'One';
            break;
        case 2:
            return 'Two';
            break;
        case 3:
            return 'Three';
            break;
        case 4:
            return 'Four';
            break;
        case 5:
            return 'Five';
            break;
        case 6:
            return 'Six';
            break;
        case 7:
            return 'Seven';
            break;
        case 8:
            return 'Eight';
            break;
        case 9:
            return 'Nine';
            break;
        case 0:
            return 'Zero';
            break;
    }
}

console.log(switchItUp(1));
console.log(switchItUp(3));
console.log(switchItUp(5));

function switchItUp(number) {
    switch (number) {
        case 0: return 'Zero';
        case 1: return 'One';
        case 2: return 'Two';
        case 3: return 'Three';
        case 4: return 'Four';
        case 5: return 'Five';
        case 6: return 'Six';
        case 7: return 'Seven';
        case 8: return 'Eight';
        case 9: return 'Nine';
    }
}

function switchItUp(n) {
    return ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"][n]
}

const switchItUp = number =>
    [`Zero`, `One`, `Two`, `Three`, `Four`, `Five`, `Six`, `Seven`, `Eight`, `Nine`][number];

*/


/*
https://www.codewars.com/kata/523b4ff7adca849afe000035/train/javascript


function greet() {
    return "hello world!";
}

const greet = () => "hello world!";



//assert.strictEqual(greet(), "hello world!");
console.log(greet());
*/

/*
https://www.codewars.com/kata/583710ccaa6717322c000105/train/javascript


function simpleMultiplication(number) {
    if (number % 2 === 0) {
        return number * 8;
    }
    else {
        return number * 9;
    }
}

console.log(simpleMultiplication(2));
console.log(simpleMultiplication(1));
console.log(simpleMultiplication(8));
console.log(simpleMultiplication(4));
console.log(simpleMultiplication(5));

function simpleMultiplication(n) {
    return n * (n % 2 ? 9 : 8);
}

function simpleMultiplication(n) {
    return n % 2 == 0 ? n * 8 : n * 9
}
*/

/*
https://www.codewars.com/kata/56200d610758762fb0000002/train/javascript


function addFive(num) {
    let total = num + 5;
    return total;
}
console.log(addFive(5));
console.log(addFive(0));
console.log(addFive(-5));

const addFive = n => n + 5;

const addFive = (num) => num + 5;

function addFive(num) {
    return num += 5;
}
*/

/*
https://www.codewars.com/kata/55a5bfaa756cfede78000026/train/javascript


function problem(x) {
    if (typeof x === 'number') {
        return ((x * 50) + 6);
    } else {
        return 'Error';
    }
}

console.log(problem("hello"));
console.log(problem(1));
console.log(problem(5));
console.log(problem(0));
console.log(problem(1.2));
console.log(problem(3));
console.log(problem("RyanIsCool"));
console.log(problem(-3));
console.log(problem(""));
console.log(problem(0.03));

const problem = x => typeof x === 'string' ? 'Error' : x * 50 + 6;

function problem(x) {
    return typeof x === "number" ? x * 50 + 6 : "Error";
}
*/

/*
https://www.codewars.com/kata/5a023c426975981341000014/train/javascript


function otherAngle(a, b) {
    return (180 - (a + b));
}

console.log(otherAngle(30, 60));
console.log(otherAngle(60, 60));
console.log(otherAngle(43, 78));
console.log(otherAngle(10, 20));

const otherAngle = (a, b) => 180 - a - b

function otherAngle(a, b) {
    return 180 - a - b;
}
*/

/*
https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/javascript


function hero(bullets, dragons) {
    return bullets / 2 >= dragons;
}

console.log(hero(10, 5));
console.log(hero(7, 4), false);
console.log(hero(4, 5), false);
console.log(hero(100, 40), true);
console.log(hero(1500, 751), false);
console.log(hero(0, 1), false);

function hero(bullets, dragons) {
    return bullets >= dragons * 2
}

function hero(bullets, dragons) {
    return (bullets / 2 >= dragons) ? true : false;
}

hero = (bullets, dragons) => {
    if (bullets / 2 >= dragons) {
        return true;
    }
    else {
        return false;
    }
}

*/


/*
https://www.codewars.com/kata/595970246c9b8fa0a8000086/train/javascript


function capitalizeWord(word) {
    return word.charAt(0).toUpperCase([0]) + word.slice(1);
}

console.log(capitalizeWord('word'));
console.log(capitalizeWord('i'));
console.log(capitalizeWord('glasswear'));

const capitalizeWord = word => word[0].toUpperCase() + word.slice(1);

*/

/*
https://www.codewars.com/kata/596fba44963025c878000039


function contamination(text, char) {
    return char.repeat(text.length);
}


console.log(contamination("abc", "z"))
console.log(contamination("", "z"))
console.log(contamination("abc", ""))
console.log(contamination("_3ebzgh4", "&"))
console.log(contamination("//case", " "))

function contamination(text, char) {
    return text.split("").fill(char).join("");
}

const contamination = (s, v) => s.replace(/./g, v);

const contamination = (text, char) => char.repeat(text.length);

*/

/*
https://www.codewars.com/kata/5625618b1fe21ab49f00001f/train/javascript

function sayHello(name) {
    return 'Hello, ' + name;
}

console.log(sayHello('Mr. Spock'))
console.log(sayHello('Captain Kirk'))
console.log(sayHello('Liutenant Uhura'))
console.log(sayHello('Dr. McCoy'))

const sayHello = name => `Hello, ${name}`;

function sayHello(name) {
    return `Hello, ${name}`
}

const sayHello = n => `Hello, ${n}`;

*/


/*
https://www.codewars.com/kata/55225023e1be1ec8bc000390/train/javascript



function greet(name) {
    if (name === "Johnny") {
        return "Hello, my love!";
    } else {
        return "Hello, " + name + "!";
    }
}

console.log(greet("Jim"));
console.log(greet("Jane"));
console.log(greet("Simon"));
console.log(greet("Johnny"));


function greet(name) {
    if (name === "Johnny")
        return "Hello, my love!";
    return "Hello, " + name + "!";
}

let greet = name => `Hello, ${name == "Johnny" ? "my love" : name}!`;

function greet(name) {
    return name === "Johnny" ? "Hello, my love!" : "Hello, " + name + "!";
}

const greet = name => `Hello, ${name === 'Johnny' ? 'my love' : name}!`;
*/


/*
https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd/train/javascript


function paperwork(n, m) {
    if (n > 0 && m > 0) {
        return n * m;
    } else if (n <= 0 || m <= 0) {
        return 0;
    }

}

console.log(paperwork(5, 5));
console.log(paperwork(5, -5));
console.log(paperwork(-5, -5));
console.log(paperwork(-5, 5));
console.log(paperwork(5, 0));

function paperwork(n, m) {
    return n > 0 && m > 0 ? n * m : 0
}

const paperwork = (n, m) => n < 0 || m < 0 ? 0 : n * m
*/

/*
https://www.codewars.com/kata/56170e844da7c6f647000063/train/javascript


function peopleWithAgeDrink(old) {
    if (old < 14) {
        return 'drink toddy';
    } else if (old >= 14 && old < 18) {
        return 'drink coke';
    } else if (old >= 18 && old < 21) {
        return 'drink beer';
    } else if (old >= 21) {
        return 'drink whisky';
    }
};



console.log(peopleWithAgeDrink(22));
console.log(peopleWithAgeDrink(13));
console.log(peopleWithAgeDrink(17));
console.log(peopleWithAgeDrink(18));
console.log(peopleWithAgeDrink(20));


const peopleWithAgeDrink = (age) =>
    age < 14 ? "drink toddy" :
        age < 18 ? "drink coke" :
            age < 21 ? "drink beer" : "drink whisky"


var peopleWithAgeDrink = function (old) {
    if (old >= 21) return 'drink whisky';
    if (old >= 18) return 'drink beer';
    if (old >= 14) return 'drink coke';
    return 'drink toddy';
};

const peopleWithAgeDrink = (age) => {
  switch (true) {
    case (age >= 21): return 'drink whisky'
    case (age >= 18): return 'drink beer'
    case (age >= 14): return 'drink coke'
    default: return 'drink toddy'
  }
};

var drinkAbout = [
    { ageMin: 0, ageMax: 14, drink: 'toddy' },
    { ageMin: 14, ageMax: 18, drink: 'coke' },
    { ageMin: 18, ageMax: 21, drink: 'beer' },
    { ageMin: 21, ageMax: 999, drink: 'whisky' }];

var peopleWithAgeDrink = function (old) {
    return "drink " + drinkAbout.filter(a => a.ageMin <= old && a.ageMax > old)[0].drink;
};

*/

/*
https://www.codewars.com/kata/551b4501ac0447318f0009cd/train/javascript


function booleanToString(b) {
    return b.toString();
}

function booleanToString(b) {
    return String(b);
}


function booleanToString(b) {
    return `${b}`
}
console.log(booleanToString(true));
console.log(booleanToString(false));


function booleanToString(b) {
    if (typeof b == 'boolean') {
        return String(b);
    }
}
*/

/*
https://www.codewars.com/kata/55cbc3586671f6aa070000fb/train/javascript


function checkForFactor(base, factor) {
    return base % factor === 0;
}


console.log(checkForFactor(10, 2));
console.log(checkForFactor(63, 7));;
console.log(checkForFactor(2453, 5));
console.log(checkForFactor(24617, 3));

const checkForFactor = (base, factor) => base % factor === 0;

*/

/*
https://www.codewars.com/kata/57cc975ed542d3148f00015b/train/javascript


function check(a, x) {
    if check(Array.isArray([a]));
    return true;
} else {
    return false;
}


console.log(check([66, 101], 66));
//console.log(check([101, 45, 75, 105, 99, 107], 107), true);
//console.log(check(['t', 'e', 's', 't'], 'e'), true);
//console.log(check(['what', 'a', 'great', 'kata'], 'kat'), false);

*/

/*
https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript


const countSheeps = arrayOfSheeps => arrayOfSheeps.filter(Boolean).length;


function countSheeps(arrayOfSheep) {
   
    let num = 0;

    for (let i = 0; i < arrayOfSheep.length; i++)
        if (arrayOfSheep[i] == true)
            num++;
    return num;
}

function countSheeps(arr) {
    return arr.filter(Boolean).length;
}

let countSheeps = x => x.filter(s => s).length;

*/

/*
https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript


function getAverage(array) {
    let total = 0;
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
        count++;
    }
    return Math.floor(total / count);
}

console.log(getAverage([2, 2, 2, 2]));
console.log(getAverage([1, 2, 3, 4, 5]));
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]));

function getAverage(marks) {
    return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
}
*/

/*
https://www.codewars.com/kata/55c28f7304e3eaebef0000da/train/javascript

function createArray(number) {
    let newArray = [];
    for (let counter = 1; counter <= number; counter++) {
        newArray.push(counter);
    }
    return newArray;
}

console.log(createArray(1));
console.log(createArray(2));
console.log(createArray(3));
console.log(createArray(4));
console.log(createArray(5));

const createArray = n => Array(...Array(n)).map((v, i) => i + 1);
*/

/*
https://www.codewars.com/kata/55f73be6e12baaa5900000d4/train/javascript

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

console.log(goals(0, 0, 0));
console.log(goals(43, 10, 5));

const goals = (a, b, c) => a + b + c;

const goals = (...goalsArray) => goalsArray.reduce((a, b) => a + b);
*/

/*
https://www.codewars.com/kata/54d1c59aba326343c80000e7/train/javascript

const solve = (x, y) => x / y;

console.log(solve(2, 1));
console.log(solve(2, 4));
console.log(solve(42, 0));
console.log(solve(0, 8), 0);
console.log(solve(4.2, 1), 4.2);
console.log(solve(9999, 11), 909);

function solve(x, y) {
    return (y == 0) ? Infinity : (x / y);
}

solve = (a, b) => a / b

function solve(x, y) {
    if (y == 0) {
        return Infinity
    } else {
        return x / y
    }
}
*/


/*
https://www.codewars.com/kata/55c90cad4b0fe31a7200001f/train/javascript


function buildString(...template) {
    return `I like ${template.join(', ')}!`;
}

console.log(buildString('Cheese', 'Milk', 'Chocolate'), 'I like Cheese, Milk, Chocolate!');
console.log(buildString('Cheese', 'Milk'), 'I like Cheese, Milk!');
console.log(buildString('Chocolate'), 'I like Chocolate!');

const buildString = (...template) => `I like ${template.join(', ')}!`;
*/


/*
https://www.codewars.com/kata/57158fb92ad763bb180004e7/train/javascript

function rainAmount(mm) {
    if (mm < 40) {
        return "You need to give your plant " + (40 - mm) + "mm of water"
    } else {
        return "Your plant has had more than enough water for today!"
    }
}
console.log(rainAmount(100));
console.log(rainAmount(39));

function rainAmount(mm) {
    return mm < 40 ? `You need to give your plant ${40 - mm}mm of water` : "Your plant has had more than enough water for today!"
}

function rainAmount(mm) {
    if (mm < 40) {
        return `You need to give your plant ${40 - mm}mm of water`;
    } else {
        return "Your plant has had more than enough water for today!";
    }
}


const rainAmount = (mm) => {
    return mm < 40
        ? `You need to give your plant ${40 - mm}mm of water`
        : 'Your plant has had more than enough water for today!'
};

*/

/*
https://www.codewars.com/kata/523b623152af8a30c6000027/train/javascript


function square(number) {
    return number * number;
}

console.log(square(3));

const square = (n) => n * n;

function square(x) {
    return x ** 2;
}
*/

/*
https://www.codewars.com/kata/571edd157e8954bab500032d/train/javascript


let v1 = 50,
    v2 = 100,
    v3 = 150,
    v4 = 200,
    v5 = 2,
    v6 = 250;

function equal1() {
    let a = v1,
        b = v1;
    return a + b;
}

//Please refer to the example above to complete the following functions
function equal2() {
    let a = v4, //set number value to a
        b = v2; //set number value to b
    return a - b;
}

function equal3() {
    let a = v1, //set number value to a
        b = v5; //set number value to b
    return a * b;
}

function equal4() {
    let a = v4, //set number value to a
        b = v5; //set number value to b
    return a / b;
}


function equal5() {
    let a = v6, //set number value to a
        b = v3; //set number value to b
    return a % b;
}


console.log(equal1());
console.log(equal2());
console.log(equal3());
console.log(equal4());
console.log(equal5());
*/

/*
https://www.codewars.com/kata/571edea4b625edcb51000d8e/train/javascript

let a1 = "A", a2 = "a", b1 = "B", b2 = "b", c1 = "C", c2 = "c", d1 = "D", d2 = "d", e1 = "E", e2 = "e", n1 = "N", n2 = "n"
function Dad() {
    //select some variable to combine "Dad"
    return d1 + a2 + d2;
}
function Bee() {
    //select some variable to combine "Bee"
    return b1 + e2 + e2;
}
function banana() {
    //select some variable to combine "banana"
    return b2 + a2 + n2 + a2 + n2 + a2;
}

//answer some questions if you finished works above
function answer1() {
    //the answer should be "yes" or "no"
    return "";
}
function answer2() {
    //the answer should be "yes" or "no"
    return "";
}
function answer3() {
    //the answer should be "yes" or "no"
    return "";
}

console.log(Dad());
console.log(Bee());
console.log(banana());

*/

/*
https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1/train/javascript



function arrayMadness(a, b) {
    let resultOne = a.map(x => x ** 2);
    console.log(resultOne);

    let resultTwo = b.map(x => x ** 3);
    console.log(resultTwo);

    const sumOfResultOne = resultOne.reduce((acc, cur) => acc + cur, 0);
    const sumOfResultTwo = resultTwo.reduce((acc, cur) => acc + cur, 0);

    if (sumOfResultOne > sumOfResultTwo) {
        return true;
    } else if (sumOfResultTwo > sumOfResultOne) {
        return false;
    }
}

const arrayMadness = (a, b) => a.reduce((acc, x) => acc + x ** 2, 0) > b.reduce((acc, x) => acc + x ** 3, 0)

console.log(arrayMadness([4, 5, 6], [1, 2, 3]), true);
console.log(arrayMadness([5, 6, 7], [4, 5, 6]), false);
console.log(arrayMadness([4, 5, 6], [3, 4, 5]), false);
console.log(arrayMadness([3, 4, 5], [2, 3, 4]), false);
console.log(arrayMadness([2, 3, 4], [1, 2, 3]), false);
console.log(arrayMadness([1, 2, 3], [0, 1, 2]), true);
console.log(arrayMadness([5, 3, 2, 4, 1], [15]), false);
console.log(arrayMadness([2, 5, 3, 4, 1], [3, 3, 3, 3, 3]), false);
console.log(arrayMadness([1, 3, 5, 2, 4], [2, 2, 2, 2, 2, 2, 2, 1]), false);
console.log(arrayMadness([1, 2, 3, 4, 5], [2, 2, 2, 2, 2, 2, 1, 1, 1]), true);
console.log(arrayMadness([2, 4, 6, 8, 10, 12, 14], [1, 3, 5, 7, 9, 11, 13]), false);

function arrayMadness(a, b) {
    return a.reduce((sum, el) => sum + el ** 2, 0) >
        b.reduce((sum, el) => sum + el ** 3, 0);
}

function arrayMadness(a, b) {
    return a.reduce((x, y) => x + y ** 2, 0) > b.reduce((x, y) => x + y ** 3, 0) ? true : false
}
*/

/*
https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

function positiveSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            sum += arr[i];
        }
    }
    return sum;
}
console.log(positiveSum([1, 2, 3, 4, 5]), 15);
console.log(positiveSum([1, -2, 3, 4, 5]), 13);
console.log(positiveSum([]), 0);
console.log(positiveSum([-1, -2, -3, -4, -5]), 0);
console.log(positiveSum([-1, 2, 3, 4, -5]), 9);
*/

/*
https://www.codewars.com/kata/5865918c6b569962950002a1


function strCount(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}

function strCount(str, letter) {
    return str.split(letter).length - 1
}

console.log(strCount('Hello', 'o'), 1);
console.log(strCount('Hello', 'l'), 2);
console.log(strCount('', 'z'), 0);

function strCount(str, letter) {
    return str.split('').filter(c => c == letter).length;
}

const strCount = (str, letter) =>
    --str.split(letter).length;

*/

/*
https://www.codewars.com/kata/568dc014440f03b13900001d

function getDrinkByProfession(param) {
    param = param.toLowerCase();
    const list = {
        "jabroni": "Patron Tequila",
        "school counselor": "Anything with Alcohol",
        "programmer": "Hipster Craft Beer",
        "bike gang member": "Moonshine",
        "politician": "Your tax dollars",
        "rapper": "Cristal"
    }
    return list[param] || "Beer";
}



console.log(getDrinkByProfession("jabrOni"), 'Patron Tequila');
console.log(getDrinkByProfession("scHOOl counselor"), 'Anything with alcohol');
console.log(getDrinkByProfession("prOgramMer"), 'Hipster Craft Beer');
console.log(getDrinkByProfession("bike ganG member"), 'Moonshine');
console.log(getDrinkByProfession("poLiTiCian"), 'Your tax dollars');
console.log(getDrinkByProfession("rapper"), 'Cristal');
console.log(getDrinkByProfession("pundit"), 'Beer');
console.log(getDrinkByProfession("Pug"), 'Beer');

function getDrinkByProfession(param) {
    param = param.toLowerCase();

    switch (param) {
        case "jabroni": return "Patron Tequila";
        case "school counselor": return "Anything with Alcohol";
        case "programmer": return "Hipster Craft Beer";
        case "bike gang member": return "Moonshine";
        case "politician": return "Your tax dollars";
        case "rapper": return "Cristal";
        default: return "Beer";
    }
}

function getDrinkByProfession(param) {
    switch (param.toLowerCase()) {
        case 'jabroni':
            return 'Patron Tequila';
        case 'school counselor':
            return 'Anything with Alcohol';
        case 'programmer':
            return 'Hipster Craft Beer';
        case 'bike gang member':
            return 'Moonshine';
        case 'politician':
            return 'Your tax dollars';
        case 'rapper':
            return 'Cristal';
        default:
            return 'Beer';
    }
}

function getDrinkByProfession(param) {
    switch (param.toLowerCase()) {
        case 'jabroni':
            return 'Patron Tequila'
            break;
        case 'school counselor':
            return 'Anything with Alcohol'
            break;
        case 'programmer':
            return 'Hipster Craft Beer'
            break;
        case 'bike gang member':
            return 'Moonshine'
            break;
        case 'politician':
            return 'Your tax dollars'
            break;
        case 'rapper':
            return 'Cristal'
            break;
        default:
            return 'Beer'
    }

}

*/

/*
https://www.codewars.com/kata/57256064856584bc47000611/train/javascript


function howManySmaller(arr, n) {
    let number = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toFixed(2) < n) {
            number++;
        }
    }
    return number;
}
console.log(howManySmaller([1.234, 1.235, 1.228], 1.24), 2);
console.log(howManySmaller([1.1888, 1.1868, 1.1838], 1.19), 1);
console.log(howManySmaller([3.1288, 3.1212, 3.1205], 3.1212), 2);

function howManySmaller(arr,n){
  var count = 0;
  //map arr to convert all numbers to 2 decimal points
  arr = arr.map(function(x){
    return x.toFixed(2);
  });
  //traverse arr, add 1 to count for every element smaller than n
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < n) {
      count++;
    }
  }
  return count;
}

howManySmaller =(arr,n) => arr.map( x => x.toFixed(2) ).filter( x => x < n ).length;

howManySmaller = (arr, n) => arr.filter(a => a.toFixed(2) < n).length
*/

/*
https://www.codewars.com/kata/57256064856584bc47000611/train/javascript


function howManySmaller(arr, n) {
    let number = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toFixed(2) < n) {
            number++;
        }
    }
    return number;
}
console.log(howManySmaller([1.234, 1.235, 1.228], 1.24), 2);
console.log(howManySmaller([1.1888, 1.1868, 1.1838], 1.19), 1);
console.log(howManySmaller([3.1288, 3.1212, 3.1205], 3.1212), 2);

function howManySmaller(arr,n){
  var count = 0;
  //map arr to convert all numbers to 2 decimal points
  arr = arr.map(function(x){
    return x.toFixed(2);
  });
  //traverse arr, add 1 to count for every element smaller than n
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < n) {
      count++;
    }
  }
  return count;
}

howManySmaller =(arr,n) => arr.map( x => x.toFixed(2) ).filter( x => x < n ).length;

howManySmaller = (arr, n) => arr.filter(a => a.toFixed(2) < n).length
*/

/*
https://www.codewars.com/kata/57cc975ed542d3148f00015b/train/javascript


function check(a, x) {
    return a.includes(x);
}


function check(a, x) {
    for (let i = 0; i < a.length; i++) {

        if (a[i] === x) { return true }
    }
    return false
}


function check(a, x) {
    let result = false;
    for (i = 0; i < a.length; i++) {
        if (a[i] === x) {
            result = true;
        }
    }
    return result;
};

console.log(check([66, 101], 66), true);
console.log(check([101, 45, 75, 105, 99, 107], 107), true);
console.log(check(['t', 'e', 's', 't'], 'e'), true);
console.log(check(['what', 'a', 'great', 'kata'], 'kat'), false)

const check = (a, x) => a.includes(x);

*/

/*
https://www.codewars.com/kata/57ab2d6072292dbf7c000039/train/javascript


function correctPolishLetters(string) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        const letter = string[i];
        if (letter === 'ą') {
            result += 'a';
        } else if (letter === 'ć') {
            result += 'c';
        } else if (letter === 'ę') {
            result += 'e';
        } else if (letter === 'ł') {
            result += 'l';
        } else if (letter === 'ń') {
            result += 'n';
        } else if (letter === 'ó') {
            result += 'o';
        } else if (letter === 'ś') {
            result += 's';
        } else if (letter === 'ź') {
            result += 'z';
        } else if (letter === 'ż') {
            result += 'z';
        } else {
            result += letter;
        }
    }
    return result;
}

console.log(correctPolishLetters("Jędrzej Błądziński"));
console.log(correctPolishLetters("Lech Wałęsa"));
console.log(correctPolishLetters("Maria Skłodowska-Curie"));

function correctPolishLetters(string) {
    var dict = { 'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n', 'ó': 'o', 'ś': 's', 'ź': 'z', 'ż': 'z' };
    return string.replace(/[ąćęłńóśźż]/g, match => dict[match]);
}

var polishLetters = {
    "ą": "a",
    "ć": "c",
    "ę": "e",
    "ł": "l",
    "ń": "n",
    "ó": "o",
    "ś": "s",
    "ź": "z",
    "ż": "z",
};

function correctPolishLetters(string) {
    return string.split('').map((c) => polishLetters[c] || c).join("");
}

function correctPolishLetters(string) {
    return string
        .replace(/ł/g, 'l')
        .replace(/ą/g, 'a')
        .replace(/ć/g, 'c')
        .replace(/ę/g, 'e')
        .replace(/ń/g, 'n')
        .replace(/ó/g, 'o')
        .replace(/ś/g, 's')
        .replace(/ź/g, 'z')
        .replace(/ż/g, 'z')
}

function correctPolishLetters(s) {
    return s.replace(/[ąćęłńóśźż]/g, c => "acelnoszz"["ąćęłńóśźż".indexOf(c)])
}


function correctPolishLetters (string) {
  var stringArr = string.split("")
  for (var i = 0; i<stringArr.length; i++){
    switch (stringArr[i]){
        case "ą":
        stringArr[i] = "a";
        break;
        case "ć":
        stringArr[i] = "c";
        break;
        case "ę":
        stringArr[i] = "e";
        break;
        case "ł":
        stringArr[i] = "l";
        break;
        case "ń":
        stringArr[i] = "n";
        break;
        case "ó":
        stringArr[i] = "o";
        break;
        case "ś":
        stringArr[i] = "s";
        break;
        case "ź":
        stringArr[i] = "z";
        break;
        case "ż":
        stringArr[i] = "z";
        break;
        default:
        stringArr[i];
    }
  }
  return stringArr.join("");
}


correctPolishLetters = s => s.replace(/./g, m => ({ ą: "a", ć: "c", ę: "e", ł: "l", ń: "n", ó: "o", ś: "s", ź: "z", ż: "z" }[m] || m))

*/

/*
https://www.codewars.com/kata/5704aea738428f4d30000914/train/javascript


function tripleTrouble(one, two, three) {
    let newString = ' ';
    return (one[0] + two[0] + three[0]).repeat(one.length);


}
    

function tripleTrouble(one, two, three) {
    let newString = '';
    for (let i = 0; i < one.length; i++) {
        newString += one[i];
        newString += two[i];
        newString += three[i];
    }
    return newString;
}

console.log(tripleTrouble("aaa", "bbb", "ccc"), "abcabcabc");
console.log(tripleTrouble("aaaaaa", "bbbbbb", "cccccc"), "abcabcabcabcabcabc");
console.log(tripleTrouble("burn", "reds", "roll"), "brrueordlnsl");
console.log(tripleTrouble("Sea", "urn", "pms"), "Supermans");
console.log(tripleTrouble("LLh", "euo", "xtr"), "LexLuthor");

function tripleTrouble(one, two, three) {
    var result = "";
    for (let i = 0; i < one.length; i++) {
        result += one.charAt(i) + two.charAt(i) + three.charAt(i);
    }
    return result;
}

function tripleTrouble(one, two, three) {
    let x = ''
    for (i = 0; i < one.length; i++) {
        x += one[i] + two[i] + three[i]
    }
    return x
}


const tripleTrouble = (one, two, three) => one.split("").map((letter, index) => letter + two[index] + three[index]).join("");


function tripleTrouble(one, two, three) {
    var result = "";
    one.split("");
    two.split("");
    three.split("");
    for (i = 0; i < one.length; i++) {
        result += one[i] + two[i] + three[i];
    }
    return result;
}

function tripleTrouble(one, two, three) {
    let str = "";

    for (let i = 0; i < one.length; i++) {
        str += one[i] + two[i] + three[i];
    }

    return str;
}

*/

/*
https://www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript


const zeroFuel = (distanceToPump, mpg, fuelLeft) => (fuelLeft * mpg >= distanceToPump) ? true : false;


function zeroFuel(distanceToPump, mpg, fuelLeft) {
    return (distanceToPump > mpg * fuelLeft) ? false : true;
}

console.log(zeroFuel(50, 25, 2), true);
console.log(zeroFuel(100, 50, 1), false);

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump/mpg <= fuelLeft
};

const zeroFuel = (distanceToPump, mpg, fuelLeft) => mpg * fuelLeft >= distanceToPump;


const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if (mpg * fuelLeft >= distanceToPump) {
        return true;
    } else {
        return false;
    }
};

function zeroFuel(distanceToPump, mpg, fuelLeft) {
    let capacity = fuelLeft * mpg;

    return capacity >= distanceToPump;
}

*/

/*
https://www.codewars.com/kata/57089707fe2d01529f00024a/train/javascript


function checkAlive(health) {
    if (health <= 0) {
        return false;
    } else {
        return true;
    }
}

console.log(checkAlive(5));
console.log(checkAlive(0));
console.log(checkAlive(2));
console.log(checkAlive(-2));


function checkAlive(health) {
    return health > 0 ? true : false;
}


const checkAlive = h => h > 0;

function checkAlive(health) {
    if (health > 0 && health < 11) {
        return true;
    } else if (health <= 0 && health > -11) {
        return false;
    }
}

function checkAlive(health) {
    if (health > 0) {
        return true;
    } else (health <= 0); {
        return false;
    }
}

*/

/*
https://www.codewars.com/kata/559d2284b5bb6799e9000047



function addLength(str) {
    let newString = str.split(' ');
    let result = [];
    for (let i = 0; i < newString.length; i++) {
        result.push(newString[i] + ' ' + newString[i].length)
    }
    return result;
}

console.log(addLength('apple ban'));
console.log(addLength('you will win'));

function addLength(str) {
    return str.split(" ").map(s => `${s} ${s.length}`)
}


var addLength = s => s.split(' ').map(x => x + ' ' + x.length);


function addLength(str) {
    return str.split(" ").map(word => `${word} ${word.length}`)
}


function addLength(str) {
    return str.split(' ').map(el => el + ' ' + el.length);
}

*/


/*
https://www.codewars.com/kata/5720a1cb65a504fdff0003e2/train/javascript


function differenceInAges(ages) {
    return [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)];
}

console.log(differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
console.log(differenceInAges([57, 99, 14, 32]), [14, 99, 85]);


function differenceInAges(ages) {

    let max = Math.max(...ages),
        min = Math.min(...ages)
    diff = max - min

    return [min, max, diff]
}


function differenceInAges(ages) {
    const min = Math.min(...ages);
    const max = Math.max(...ages);

    return [min, max, max - min];
}

function differenceInAges(ages) {
    const youngest = Math.min(...ages);
    const oldest = Math.max(...ages);

    return [youngest, oldest, oldest - youngest];
}

function differenceInAges(ages) {
    let youngest = ages[0];
    let oldest = ages[0];
    for (i = 0; i < ages.length; i++) {
        if (ages[i] > oldest) {
            oldest = ages[i];
        } else if (ages[i] < youngest) {
            youngest = ages[i];
        }
    }
    return [youngest, oldest, oldest - youngest];
}

const differenceInAges = a => (min = Math.min(...a), max = Math.max(...a), [min, max, max - min])


*/

/*
https://www.codewars.com/kata/56a4addbfd4a55694100001f/train/javascript


function validateHello(greetings) {
    const dict = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc'];
    greetings = greetings.toLowerCase();
    for (const word of dict) {
        if (greetings.includes(word)) {
            return true;
        }
    }
    return false;
}

console.log(validateHello('ahoj'));
console.log(validateHello('meh'));


const validateHello = greetings => {
    for (key in hellos) {
        if (greetings.toLowerCase().includes(key)) {
            return true
        }
    }
    return false
}

function validateHello(greetings) {
    const messages = ["hello", "ciao", "salut", "hallo", "hola", "ahoj", "czesc"];
    const lowerCaseGreetings = greetings.toLowerCase();

    for (let i = 0; i < messages.length; i++) {
        if (lowerCaseGreetings.includes(messages[i])) {
            return true;
        }
    }

    return false;
}


function validateHello(greetings) {
    let lowerCase = greetings.toLowerCase()
    let hellos = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc']

    for (let i = 0; i < hellos.length; i++) {
        if (lowerCase.includes(hellos[i])) return true
    }
    return false
}

*/

/*
https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript


const summation = function (num) {
    let suma = 0;
    for (let i = 1; i <= num; i++) {
        suma += i;
    }
    return suma;
}

console.log(summation(1));
console.log(summation(2));
console.log(summation(8));

const summation = n => n * (n + 1) / 2;


function summation(num) {
    return num * (num + 1) / 2
}

*/


/*
https://www.codewars.com/kata/5808e2006b65bff35500008f/train/javascript


function position(letter) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return `Position of alphabet: ${(alphabet.indexOf(letter) + 1)}`
}

console.log(position("a"), "Position of alphabet: 1");
console.log(position("z"), "Position of alphabet: 26");
console.log(position("e"), "Position of alphabet: 5");

function position(alphabet) {
    let letters = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let placed = letters.indexOf(alphabet)
    return "Position of alphabet:" + " " + placed;

}

const position = a => `Position of alphabet: ${"&abcdefghijklmnopqrstuvwxyz".indexOf(a)}`


function position(l) {
    var lett = ' abcdefghijklmnopqrstuvwxyz'
    return 'Position of alphabet: ' + [...lett].indexOf(l);
}

function position(letter) {
    let i = 0;
    let abc = '0abcdefghijklmnopqrstuvwxyz';
    while (i < abc.length) {
        if (abc[i] == letter) {
            return 'Position of alphabet: '.concat(i);
        }
        i++;
    }
}

*/


/*
https://www.codewars.com/kata/5899642f6e1b25935d000161/train/javascript


function mergeArrays(arr1, arr2) {
    let ats = [];
    for (const n of arr1) {
        if (!ats.includes(n))
            ats.push(n);
    }
    for (const n of arr2) {
        if (!ats.includes(n)) {
            ats.push(n);
        }
        ats.sort((a, b) => a - b);
    }
    return ats;
}

console.log(mergeArrays([1, 2, 3, 4], [5, 6, 7, 8]));
console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]));
console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]));


function mergeArrays(arr1, arr2) {
    return Array.from(new Set(arr1.concat(arr2).sort((a, b) => (a - b))));
}

function mergeArrays(a, b) {
    return [...new Set(a.concat(b))].sort((a, b) => a - b)
}

function mergeArrays(arr1, arr2) {
    return arr1
        .filter((item) => !arr2.includes(item))
        .concat(arr2)
        .sort((a, b) => a - b)
}


function mergeArrays(arr1, arr2) {
    const arrMerged = arr1.concat(arr2).sort((a, b) => a - b);
    const newArr = [];

    for (let i = 0; i < arrMerged.length; i += 1) {
        if (arrMerged[i] !== arrMerged[i + 1]) {
            newArr.push(arrMerged[i]);
        }
    }
    return newArr;
}

*/


/*
https://www.codewars.com/kata/568dcc3c7f12767a62000038/train/javascript


function setAlarm(employed, vacation) {
    if (employed === true && vacation !== true) {
        return 'Should be true.';
    } else
        return "Should be false";
}

setAlarm = (employed, vacation) => employed && !vacation


console.log(setAlarm(true, true), "Should be false.");
console.log(setAlarm(false, true), "Should be false.");
console.log(setAlarm(true, false), "Should be true.");

function setAlarm(employed, vacation) {
    return employed && !vacation;
}

function setAlarm(employed, vacation) {
    return (employed && !vacation) ? true : false;
}

function setAlarm(employed, vacation) {
    return employed === true && vacation === false ? true : false

}

function setAlarm(employed, vacation) {
    // if you are employed and not on vacation 
    if (employed && !vacation) {
        //   The function should return true if you are employed and not on vacation :  need to set an alarm
        return true;
    } else {
        //   It should return false otherwise
        return false;
    }
}

*/


/*
https://www.codewars.com/kata/582cb0224e56e068d800003c/train/javascript


function litres(time) {
    const water = 0.5;
    if (time >= 0)
        return Math.floor(time * water);
}

console.log(litres(2));
console.log(litres(1.4), 0, 'should return 0 litres');
console.log(litres(12.3), 6, 'should return 6 litres');
console.log(litres(0.82), 0, 'should return 0 litres');
console.log(litres(11.8), 5, 'should return 5 litres');
console.log(litres(1787), 893, 'should return 893 litres');
console.log(litres(0), 0, 'should return 0 litres');

function litres(time) {
    return Math.floor(time * 0.5);
}


const litres = time => Math.floor(time * 0.5);

function litres(time) {
    return parseInt(time / 2);
}

function litres(time) {
    const litres = 0.5;
    let drink = litres * time;
    return Math.floor(drink);
}

*/


/*
https://www.codewars.com/kata/56fa3c5ce4d45d2a52001b3c/train/javascript

function xor(a, b) {
    if (a === b) {
        return false;
    } else
        return true;
}

console.log(xor(false, false), false, "false xor false");
console.log(xor(true, false), true, "true xor false");
console.log(xor(false, true), true, "false xor true");
console.log(xor(true, true), false, "true xor true");


function xor(a, b) {
    return a != b;
}

function xor(a, b) {
    return (a || b) && !(a && b);
}

const xor = (a, b) => a != b;

function xor(a, b) {
    if ((a === true) && (b !== true)) {
        return true
    } else if ((a !== true) && (b === true)) {
        return true
    } else {
        return false
    }
}

const xor = (a, b) => !!(a ^ b)


xor = (a, b) => { return a == b ? false : true }

const xor = (a, b) => !a != !b;

function xor(a, b) {
    return a === b ? false : true
}
    */


/*
https://www.codewars.com/kata/56676e8fabd2d1ff3000000c


function findNeedle(haystack) {
    const i = haystack.indexOf('needle');
    return `found the needle at possition ${i}`;
}


const haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
const haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
const haystack_3 = [1, 2, 3, 4, 5, 6, 7, 8, 8, 7, 5, 4, 3, 4, 5, 6, 67, 5, 5, 3, 3, 4, 2, 34, 234, 23, 4, 234, 324, 324, 'needle', 1, 2, 3, 4, 5, 5, 6, 5, 4, 32, 3, 45, 54];

console.log(findNeedle(haystack_1), undefined, "Your function didn't return anything");
console.log(findNeedle(haystack_1), 'found the needle at position 3');
console.log(findNeedle(haystack_2), 'found the needle at position 5');
console.log(findNeedle(haystack_3), 'found the needle at position 30');

function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
}

const findNeedle = haystack => `found the needle at position ${haystack.indexOf('needle')}`;

function findNeedle(haystack) {
    return `found the needle at position ${haystack.indexOf('needle')}`;
}


function findNeedle(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === 'needle')
            return 'found the needle at position ' + i;
    }
    // your code here
}

*/



/*
https://www.codewars.com/kata/5bb0c58f484fcd170700063d/train/javascript



function pillars(numPill, dist, width) {
    return numPill > 1 ? (numPill - 2) * width + (numPill - 1) * (dist * 100) : 0;
}



console.log(pillars(1, 10, 10), 0);
//number of pillars: 2, distance: 20 m and width: 25 cm"
console.log(pillars(2, 20, 25), 2000);
//number of pillars: 11, distance: 15 m and width: 30 cm"
console.log(pillars(11, 15, 30), 15270);

function pillars(num_pill, dist, width) {
    if (num_pill < 2) return 0;
    const widthAllPillars = (num_pill - 2) * width;
    const distAll = (num_pill - 1) * (dist * 100);

    return distAll + widthAllPillars;
}

function pillars(num_pill, dist, width) {
    if (num_pill === 1) {
        return 0;
    } else {
        let distance = dist * ((num_pill - 1) * 100);
        let pillars = num_pill - 2;
        return distance + (width * pillars);
    }
}

pillars = (n, d, w) => n > 1 ? (n - 1) * d * 100 + (n - 2) * w : 0;

// p - number of pillars.
// d - distance between pillars.
// w - width of each pillar.
const pillars = (p, d, w) => p > 1 ? (p - 1) * (d * 100) + (p - 2) * w : 0;

*/


/*
https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/javascript


function smash(words) {
    return words.join(' ');
}


console.log(smash([]), "");
console.log(smash(["hello"]));
console.log(smash(["hello", "world"]));
console.log(smash(["hello", "amazing", "world"]));
console.log(smash(["this", "is", "a", "really", "long", "sentence"]));

const smash = words => words.join(' ');

function smash(words) {
    "use strict";
    var smashed = '';
    for (var i = 0; i < words.length; i++) {
        smashed += words[i];
        if (i != words.length - 1) {
            smashed += ' ';
        }
    }
    return smashed;
};

*/

/*
https://www.codewars.com/kata/57f780909f7e8e3183000078


const grow = (arr) => {
    let result = 1;
    for (let i = 0; i < arr.length; i++) {
        result *= arr[i];
    }
    return result;
}



console.log(grow([1, 2, 3]));
console.log(grow([4, 1, 1, 1, 4]));
console.log(grow([2, 2, 2, 2, 2, 2]));  

const grow = x => x.reduce((a, b) => a * b);

const grow = (nums) => nums.reduce((product, num) => product * num, 1);

const grow = x => eval(x.join("*"))

function grow(x) {
    return x.reduce((accumulator, currentVal) => accumulator *= currentVal, 1);
}

function grow(x) { return x.reduce((a, b) => a * b) };

function grow(x) {
    let counter = x[0]
    for (let i = 1; i < x.length; i++) {
        counter = counter * x[i]
    }
    return counter
}

function grow(x) {

    var sum = x.reduce(function (a, b) { return a * b; });

    return sum

}

*/

/*
https://www.codewars.com/kata/57241e0f440cd279b5000829/train/javascript


function sumMul(n, m) {
    if (n < 1 || m < 2) {
        return 'INVALID';
    }
    let sum = 0;
    for (let i = 0; i < m; i += n) {
        sum += i;
    }
    return sum;
}


console.log(sumMul(0, 0), "INVALID");
console.log(sumMul(2, 9), 20);
console.log(sumMul(4, -7), "INVALID");

function sumMul(n, m) {
    if (n >= m) return "INVALID";

    var sum = 0;
    for (var i = n; i < m; i += n) {
        sum += i;
    }
    return sum;
}

function sumMul(n, m) {
    if (n <= 0 || m <= 0) return "INVALID";

    const last = Math.ceil(m / n) * n - n;
    return (last + n) * (last / n) / 2;
}

function sumMul(n, m) {
    let soma = 0
    if (m <= 0) {
        return "INVALID"
    }

    for (let i = 0; i < m; i++) {

        if (i % n == 0) {
            soma += i
        }
    }
    return soma
}

*/