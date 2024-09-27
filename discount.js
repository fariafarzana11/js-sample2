//multi level condition

var price = 2000;
var age = 100;

if(age <= 20){
    console.log('Wow!!Free food for you')
}
else if(age >= 80 && age < 100){
    //50% discount
    var discount = price*50/100;
    var discountAfter = price - discount;
    console.log(discountAfter);
}
else if(age >= 60 && age < 80){
    //30% discount
    var discount = price*30/100;
    var discountAfter = price - discount;
    console.log(discountAfter);
}
else if(age >= 40 && age < 60){
    //25% discount
    var discount = price*20/100;
    var discountAfter = price - discount;
    console.log(discountAfter);
}
else if(age >= 30 && age < 40){
    //20% discount
    var discount = price*20/100;
    var discountAfter = price - discount;
    console.log(discountAfter);
}

else if(age > 20 && age < 30){
    //15% discount
    var discount = price*20/100;
    var discountAfter = price - discount;
    console.log(discountAfter);
}
else{
    console.log("Sorry!You won't discount",price)
}