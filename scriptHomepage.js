$(document).ready(function(){
//////////////////////////////
    // cache .grid
    var $grid = $('.grid').imagesLoaded( function() {
  // init Isotope after all images have loaded
  $grid.isotope({
    // options...
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.grid-sizer',
      gutter: '.gutter-sizer'
            }
  });
});

    // filter items when filter link is clicked
    $('.isotope_filters a').on('click', function() {
    var selector = $(this).attr('data-filter');
    $grid.isotope({ filter: selector });
    });



//////////////////////////////////////
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
