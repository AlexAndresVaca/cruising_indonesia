(function(root, factory){
    jQuery(window).on('imm-script:run', function(){
      if(typeof root.imm_script_module.script.pageBanner == 'undefined'){
        root.imm_script_module.script.pageBanner = new factory(jQuery);
      }
    });
  })(this, function($){
    var Self = this;
  
    Self.init = function(){
      $('.page-banner-wrapper a.scroll-to-content').click(function(e){
        e.preventDefault();
        var a = $(this),
        heightOfbanner = a.closest('.page-banner-wrapper').length > 0 ? a.closest('.page-banner-wrapper').outerHeight() : 0;
        if (imm_script_module.isMobile.device == "desktop") {
          if(imm_script_module.scrollbar){
            imm_script_module.scrollbar.scrollTo(0, heightOfbanner, 1300);
          }
        }
        else {
            $("html, body").animate({ scrollTop: heightOfbanner+"px" }, 1300);
        }
        return false;
      });
    };
  });