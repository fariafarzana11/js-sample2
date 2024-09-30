const arr = ["Mina","mim","ashmi","Rim","Yumna"];
console.log(arr.sort((a, b)=> a.localeCompare(b))); //ascending
console.log(arr.sort((a, b)=> b.localeCompare(a) )); //descending


// const arr = [4,1,8,-91,33,10,0,99,87,54,33];
// console.log(arr.sort((a, b)=> {return a - b})); //ascending
// console.log(arr.sort((a, b)=> {return b - a})); //descending