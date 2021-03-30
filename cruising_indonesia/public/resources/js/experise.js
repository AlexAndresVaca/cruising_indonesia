(function(root, factory) {
    jQuery(window).on('imm-script:run', function(){
      if(typeof root.imm_script_module.script.experience_widget == 'undefined'){
        root.imm_script_module.script.experience_widget = new factory(jQuery);
      }
    });
    // document.addEventListener('DOMContentLoaded', function() {
    //   root.imm_script_module.script.experience_widget = new factory(jQuery);
    // });
  })(this, function($) {
    var Self = this;
  
    Self.init = function() {
      //function goes here
    };
  
    Self.anotherFunction1 = function() {
      //function goes here
    };
  
  });