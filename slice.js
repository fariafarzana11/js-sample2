const country = "America";
console.log(country.slice(2,6));

//split
const sentence = "Hello this is Inaya";
console.log(sentence.split(" "));
console.log(sentence.split("i"));
console.log(sentence.split(" ",3));

//join
const sen = ["Hello this is Inaya"];
console.log(sen.join("|"));

const senten = ["Hello", "this", "is", "Inaya"];
console.log(senten.join("|")); // khali ghore jekono kicu diye alada kora jay

//includes
const sentence1 = "Hello this is Inaya";
console.log(sentence1.includes('i'));

//concat
const name = "Ru";
const name2 = "bab";
const result = name.concat(" ",name2);
console.log(result);

const name3 = "Rubab";
const name4 = "Islam";
const address = "Pakistan"
const result2 = name3.concat(" ",name4," ",address);
console.log(result2);
