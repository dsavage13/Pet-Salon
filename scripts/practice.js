console.log('Welcome to jquery library');

//=== ID ===
//document.createElement('red'); //Java Script
//  JQuery("#red");
//$("#red"); // jQuery 

// #id method key, value
// $('#red').css("color","red").css("background-color","black");
// $('#blue').css("color","blue");
// $('#pink').css("color","pink");

let op1 =["apple","banana","orange"];
let op2 = ["carrot","broccoli","spinach"];

$("#category").on("change",function(){
    let selection = $("#category").val();
    console.log(selection); 
    let items = $("#items");

    items.empty();

    let htmlOp="";
    
    if(selection=="fruits"){
        for(let i=0;i<op1.length;i++){
            htmlOp += `<option value="${op1[i]}">${op1[i]}</option>`
        }
        items.append(htmlOp);
    }
    if(selection=="vegetables"){
        for(let i=0;i<op2.length;i++){
            htmlOp += `<option value="${op2[i]}">${op2[i]}</option>`
        }
        items.append(htmlOp);
    }
});