var miss;
//console.log(miss); //undefined

let test;
test = 2;
console.log(test) //2

let name = "chinu"
console.log(name); //chinu

let numOne = 5;
let numTwo = numOne;
console.log(numTwo); //5

//Here, we attempt to assign a new value to a variable that was created with const.
const test = 1;
test = 2;//TypeError: Assignment to constant variable.

//You also cannot declare a const-variable without assigning a value to it directly. See what happens if you try anyway:
const test; //SyntaxError: Missing initializer in const declaration

const num;
num = 5;
console.log(num);//Uncaught SyntaxError: Missing initializer in const declaration

const num = 2;
num = 6;
console.log(num);//Uncaught TypeError: Assignment to constant variable

const num = 5;
console.log(Num);//ReferenceError: Num is not defined

const num = 5;
console.log(num);//5

