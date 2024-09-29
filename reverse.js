let original = "Hello World";
let reversed = original.split("").reverse().join('');
console.log(reversed);
//console.log([original].reverse().join())


// let original = "Hello World";
// let reversed = "";
// for (let i = original.length - 1; i >= 0; i--) {
//     reversed += original[i];
// }
// console.log(reversed);


//1ta kore letter reverse hobe + ager letter ta asthe thakbe
// let sentence = "Hello World";
// let reverse = "";
// for(let i = sentence.length - 1; i >=0; i--){
//     reverse += sentence[i];
//     console.log(reverse)
// }



let sentence = "Hello World";
let reverse = "";
for(let i = 0;i<sentence.length;i++){
    const newValue = sentence[i];
    reverse = newValue + reverse; //dlroW olleH
    // reverse = reverse + newValue; //hello world
}
console.log(reverse)


// let sentence = "Hello World";
// let reverse = ''
// for(const rev of sentence){
//     //console.log(rev)
//     reverse = rev + reverse;
// }
// console.log(reverse)


// const arr = [2,7,9,11,67,87,99];
// console.log(arr.reverse())