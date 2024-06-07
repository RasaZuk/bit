
/*

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

