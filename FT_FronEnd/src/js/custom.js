

// $( document ).ready(function() {
//   console.log( "ready!" );
// });


$(".menu-1 ul li").click(function(){
  alert("Click - " + $(this).html());
});


$(".menu-2 ul li").click(function(){

  //$(this).find("ul").toggle();
  $(this).find("ul").toggle();


  //alert("Click - " + $(this).html());
});