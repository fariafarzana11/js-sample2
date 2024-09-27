const price = 5000;

// if(price > 5000){
//     console.log("price is greater than 5000")
// }
// else{
//     console.log("5000 is correct value")
// }

const salary = 40000;
const hasCar = true;
const BCS = false;

//if((salary >= 50000 || hasCar === true) && BCS === true){
if((salary >= 50000 && hasCar === true) || BCS === true){
    console.log('Final.It will be happen')
}
else{
    console.log("So sad.It won't happen")
}