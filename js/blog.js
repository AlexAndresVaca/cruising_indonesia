(function(root, factory) {
    jQuery(window).on('imm-script:run', function(){
      if(typeof root.imm_script_module.script.blog_image == 'undefined'){
        root.imm_script_module.script.blog_image = new factory(jQuery);
      }
    });
  })(this, function($) {
    var Self = this;
  
    Self.init = function() {
      Self.gallery();
    };
  
    Self.gallery = function() {
        if ($('.image-slider-wrapper').length) {
          var slide = $('.image-slider-wrapper');
  
          slide.flickity({
            cellAlign: 'center',
            freeScroll: false,
            contain: true,
            wrapAround: true,
            prevNextButtons: false,
            pageDots: true,
            selectedAttraction: 0.02,
            adaptiveHeight: true,
            lazyLoad: true
          });
      }
   
    };
  
  
  });
  