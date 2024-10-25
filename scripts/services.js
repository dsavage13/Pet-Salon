//creating the constructor
let services = [];

function Service(title,price){
    this.title = title;
    this.price = price;
}
function isValid(service){
    let isValidTitle = true;
    let isValidPrice = true;
    if(service.title == ""){
        isValidTitle = false;
        $(".titleValidationMsg").css("color","red").show();
    }else{
        $(".titleValidationMsg").hide();
        isValidTitle = true;
    }
    if(service.price == ""){
        isValidPrice = false;
        $(".priceValidationMsg").css("color","red").show();
    }else{
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

    if(isValid(newService)==true){
        services.push(newService);
        save(newService);
        displayService();
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
    $( "#txtTitle" ).on( "keypress", function( event ) {
        if (event.which == 13) {
            register();
        }
    });

    let service1 = new Service("Grooming",20);
    let service2 = new Service("Nails",25);
    let service3 = new Service("Vaccines",30);
    services.push(service1,service2,service3);
    displayService();
}

function clearForm(){
    document.getElementById("txtTitle").value = ''
    document.getElementById("txtTitle").classList = "form-control"
    document.getElementById("txtPrice").value = ''
    document.getElementById("txtPrice").classList = "form-control"
}

window.onload=init;