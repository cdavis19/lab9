$(document).ready(function() {



$('li').css('width', '200px');
$('li').css('height', '50px');
// $('li').fadeIn('slow', '0.25');

$("li").mouseover(function(){
    $(this).css("opacity", "0.25");
});

$("li").mouseout(function(){
    $(this).css("opacity", "1");
});





$( "a" ).click(function() {
  $( this ).css("background-color", "red");
});




$( "a" ).click(function() {
  $( this ).text("CLICKED!!!");
});















 });
