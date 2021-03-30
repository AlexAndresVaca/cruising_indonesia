(function(root, factory) {
    jQuery(window).on('imm-script:run', function() {
      if (typeof root.imm_script_module.script.blog_script == 'undefined') {
        root.imm_script_module.script.blog_script = new factory(jQuery);
      }
    });
  })(this, function($) {
    var Self = this;
    Self.elm = '';
    Self.elmBlog = '';
    Self.wrapper = '';
    Self.init = function() {
      Self.elm = $('.single-blog-section .single-blog-header');
      if (Self.elm.length > 0) {
        Self.wrapper = $('#content');
        Self.setSingleHeaderSize();
        $(window).on('load resize', function() {
          Self.setSingleHeaderSize();
        });
      }
  
      if ($('.first-post').length > 0) {
        Self.pushImageToRight($('.first-post .first-post-image'));
        Self.pushImageToRight($('.first-post .bg-img'));
  
        $(window).on('load resize', function() {
          Self.pushImageToRight($('.first-post .first-post-image'));
          Self.pushImageToRight($('.first-post .bg-img'));
        });
      }
  
      Self.iniAjax();
      if(Self.elmAjax.find('input.current-page').val() == Self.elmAjax.find('input.max-page').val()){
        Self.elmAjax.find('.load-ajax-button a').hide();
      }
      Self.elmAjax.find('.load-ajax-button a').click(function(e) {
        e.preventDefault();
        var page = (parseInt(Self.elmAjax.find('input.current-page').val()) + 1);
        Self.elmAjax.find('input.current-page').val(page);
        var params = {
          wrapper: Self.elmAjax,
          ppp: Self.elmAjax.find('input.posts-per-page'),
          current_page: Self.elmAjax.find('input.current-page'),
          max_page: Self.elmAjax.find('input.max-page'),
          template: Self.elmAjax.find('input.template')
        };
        Self.load_ajax(params)
        return false;
      });
  
      Self.iniAjax_archive();
      Self.elmAjax_archive.find('.load-ajax-button-archive a').click(function(e) {
        e.preventDefault();
        var page = (parseInt(Self.elmAjax.find('input.current-page').val()) + 1);
        Self.elmAjax.find('input.current-page').val(page);
        var params = {
          wrapper: Self.elmAjax,
          ppp: Self.elmAjax.find('input.posts-per-page'),
          current_page: Self.elmAjax.find('input.current-page'),
          max_page: Self.elmAjax.find('input.max-page'),
          template: Self.elmAjax.find('input.template')
        };
        Self.load_ajax_archive(params)
        return false;
      });
  
  
      $('.single-blog-header a.scroll-to-content').click(function(e){
        e.preventDefault();
        var a = $(this),
        heightOfbanner = a.closest('.single-blog-header').length > 0 ? a.closest('.single-blog-header').outerHeight() : 0;
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
  
    Self.setSingleHeaderSize = function() {
      Self.elm.width(Self.wrapper.width()).offset({
        'left': Self.wrapper.offset().left
      });
      return;
    };
    Self.pushImageToRight = function(elm) {
      var minright = Self.getWidthWindow();
      elm.css("margin-right", "-" + minright + "px");
      return;
    };
  
    Self.getWidthWindow = function() {
      var maxScreen = 1920;
      var ww = $(window).width();
      var cn = $('.container').width();
      var sum = ww - cn;
      var ml = sum / 2;
  
      var maxWidth = maxScreen - cn;
      var maxMl = maxWidth / 2;
      if (ww > 1920) {
        return maxMl;
      } else if (ww >= 1440) {
        return ml;
      } else if (ww <= 1024) {
        return ml-15;
      } else {
        return ml;
      }
    };
    Self.iniAjax = function() {
      Self.elmAjax = $('section.blogs-section .blog-lists');
      if (Self.elmAjax.length > 0 && typeof immGlobal !== 'undefined') {
        var page = (parseInt(Self.elmAjax.find('input.current-page').val()) + 1),
          ppp = Self.elmAjax.find('input.posts-per-page').val(),
          id = 'blog-lists-load-more-' + ppp + '-' + page;
        if (page <= Self.elmAjax.find('input.max-page').val()) {
          Self.elmAjax.find('.load-ajax-button').removeClass('no-available');
        } else {
          Self.elmAjax.find('.load-ajax-button').addClass('no-available');
        }
      }
    };
    Self.iniAjax_archive = function() {
      Self.elmAjax_archive = $('section.blogs-section .blog-lists');
      if (Self.elmAjax_archive.length > 0 && typeof immGlobal !== 'undefined') {
        var page = (parseInt(Self.elmAjax_archive.find('input.current-page').val()) + 1),
          ppp = Self.elmAjax_archive.find('input.posts-per-page').val(),
          id = 'blog-lists-load-more-' + ppp + '-' + page;
        if (page <= Self.elmAjax_archive.find('input.max-page').val()) {
          Self.elmAjax_archive.find('.load-ajax-button-archive').removeClass('no-available');
        } else {
          Self.elmAjax_archive.find('.load-ajax-button-archive').addClass('no-available');
        }
      }
    };
    Self.load_ajax = function(args) {
      var opt = {
        wrapper: null,
        ppp: null,
        current_page: null,
        max_page: null,
        source: null,
        template: null
      };
      $.extend(opt, args);
      $.ajax({
        method: 'POST',
        dataType: 'json',
        url: immAjax.ajaxurl,
        data: {
          action: 'get_ajax_blogs',
          ppp: opt.ppp.val(),
          current_page: opt.current_page.val()
        },
        beforeSend: function() {
          opt.wrapper.find('.load-ajax-button .load-more-button').prepend('<span class="ajax-loader"></span>');
        },
        success: function(response) {
          if (response.status == 1) {
            Self.get_template(response, opt.template.val(), opt.wrapper);
            $(window).trigger('imm-animation:run');
            opt.max_page.val(response.max_num_pages);
          }
        },
        error: function(error) {
        },
      });
    };
    Self.load_ajax_archive = function(args) {
      var opt = {
        wrapper: null,
        ppp: null,
        current_page: null,
        max_page: null,
        source: null,
        template: null
      };
      var category = $('.category-archive').val();
      $.extend(opt, args);
      $.ajax({
        method: 'POST',
        dataType: 'json',
        url: immAjax.ajaxurl,
        data: {
          action: 'get_ajax_archive',
          ppp: opt.ppp.val(),
          current_page: opt.current_page.val(),
          cat: category
        },
        beforeSend: function() {
          opt.wrapper.find('.load-ajax-button-archive .load-more-button-archive').prepend('<span class="ajax-loader"></span>');
        },
        success: function(response) {
          console.log(response.status);
          if (response.status == 1) {
            Self.get_template_archive(response, opt.template.val(), opt.wrapper);
            $(window).trigger('imm-animation:run');
            opt.max_page.val(response.max_num_pages);
          }
        },
        error: function(error) {
        },
      });
    };
    Self.load_ajax_archive = function(args) {
      var opt = {
        wrapper: null,
        ppp: null,
        current_page: null,
        max_page: null,
        source: null,
        template: null
      };
      var category = $('.category-archive').val();
      $.extend(opt, args);
      $.ajax({
        method: 'POST',
        dataType: 'json',
        url: immAjax.ajaxurl,
        data: {
          action: 'get_ajax_archive',
          ppp: opt.ppp.val(),
          current_page: opt.current_page.val(),
          cat: category
        },
        beforeSend: function() {
          opt.wrapper.find('.load-ajax-button-archive .load-more-button-archive').prepend('<span class="ajax-loader"></span>');
        },
        success: function(response) {
          console.log(response.status);
          if (response.status == 1) {
            Self.get_template_archive(response, opt.template.val(), opt.wrapper);
            $(window).trigger('imm-animation:run');
            opt.max_page.val(response.max_num_pages);
          }
        },
        error: function(error) {
        },
      });
    };
    Self.get_template = function(response, template, wrapper) {
      wrapper.find('.load-ajax-button .load-more-button').find('.ajax-loader').remove();
      var counter = 0;
      $.each(response.data, function(id, val) {
        var tmp = template;
        $.each(val, function(meta_key, meta_value) {
          var re = new RegExp('{{ ' + meta_key + ' }}', 'gi');
          tmp = tmp.replace(re, meta_value);
        });
        wrapper.find('.row').append(tmp);
        counter++;
      });
      var page = (parseInt(wrapper.find('input.current-page').val()) + 1),
        ppp = wrapper.find('input.posts-per-page').val(),
        id = 'blog-lists-load-more-' + ppp + '-' + page;
      if (page <= wrapper.find('input.max-page').val()) {
        wrapper.find('.load-ajax-button').removeClass('no-available');
      } else {
        wrapper.find('.load-ajax-button').addClass('no-available');
      }
    };
    Self.get_template_archive = function(response, template, wrapper) {
      wrapper.find('.load-ajax-button-archive .load-more-button-archive').find('.ajax-loader').remove();
      var counter = 0;
      $.each(response.data, function(id, val) {
        var tmp = template;
        $.each(val, function(meta_key, meta_value) {
          var re = new RegExp('{{ ' + meta_key + ' }}', 'gi');
          tmp = tmp.replace(re, meta_value);
        });
        wrapper.find('.row').append(tmp);
        counter++;
      });
      var page = (parseInt(wrapper.find('input.current-page').val()) + 1),
        ppp = wrapper.find('input.posts-per-page').val(),
        id = 'blog-lists-load-more-' + ppp + '-' + page;
      if (page <= wrapper.find('input.max-page').val()) {
        wrapper.find('.load-ajax-button-archive').removeClass('no-available');
      } else {
        wrapper.find('.load-ajax-button-archive').addClass('no-available');
      }
    }
  });