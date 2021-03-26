(function(root, factory) {
    jQuery(window).on('imm-script:run', function(){
      if(typeof root.imm_script_module.script.expedition_slider == 'undefined'){
        root.imm_script_module.script.expedition_slider = new factory(jQuery);
      }
    });
    // document.addEventListener('DOMContentLoaded', function() {
    //   root.imm_script_module.script.expedition_slider = new factory(jQuery);
    // });
  })(this, function($) {
    var Self = this;
  
    Self.init = function() {
      Self.window_screen();
  
      $(window).resize(function(){
        Self.window_screen();
      });
      Self.flickity();
    };
  
    Self.flickity = function() {
      var slide = $('.expedition-slider-wrap');
      var nav = $('.nav-title-wrap');
  
      if ( document.documentElement.classList.contains('touchevents') ) {
        slide.flickity({
          cellAlign: 'left',
          contain: true,
          wrapAround: true,
          prevNextButtons: false,
          pageDots: true,
          selectedAttraction: 0.02,
          adaptiveHeight: true
        });
      }
      else {
        slide.flickity({
          cellAlign: 'left',
          freeScroll: true,
          contain: true,
          wrapAround: true,
          prevNextButtons: false,
          pageDots: true,
          selectedAttraction: 0.02,
          adaptiveHeight: true
        });
      }
  
      if ( document.documentElement.classList.contains('touchevents') ) {
        nav.flickity({
          asNavFor: '.expedition-slider-wrap',
          contain: true,
          prevNextButtons: false,
          pageDots: false,
          cellAlign: 'left',
          draggable: true
        });
      }
      else {
        nav.flickity({
          asNavFor: '.expedition-slider-wrap',
          contain: true,
          prevNextButtons: false,
          pageDots: false,
          cellAlign: 'left',
          draggable: true
        });
      }
  
    };
  
    Self.window_screen = function() {
      Self.setMarginLeft();
      if(typeof lazySizes !== 'undefined'){
        lazySizes.autoSizer.checkElems();
      }
    };
    Self.getWidthWindow = function() {
      var maxScreen = 1920;
      var ww = $(window).width();
      var cn = $('.container').width();
      var sum = ww - cn;
      var ml = sum / 2;
  
      var maxWidth = maxScreen - cn ;
      var maxMl = maxWidth / 2;
      if (ww > 1920) {
        return maxMl;
      }
      else if (ww < 768){
        return ml;
      }
      else{
        return ml;
      }
    };
    Self.setMarginLeft = function() {
      var minleft = Self.getWidthWindow();
      
      if ($(window).width() < 991) {
        $('.navigation-title').find('.nav-wrapper').css({"margin-right": "0px"});
  
      }
      else {
        $('.navigation-title').find('.nav-wrapper').css({"margin-right": "-"+minleft+"px", "margin-left": "0"});
      }
    };
  });