//praktika




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

/*
const arr1 = [8, 9, 3, 7, 5, 13];
const arr2 = [12, 9, 5, 18, 23];

const recursiveMultiply = (arr, ind) => {
  if (ind === arr.length - 1) {
    return arr[ind];
  } else {
    return arr[ind] * recursiveMultiply(arr, ind + 1);
  }
};
console.log(recursiveMultiply(arr1, 0));
console.log(recursiveMultiply(arr2, 0));
*/


/*
Iterative Method:
In this method, we will use a simple for loop in JavaScript to iterate through the elements of the array and multiply them with each other to get the multiply result at the end. This approach is more efficient than the previous recursive approach as it takes the linear time complexity and constant extra space to solve the probelm.
*/

const arr1 = [8, 9, 3, 7, 5, 13];
const arr2 = [12, 9, 5, 18, 23];

const iterativeMultiply = (arr) => {
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
  }
  return result;
};

console.log(iterativeMultiply(arr1));
console.log(iterativeMultiply(arr2));


let arr1 = [8, 9, 3, 7, 5, 13];
let arr2 = [12, 9, 5, 18, 23];

/*
Using the in-built methods:
There are some in-built array methods available in JavaScript which we can use to iterate through the array elements and make changes in their values by passing a callback function inside them. We will use the map() and the reduce() in-built methods in this approach to multiply the elements of an array.
*/

let mapRes = 1;
arr1.map((currItem) => {
  mapRes *= currItem;
});

const reduceRes = arr2.reduce((res, currItem) => res *= currItem);

console.log(mapRes);
console.log(reduceRes);