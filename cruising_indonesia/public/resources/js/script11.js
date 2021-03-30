(function(root, factory) {
    document.addEventListener('DOMContentLoaded', function() {
      root.imm_module_header = new factory(jQuery);
      root.imm_module_header.init();
      // imm_script_module.script.imm_module_header = new factory(jQuery);
    });
  })(this, function($) {
    var Self = this;
  
    Self.init = function() {
      Self.elm = $('header#headerNavigation');
      imm_script_module.barbaInjectScript.push(function() {
        if (
          $('body').find('.page-banner-wrapper').length || $('body').find('.single-blog-header').length || $('body').find('.error-404').length) {
          Self.elm.removeClass('contact-page');
          $('body').removeClass('no-banner-page');
        }
        else {
          Self.elm.addClass('contact-page');
          $('body').addClass('no-banner-page');
        }
        $('.sub-menu-mobile').find('.sub-menu-mobile-wrapper').html('');
        $('.sub-menu-mobile').removeClass('open');
        $('.mobile-menu').removeClass('hide-menu');
        $('.sub-menu-mobile-wrappers').removeClass('open');
        $('.enquire-button-mobile').removeClass('scrolled');
        $('html').removeClass('no-scroll-mobile');
  
  
  
        Self.elm.removeClass('scrolled');
        Self.elm.removeClass('hideup');
        Self.elm.removeClass('menu-navigation-opened');
        Self.elm.removeClass('menu-navigation-open-before');
        Self.elm.removeClass('menu-navigation-open-after');
        Self.elm.removeClass('menu-navigation-closed-before');
        Self.elm.removeClass('menu-navigation-closed-after');
  
        // Self.elm.removeClass('menu-navigation-open-before menu-navigation-open-after menu-navigation-closed-before menu-navigation-closed-after menu-navigation-opened');
        Self.elm.find('.menu-navigation-wrapper').css({
          'transform': 'translate(0% , -100%)'
        });
        if ( document.documentElement.classList.contains('no-touchevents') ) {
            imm_script_module.scrollbar.addListener(imm_module_header.headerRun);
          // imm_script_module.scrollbar_menu.addListener(imm_module_header.headerRun);
        }
        if (!Self.currentMenu.firstLevel == '' || !Self.currentMenu.currentPage == '') {
          imm_module_header.currentMenu.remove();
        }
        Self.currentMenu.hover();
        Self.currentMenu.class();
        Self.currentMenu.click();
        Self.mobileMenu();
        Self.currentMenu.mobile();
      });
      if ( document.documentElement.classList.contains('touchevents') ) {
        $(window).scroll(function() {
            Self.headerRun();
          });
      }
      // Self.currentMenu.hover();
      Self.clickFunc();
    };
  
    Self.clickFunc = function() {
      Self.elm.find('a.button-menu.button-navigation').on("click", function(e) {
        e.preventDefault();
          // $('.sub-menu-mobile').removeClass('open');
          // $('.menu-item-has-children').parent().removeClass('hide-menu');
          // setTimeout(function(){ $('.sub-menu-mobile').find('.sub-menu-mobile-wrapper').html(''); }, 900);
        var menuNav = Self.elm.find('.menu-navigation-wrapper');
        var menuMob = Self.elm.find('.sub-menu-mobile-wrappers');
  
        if (Self.elm.hasClass('menu-navigation-opened')) {
          Self.elm.removeClass('menu-navigation-opened');
          Self.elm.addClass('menu-navigation-closed-before');
          Self.elm.removeClass('menu-navigation-open-after');
          TweenMax.fromTo(menuNav[0], 1, {
            y: "0%"
          }, {
            y: "-100%",
            onComplete: function() {
              Self.elm.removeClass('menu-navigation-closed-before');
              Self.elm.addClass('menu-navigation-closed-after');
            },
            ease: Power4.easeInOut
          });
  
          TweenMax.fromTo(menuMob[0], 1, {
            y: "0%"
          }, {
            y: "-100%",
            onComplete: function() {
              $('.sub-menu-mobile').removeClass('open');
              $('.sub-menu-mobile-wrappers').removeClass('open');
              $('.menu-item-has-children').parent().removeClass('hide-menu');
              $('.sub-menu-mobile').find('.sub-menu-mobile-wrapper').html('');
              $('.sub-menu-mobile-wrappers').css({"transform": "translate(0px, 0%)"});            
            },
            ease: Power4.easeInOut
          });
          if ( document.documentElement.classList.contains('no-touchevents') ) {
            imm_script_module.scrollbar.updatePluginOptions("stopScroll", { scroll: true });
          }
          else {
            $('html').removeClass('no-scroll-mobile');
          }
          console.log('click-remove');
  
        } else {
          Self.elm.addClass('menu-navigation-opened');
          Self.elm.addClass('menu-navigation-open-before');
          Self.elm.removeClass('menu-navigation-closed-after');
          TweenMax.fromTo(menuNav[0], 1, {
            y: "-100%"
          }, {
            y: "0%",
            onComplete: function() {
              Self.elm.removeClass('menu-navigation-open-before');
              Self.elm.addClass('menu-navigation-open-after');
            },
            ease: Power4.easeInOut
          });
          if ( document.documentElement.classList.contains('no-touchevents') ) {
            imm_script_module.scrollbar.updatePluginOptions("stopScroll", { scroll: false });
          }
          else {
            $('html').addClass('no-scroll-mobile');
          }
          // console.log('click-add');
        }
  
        return false;
      });
    };
    Self.lastScrollTop = {
      start: 0,
    };
    Self.headerRun = function(e) {
      // if (Self.elm.hasClass('scrolled') && e.offset.y > 200) {
      //   return !1;
      // }
      var scroll = $(window).scrollTop();
      if ( document.documentElement.classList.contains('touchevents') ) {
        
        if (scroll >= 10) {
          Self.elm.addClass('scrolled');
        } else {
          Self.elm.removeClass('scrolled');
        }
  
        if (scroll < 5) {
          $('.enquire-button-mobile').removeClass('scrolled');
        } else {
          $('.enquire-button-mobile').addClass('scrolled');
        }
      }
      else {
        if (e.offset.y < 100) {
          Self.elm.removeClass('scrolled');
        } else {
          Self.elm.addClass('scrolled');
        }
      }
      
      
  
      //scroll bottom hide header
      if ( document.documentElement.classList.contains('no-touchevents') ) {
          if (imm_script_module.scrollbarFunc.y < e.offset.y) {
              if (e.offset.y > 400) {
                Self.elm.addClass('hideup');
              } else {
                Self.elm.removeClass('hideup');
              }
          }
          else {
            Self.elm.removeClass('hideup');
          }
      }
      else {
           var st = $(window).scrollTop();
           if (st > Self.lastScrollTop.start){
                if (scroll > 400) {
                  Self.elm.addClass('hideup');
                } else {
                  Self.elm.removeClass('hideup');
                }
           } else {
                Self.elm.removeClass('hideup');
           }
           Self.lastScrollTop.start = st;
      }
  
  
    };
    Self.mobileMenu = function(e) {
      var subMenu = $('.menu-navigation-wrapper').find('.mobile-menu').find('.menu-item-has-children');
  
      subMenu.each(function(){
        var thismenu = $(this);
        $(this).append('<span class="open-submenu"><span class="icon-panah-abu"></span></span>');
        var btnSubmenu = $(this).find('.open-submenu');
        var htmlSub = $(this).find('.sub-menu').html();
        var clsSubmenu = $('.sub-menu-mobile').find('.close-submenu');
  
  
        btnSubmenu.click(function(){
          $('.sub-menu-mobile').find('.sub-menu-mobile-wrapper').append(htmlSub);
          $('.sub-menu-mobile').addClass('open');
          $('.sub-menu-mobile-wrappers').addClass('open');
          thismenu.parent().addClass('hide-menu');
        });
  
        clsSubmenu.click(function(){
          $('.sub-menu-mobile').removeClass('open');
          $('.sub-menu-mobile-wrappers').removeClass('open');
  
          thismenu.parent().removeClass('hide-menu');
          setTimeout(function(){ $('.sub-menu-mobile').find('.sub-menu-mobile-wrapper').html(''); }, 300);
        });
      });
    };
  
    Self.currentMenu = {
      click: function(){
        var menuLink = $('.menu-navigation-wrapper').find('.menu-item').find('a');
  
        var bodyA = $('body').find('a');
  
        bodyA.each(function(){
          $(this).on("click", function(){
            var dataHref = $(this).attr('href');
            var links = $('.menu-navigation-wrapper').find("[href='" + dataHref + "']");
            var linkmenu = $('.menu-navigation-wrapper').find("[href='" + dataHref + "']").parent().attr('id');
            var linkmenuSub = $('.menu-navigation-wrapper').find("[href='" + dataHref + "']").closest('.menu-item-has-children');
            var linkmenuSubid = $('.menu-navigation-wrapper').find("[href='" + dataHref + "']").closest('.menu-item-has-children').attr('id');
  
            if (links.length) {
              Self.currentMenu.currentPage = linkmenu;
              if (linkmenuSub.length) {
                Self.currentMenu.firstLevel = linkmenuSubid;
              }
              else {
                Self.currentMenu.firstLevel = linkmenu;
              }
            }
            else {
              Self.currentMenu.firstLevel = 'current-link';
              Self.currentMenu.currentPage = 'current-link';
            }
          });
        });
  
        menuLink.each(function(){
          $(this).click(function(){
            var parentId = $(this).closest('.menu-item-has-children').attr('id');
            var currpage = $(this).parent().attr('id');
  
            Self.currentMenu.firstLevel = parentId;
            Self.currentMenu.currentPage = currpage;
          });
        });
      },
      remove: function(){
        var menuLink = $('.menu-navigation-wrapper').find('.menu-item');
        menuLink.each(function(){
          $(this).removeClass('current-page-ancestor');
          $(this).removeClass('current-menu-item');
        });
      },
      hover: function(){
        var menuSiblings = $('.current-page-ancestor').siblings();
          menuSiblings.on("hover", function () {
            var menuLink = $('.menu-navigation-wrapper li');
            menuLink.each(function(){
              
              $(this).removeClass('current-page-ancestor');
              $(this).removeClass('current-menu-item');
            });
          });
      },
      class: function(){
        if (Self.currentMenu.firstLevel == Self.currentMenu.currentPage) {
          $('#'+Self.currentMenu.currentPage).addClass('current-menu-item');
        }
        else {
          $('#'+Self.currentMenu.firstLevel).addClass('current-page-ancestor');
          $('#'+Self.currentMenu.currentPage).addClass('current-menu-item');
        }
      },
      mobile: function(){
        var subMenu = $('.menu-navigation-wrapper').find('.mobile-menu').find('.current-menu-parent');
        var subMenuCurr = $('.menu-navigation-wrapper').find('.mobile-menu').find('.current-menu-parent').find('.sub-menu').html();
  
        if (subMenu.length) {
            var thismenu = $(this);
            $('.sub-menu-mobile').find('.sub-menu-mobile-wrapper').append(subMenuCurr);
            Self.elm.find('a.button-menu.button-navigation').one("click", function() {
                setTimeout(function(){
              if ($('.mobile-menu').hasClass('hide-menu')) {
                $('.sub-menu-mobile').addClass('open');
                $('.sub-menu-mobile-wrappers').addClass('open');
              }
                    
                }, 300);
            });
          subMenu.parent().addClass('hide-menu');
        }
  
        // if ( document.documentElement.classList.contains('touchevents') ) {
        //   var _overlay = document.getElementById('scroll-menu-mobile');
        //   var _clientY = null; // remember Y position on touch start
  
        //   _overlay.addEventListener('touchstart', function (event) {
        //       if (event.targetTouches.length === 1) {
        //           // detect single touch
        //           _clientY = event.targetTouches[0].clientY;
        //       }
        //   }, false);
  
        //   _overlay.addEventListener('touchmove', function (event) {
        //       if (event.targetTouches.length === 1) {
        //           // detect single touch
        //           disableRubberBand(event);
        //       }
        //   }, false);
  
        //   function disableRubberBand(event) {
        //       var clientY = event.targetTouches[0].clientY - _clientY;
  
        //       if (_overlay.scrollTop === 0 && clientY > 0) {
        //           // element is at the top of its scroll
        //           event.preventDefault();
        //       }
  
        //       if (isOverlayTotallyScrolled() && clientY < 0) {
        //           //element is at the top of its scroll
        //           event.preventDefault();
        //       }
        //   }
  
        //   function isOverlayTotallyScrolled() {
        //       // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
        //       return _overlay.scrollHeight - _overlay.scrollTop <= _overlay.clientHeight;
        //   }
        // }
  
      },
      firstLevel: '',
      currentPage: '',
    };
  });