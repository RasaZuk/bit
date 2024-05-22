//REVERSE ARRAY METODAI
let array = [1, 2, 3, 4, 5];

//type1
//let reversedArray = array.reverse();
//console.log('type1', reversedArray);


//type2 for loop
//declare empty loop

//let reversedArray = [];
//for (let i = array.length - 1; i >= 0; i--) {
//    reversedArray.push(array[i])
//}
//console.log('type2', reversedArray);

//TYPE3, map(), unshift()

//let reversedArray = [];
//array.map((value) => reversedArray.unshift(value)
//)
//console.log('type3', reversedArray);

//TYPE4, only map()
//let reversedArray = array.map((value, i) =>
//   array[array.length - i - 1]
//)
//console.log('type4', reversedArray);

//TYPE5, using sloce(), reverse()
//slice returns a shallow copy of the given array
//let reversedArray = array.slice(0, array.length).reverse();
//console.log('type5', reversedArray);

//TYPE6, for ..of, unshift
let reversedArray = [];
for (let element of array) {
    reversedArray.unshift(element)
}
console.log('type6', reversedArray);

