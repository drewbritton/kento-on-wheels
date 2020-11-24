// JavaScript Document
$(function() {
    "use strict";
  
  $('#cart-water')
      .find('a')
      .on('click', function(e){
          e.preventDefault();
    
          var $link = $(this),
              $img = $link.find('img');
    
          var $ghost = $img.clone()
                            .appendTo($link)
                            .addClass('ghost');
    
          $ghost.animate({
              'left' : 800,
              'top' : 10
          }, 1500, 'easeInBack');
  });
});