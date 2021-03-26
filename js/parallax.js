(function(root, factory) {
    // document.addEventListener('DOMContentLoaded', function() {
    //   root.imm_script_module.script.textimage_parallax = new factory(jQuery);
    // });
    jQuery(window).on('imm-script:run', function(){
      if(typeof root.imm_script_module.script.textimage_parallax == 'undefined'){
        root.imm_script_module.script.textimage_parallax = new factory(jQuery);
      }
    });
  })(this, function($) {
    var Self = this;
  
    Self.init = function() {
      Self.window_screen();
  
      $(window).on("resize", function(){
        Self.window_screen();
      });
    };
  
  
    Self.window_screen = function() {
      Self.setMarginLeft();
      Self.setMarginRight();
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
        return ml+15;
      }
    };
    Self.setMarginLeft = function() {
      var minleft = Self.getWidthWindow();
      
      if ($(window).width() < 991) {
        $('.image-right').find('.imm-image-wraper').css({"margin-right": "-"+minleft+"px", "margin-left":"-"+minleft+"px"});
  
      }
      else {
        $('.image-right').find('.imm-image-wraper').css({"margin-right": "-"+minleft+"px", "margin-left": "0"});
      }
    };
  
    Self.setMarginRight = function() {
      var minleft = Self.getWidthWindow();
  
      if ($(window).width() < 991) {
        $('.image-left').find('.imm-image-wraper').css({"margin-right": "-"+minleft+"px", "margin-left":"-"+minleft+"px"});
      }
      else {
        $('.image-left').find('.imm-image-wraper').css({"margin-left": "-"+minleft+"px", "margin-right": "0"});
      }
    };
  
  
  
  });