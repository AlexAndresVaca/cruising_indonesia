(function(root, factory) {
    jQuery(window).on('imm-script:run', function(){
      if(typeof root.imm_script_module.script.heading_text == 'undefined'){
        root.imm_script_module.script.heading_text = new factory(jQuery);
      }
    });
    // document.addEventListener('DOMContentLoaded', function() {
    //   root.imm_script_module.script.heading_text = new factory(jQuery);
    // });
  })(this, function($) {
    var Self = this;
  
    Self.init = function() {
      // Self.animText();
    };
  
    // Self.animText = function() {
  
    //   var at = $('.animation-text');
    //   if(typeof imm_script_module.scrollbar !== 'undefined'){
    //     imm_script_module.scrollbar.addListener(function(){
    //       if(!imm_script_module.scrollbar.isVisible(at[0]) || at.hasClass('run-text')){
    //         return !1;
    //       }
  
    //       at.addClass('run-text');
  
    //       // var tl = gsap.timeline();
    //       // var aa = document.querySelector('.run-text').querySelectorAll("p");
    //       // var splittext = immSplitText(aa,{words: 1, chars: 1, spacing: 10});
  
    //       // gsap.set(".run-text", {perspective: 400});
    //       // tl.staggerFrom(splittext.chars, 1.5, { yPercent: 125, alpha: 0, rotation: 4, ease: Expo.easeOut }, .1, 0);
  
  
  
  
    //         var tl = gsap.timeline();
    //         var elm = document.querySelector('.run-text').querySelectorAll("p");
    //         if(elm){
    //           tl.staggerFrom(elm, 1.5, {
    //            yPercent: 125,
    //            alpha: 0,
    //            rotation: 4,
    //            ease: Expo.easeOut
    //           }, .3, 0);
    //         }
    //     });
    //   }
  
  
    // };
  
    Self.anotherFunction2 = function() {
      //function goes here
    };
  });