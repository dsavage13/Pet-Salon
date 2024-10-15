let pets = []; // Creating the array

function Pet(name,age,gender,breed,service,type){
    //Properties = Parameter
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.type = type;
}

function register(){
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputBreed = document.getElementById("txtBreed").value;
    let inputService = document.getElementById("txtService").value;
    let inputType = document.getElementById("txtType").value;

    console.log(inputName,inputAge,inputGender,inputBreed,inputService,inputType);

    //create the obj
    let newPet = new Pet(inputName,inputAge,inputGender,inputBreed,inputService,inputType);
    pets.push(newPet);
    console.log(newPet);
    displayTotals();
    displayCards();
    //displayTable();
}


function init(){
    console.log('init');
    let pet1 = new Pet("Scooby",99,"Male","Great Dane","Grooming");
    let pet2 = new Pet("Tigger",5,"Male","Labrador","Vaccines");
    let pet3 = new Pet("Echo",6,"Female","Viszla","Nails");

    pets.push(pet1,pet2,pet3)
    console.log(pets);
    displayTotals();
    displayCards();
    //displayTable();
}
window.onload=init; //wait to render the html

function clear(){

}