

/*
ramintos su 

function reverseList(list) {
    let number = [],
    for (let i = list.length - 1; i > 0; i--) {
        number = list[i];
    }

    return number;
}

function reverseList(list) {
    return list.reverse();
}

function reverseList(list) {
    let rev = [];
    for (let i = 0; i < list.length; i++) {
        rev.push(list[list.length - i - 1])
    }
    return rev;
}
*/


/*
function reverseList(list) {
    let rev = [];
    for (let i = 0; i < list.length; i++) {
        rev.push(list[list.length - i - 1])
    }
    return rev;
}

function reverseList(list) {
    let rev = [];
    for (let i = list.length - 1; i >= 0; i--) {
        rev.push(list[i])
    }
    return rev;
}

//su stringais
function solution(str) {
    let answer = '';
    for (let i = 0; i < str.length; i++)
        answer = str[i] + answer;
    return answer;

}

//ramintos pabandymas
function reverseList(list) {
    let number = 0;
    for (let i = list.length; i >= 0; i--) {
        console.log(i, list[i])
        number = list[i] + number;
    }
    return number;
}

function reverseList(list) {
    let number = [];
    for (let i = list.length - 1; i >= 0; i--) {
        //console.log(i, list[i])
        number.push(list[i]);
    }
    return number;
}

function reverseList(list) {
  return list.reverse();
}

const reverseList = list => list.reverse();

function reverseList(list) {
    return list.slice().reverse();
}

function reverseList(list) {
    var array = [];
    for (var i = list.length - 1; i >= 0; i--) {
        array.push(list[i]);
    }
    return array;
}


reverseList = a => a.reverse();


function reverseList(list) {
    let fin = []
    for (let i = 0; i < list.length; i++) {
        fin.push(list[list.length - i - 1])
    }
    return fin
}
*/

/*
https://www.codewars.com/kata/559d2284b5bb6799e9000047
*/
/*
function addLength(str) {
    let sum = str.split('');
    let abs = [];
    for (let i = 0; i < sum.length; i++) {
        abs.push(sum[i] + ' ' + sum[i].length)
    }
    return abs;
}


function addLength(str) {
    let sum = str.split('');
    let result = [];
}
console.log(addLength());

//console.log(addLength('apple ban'));

//const actual = addLength('apple ban');
//console.log(addLength, ("You need to return an array. Did you log to the console instead?");
//console.log(actual, ["apple 5", "ban 3"]);
//console.log(addLength('you will win'));

*/

/*
https://www.codewars.com/kata/57089707fe2d01529f00024a/train/javascript


function checkAlive(health) {
    if (health > 0 && health < 10) {
        return 'true';
    } else {
        return 'false';
    }
}

console.log(checkAlive(5));
console.log(checkAlive(0));
console.log(checkAlive(2));
console.log(checkAlive(-2));
*/

/*
https://www.codewars.com/kata/56a4addbfd4a55694100001f/train/javascript


function validateHello(greetings) {
    let word = greetings.toLowerCase();
    if (word === 'hello') {
        return true;
    } else if (word === 'ciao') {
        return true;
    } else if (word === 'salut') {
        return true;
    } else if (word === 'hallo') {
        return true;
    } else if (word === 'hola') {
        return true;
    } else if (word === 'ahoj') {
        return true;
    } else if (word === 'czesc') {
        return true;
    }
    else {
        return false;
    }
}

console.log(validateHello('ahoj'));
console.log(validateHello('meh'));

*/


/*
https://www.codewars.com/kata/57256064856584bc47000611/train/javascript
*/

function howManySmaller(arr, n) {
    let number = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr.toFixed(2) < n) {
            number += arr[i];
        }
        return array;
    }
}
console.log(howManySmaller([1.234, 1.235, 1.228], 1.24), 2);
console.log(howManySmaller([1.1888, 1.1868, 1.1838], 1.19), 1);
console.log(howManySmaller([3.1288, 3.1212, 3.1205], 3.1212), 2);