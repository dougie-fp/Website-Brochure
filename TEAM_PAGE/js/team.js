//Navigation 'icon' for resize
$(document).ready(function() {
    $('header nav ul li:first-child').click(function(){
      $(this).parent().toggleClass('slideDown');
    });
  });

  $(document).ready(function () {
  
    $('.overlay').click(function () {
      if ($(this).hasClass('faded')) { 
          $(this).fadeTo(1000, 1); //fading the elements back in
          $(this).removeClass('faded'); //
      } else {
          $(this).addClass('faded');//introducing another class so that that class can be called to enable the fade-in
          $(this).fadeTo(1200, 0);
      }
    });
  });