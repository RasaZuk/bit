//praktika


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



/*
https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript

//const h = 60;
//const m = 60;
//const s = 1000;
//function past(h, m, s) {
//  time = 60 * 60 * 1000
//  return time;
//}


function past(val, min, sek) {
    const val = 60;
    const min = 60;
    const sek = 1000;
    timeCount = val * min * sek;
    return timeCount;
}

console.log(past(0, 1, 1));
//console.log(past, (1, 1, 1));  //3661000)
//assert.strictEqual(past(0, 0, 0), 0)
//assert.strictEqual(past(1, 0, 1), 3601000)
//assert.strictEqual(past(1, 0, 0), 3600000)
//(past(0,1,1),61000)

*/


/*
https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript

let n1 = i > 0;
let n2 = i.length;
const summation = function (n1, n2) {
    let summation = n1++

    return num++;
}

console.log(summation(1), 1);
console.log(summation(2), 3);
console.log(summation(8), 36);

*/



/*
function testNum(a) {
    let result;
    if (a > 0) {
        result = 'positive';
    } else {
        result = 'NOT positive';
    }
    return result;
}

console.log(testNum(-5));
*/


/*
https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript

function countSheeps(sheep) {
    // TODO
}

for (let [sheep, expected] of tests) {
    it(`${stringify(sheep)}`, function () {
        assert.strictEqual(countSheeps(sheep), expected);
    });
}

function stringify(sheep) {
    return `[${sheep.map(String).join(',')}]`;
}

[....].reduce((total, x) => (x == 2 ? total + 1 : total), 0)

*/

/*
https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript
*/
/*
function addLength(str) {
    let words = Math.split('');
    return words[0].length;

    //let ilgis = [...words].length;
    //return words + ilgis;
}

//function ilgis() {
//   return ilgis.length;
//}
//console.log(ilgis, 'apple');

//  return (str.split(" ").length) + ' '.join(" ");

console.log(addLength, 'apple ban');
//console.log(addLength, 'you will win');

//const str = str.split(" ").length + ' '.join(" ");
//return 'str' + ' ' + str.length;
//str.length[0] + ' ', str.length[1];
//const actual = addLength('apple ban');
*/