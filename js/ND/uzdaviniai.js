
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
https://www.codewars.com/kata/5a34b80155519e1a00000009



function multipleOfIndex(arr) {
    let result = [arr[1]];
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] % i === 0) {
            result.push(arr[i]);
        }
    }
    return result;
}


expected[2, 6] to deeply equal[+0, 2, 6]

console.log(multipleOfIndex[22, -6, 32, 82, 9, 25]);
console.log(multipleOfIndex[68, -1, 1, -7, 10, 10]);
//   [[11, -11], [-11]],
//   [[-56, -85, 72, -26, -14, 76, -27, 72, 35, -21, -67, 87, 0, 21, 59, 27, -92, 68], [-85, 72, 0, 68]],
//   [[28, 38, -44, -99, -13, -54, 77, -51], [38, -44, -99]],
//   [[-1, -49, -1, 67, 8, -60, 39, 35], [-49, 8, -60, 35]],
//   [[0, 2, 3, 6, 9], [0, 2, 6]]

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
    const valandos = 60;
    const minutes = 60;
    const sekundes = 1000;
    timeCount = valandos * minutes * sekundes;
    return timeCount;
}

console.log(past(0, 1, 1));
console.log(past, (1, 1, 1));  //3661000)
console.log(past(0, 0, 0), 0);
console.log((1, 0, 1), 3601000);
console.log((1, 0, 0), 3600000);
console.log(past(0, 1, 1), 61000);

*/

