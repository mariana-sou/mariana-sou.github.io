$(document).ready(function(){

    var burgerActive = false;

    $("#navicon").click(function(){

        if(!burgerActive){
            burgerActive = true;
            $("#navicon").text("✕");
            $(".navbar").addClass("navbar-active");
        } else {
            burgerActive = false;
            $("#navicon").text("☰");
            $(".navbar").removeClass("navbar-active");
        }
    });


//// EU ADICIONEI ESTA PARTE V V V V V
    $(".btn").click(function(){
      burgerActive = false;
      $("#navicon").text("☰");
      $(".navbar").removeClass("navbar-active");
    });

});
