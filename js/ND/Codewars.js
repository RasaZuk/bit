//praktika

/*
https://www.codewars.com/kata/57a083a57cb1f31db7000028/train/javascript
*/

/*

describe("Basic Tests", function () {
    it("Testing for fixed tests", () => {


function powersOfTwo(n) {
    if 
    return []
}

        console.log(powersOfTwo(0), [1])
        console.log(powersOfTwo(1), [1, 2])
        console.log(powersOfTwo(4), [1, 2, 4, 8, 16])
    
*/


/*
https://www.codewars.com/kata/57cc975ed542d3148f00015b/train/javascript


function check(a, x) {
    if check(Array.isArray([a]));
    return true;
} else {
    return false;
}



//chai.config.truncateThreshold = 0;
//describe("Basic tests", () => {
//  it("Testing for fixed tests", () => {

console.log(check([66, 101], 66));
//console.log(check([101, 45, 75, 105, 99, 107], 107), true);
//console.log(check(['t', 'e', 's', 't'], 'e'), true);
//console.log(check(['what', 'a', 'great', 'kata'], 'kat'), false);

*/

/*
https://www.codewars.com/kata/515e188a311df01cba000003/train/javascript?collection=front-end-by-rimantas-1
*/

/*
function getPlanetName(id) {
    let name = id;
    switch (id) {
        case 1:
            name1 = 'Mercury'
        case 2:
            name2 = 'Venus'
        case 3:
            name3 = 'Earth'
        case 4:
            name4 = 'Mars'
        case 5:
            name5 = 'Jupiter'
        case 6:
            name6 = 'Saturn'
        case 7:
            name7 = 'Uranus'
        case 8:
            name8 = 'Neptune'
    }
    return name;
}



//describe("Tests", () => {
// it("test", () => {
console.log(getPlanetName(2), 'Venus');
console.log(getPlanetName(5), 'Jupiter');
console.log(getPlanetName(3), 'Earth');

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


let text = ["The greatest victory is that which requires no battle"];

//function reverseWords(str) {
//  for (let i = text.length - 1, i >= 0, i--) {
//   return '+= text[i]';


function reverseString(text) {
    let answer = '';

    for (let i = 0; i < text.length; i++); {
        answer += text[text.length - 1 - i];
    }
    return answer;
}

//console.log("reversed", reversed);

console.log(reverseWords("hello world!"), "world! hello")
//console.log(reverseWords("yoda doesn't speak like this"), "this like speak doesn't yoda")
//console.log(reverseWords("foobar"), "foobar")
//console.log(reverseWords("kata editor"), "editor kata")
//console.log(reverseWords("row row row your boat"), "boat your row row row")
//console.log(reverseWords(""), "")
*/

/*
https://www.codewars.com/kata/523b4ff7adca849afe000035/train/javascript

const a = 'hello';
const b = 'world!';
function greet(a, b) {
    return greet;
}
console.log(a + ' ' + b);
//console.log(typeof greet, "function", "greet should be a function");

//it("Correct return-value?", function () {
// console.log(greet(), "hello world!");
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
https://www.codewars.com/kata/544675c6f971f7399a000e79/train/javascript


const stringToNumber = function (str) {
    // put your code here
    return null;
}



const stringToNumber = function (str) {
    return (str, str.toLocaleString());
}


//const stringToNumber = 'str' => parseInt();

//function stringToNumber(x) {
//   return x.toLocaleString('');
//}

//const stringToNumber = function (str) {
//   return x.toLocaleString('');
//}


console.log(stringToNumber("1234"))
console.log(stringToNumber("605"))
console.log(stringToNumber("1405"))
console.log(stringToNumber("-7"), -7)

*/



/*
BE MANES
function leo(oscar){
  if ('oscar' === 88){
    return "Leo finally won the oscar! Leo is happy"
  } else if ('oscar' === 86) {
    return "Not even for Wolf of wallstreet?!"
  } else if ('oscar'> 86 < 88) {
    return "When will you give Leo an Oscar?"
  } else if ('oscar'> 88) {
    return "Leo got one already!"
  }
}
else if (oscar > 86 || oscar < 88) {
    return "When will you give Leo an Oscar?"


    function leo(oscar) {
 if (oscar === 88) {
    return 'Leo finally won the oscar! Leo is happy';
  } else if (oscar === 86) {
    return 'Not even for Wolf of wallstreet?!';
  } else if (oscar < 88) {
    return 'When will you give Leo an Oscar?';
  } else {
    return 'Leo got one already!';
  }
}

function leo(oscar){
    return oscar === 88 ? "Leo finally won the oscar! Leo is happy" : oscar === 86 ? "Not even for Wolf of wallstreet?!" : oscar > 88 ? "Leo got one already!" : "When will you give Leo an Oscar?"
}
function leo1(oscar) {
    if (oscar === 88) {
        return "Leo finally won the oscar! Leo is happy";
    } else if (oscar === 86) {
        return "Not even for Wolf of wallstreet?!";
    } else if (oscar > 88) {
        return "Leo got one already!";
    } else {
        return "When will you give Leo an Oscar?";
    }
}

const leo = (oscar) => {
  return oscar === 88 ? 'Leo finally won the oscar! Leo is happy' :
         oscar === 86 ? 'Not even for Wolf of wallstreet?!'       :
         oscar  <  88 ? 'When will you give Leo an Oscar?'        :
         'Leo got one already!';
};

const leo = (oscar) => {
  return oscar === 88 ? 'Leo finally won the oscar! Leo is happy' :
         oscar === 86 ? 'Not even for Wolf of wallstreet?!'       :
         oscar  <  88 ? 'When will you give Leo an Oscar?'        :
         'Leo got one already!';
};
*/
