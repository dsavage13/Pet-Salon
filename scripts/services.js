//Create another page named services.html
//Create the constructor
//Create validations
//Clear the form after the registration

//creating the constructor

function Service(title,price){
    this.title = title;
    this.price = price;
}

function isValid(service){
    let isValidTitle = true;
    let isValidPrice = true;

    if(service.title == ""){
        isValidTitle = false;
        $("#txtTitle").addClass("form-control");
        $("#txtTitle").addClass("error");
    }

    return isValidTitle;
}

function Register(){
    // getting the title and price from the inputs
    let inputTitle = $("#txtTitle").val();
    let inputPrice = $("#txtPrice").val();

    console.log("title:" + inputTitle);
    console.log("price:" + inputPrice);
    let newService = new Service(inputTitle, inputPrice);

    if(isValid(newService)){
        console.log("Is Valid? ", isValid(newService));
    }

}

function init(){
    //hook events
    $("#btnRegister").click(register());
    $("#txtPrice").on("keypress", function (event){
        if (event.which == 13){
            register();
        }
    });
}
window.onload = init();
