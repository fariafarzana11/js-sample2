//nested condition
var taka = 6000;

if( taka <6000 ){
    console.log('poor Man')
}
else{
    if(taka > 6000){
        console.log('Rich Man')
    }
    else{
        if(taka > 10000){
            console.log('double rich')
        }
        else{
            if(taka === 7000){
                console.log("Medium rich")
            }
        }
    }
}


var boroAlu = 50;
var chotoAlu = 30;

// if(boroAlu === 60){
//     var halfkgboroAluprice = boroAlu / 2;
//     console.log(halfkgboroAluprice);
// }
// else if(chotoAlu === 30){
//     var halfkgchotoAluprice = chotoAlu / 2;
//      console.log(halfkgchotoAluprice);
//      console.log(halfkgboroAluprice + halfkgchotoAluprice );
// }
// else{
//     console.log("nothing");
// }
    

if(boroAlu === 60){
    var halfkgboroAluprice = boroAlu / 2;
}

else if(chotoAlu === 30){
    var halfkgchotoAluprice = chotoAlu / 2;
}

else if(boroAlu != 60){
    var boroAluPrice = halfkgchotoAluprice + 0;
}
else if( chotoAlu != 30){
    var chotoAluPrice = halfkgboroAluprice + 0; 
}
console.log(halfkgboroAluprice + halfkgchotoAluprice );
console.log(boroAluPrice);
console.log(chotoAluPrice);