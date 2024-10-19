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
        $("#txtTitle").removeClass("form-control");
        $("#txtTitle").addClass("error");
        $(".titleValidationMsg").css("color","red").show();
    }else{
        $("#txtTitle").addClass("form-control");
        $("#txtTitle").removeClass("error");
        $(".titleValidationMsg").hide();
        isValidTitle = true;
    }
    if(service.price == ""){
        isValidPrice = false;
        $("#txtPrice").removeClass("form-control");
        $("#txtPrice").addClass("error");
        $(".priceValidationMsg").css("color","red").show();
    }else{
        $("#txtPrice").addClass("form-control");
        $("#txtPrice").removeClass("error");
        $(".priceValidationMsg").hide();
        isValidPrice = true;
    }
    return isValidTitle && isValidPrice;
}
function register(){
    // getting title and price from inputs
    let inputTitle = $("#txtTitle").val();
    let inputPrice = $("#txtPrice").val();
    let newService = new Service(inputTitle,inputPrice);
    console.log("Is valid? ", isValid(newService));
    
    if(isValid(newService)){
        console.log(newService);
        document.getElementById("txtService")=innerHTML('')
        //save(service)
    }
}
function init(){
    $(".titleValidationMsg").hide();
    $(".priceValidationMsg").hide();
    //hook events
    $("#btnRegister").click(register);
    $( "#txtPrice" ).on( "keypress", function( event ) {
        if (event.which == 13) {
            register();
        }
    });
}

window.onload=init;