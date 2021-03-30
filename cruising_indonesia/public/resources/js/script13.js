(function(root, factory) {
    jQuery(window).on('imm-script:run', function(){
      if(typeof root.imm_script_module.script.videoBanner == 'undefined'){
        root.imm_script_module.script.videoBanner = new factory(jQuery);
      }
    });
    // document.addEventListener('DOMContentLoaded', function() {
    //   imm_script_module.script.videoBanner = new factory(jQuery);
    // });
  })(this, function($) {
    var Self = this;
    Self.init = function() {
      Self.elm = $('.video-banner-wrapper #video-banner');
      if ($(window).width() < 992) {
        Self.elm[0].autoplay = false;
        Self.elm[0].load();
        $('.video-banner-wrapper .play-pause-btn').removeClass('is-playing');
        $('.video-banner-wrapper .video-overlay').addClass('active');
      } else {
        Self.elm[0].autoplay = false;
        Self.elm[0].load();
        $('.video-banner-wrapper .play-pause-btn').removeClass('is-playing');
        $('.video-banner-wrapper .video-overlay').removeClass('active');
      }
      Self.elm.bgVideo({
        pauseAfter: 0,
        fadeOnPause: true,
        showPausePlay: false,
      });
      Self.events();
    };
  
    Self.events = function() {
      $('.video-banner-wrapper .button-overlay').click(function() {
        if (Self.elm.hasClass('is-playing')) {
          Self.elm[0].pause();
          $('.video-banner-wrapper .play-pause-btn').removeClass('is-playing');
          $('.video-banner-wrapper .video-overlay').addClass('active');
        } else {
          Self.elm[0].play();
          $('.video-banner-wrapper .play-pause-btn').addClass('is-playing');
          $('.video-banner-wrapper .video-overlay').removeClass('active');
        }
      })
    };
  });