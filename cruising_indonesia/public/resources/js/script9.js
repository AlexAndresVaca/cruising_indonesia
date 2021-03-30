(function(root, factory) {
    document.addEventListener('DOMContentLoaded', function() {
      root.imm_module_footer = new factory(jQuery);
      root.imm_module_footer.init();
      // imm_script_module.script.imm_module_header = new factory(jQuery);
    });
  })(this, function($) {
    var Self = this;
  
    Self.init = function() {
      imm_script_module.barbaInjectScript.push(function() {
        Self.contactInfo.click();
        if (imm_script_module.isMobile.device == "mobile") {
          $('.footer-wrapper').find('.mobile-toggle-button').removeClass('show');
        }
      });
    };
  
    Self.contactInfo = {
      click: function(){
        var contactLink = $('.footer-wrapper').find('.mobile-toggle-button');
        var contactWrap = $('.footer-wrapper').find('.mobile-toggle-wrapper');
  
        contactLink.on('click', function(){
          contactWrap.slideToggle();
          $(this).toggleClass('show');
        });
      }
    };
  });