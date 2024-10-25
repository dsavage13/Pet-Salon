$(document).ready( //Innit using jQuery
    function show(){
    $("#toggleButton").click(function(){ // .on("click") better for div's with more going on
        $("#img").toggle();
    });

    $(".answer").hide();

    $(".question").on('click',function(){
        $(".answer").slideToggle("slow"); //slide toggle adds some animation to the toggle, slow makes it go slower
    })
});




