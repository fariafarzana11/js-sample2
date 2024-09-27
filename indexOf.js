const numbers = [23, 43, 22, 56, 78, 22, 23, 99];
console.log(numbers[3]);
console.log(numbers.indexOf(78));


function countOccurrences(arr, num) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            count++;
        }
    }
    return count;
}

let arr = [1, 2, 3, 4, 1, 2, 1, 5, 1];
let num = 1;
let result = countOccurrences(arr, num);
console.log(`The number ${num} occurs ${result} times.`);