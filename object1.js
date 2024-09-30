const arr = [2,12,66,23,54,76,44]; //1-dimensional array
const newDetails = [["Ikra","Ismi"],["Rusha","Sura","Nimra"]]; //2-di 

for(const newArr of newDetails){
    for(const another of newArr){
        //console.log(another);
    }
}


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
person.profession = "Teacher";
//person["profession"] = "Job holder"
console.log(person.educationDetails.selectedCourse.firstCourse);
//console.log(person.age);
console.log(person['age']);
//console.log(typeof person.name)
console.log(person['color choice']);

const keys = "name";
person[keys] = "Kinza";
//person.name = "kinza";
// console.log(Object.keys(person));
// console.log(Object.values(person));



