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
