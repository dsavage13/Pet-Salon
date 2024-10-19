let pets = []; // Creating the array

let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");
let inputTime = document.getElementById("txtTime");
let inputContact = document.getElementById("txtContact")


function Pet(name,age,gender,breed,service,time,contact){
    //Properties = Parameter
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.time = time;
    this.contact = contact;
}

function isValid(pet){
    let validation = true;

    if(pet.name==""){
        validation = false;
        inputName.classList.remove("form-control");
        inputName.classList.add('error');
        console.log("Please Enter a Name");
    }else{
        
    }
    if(pet.age==""){
        validation = false;
        inputAge.classList.remove("form-control");
        inputAge.classList.add('error');
    }
    if(pet.gender==""){
        validation = false;
        inputGender.classList.remove("form-control");
        inputGender.classList.add('error');
    }
    if(pet.breed==""){
        validation = false;
        inputBreed.classList.remove("form-control");
        inputBreed.classList.add('error');
    }
    if(pet.service==""){
        validation = false;
        inputService.classList.remove("form-control");
        inputService.classList.add('error');
    }
    if(pet.time==""){
        validation = false;
        inputTime.classList.remove("form-control");
        inputTime.classList.add('error');
    }
    if(pet.contact==""){
        validation = false;
        inputContact.classList.remove("form-control");
        inputContact.classList.add('error');
    }


    return validation;
}

function register(){
    console.log(inputName,inputAge,inputGender,inputBreed,inputService,inputTime,inputContact);

    //create the obj
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputTime.value,inputContact.value);
    console.log(newPet); 

    if(isValid(newPet)==true){
        pets.push(newPet);
        displayTotals();
        //displayCards();
        displayTable(); 
        clearForm();
        
    }else{
        console.log("Please Fill-In Highlighted Boxes")
    }
    
}

function clearForm(){
    document.getElementById("txtName").value = ''
    document.getElementById("txtName").classList = "form-control"
    document.getElementById("txtAge").value = ''
    document.getElementById("txtAge").classList = "form-control"
    document.getElementById("txtGender").value = ''
    document.getElementById("txtGender").classList = "form-control"
    document.getElementById("txtBreed").value = ''
    document.getElementById("txtBreed").classList = "form-control"
    document.getElementById("txtService").value = ''
    document.getElementById("txtService").classList = "form-control"
    document.getElementById("txtTime").value = ''
    document.getElementById("txtTime").classList = "form-control"
    document.getElementById("txtContact").value = ''
    document.getElementById("txtContact").classList = "form-control"
}

function deletePet(petId){
    console.log("Deleting Pet... " + petId);
    //document.getElementById(petId).remove();
    pets.splice(petId, 1);

    displayTotals();
    displayTable();

}



function init(){
    console.log('init');
    let pet1 = new Pet("Scooby",99,"Male","Great Dane","Grooming","Morning",);
    let pet2 = new Pet("Tigger",5,"Male","Labrador","Vaccines","Afternoon",);
    let pet3 = new Pet("Echo",6,"Female","Viszla","Nails","Evening",);

    pets.push(pet1,pet2,pet3)
    console.log(pets);
    displayTotals();
    //displayCards();
    displayTable();
    isValid(service);
}

window.onload=init; //wait to render the html