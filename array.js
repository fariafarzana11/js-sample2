const numbers = [21, 22, 13, 15, 56, 62];
//  numbers[4] = 99;
//  numbers[2] = 33;
console.log(numbers);
//console.log(numbers.length);

// numbers.push(23,24) //last e 23 add korbe
// console.log(numbers)
// numbers.pop() //last er ta remove hobe
// console.log(numbers)
// numbers.shift()//1st er ta remove hbe
// console.log(numbers)
// numbers.unshift(1,2);//1st 1,2 add hbe
// console.log(numbers)
// numbers.sort();
// console.log(numbers)
const sli = numbers.slice(1, 3);
console.log(sli)

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3)
// console.log(citrus)


let array = [1, 2, 3, 4, 5]; // original array
let indexToRemove = 2; // index of the element to remove
array.splice(indexToRemove, 1); // remove 1 element at index 3
console.log(array); // prints [1, 2, 3, 5]


// let array = [1, 2, 3, 4, 5]; // original array
// let indexToRemove = 2; // index of the element to remove
// array.splice(indexToRemove, 1); // remove 1 element at index 2
// console.log(array); // prints [1, 2, 4, 5]
