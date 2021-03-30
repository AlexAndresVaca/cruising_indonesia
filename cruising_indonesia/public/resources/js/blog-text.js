(function(root, factory) {
    jQuery(window).on('imm-script:run', function(){
      if(typeof root.imm_script_module.script.blog_textandimage == 'undefined'){
        root.imm_script_module.script.blog_textandimage = new factory(jQuery);
      }
    });
  })(this, function($) {
    var Self = this;
  
    Self.init = function() {
      // Self.window_screen();
  
      // $(window).resize(function(){
      //   Self.window_screen();
      // });
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
      else if (ww >= 1440){
        return ml+30;
      }
      else{
        return ml+30;
      }
    };
    Self.setMarginLeft = function() {
      var minleft = Self.getWidthWindow();
      $('.image-right').find('.imm-image-wraper').css("margin-right","-"+minleft+"px");
    };
  
    Self.setMarginRight = function() {
      var minleft = Self.getWidthWindow();
        $('.image-left').find('.imm-image-wraper').css("margin-left","-"+minleft+"px");
    };
  
  
  
  });