//even number
for(let number = 0; number <= 20; number++){
    if(number % 2 === 0){
        console.log("this is even number",number)
    }
}

//odd number
for(let number = 0; number <= 20; number++){
    if(number % 2 !== 0){
        console.log("this is odd number",number)
    }
}

//break using
for(let i = 0; i < 10; i++){
    console.log(i)
    if(i === 3){
      break;
    }
    else{
        continue;
    }
}


const friend = [ "Mina", "China", "Tina", "Fina","Intiya"];

for(let i = 0; i < friend.length; i++){
    console.log(friend[i])
}

const numbers = [20, 23, 44, 34, 32, 33, 45];
for(let i = 0; i < numbers.length; i++){
    //console.log(numbers[i] * 2);
    console.log(numbers[i] / 2);
    console.log(numbers[i] % 2);
}