(function($) {
    $(document).ready(function() {
      floating.events();
    });
  
    var floating = {
      wrapper: $('#floating-buttons'),
      events: function() {
        floating.wrapper.find('.back-to-top').on("click", function(e) {
          e.preventDefault();
          $('html, body').animate({scrollTop: 0}, 1000);
        });
      },
    };
  
  })( jQuery );