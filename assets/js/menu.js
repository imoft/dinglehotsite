$('.grow').hover(function() {
  $( this ).addClass( "hover" );
  $('.grow').not(this).removeClass("hover");
});