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