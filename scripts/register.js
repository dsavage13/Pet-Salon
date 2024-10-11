console.log("register.js"); 
let pets = [];

let pet1 = {
    name: "Scooby",
    age: 99,
    gender: "Male",
    breed: "Great Dane",
    service: "Grooming"
}

let pet2 = {
    name: "Echo",
    age: 6,
    gender: "Male",
    breed: "Viszla",
    service: "Shower"
}

let pet3 = {
    name: "Tigger",
    age: 5,
    gender: "Male",
    breed: ":Labrador",
    service: "Vaccines"
}
pets.push(pet1,pet2,pet3);

function displayNames(){
for (i = 0;i<pets.length;i++){ 
    document.getElementById("petNames").innerHTML+=pets[i].name;
}
}