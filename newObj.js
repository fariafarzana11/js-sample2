const person = {
    name : "Raha",
    age : 13,
    address : "USA",
    profession : "student",
    "color choice" : "Red",
    color:["red", "blue","yellow"],
    educationDetails: {
        university:"Rice University",
        dept:"CSE",
        reg:" 2024109",
        selectedCourse:{
            firstCourse: "Data Science",
            secondCourse: "python"
        }
    }
}

// for(const newObj in person){
//     console.log(newObj,":",person[newObj])
// }

const newObj = object.keys(person)
for(const newValues of newObj){
    console.log(person[newValues])
}

console.log(new Object())
console.log(Object.create({}))