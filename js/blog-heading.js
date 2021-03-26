(function (root, factory) {
  jQuery(window).on("imm-script:run", function () {
    if (typeof root.imm_script_module.script.blog_heading_text == "undefined") {
      root.imm_script_module.script.blog_heading_text = new factory(jQuery);
    }
  });
  // document.addEventListener('DOMContentLoaded', function() {
  //   root.imm_script_module.script.heading_text = new factory(jQuery);
  // });
})(this, function ($) {
  var Self = this;

  Self.init = function () {
    // Self.animText();
  };

  Self.anotherFunction2 = function () {
    //function goes here
  };
});
(function (root, factory) {
  jQuery(window).on("imm-script:run", function () {
    if (typeof root.imm_script_module.script.our_partners == "undefined") {
      root.imm_script_module.script.our_partners = new factory(jQuery);
    }
  });
})(this, function ($) {
  var Self = this;

  Self.init = function () {
    Self.partner();
  };

  Self.partner = function () {
    var partner = $(".partners-logo");

    if ($(window).width() < 768) {
      partner.flickity({
        contain: true,
        wrapAround: true,
        prevNextButtons: false,
        pageDots: true,
        selectedAttraction: 0.02,
        adaptiveHeight: false,
        groupCells: 1,
        lazyLoad: true,
      });
    }
  };
});

(function (root, factory) {
  jQuery(window).on("imm-script:run", function () {
    if (typeof root.imm_script_module.script.background_quote == "undefined") {
      root.imm_script_module.script.background_quote = new factory(jQuery);
    }
  });
  // document.addEventListener('DOMContentLoaded', function() {
  //   root.imm_script_module.script.background_quote = new factory(jQuery);
  // });
})(this, function ($) {
  var Self = this;

  Self.init = function () {};

  Self.anotherFunction1 = function () {};
});

(function (root, factory) {
  jQuery(window).on("imm-script:run", function () {
    if (typeof root.imm_script_module.script.our_team_parallax == "undefined") {
      root.imm_script_module.script.our_team_parallax = new factory(jQuery);
    }
  });
  // document.addEventListener('DOMContentLoaded', function() {
  //   root.imm_script_module.script.our_team_parallax = new factory(jQuery);
  // });
})(this, function ($) {
  var Self = this;

  Self.init = function () {
    Self.window_screen();

    $(window).resize(function () {
      Self.window_screen();
    });
  };

  Self.anotherFunction1 = function () {};

  Self.window_screen = function () {
    Self.setMarginRight();
  };
  Self.getWidthWindow = function () {
    var maxScreen = 1920;
    var ww = $(window).width();
    var cn = $(".container").width();
    var sum = ww - cn;
    var ml = sum / 2;

    var maxWidth = maxScreen - cn;
    var maxMl = maxWidth / 2;
    if (ww > 1920) {
      return maxMl;
    } else if (ww >= 1440) {
      return ml + 30;
    } else {
      return ml + 15;
    }
  };
  Self.setMarginRight = function () {
    var minleft = Self.getWidthWindow();
    $(".our-team-parallax")
      .find(".image-wrap")
      .css("margin-right", "-" + minleft + "px");
  };
});

(function (root, factory) {
  jQuery(window).on("imm-script:run", function () {
    if (typeof root.imm_script_module.script.contact_form == "undefined") {
      root.imm_script_module.script.contact_form = new factory(jQuery);
    }
  });
  // document.addEventListener('DOMContentLoaded', function() {
  //   root.imm_script_module.script.contact_form = new factory(jQuery);
  // });
})(this, function ($) {
  var Self = this;

  Self.init = function () {
    Self.wrapInput();
    Self.placeholder();
  };

  Self.wrapInput = function () {
    var submitBtn = $(".contact-form").find(".submit-btn");
    submitBtn.wrap('<div class="btn-clear"></div>');
  };

  Self.placeholder = function () {
    $(".form-wrapper.with-placeholder")
      .find("input")
      .on("focus", function () {
        $(this)
          .parents(".form-wrapper.with-placeholder")
          .find("label")
          .addClass("focused");
      })
      .blur(function () {
        if ($(this).val() === "") {
          $(this)
            .parents(".form-wrapper.with-placeholder")
            .find("label")
            .removeClass("focused");
        }
      });

    $(".form-wrapper.with-placeholder")
      .find("textarea")
      .on("focus", function () {
        $(this)
          .parents(".form-wrapper.with-placeholder")
          .find("label")
          .addClass("focused");
      })
      .blur(function () {
        if ($(this).val() === "") {
          $(this)
            .parents(".form-wrapper.with-placeholder")
            .find("label")
            .removeClass("focused");
        }
      });
  };
});

(function (root, factory) {
  document.addEventListener("DOMContentLoaded", function () {
    // root.text_image_price = new factory(jQuery);
    // root.text_image_price.init();

    root.imm_script_module.script.text_image_price = new factory(jQuery);
  });
})(this, function ($) {
  var Self = this;

  Self.init = function () {};

  Self.anotherFunction1 = function () {};
});

(function (root, factory) {
  jQuery(window).on("imm-script:run", function () {
    if (typeof root.imm_script_module.script.two_column_text == "undefined") {
      root.imm_script_module.script.two_column_text = new factory(jQuery);
    }
  });
  // document.addEventListener('DOMContentLoaded', function() {
  //   root.imm_script_module.script.two_column_text = new factory(jQuery);
  // });
})(this, function ($) {
  var Self = this;

  Self.init = function () {};

  Self.anotherFunction1 = function () {};
});

(function (root, factory) {
  jQuery(window).on("imm-script:run", function () {
    if (typeof root.imm_script_module.script.yacht_slider == "undefined") {
      root.imm_script_module.script.yacht_slider = new factory(jQuery);
    }
  });
})(this, function ($) {
  var Self = this;

  Self.init = function () {
    Self.flickity();

    Self.window_screen();

    $(window).resize(function () {
      Self.window_screen();
    });
  };

  Self.flickity = function () {
    var slide = $(".yacht-slider-wrap");

    if ($(".yacth-item").length < 5) {
      slide.flickity({
        cellAlign: "left",
        freeScroll: true,
        contain: true,
        wrapAround: false,
        prevNextButtons: false,
        pageDots: true,
        selectedAttraction: 0.02,
        adaptiveHeight: true,
      });
    } else {
      slide.flickity({
        cellAlign: "left",
        freeScroll: true,
        contain: true,
        wrapAround: true,
        prevNextButtons: false,
        pageDots: true,
        selectedAttraction: 0.02,
        adaptiveHeight: true,
      });
    }

    // if (imm_script_module.isMobile.device == "mobile") {
    //     var test = false;
    //     slide.on('dragStart.flickity', function(){
    //       if(!test){
    //       test = imm_script_module.scrollbar.offset.y;
    //       }
    //     });
    //     slide.on('dragMove.flickity', function(event, pointer, moveVector){
    //       var cord = moveVector;
    //       var touchMoving = pointer;
    //       if(cord.y > -10 && cord.y < 10 && cord.x > 10 && cord.x < -10){
    //          imm_script_module.scrollbar.setPosition(0, test);
    //       }
    //     });
    // }
  };

  Self.window_screen = function () {
    Self.setMarginRight();
    if (typeof lazySizes !== "undefined") {
      lazySizes.autoSizer.checkElems();
    }
  };
  Self.getWidthWindow = function () {
    var maxScreen = 1920;
    var ww = $(window).width();
    var cn = $(".yacht-slider").find(".container").outerWidth();

    var sum = ww - cn;
    var ml = sum / 2;

    var maxWidth = maxScreen - cn;
    var maxMl = maxWidth / 2;

    if (ww > 1920) {
      return maxMl;
    } else if (ww < 768) {
      return ml;
    } else {
      return ml + 15;
    }
  };
  Self.setMarginRight = function () {
    var minleft = Self.getWidthWindow();
    $(".yacht-slider")
      .find(".yacht-slider-item")
      .css("margin-right", "-" + minleft + "px");
  };
});

(function (root, factory) {
  jQuery(window).on("imm-script:run", function () {
    if (
      typeof root.imm_script_module.script.recommendation_jet_slider ==
      "undefined"
    ) {
      root.imm_script_module.script.recommendation_jet_slider = new factory(
        jQuery
      );
    }
  });

  // document.addEventListener('DOMContentLoaded', function() {
  //   root.recommendation_jet_slider = new factory(jQuery);
  //   root.recommendation_jet_slider.init();
  // });
})(this, function ($) {
  var Self = this;

  Self.init = function () {
    Self.slider();

    Self.window_screen();

    $(window).resize(function () {
      Self.window_screen();
    });
  };

  Self.slider = function () {
    var main = $(".main-slider-wrap");
    var nav = $(".nav-slider-wrap");
    var info = $(".info-col-slider");

    main.flickity({
      cellAlign: "center",
      freeScroll: false,
      draggable: true,
      contain: true,
      wrapAround: false,
      prevNextButtons: false,
      pageDots: true,
      selectedAttraction: 0.02,
      adaptiveHeight: true,
    });

    nav.flickity({
      asNavFor: ".main-slider-wrap, .info-col-slider",
      contain: true,
      prevNextButtons: false,
      pageDots: false,
      cellAlign: "left",
      draggable: false,
    });

    info.flickity({
      contain: true,
      prevNextButtons: false,
      pageDots: false,
      cellAlign: "center",
      draggable: false,
      wrapAround: false,
      selectedAttraction: 0.02,
      adaptiveHeight: true,
    });

    main.on("change.flickity", function (event, index) {
      info.flickity("selectCell", index);
    });

    // if (imm_script_module.isMobile.device == "mobile") {
    //   var test = false;
    //   main.on('dragStart.flickity', function(){
    //     if(!test){
    //     test = imm_script_module.scrollbar.offset.y;
    //     }
    //   });
    //   main.on('dragMove.flickity', function(event, pointer, moveVector){
    //     var cord = moveVector;
    //     var touchMoving = pointer;
    //     if(cord.y > -10 && cord.y < 10 && cord.x > 10 && cord.x < -10){
    //        imm_script_module.scrollbar.setPosition(0, test);
    //     }
    //   });
    // }
  };

  Self.window_screen = function () {
    Self.setMarginRight();
    if (typeof lazySizes !== "undefined") {
      lazySizes.autoSizer.checkElems();
    }
  };
  Self.getWidthWindow = function () {
    var maxScreen = 1920;
    var ww = $(window).width();
    var cn = $(".container").width();
    var sum = ww - cn;
    var ml = sum / 2;

    var maxWidth = maxScreen - cn;
    var maxMl = maxWidth / 2;
    if (ww > 1920) {
      return maxMl;
    } else if (ww >= 1440) {
      return ml;
    } else {
      return ml;
    }
  };

  Self.setMarginRight = function () {
    var minleft = Self.getWidthWindow();
    $(".reccomendation-jet")
      .find(".info-col-wrap")
      .css("margin-right", "-" + minleft + "px");
    $(".reccomendation-jet")
      .find(".flickity-page-dots")
      .css("margin-left", minleft + "px");
  };
});

(function (root, factory) {
  // document.addEventListener('DOMContentLoaded', function() {
  //   root.background_hover = new factory(jQuery);
  //   root.background_hover.init();
  // });

  jQuery(window).on("imm-script:run", function () {
    if (typeof root.imm_script_module.script.background_hover == "undefined") {
      root.imm_script_module.script.background_hover = new factory(jQuery);
    }
  });
})(this, function ($) {
  var Self = this;

  Self.init = function () {};

  Self.anotherFunction1 = function () {};
});
(function (root, factory) {
  document.addEventListener("DOMContentLoaded", function () {
    root.icon_info = new factory(jQuery);
    root.icon_info.init();
  });
})(this, function ($) {
  var Self = this;

  Self.init = function () {
    Self.elm = $("element widget"); // if needed
    //function goes here
  };

  Self.anotherFunction1 = function () {
    //function goes here
  };

  Self.anotherFunction2 = function () {
    //function goes here
  };
});
(function (root, factory) {
  // document.addEventListener('DOMContentLoaded', function() {
  //   root.slider_single_info = new factory(jQuery);
  //   root.slider_single_info.init();
  // });
  jQuery(window).on("imm-script:run", function () {
    if (
      typeof root.imm_script_module.script.slider_single_info == "undefined"
    ) {
      root.imm_script_module.script.slider_single_info = new factory(jQuery);
    }
  });
})(this, function ($) {
  var Self = this;

  Self.init = function () {
    Self.gallery();
  };

  Self.gallery = function () {
    var slide = $(".gallery-slider");

    slide.flickity({
      cellAlign: "center",
      freeScroll: false,
      contain: true,
      wrapAround: true,
      prevNextButtons: false,
      pageDots: true,
      selectedAttraction: 0.02,
      adaptiveHeight: true,
      lazyLoad: true,
    });

    // if (imm_script_module.isMobile.device == "mobile") {
    //     var test = false;
    //     slide.on('dragStart.flickity', function(){
    //       if(!test){
    //       test = imm_script_module.scrollbar.offset.y;
    //       }
    //     });
    //     slide.on('dragMove.flickity', function(event, pointer, moveVector){
    //       var cord = moveVector;
    //       var touchMoving = pointer;
    //       if(cord.y > -10 && cord.y < 10 && cord.x > 10 && cord.x < -10){
    //          imm_script_module.scrollbar.setPosition(0, test);
    //       }
    //     });
    // }
  };
});
(function (root, factory) {
  jQuery(window).on("imm-script:run", function () {
    if (typeof root.imm_script_module.script.slider_left_info == "undefined") {
      root.imm_script_module.script.slider_left_info = new factory(jQuery);
    }
  });
})(this, function ($) {
  var Self = this;

  Self.init = function () {
    Self.slider();
  };

  Self.slider = function () {
    var main = $(".slider-left-info").find(".gallery-slider-info");
    var item = $(".slider-left-info").find(".image-item");

    if (item.length == 1) {
      main.flickity({
        cellAlign: "center",
        freeScroll: false,
        draggable: false,
        contain: true,
        wrapAround: true,
        prevNextButtons: false,
        pageDots: false,
        selectedAttraction: 0.02,
        adaptiveHeight: true,
      });
    } else {
      main.flickity({
        cellAlign: "center",
        freeScroll: false,
        draggable: true,
        contain: true,
        wrapAround: true,
        prevNextButtons: false,
        pageDots: true,
        selectedAttraction: 0.02,
        adaptiveHeight: true,
      });
    }
  };
});
(function (root, factory) {
  // document.addEventListener('DOMContentLoaded', function() {
  //   root.slider_nav_specification = new factory(jQuery);
  //   root.slider_nav_specification.init();
  // });

  jQuery(window).on("imm-script:run", function () {
    if (
      typeof root.imm_script_module.script.slider_nav_specification ==
      "undefined"
    ) {
      root.imm_script_module.script.slider_nav_specification = new factory(
        jQuery
      );
    }
  });
})(this, function ($) {
  var Self = this;

  Self.init = function () {
    Self.slide();
  };

  Self.slide = function () {
    var main = $(".slider-nav-specification").find(".gallery-slider-detail");
    var info = $(".slider-nav-specification").find(".description-slider");

    main.flickity({
      cellAlign: "center",
      freeScroll: false,
      draggable: true,
      contain: true,
      wrapAround: true,
      prevNextButtons: false,
      pageDots: false,
      selectedAttraction: 0.02,
      adaptiveHeight: true,
    });

    info.flickity({
      cellAlign: "center",
      freeScroll: false,
      draggable: false,
      contain: true,
      wrapAround: true,
      prevNextButtons: false,
      pageDots: false,
      selectedAttraction: 0.02,
      adaptiveHeight: true,
      fade: true,
    });

    var nav = $(".nav-slider");
    var navItem = nav.find(".nav-item");

    nav.on("click", ".nav-item", function (event) {
      var index = $(event.currentTarget).index();
      main.flickity("select", index);

      $(this).addClass("active");
      $(this).siblings().removeClass("active");
    });

    var flkty = main.data("flickity");

    main.on("select.flickity", function () {
      // set selected nav cell
      nav.find(".active").removeClass("active");
      var $selected = navItem.eq(flkty.selectedIndex).addClass("active");
      info.flickity("select", flkty.selectedIndex);
    });
  };
});
(function (root, factory) {
  // document.addEventListener('DOMContentLoaded', function() {
  //   root.slider_tab = new factory(jQuery);
  //   root.slider_tab.init();
  // });

  jQuery(window).on("imm-script:run", function () {
    if (typeof root.imm_script_module.script.slider_tab == "undefined") {
      root.imm_script_module.script.slider_tab = new factory(jQuery);
    }
  });
})(this, function ($) {
  var Self = this;

  Self.init = function () {
    Self.slider();
    Self.window_screen();
    Self.photoSwipeGal();
    $(window).resize(function () {
      Self.window_screen();
    });
  };

  Self.slider = function () {
    var tab = $(".slider-tab").find(".gallery-tab-wrap");
    var gallery = $(".slider-tab").find(".tab-gallery-slider");
    var gallery_less = $(".slider-tab").find(".tab-gallery-slider-less");

    tab.flickity({
      cellAlign: "center",
      freeScroll: false,
      draggable: false,
      contain: true,
      wrapAround: true,
      prevNextButtons: false,
      pageDots: false,
      selectedAttraction: 0.02,
      adaptiveHeight: true,
      fade: true,
    });

    gallery_less.flickity({
      cellAlign: "left",
      freeScroll: false,
      draggable: true,
      contain: true,
      wrapAround: false,
      prevNextButtons: false,
      pageDots: true,
      selectedAttraction: 0.02,
      adaptiveHeight: true,
    });

    var galleries = gallery.flickity({
      cellAlign: "left",
      freeScroll: false,
      draggable: true,
      contain: true,
      wrapAround: true,
      prevNextButtons: false,
      pageDots: true,
      selectedAttraction: 0.02,
      adaptiveHeight: true,
      fade: false,
    });

    var nav = $(".slider-tab");
    var navItem = nav.find(".tab-item");

    nav.on("click", ".tab-item", function (event) {
      var index = $(event.currentTarget).index();
      tab.flickity("select", index);
      console.log(index);
      console.log("tab");

      $(this).addClass("active");
      $(this).siblings().removeClass("active");
    });
  };

  Self.window_screen = function () {
    Self.setMarginRight();
    if (typeof lazySizes !== "undefined") {
      lazySizes.autoSizer.checkElems();
    }
  };
  Self.getWidthWindow = function () {
    var maxScreen = 1920;
    var ww = $(window).width();
    var cn = $(".container").width();
    var sum = ww - cn;
    var ml = sum / 2;

    var maxWidth = maxScreen - cn;
    var maxMl = maxWidth / 2;
    if (ww > 1920) {
      return maxMl;
    } else if (ww < 768) {
      return ml;
    } else {
      return ml + 15;
    }
  };

  Self.setMarginRight = function () {
    var minleft = Self.getWidthWindow();
    $(".slider-tab")
      .find(".tab-gallery-section")
      .css("margin-right", "-" + minleft + "px");
  };

  Self.photoSwipeGal = function () {
    var $pswp = $(".pswp")[0];

    $(".gallery-lists").each(function () {
      var $pic = $(this),
        getItems = function () {
          var items = [];
          $pic.find(".photoswipe-link").each(function () {
            var $href = $(this).attr("href"),
              $size = $(this).data("size").split("x"),
              $width = $size[0],
              $height = $size[1];

            var item = {
              src: $href,
              w: $width,
              h: $height,
            };

            items.push(item);
          });
          return items;
        };

      $pic.find(".photoswipe-link").click(function (event) {
        event.preventDefault();
        var items = getItems();
        var $index = $(this).data("index"),
          $items = $pic.find(".gallery-item"),
          parent = $(this).closest(".gallery-item"),
          index = $items.index(parent);
        var options = {
          index: index,
          bgOpacity: 0.7,
          showHideOpacity: true,
        };

        // Initialize PhotoSwipe
        var lightBox = new PhotoSwipe(
          $pswp,
          PhotoSwipeUI_Default,
          items,
          options
        );
        lightBox.init();
      });
    });
  };
});
(function (root, factory) {
  // document.addEventListener('DOMContentLoaded', function() {
  //   root.column_content = new factory(jQuery);
  //   root.column_content.init();
  // });

  jQuery(window).on("imm-script:run", function () {
    if (typeof root.imm_script_module.script.column_content == "undefined") {
      root.imm_script_module.script.column_content = new factory(jQuery);
    }
  });
})(this, function ($) {
  var Self = this;

  Self.init = function () {};

  Self.anotherFunction1 = function () {
    //function goes here
  };
});

(function (root, factory) {
  // document.addEventListener('DOMContentLoaded', function() {
  //   root.another_post = new factory(jQuery);
  //   root.another_post.init();
  // });

  jQuery(window).on("imm-script:run", function () {
    if (typeof root.imm_script_module.script.another_post == "undefined") {
      root.imm_script_module.script.another_post = new factory(jQuery);
    }
  });
})(this, function ($) {
  var Self = this;

  Self.init = function () {
    Self.slider();
    Self.window_screen();

    $(window).resize(function () {
      Self.window_screen();
    });
  };

  Self.slider = function () {
    var slide = $(".another-post").find(".post-slider");
    var type = $(".post-content");
    if ($(".post-item").length < 4) {
      if (type.hasClass("page")) {
        slide.flickity({
          cellAlign: "center",
          freeScroll: false,
          contain: true,
          wrapAround: false,
          prevNextButtons: false,
          pageDots: true,
          selectedAttraction: 0.02,
          adaptiveHeight: true,
          initialIndex: 1,
        });
      } else {
        slide.flickity({
          cellAlign: "center",
          freeScroll: false,
          contain: true,
          wrapAround: false,
          prevNextButtons: false,
          pageDots: true,
          selectedAttraction: 0.02,
          adaptiveHeight: true,
        });
      }
    } else {
      if (type.hasClass("page")) {
        slide.flickity({
          cellAlign: "center",
          freeScroll: false,
          contain: true,
          wrapAround: true,
          prevNextButtons: false,
          pageDots: true,
          selectedAttraction: 0.02,
          adaptiveHeight: true,
          initialIndex: 1,
        });
      } else {
        slide.flickity({
          cellAlign: "center",
          freeScroll: false,
          contain: true,
          wrapAround: true,
          prevNextButtons: false,
          pageDots: true,
          selectedAttraction: 0.02,
          adaptiveHeight: true,
        });
      }
    }

    // if (imm_script_module.isMobile.device == "mobile") {
    //     var test = false;
    //     slide.on('dragStart.flickity', function(){
    //       if(!test){
    //       test = imm_script_module.scrollbar.offset.y;
    //       }
    //     });
    //     slide.on('dragMove.flickity', function(event, pointer, moveVector){
    //       var cord = moveVector;
    //       var touchMoving = pointer;
    //       if(cord.y > -10 && cord.y < 10 && cord.x > 10 && cord.x < -10){
    //          imm_script_module.scrollbar.setPosition(0, test);
    //       }
    //     });
    // }
  };

  Self.window_screen = function () {
    Self.setMarginRight();
    if (typeof lazySizes !== "undefined") {
      lazySizes.autoSizer.checkElems();
    }
  };
  Self.getWidthWindow = function () {
    var maxScreen = 1920;
    var ww = $(window).width();
    var cn = $(".container").width();
    var sum = ww - cn;
    var ml = sum / 2;

    var maxWidth = maxScreen - cn;
    var maxMl = maxWidth / 2;
    if (ww > 768) {
      return 0;
    } else {
      return ml - 15;
    }
  };

  Self.setMarginRight = function () {
    var minleft = Self.getWidthWindow();
    $(".another-post")
      .find(".post-content")
      .css("margin-right", "-" + minleft + "px");
    $(".another-post")
      .find(".post-content")
      .css("margin-left", "-" + minleft + "px");
  };
});
(function (root, factory) {
  jQuery(window).on("imm-script:run", function () {
    if (typeof root.imm_script_module.script.all_post == "undefined") {
      root.imm_script_module.script.all_post = new factory(jQuery);
    }
  });
})(this, function ($) {
  var Self = this;

  Self.init = function () {
    Self.slider();
  };

  Self.slider = function () {
    var main = $(".all-post").find(".gallery-slider-info");

    main.flickity({
      cellAlign: "center",
      freeScroll: false,
      draggable: true,
      contain: true,
      wrapAround: true,
      prevNextButtons: false,
      pageDots: true,
      selectedAttraction: 0.02,
      adaptiveHeight: true,
    });
  };
});
(function (root, factory) {
  jQuery(window).on("imm-script:run", function () {
    if (typeof root.imm_script_module.script.map_content == "undefined") {
      root.imm_script_module.script.map_content = new factory(jQuery);
    }
  });
})(this, function ($) {
  var Self = this;

  Self.init = function () {
    Self.panzoom();
    Self.content();
    Scrollbar.initAll();
  };

  Self.panzoom = function () {
    var map_wrapper = $("map-wrapper");
    if ($(window).width() < 1025) {
      const panzoom = $(".map").panzoom({
        minScale: 1,
        maxScale: 4,
        minZoom: 1,
        maxZoom: 1,
        contain: "invert",
        duration: 500,
        easing: "ease-in-out",
        $zoomIn: $(".zoom-in"),
        $zoomOut: $(".zoom-out"),
      });
    } else {
      const panzoom = $(".map").panzoom({
        minScale: 1,
        maxScale: 4,
        minZoom: 1,
        maxZoom: 1,
        contain: "invert",
        duration: 500,
        easing: "ease-in-out",
        $zoomIn: $(".zoom-in"),
        $zoomOut: $(".zoom-out"),
      });
    }
  };

  Self.content = function () {
    var contentPopup = $(".content-map-wrapper").html();
    var mobNav = $(".mobile-nav-wrapper");
    var image = $(".content-map-wrapper").find(".image-content");
    var info = $(".content-map-wrapper").find(".content-text-wrapper");
    var mark = $(".marker-wrapper");
    var mark2 = $(".nav-wrapper");

    image.flickity({
      cellAlign: "center",
      freeScroll: false,
      draggable: false,
      contain: false,
      wrapAround: false,
      prevNextButtons: false,
      pageDots: false,
      selectedAttraction: 0.02,
      adaptiveHeight: true,
      fade: true,
    });

    info.flickity({
      contain: true,
      prevNextButtons: false,
      pageDots: false,
      cellAlign: "center",
      draggable: false,
      wrapAround: false,
      selectedAttraction: 0.02,
      adaptiveHeight: true,
      fade: true,
    });

    image.on("change.flickity", function (event, index) {
      info.flickity("selectCell", index);
    });

    mark.on("click", ".marker-item", function (event) {
      var index = $(this).index();
      image.flickity("select", index);
      $(this).addClass("active");
      $(this).siblings().removeClass("active");
      mark2.find(".nav-item:eq(" + index + ")").addClass("active");
      mark2
        .find(".nav-item:eq(" + index + ")")
        .siblings()
        .removeClass("active");
      if (document.documentElement.classList.contains("no-touchevents")) {
        imm_script_module.scrollbar.scrollIntoView(
          document.querySelector(".content-map-wrapper")
        );
      }
    });

    mark2.on("click", ".nav-item", function (event) {
      var index = $(this).index();
      image.flickity("select", index);
      $(this).addClass("active");
      $(this).siblings().removeClass("active");
      mark.find(".marker-item:eq(" + index + ")").addClass("active");
      mark
        .find(".marker-item:eq(" + index + ")")
        .siblings()
        .removeClass("active");
      if (mobNav.length) {
        mobNav.find(".nav-item:eq(" + index + ")").addClass("active");
        mobNav
          .find(".nav-item:eq(" + index + ")")
          .siblings()
          .removeClass("active");
      }
      if (document.documentElement.classList.contains("no-touchevents")) {
        imm_script_module.scrollbar.scrollIntoView(
          document.querySelector(".content-map-wrapper")
        );
      } else {
        var page = $("html, body");
        page.on(
          "scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove",
          function () {
            page.stop();
          }
        );
        page.animate(
          { scrollTop: $(".content-map-wrapper").offset().top + 100 },
          1300,
          function () {
            page.off(
              "scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove"
            );
          }
        );
      }
    });

    if (mobNav.length) {
      mobNav.on("click", ".nav-item", function (event) {
        var index = $(this).index();
        image.flickity("select", index);
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        mark2.find(".nav-item:eq(" + index + ")").addClass("active");
        mark2
          .find(".nav-item:eq(" + index + ")")
          .siblings()
          .removeClass("active");
      });
    }
  };
});
(function (root, factory) {
  jQuery(window).on("imm-script:run", function () {
    if (typeof root.imm_script_module.script.imm_tab == "undefined") {
      root.imm_script_module.script.imm_tab = new factory(jQuery);
    }
  });
})(this, function ($) {
  var Self = this;

  Self.init = function () {
    Self.tab();
  };

  Self.tab = function () {
    var tabPane = $(".imm-tab").find(".tab-pane");
    var content = $(".imm-tab").find(".tab-content");
    var tab = $(".imm-tab").find(".nav-tabs");

    // tabPane.each(function(){
    //   var heightP = $(this).outerHeight();
    //   $(this).height(heightP);
    // });

    content.flickity({
      contain: false,
      prevNextButtons: false,
      pageDots: false,
      cellAlign: "center",
      draggable: false,
      wrapAround: false,
      selectedAttraction: 0.02,
      adaptiveHeight: true,
      fade: true,
    });

    tab.on("click", ".nav-item", function (event) {
      var index = $(this).index();
      content.flickity("select", index);
      $(this).addClass("active");
      $(this).siblings().removeClass("active");
    });

    $(".to-top-tab").click(function (e) {
      e.preventDefault();
      var a = $(this),
        heightOfbanner =
          $(".page-banner-wrapper").length > 0
            ? $(".page-banner-wrapper").outerHeight()
            : 0;
      if (imm_script_module.isMobile.device == "desktop") {
        if (imm_script_module.scrollbar) {
          imm_script_module.scrollbar.scrollTo(0, heightOfbanner, 1300);
        }
      } else {
        $("html, body").animate(
          {
            scrollTop: $(".imm-tab").offset().top,
          },
          1300
        );
      }
      return false;
    });
  };
});
(function (root, factory) {
  jQuery(window).on("imm-script:run", function () {
    if (typeof root.imm_script_module.script.contact_info_form == "undefined") {
      root.imm_script_module.script.contact_info_form = new factory(jQuery);
    }
  });
})(this, function ($) {
  var Self = this;

  Self.init = function () {
    Self.wrapInput();
    Self.placeholder();
  };

  Self.wrapInput = function () {
    var submitBtn = $(".contact-form-content").find(".submit-btn");
    submitBtn.wrap('<div class="btn-clear"></div>');
  };

  Self.placeholder = function () {
    $(".form-wrapper.with-placeholder")
      .find("input")
      .focus(function () {
        $(this)
          .parents(".form-wrapper.with-placeholder")
          .find("label")
          .addClass("focused");
      })
      .blur(function () {
        if ($(this).val() === "") {
          $(this)
            .parents(".form-wrapper.with-placeholder")
            .find("label")
            .removeClass("focused");
        }
      });

    $(".form-wrapper.with-placeholder")
      .find("textarea")
      .focus(function () {
        $(this)
          .parents(".form-wrapper.with-placeholder")
          .find("label")
          .addClass("focused");
      })
      .blur(function () {
        if ($(this).val() === "") {
          $(this)
            .parents(".form-wrapper.with-placeholder")
            .find("label")
            .removeClass("focused");
        }
      });
  };
});
(function (root, factory) {
  jQuery(window).on("imm-script:run", function () {
    if (typeof root.imm_script_module.script.slider_popup == "undefined") {
      root.imm_script_module.script.slider_popup = new factory(jQuery);
    }
  });
})(this, function ($) {
  var Self = this;

  Self.init = function () {
    Self.slider();
    imm_script_module.barbaInjectScript.push(function () {
      $(".popup-sliders-wrap").removeClass("open");
      $(".close-popup-header").removeClass("open");
      $("#headerNavigation").find(".button-wrapper ul").removeClass("disable");
      $("#headerNavigation").removeClass("popup-header");
      $(".popup-content").removeClass("show");
      $("#headerNavigation").removeClass("popup-scroll");
    });
  };

  Self.slider = function () {
    var contentPopup = $(".slider-popup").find(".popup-sliders").html();
    if (!$(".popup-sliders-wrap").length) {
      $("#page").append('<div class="popup-sliders-wrap"></div>');
    }
    $(".popup-sliders-wrap").append(contentPopup);
    $(".slider-popup").find(".popup-sliders").remove();
    $("#headerNavigation")
      .find(".button-wrapper")
      .append(
        '<div class="close-popup-header"><span>Close</span><span class="icon-Close"></span></div>'
      );

    var image = $(".slider-popup").find(".slider-wrap");
    var popup = $(".popup-sliders-wrap").find(".popup-wrapper");
    if ($(window).width() > 1024) {
      image.flickity({
        cellAlign: "center",
        freeScroll: false,
        draggable: true,
        contain: true,
        wrapAround: true,
        prevNextButtons: false,
        pageDots: false,
        selectedAttraction: 0.02,
        adaptiveHeight: true,
        initialIndex: 1,
      });
    } else if ($(window).width() > 767) {
      image.flickity({
        cellAlign: "center",
        freeScroll: false,
        draggable: true,
        contain: true,
        wrapAround: true,
        prevNextButtons: false,
        pageDots: false,
        selectedAttraction: 0.02,
        adaptiveHeight: true,
        initialIndex: 1,
        cellAlign: "left",
      });
    } else {
      image.flickity({
        cellAlign: "center",
        freeScroll: false,
        draggable: true,
        contain: true,
        wrapAround: true,
        prevNextButtons: false,
        pageDots: false,
        selectedAttraction: 0.02,
        adaptiveHeight: true,
        initialIndex: 1,
      });
    }

    var prev = $(".slider-popup").find(".arrow-prev");
    var next = $(".slider-popup").find(".arrow-next");

    prev.on("click", function () {
      image.flickity("previous");
    });

    next.on("click", function () {
      image.flickity("next");
    });

    $(".close-popup-header").click(function () {
      $(".popup-sliders-wrap").removeClass("open");
      $(".close-popup-header").removeClass("open");
      $("#headerNavigation").find(".button-wrapper ul").removeClass("disable");
      $("#headerNavigation").removeClass("popup-header");
      $(".popup-content").removeClass("show");
      $("#headerNavigation").removeClass("popup-scroll");
    });

    image.on(
      "staticClick.flickity",
      function (event, pointer, cellElement, cellIndex) {
        if (cellElement) {
          $(".popup-content:eq(" + cellIndex + ")").addClass("show");
          $(".popup-sliders-wrap").addClass("open");
          $(".close-popup-header").addClass("open");
          $("#headerNavigation").find(".button-wrapper ul").addClass("disable");
          $("#headerNavigation").addClass("popup-header");
          if (imm_script_module.isMobile.device == "desktop") {
            Scrollbar.initAll();
          }
        }
      }
    );

    if (imm_script_module.isMobile.device == "mobile") {
      var popup_slider = $(".popup-content");

      popup_slider.on("scroll", function () {
        var scrollTopup = $(this).scrollTop();

        if (scrollTopup > 10) {
          $("#headerNavigation").addClass("popup-scroll");
        } else {
          $("#headerNavigation").removeClass("popup-scroll");
        }
      });
    }
  };
});
(function (root, factory) {
  jQuery(window).on("imm-script:run", function () {
    if (typeof root.imm_script_module.script.itinerary_content == "undefined") {
      root.imm_script_module.script.itinerary_content = new factory(jQuery);
    }
  });
})(this, function ($) {
  var Self = this;

  Self.init = function () {
    Self.content();
    Scrollbar.initAll();
  };

  Self.content = function () {
    var image = $(".content-itinerary-wrapper").find(".image-content");
    var info = $(".content-itinerary-wrapper").find(".content-text-wrapper");
    var mark2 = $(".nav-wrapper");

    image.flickity({
      cellAlign: "center",
      freeScroll: false,
      draggable: false,
      contain: false,
      wrapAround: false,
      prevNextButtons: false,
      pageDots: false,
      selectedAttraction: 0.02,
      adaptiveHeight: true,
      fade: true,
    });

    info.flickity({
      contain: true,
      prevNextButtons: false,
      pageDots: false,
      cellAlign: "center",
      draggable: false,
      wrapAround: false,
      selectedAttraction: 0.02,
      adaptiveHeight: true,
      fade: true,
    });

    image.on("change.flickity", function (event, index) {
      info.flickity("selectCell", index);
    });

    mark2.on("click", ".nav-item", function (event) {
      var index = $(this).index();
      image.flickity("select", index);
      $(this).addClass("active");
      $(this).siblings().removeClass("active");
    });
  };
});

/*! lazysizes - v5.1.2 */
!(function (a, b) {
  var c = function () {
    b(a.lazySizes), a.removeEventListener("lazyunveilread", c, !0);
  };
  (b = b.bind(null, a, a.document)),
    "object" == typeof module && module.exports
      ? b(require("lazysizes"))
      : a.lazySizes
      ? c()
      : a.addEventListener("lazyunveilread", c, !0);
})(window, function (a, b, c) {
  "use strict";
  function d(a, c) {
    if (!g[a]) {
      var d = b.createElement(c ? "link" : "script"),
        e = b.getElementsByTagName("script")[0];
      c ? ((d.rel = "stylesheet"), (d.href = a)) : (d.src = a),
        (g[a] = !0),
        (g[d.src || d.href] = !0),
        e.parentNode.insertBefore(d, e);
    }
  }
  var e,
    f,
    g = {};
  b.addEventListener &&
    ((f = /\(|\)|\s|'/),
    (e = function (a, c) {
      var d = b.createElement("img");
      (d.onload = function () {
        (d.onload = null), (d.onerror = null), (d = null), c();
      }),
        (d.onerror = d.onload),
        (d.src = a),
        d && d.complete && d.onload && d.onload();
    }),
    addEventListener(
      "lazybeforeunveil",
      function (a) {
        if (a.detail.instance == c) {
          var b, g, h, i;
          a.defaultPrevented ||
            ("none" == a.target.preload && (a.target.preload = "auto"),
            (b = a.target.getAttribute("data-link")),
            b && d(b, !0),
            (b = a.target.getAttribute("data-script")),
            b && d(b),
            (b = a.target.getAttribute("data-require")),
            b && (c.cfg.requireJs ? c.cfg.requireJs([b]) : d(b)),
            (h = a.target.getAttribute("data-bg")),
            h &&
              ((a.detail.firesLoad = !0),
              (g = function () {
                (a.target.style.backgroundImage =
                  "url(" + (f.test(h) ? JSON.stringify(h) : h) + ")"),
                  (a.detail.firesLoad = !1),
                  c.fire(a.target, "_lazyloaded", {}, !0, !0);
              }),
              e(h, g)),
            (i = a.target.getAttribute("data-poster")) &&
              ((a.detail.firesLoad = !0),
              (g = function () {
                (a.target.poster = i),
                  (a.detail.firesLoad = !1),
                  c.fire(a.target, "_lazyloaded", {}, !0, !0);
              }),
              e(i, g)));
        }
      },
      !1
    ));
});
/*! lazysizes - v5.1.2 */
!(function (a, b) {
  var c = b(a, a.document);
  (a.lazySizes = c),
    "object" == typeof module && module.exports && (module.exports = c);
})("undefined" != typeof window ? window : {}, function (a, b) {
  "use strict";
  var c, d;
  if (
    ((function () {
      var b,
        c = {
          lazyClass: "lazyload",
          loadedClass: "lazyloaded",
          loadingClass: "lazyloading",
          preloadClass: "lazypreload",
          errorClass: "lazyerror",
          autosizesClass: "lazyautosizes",
          srcAttr: "data-src",
          srcsetAttr: "data-srcset",
          sizesAttr: "data-sizes",
          minSize: 40,
          customMedia: {},
          init: !0,
          expFactor: 1.5,
          hFac: 0.8,
          loadMode: 2,
          loadHidden: !0,
          ricTimeout: 0,
          throttleDelay: 125,
        };
      d = a.lazySizesConfig || a.lazysizesConfig || {};
      for (b in c) b in d || (d[b] = c[b]);
    })(),
    !b || !b.getElementsByClassName)
  )
    return { init: function () {}, cfg: d, noSupport: !0 };
  var e = b.documentElement,
    f = a.Date,
    g = a.HTMLPictureElement,
    h = "addEventListener",
    i = "getAttribute",
    j = a[h],
    k = a.setTimeout,
    l = a.requestAnimationFrame || k,
    m = a.requestIdleCallback,
    n = /^picture$/i,
    o = ["load", "error", "lazyincluded", "_lazyloaded"],
    p = {},
    q = Array.prototype.forEach,
    r = function (a, b) {
      return (
        p[b] || (p[b] = new RegExp("(\\s|^)" + b + "(\\s|$)")),
        p[b].test(a[i]("class") || "") && p[b]
      );
    },
    s = function (a, b) {
      r(a, b) ||
        a.setAttribute("class", (a[i]("class") || "").trim() + " " + b);
    },
    t = function (a, b) {
      var c;
      (c = r(a, b)) &&
        a.setAttribute("class", (a[i]("class") || "").replace(c, " "));
    },
    u = function (a, b, c) {
      var d = c ? h : "removeEventListener";
      c && u(a, b),
        o.forEach(function (c) {
          a[d](c, b);
        });
    },
    v = function (a, d, e, f, g) {
      var h = b.createEvent("Event");
      return (
        e || (e = {}),
        (e.instance = c),
        h.initEvent(d, !f, !g),
        (h.detail = e),
        a.dispatchEvent(h),
        h
      );
    },
    w = function (b, c) {
      var e;
      !g && (e = a.picturefill || d.pf)
        ? (c && c.src && !b[i]("srcset") && b.setAttribute("srcset", c.src),
          e({ reevaluate: !0, elements: [b] }))
        : c && c.src && (b.src = c.src);
    },
    x = function (a, b) {
      return (getComputedStyle(a, null) || {})[b];
    },
    y = function (a, b, c) {
      for (c = c || a.offsetWidth; c < d.minSize && b && !a._lazysizesWidth; )
        (c = b.offsetWidth), (b = b.parentNode);
      return c;
    },
    z = (function () {
      var a,
        c,
        d = [],
        e = [],
        f = d,
        g = function () {
          var b = f;
          for (f = d.length ? e : d, a = !0, c = !1; b.length; ) b.shift()();
          a = !1;
        },
        h = function (d, e) {
          a && !e
            ? d.apply(this, arguments)
            : (f.push(d), c || ((c = !0), (b.hidden ? k : l)(g)));
        };
      return (h._lsFlush = g), h;
    })(),
    A = function (a, b) {
      return b
        ? function () {
            z(a);
          }
        : function () {
            var b = this,
              c = arguments;
            z(function () {
              a.apply(b, c);
            });
          };
    },
    B = function (a) {
      var b,
        c = 0,
        e = d.throttleDelay,
        g = d.ricTimeout,
        h = function () {
          (b = !1), (c = f.now()), a();
        },
        i =
          m && g > 49
            ? function () {
                m(h, { timeout: g }), g !== d.ricTimeout && (g = d.ricTimeout);
              }
            : A(function () {
                k(h);
              }, !0);
      return function (a) {
        var d;
        (a = !0 === a) && (g = 33),
          b ||
            ((b = !0),
            (d = e - (f.now() - c)),
            d < 0 && (d = 0),
            a || d < 9 ? i() : k(i, d));
      };
    },
    C = function (a) {
      var b,
        c,
        d = 99,
        e = function () {
          (b = null), a();
        },
        g = function () {
          var a = f.now() - c;
          a < d ? k(g, d - a) : (m || e)(e);
        };
      return function () {
        (c = f.now()), b || (b = k(g, d));
      };
    },
    D = (function () {
      var g,
        l,
        m,
        o,
        p,
        y,
        D,
        F,
        G,
        H,
        I,
        J,
        K = /^img$/i,
        L = /^iframe$/i,
        M = "onscroll" in a && !/(gle|ing)bot/.test(navigator.userAgent),
        N = 0,
        O = 0,
        P = 0,
        Q = -1,
        R = function (a) {
          P--, (!a || P < 0 || !a.target) && (P = 0);
        },
        S = function (a) {
          return (
            null == J && (J = "hidden" == x(b.body, "visibility")),
            J ||
              !(
                "hidden" == x(a.parentNode, "visibility") &&
                "hidden" == x(a, "visibility")
              )
          );
        },
        T = function (a, c) {
          var d,
            f = a,
            g = S(a);
          for (
            F -= c, I += c, G -= c, H += c;
            g && (f = f.offsetParent) && f != b.body && f != e;

          )
            (g = (x(f, "opacity") || 1) > 0) &&
              "visible" != x(f, "overflow") &&
              ((d = f.getBoundingClientRect()),
              (g =
                H > d.left &&
                G < d.right &&
                I > d.top - 1 &&
                F < d.bottom + 1));
          return g;
        },
        U = function () {
          var a,
            f,
            h,
            j,
            k,
            m,
            n,
            p,
            q,
            r,
            s,
            t,
            u = c.elements;
          if ((o = d.loadMode) && P < 8 && (a = u.length)) {
            for (f = 0, Q++; f < a; f++)
              if (u[f] && !u[f]._lazyRace)
                if (!M || (c.prematureUnveil && c.prematureUnveil(u[f])))
                  aa(u[f]);
                else if (
                  (((p = u[f][i]("data-expand")) && (m = 1 * p)) || (m = O),
                  r ||
                    ((r =
                      !d.expand || d.expand < 1
                        ? e.clientHeight > 500 && e.clientWidth > 500
                          ? 500
                          : 370
                        : d.expand),
                    (c._defEx = r),
                    (s = r * d.expFactor),
                    (t = d.hFac),
                    (J = null),
                    O < s && P < 1 && Q > 2 && o > 2 && !b.hidden
                      ? ((O = s), (Q = 0))
                      : (O = o > 1 && Q > 1 && P < 6 ? r : N)),
                  q !== m &&
                    ((y = innerWidth + m * t),
                    (D = innerHeight + m),
                    (n = -1 * m),
                    (q = m)),
                  (h = u[f].getBoundingClientRect()),
                  (I = h.bottom) >= n &&
                    (F = h.top) <= D &&
                    (H = h.right) >= n * t &&
                    (G = h.left) <= y &&
                    (I || H || G || F) &&
                    (d.loadHidden || S(u[f])) &&
                    ((l && P < 3 && !p && (o < 3 || Q < 4)) || T(u[f], m)))
                ) {
                  if ((aa(u[f]), (k = !0), P > 9)) break;
                } else
                  !k &&
                    l &&
                    !j &&
                    P < 4 &&
                    Q < 4 &&
                    o > 2 &&
                    (g[0] || d.preloadAfterLoad) &&
                    (g[0] ||
                      (!p &&
                        (I ||
                          H ||
                          G ||
                          F ||
                          "auto" != u[f][i](d.sizesAttr)))) &&
                    (j = g[0] || u[f]);
            j && !k && aa(j);
          }
        },
        V = B(U),
        W = function (a) {
          var b = a.target;
          if (b._lazyCache) return void delete b._lazyCache;
          R(a),
            s(b, d.loadedClass),
            t(b, d.loadingClass),
            u(b, Y),
            v(b, "lazyloaded");
        },
        X = A(W),
        Y = function (a) {
          X({ target: a.target });
        },
        Z = function (a, b) {
          try {
            a.contentWindow.location.replace(b);
          } catch (c) {
            a.src = b;
          }
        },
        $ = function (a) {
          var b,
            c = a[i](d.srcsetAttr);
          (b = d.customMedia[a[i]("data-media") || a[i]("media")]) &&
            a.setAttribute("media", b),
            c && a.setAttribute("srcset", c);
        },
        _ = A(function (a, b, c, e, f) {
          var g, h, j, l, o, p;
          (o = v(a, "lazybeforeunveil", b)).defaultPrevented ||
            (e && (c ? s(a, d.autosizesClass) : a.setAttribute("sizes", e)),
            (h = a[i](d.srcsetAttr)),
            (g = a[i](d.srcAttr)),
            f && ((j = a.parentNode), (l = j && n.test(j.nodeName || ""))),
            (p = b.firesLoad || ("src" in a && (h || g || l))),
            (o = { target: a }),
            s(a, d.loadingClass),
            p && (clearTimeout(m), (m = k(R, 2500)), u(a, Y, !0)),
            l && q.call(j.getElementsByTagName("source"), $),
            h
              ? a.setAttribute("srcset", h)
              : g && !l && (L.test(a.nodeName) ? Z(a, g) : (a.src = g)),
            f && (h || l) && w(a, { src: g })),
            a._lazyRace && delete a._lazyRace,
            t(a, d.lazyClass),
            z(function () {
              var b = a.complete && a.naturalWidth > 1;
              (p && !b) ||
                (b && s(a, "ls-is-cached"),
                W(o),
                (a._lazyCache = !0),
                k(function () {
                  "_lazyCache" in a && delete a._lazyCache;
                }, 9)),
                "lazy" == a.loading && P--;
            }, !0);
        }),
        aa = function (a) {
          if (!a._lazyRace) {
            var b,
              c = K.test(a.nodeName),
              e = c && (a[i](d.sizesAttr) || a[i]("sizes")),
              f = "auto" == e;
            ((!f && l) ||
              !c ||
              (!a[i]("src") && !a.srcset) ||
              a.complete ||
              r(a, d.errorClass) ||
              !r(a, d.lazyClass)) &&
              ((b = v(a, "lazyunveilread").detail),
              f && E.updateElem(a, !0, a.offsetWidth),
              (a._lazyRace = !0),
              P++,
              _(a, b, f, e, c));
          }
        },
        ba = C(function () {
          (d.loadMode = 3), V();
        }),
        ca = function () {
          3 == d.loadMode && (d.loadMode = 2), ba();
        },
        da = function () {
          if (!l) {
            if (f.now() - p < 999) return void k(da, 999);
            (l = !0), (d.loadMode = 3), V(), j("scroll", ca, !0);
          }
        };
      return {
        _: function () {
          (p = f.now()),
            (c.elements = b.getElementsByClassName(d.lazyClass)),
            (g = b.getElementsByClassName(d.lazyClass + " " + d.preloadClass)),
            j("scroll", V, !0),
            j("resize", V, !0),
            a.MutationObserver
              ? new MutationObserver(V).observe(e, {
                  childList: !0,
                  subtree: !0,
                  attributes: !0,
                })
              : (e[h]("DOMNodeInserted", V, !0),
                e[h]("DOMAttrModified", V, !0),
                setInterval(V, 999)),
            j("hashchange", V, !0),
            [
              "focus",
              "mouseover",
              "click",
              "load",
              "transitionend",
              "animationend",
            ].forEach(function (a) {
              b[h](a, V, !0);
            }),
            /d$|^c/.test(b.readyState)
              ? da()
              : (j("load", da), b[h]("DOMContentLoaded", V), k(da, 2e4)),
            c.elements.length ? (U(), z._lsFlush()) : V();
        },
        checkElems: V,
        unveil: aa,
        _aLSL: ca,
      };
    })(),
    E = (function () {
      var a,
        c = A(function (a, b, c, d) {
          var e, f, g;
          if (
            ((a._lazysizesWidth = d),
            (d += "px"),
            a.setAttribute("sizes", d),
            n.test(b.nodeName || ""))
          )
            for (
              e = b.getElementsByTagName("source"), f = 0, g = e.length;
              f < g;
              f++
            )
              e[f].setAttribute("sizes", d);
          c.detail.dataAttr || w(a, c.detail);
        }),
        e = function (a, b, d) {
          var e,
            f = a.parentNode;
          f &&
            ((d = y(a, f, d)),
            (e = v(a, "lazybeforesizes", { width: d, dataAttr: !!b })),
            e.defaultPrevented ||
              ((d = e.detail.width) &&
                d !== a._lazysizesWidth &&
                c(a, f, e, d)));
        },
        f = function () {
          var b,
            c = a.length;
          if (c) for (b = 0; b < c; b++) e(a[b]);
        },
        g = C(f);
      return {
        _: function () {
          (a = b.getElementsByClassName(d.autosizesClass)), j("resize", g);
        },
        checkElems: g,
        updateElem: e,
      };
    })(),
    F = function () {
      !F.i && b.getElementsByClassName && ((F.i = !0), E._(), D._());
    };
  return (
    k(function () {
      d.init && F();
    }),
    (c = {
      cfg: d,
      autoSizer: E,
      loader: D,
      init: F,
      uP: w,
      aC: s,
      rC: t,
      hC: r,
      fire: v,
      gW: y,
      rAF: z,
    })
  );
});
/*! PhotoSwipe Default UI - 4.1.2 - 2017-04-05
 * http://photoswipe.com
 * Copyright (c) 2017 Dmitry Semenov; */
!(function (a, b) {
  "function" == typeof define && define.amd
    ? define(b)
    : "object" == typeof exports
    ? (module.exports = b())
    : (a.PhotoSwipeUI_Default = b());
})(this, function () {
  "use strict";
  var a = function (a, b) {
    var c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u,
      v = this,
      w = !1,
      x = !0,
      y = !0,
      z = {
        barsSize: { top: 44, bottom: "auto" },
        closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
        timeToIdle: 4e3,
        timeToIdleOutside: 1e3,
        loadingIndicatorDelay: 1e3,
        addCaptionHTMLFn: function (a, b) {
          return a.title
            ? ((b.children[0].innerHTML = a.title), !0)
            : ((b.children[0].innerHTML = ""), !1);
        },
        closeEl: !0,
        captionEl: !0,
        fullscreenEl: !0,
        zoomEl: !0,
        shareEl: !0,
        counterEl: !0,
        arrowEl: !0,
        preloaderEl: !0,
        tapToClose: !1,
        tapToToggleControls: !0,
        clickToCloseNonZoomable: !0,
        shareButtons: [
          {
            id: "facebook",
            label: "Share on Facebook",
            url: "https://www.facebook.com/sharer/sharer.php?u={{url}}",
          },
          {
            id: "twitter",
            label: "Tweet",
            url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}",
          },
          {
            id: "pinterest",
            label: "Pin it",
            url:
              "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}",
          },
          {
            id: "download",
            label: "Download image",
            url: "{{raw_image_url}}",
            download: !0,
          },
        ],
        getImageURLForShare: function () {
          return a.currItem.src || "";
        },
        getPageURLForShare: function () {
          return window.location.href;
        },
        getTextForShare: function () {
          return a.currItem.title || "";
        },
        indexIndicatorSep: " / ",
        fitControlsWidth: 1200,
      },
      A = function (a) {
        if (r) return !0;
        (a = a || window.event), q.timeToIdle && q.mouseUsed && !k && K();
        for (
          var c,
            d,
            e = a.target || a.srcElement,
            f = e.getAttribute("class") || "",
            g = 0;
          g < S.length;
          g++
        )
          (c = S[g]),
            c.onTap &&
              f.indexOf("pswp__" + c.name) > -1 &&
              (c.onTap(), (d = !0));
        if (d) {
          a.stopPropagation && a.stopPropagation(), (r = !0);
          var h = b.features.isOldAndroid ? 600 : 30;
          s = setTimeout(function () {
            r = !1;
          }, h);
        }
      },
      B = function () {
        return (
          !a.likelyTouchDevice ||
          q.mouseUsed ||
          screen.width > q.fitControlsWidth
        );
      },
      C = function (a, c, d) {
        b[(d ? "add" : "remove") + "Class"](a, "pswp__" + c);
      },
      D = function () {
        var a = 1 === q.getNumItemsFn();
        a !== p && (C(d, "ui--one-slide", a), (p = a));
      },
      E = function () {
        C(i, "share-modal--hidden", y);
      },
      F = function () {
        return (
          (y = !y),
          y
            ? (b.removeClass(i, "pswp__share-modal--fade-in"),
              setTimeout(function () {
                y && E();
              }, 300))
            : (E(),
              setTimeout(function () {
                y || b.addClass(i, "pswp__share-modal--fade-in");
              }, 30)),
          y || H(),
          !1
        );
      },
      G = function (b) {
        b = b || window.event;
        var c = b.target || b.srcElement;
        return (
          a.shout("shareLinkClick", b, c),
          !!c.href &&
            (!!c.hasAttribute("download") ||
              (window.open(
                c.href,
                "pswp_share",
                "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" +
                  (window.screen ? Math.round(screen.width / 2 - 275) : 100)
              ),
              y || F(),
              !1))
        );
      },
      H = function () {
        for (var a, b, c, d, e, f = "", g = 0; g < q.shareButtons.length; g++)
          (a = q.shareButtons[g]),
            (c = q.getImageURLForShare(a)),
            (d = q.getPageURLForShare(a)),
            (e = q.getTextForShare(a)),
            (b = a.url
              .replace("{{url}}", encodeURIComponent(d))
              .replace("{{image_url}}", encodeURIComponent(c))
              .replace("{{raw_image_url}}", c)
              .replace("{{text}}", encodeURIComponent(e))),
            (f +=
              '<a href="' +
              b +
              '" target="_blank" class="pswp__share--' +
              a.id +
              '"' +
              (a.download ? "download" : "") +
              ">" +
              a.label +
              "</a>"),
            q.parseShareButtonOut && (f = q.parseShareButtonOut(a, f));
        (i.children[0].innerHTML = f), (i.children[0].onclick = G);
      },
      I = function (a) {
        for (var c = 0; c < q.closeElClasses.length; c++)
          if (b.hasClass(a, "pswp__" + q.closeElClasses[c])) return !0;
      },
      J = 0,
      K = function () {
        clearTimeout(u), (J = 0), k && v.setIdle(!1);
      },
      L = function (a) {
        a = a ? a : window.event;
        var b = a.relatedTarget || a.toElement;
        (b && "HTML" !== b.nodeName) ||
          (clearTimeout(u),
          (u = setTimeout(function () {
            v.setIdle(!0);
          }, q.timeToIdleOutside)));
      },
      M = function () {
        q.fullscreenEl &&
          !b.features.isOldAndroid &&
          (c || (c = v.getFullscreenAPI()),
          c
            ? (b.bind(document, c.eventK, v.updateFullscreen),
              v.updateFullscreen(),
              b.addClass(a.template, "pswp--supports-fs"))
            : b.removeClass(a.template, "pswp--supports-fs"));
      },
      N = function () {
        q.preloaderEl &&
          (O(!0),
          l("beforeChange", function () {
            clearTimeout(o),
              (o = setTimeout(function () {
                a.currItem && a.currItem.loading
                  ? (!a.allowProgressiveImg() ||
                      (a.currItem.img && !a.currItem.img.naturalWidth)) &&
                    O(!1)
                  : O(!0);
              }, q.loadingIndicatorDelay));
          }),
          l("imageLoadComplete", function (b, c) {
            a.currItem === c && O(!0);
          }));
      },
      O = function (a) {
        n !== a && (C(m, "preloader--active", !a), (n = a));
      },
      P = function (a) {
        var c = a.vGap;
        if (B()) {
          var g = q.barsSize;
          if (q.captionEl && "auto" === g.bottom)
            if (
              (f ||
                ((f = b.createEl("pswp__caption pswp__caption--fake")),
                f.appendChild(b.createEl("pswp__caption__center")),
                d.insertBefore(f, e),
                b.addClass(d, "pswp__ui--fit")),
              q.addCaptionHTMLFn(a, f, !0))
            ) {
              var h = f.clientHeight;
              c.bottom = parseInt(h, 10) || 44;
            } else c.bottom = g.top;
          else c.bottom = "auto" === g.bottom ? 0 : g.bottom;
          c.top = g.top;
        } else c.top = c.bottom = 0;
      },
      Q = function () {
        q.timeToIdle &&
          l("mouseUsed", function () {
            b.bind(document, "mousemove", K),
              b.bind(document, "mouseout", L),
              (t = setInterval(function () {
                J++, 2 === J && v.setIdle(!0);
              }, q.timeToIdle / 2));
          });
      },
      R = function () {
        l("onVerticalDrag", function (a) {
          x && a < 0.95
            ? v.hideControls()
            : !x && a >= 0.95 && v.showControls();
        });
        var a;
        l("onPinchClose", function (b) {
          x && b < 0.9
            ? (v.hideControls(), (a = !0))
            : a && !x && b > 0.9 && v.showControls();
        }),
          l("zoomGestureEnded", function () {
            (a = !1), a && !x && v.showControls();
          });
      },
      S = [
        {
          name: "caption",
          option: "captionEl",
          onInit: function (a) {
            e = a;
          },
        },
        {
          name: "share-modal",
          option: "shareEl",
          onInit: function (a) {
            i = a;
          },
          onTap: function () {
            F();
          },
        },
        {
          name: "button--share",
          option: "shareEl",
          onInit: function (a) {
            h = a;
          },
          onTap: function () {
            F();
          },
        },
        { name: "button--zoom", option: "zoomEl", onTap: a.toggleDesktopZoom },
        {
          name: "counter",
          option: "counterEl",
          onInit: function (a) {
            g = a;
          },
        },
        { name: "button--close", option: "closeEl", onTap: a.close },
        { name: "button--arrow--left", option: "arrowEl", onTap: a.prev },
        { name: "button--arrow--right", option: "arrowEl", onTap: a.next },
        {
          name: "button--fs",
          option: "fullscreenEl",
          onTap: function () {
            c.isFullscreen() ? c.exit() : c.enter();
          },
        },
        {
          name: "preloader",
          option: "preloaderEl",
          onInit: function (a) {
            m = a;
          },
        },
      ],
      T = function () {
        var a,
          c,
          e,
          f = function (d) {
            if (d)
              for (var f = d.length, g = 0; g < f; g++) {
                (a = d[g]), (c = a.className);
                for (var h = 0; h < S.length; h++)
                  (e = S[h]),
                    c.indexOf("pswp__" + e.name) > -1 &&
                      (q[e.option]
                        ? (b.removeClass(a, "pswp__element--disabled"),
                          e.onInit && e.onInit(a))
                        : b.addClass(a, "pswp__element--disabled"));
              }
          };
        f(d.children);
        var g = b.getChildByClass(d, "pswp__top-bar");
        g && f(g.children);
      };
    (v.init = function () {
      b.extend(a.options, z, !0),
        (q = a.options),
        (d = b.getChildByClass(a.scrollWrap, "pswp__ui")),
        (l = a.listen),
        R(),
        l("beforeChange", v.update),
        l("doubleTap", function (b) {
          var c = a.currItem.initialZoomLevel;
          a.getZoomLevel() !== c
            ? a.zoomTo(c, b, 333)
            : a.zoomTo(q.getDoubleTapZoom(!1, a.currItem), b, 333);
        }),
        l("preventDragEvent", function (a, b, c) {
          var d = a.target || a.srcElement;
          d &&
            d.getAttribute("class") &&
            a.type.indexOf("mouse") > -1 &&
            (d.getAttribute("class").indexOf("__caption") > 0 ||
              /(SMALL|STRONG|EM)/i.test(d.tagName)) &&
            (c.prevent = !1);
        }),
        l("bindEvents", function () {
          b.bind(d, "pswpTap click", A),
            b.bind(a.scrollWrap, "pswpTap", v.onGlobalTap),
            a.likelyTouchDevice ||
              b.bind(a.scrollWrap, "mouseover", v.onMouseOver);
        }),
        l("unbindEvents", function () {
          y || F(),
            t && clearInterval(t),
            b.unbind(document, "mouseout", L),
            b.unbind(document, "mousemove", K),
            b.unbind(d, "pswpTap click", A),
            b.unbind(a.scrollWrap, "pswpTap", v.onGlobalTap),
            b.unbind(a.scrollWrap, "mouseover", v.onMouseOver),
            c &&
              (b.unbind(document, c.eventK, v.updateFullscreen),
              c.isFullscreen() && ((q.hideAnimationDuration = 0), c.exit()),
              (c = null));
        }),
        l("destroy", function () {
          q.captionEl &&
            (f && d.removeChild(f), b.removeClass(e, "pswp__caption--empty")),
            i && (i.children[0].onclick = null),
            b.removeClass(d, "pswp__ui--over-close"),
            b.addClass(d, "pswp__ui--hidden"),
            v.setIdle(!1);
        }),
        q.showAnimationDuration || b.removeClass(d, "pswp__ui--hidden"),
        l("initialZoomIn", function () {
          q.showAnimationDuration && b.removeClass(d, "pswp__ui--hidden");
        }),
        l("initialZoomOut", function () {
          b.addClass(d, "pswp__ui--hidden");
        }),
        l("parseVerticalMargin", P),
        T(),
        q.shareEl && h && i && (y = !0),
        D(),
        Q(),
        M(),
        N();
    }),
      (v.setIdle = function (a) {
        (k = a), C(d, "ui--idle", a);
      }),
      (v.update = function () {
        x && a.currItem
          ? (v.updateIndexIndicator(),
            q.captionEl &&
              (q.addCaptionHTMLFn(a.currItem, e),
              C(e, "caption--empty", !a.currItem.title)),
            (w = !0))
          : (w = !1),
          y || F(),
          D();
      }),
      (v.updateFullscreen = function (d) {
        d &&
          setTimeout(function () {
            a.setScrollOffset(0, b.getScrollY());
          }, 50),
          b[(c.isFullscreen() ? "add" : "remove") + "Class"](
            a.template,
            "pswp--fs"
          );
      }),
      (v.updateIndexIndicator = function () {
        q.counterEl &&
          (g.innerHTML =
            a.getCurrentIndex() + 1 + q.indexIndicatorSep + q.getNumItemsFn());
      }),
      (v.onGlobalTap = function (c) {
        c = c || window.event;
        var d = c.target || c.srcElement;
        if (!r)
          if (c.detail && "mouse" === c.detail.pointerType) {
            if (I(d)) return void a.close();
            b.hasClass(d, "pswp__img") &&
              (1 === a.getZoomLevel() && a.getZoomLevel() <= a.currItem.fitRatio
                ? q.clickToCloseNonZoomable && a.close()
                : a.toggleDesktopZoom(c.detail.releasePoint));
          } else if (
            (q.tapToToggleControls && (x ? v.hideControls() : v.showControls()),
            q.tapToClose && (b.hasClass(d, "pswp__img") || I(d)))
          )
            return void a.close();
      }),
      (v.onMouseOver = function (a) {
        a = a || window.event;
        var b = a.target || a.srcElement;
        C(d, "ui--over-close", I(b));
      }),
      (v.hideControls = function () {
        b.addClass(d, "pswp__ui--hidden"), (x = !1);
      }),
      (v.showControls = function () {
        (x = !0), w || v.update(), b.removeClass(d, "pswp__ui--hidden");
      }),
      (v.supportsFullscreen = function () {
        var a = document;
        return !!(
          a.exitFullscreen ||
          a.mozCancelFullScreen ||
          a.webkitExitFullscreen ||
          a.msExitFullscreen
        );
      }),
      (v.getFullscreenAPI = function () {
        var b,
          c = document.documentElement,
          d = "fullscreenchange";
        return (
          c.requestFullscreen
            ? (b = {
                enterK: "requestFullscreen",
                exitK: "exitFullscreen",
                elementK: "fullscreenElement",
                eventK: d,
              })
            : c.mozRequestFullScreen
            ? (b = {
                enterK: "mozRequestFullScreen",
                exitK: "mozCancelFullScreen",
                elementK: "mozFullScreenElement",
                eventK: "moz" + d,
              })
            : c.webkitRequestFullscreen
            ? (b = {
                enterK: "webkitRequestFullscreen",
                exitK: "webkitExitFullscreen",
                elementK: "webkitFullscreenElement",
                eventK: "webkit" + d,
              })
            : c.msRequestFullscreen &&
              (b = {
                enterK: "msRequestFullscreen",
                exitK: "msExitFullscreen",
                elementK: "msFullscreenElement",
                eventK: "MSFullscreenChange",
              }),
          b &&
            ((b.enter = function () {
              return (
                (j = q.closeOnScroll),
                (q.closeOnScroll = !1),
                "webkitRequestFullscreen" !== this.enterK
                  ? a.template[this.enterK]()
                  : void a.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
              );
            }),
            (b.exit = function () {
              return (q.closeOnScroll = j), document[this.exitK]();
            }),
            (b.isFullscreen = function () {
              return document[this.elementK];
            })),
          b
        );
      });
  };
  return a;
});
/*! PhotoSwipe - v4.1.2 - 2017-04-05
 * http://photoswipe.com
 * Copyright (c) 2017 Dmitry Semenov; */
!(function (a, b) {
  "function" == typeof define && define.amd
    ? define(b)
    : "object" == typeof exports
    ? (module.exports = b())
    : (a.PhotoSwipe = b());
})(this, function () {
  "use strict";
  var a = function (a, b, c, d) {
    var e = {
      features: null,
      bind: function (a, b, c, d) {
        var e = (d ? "remove" : "add") + "EventListener";
        b = b.split(" ");
        for (var f = 0; f < b.length; f++) b[f] && a[e](b[f], c, !1);
      },
      isArray: function (a) {
        return a instanceof Array;
      },
      createEl: function (a, b) {
        var c = document.createElement(b || "div");
        return a && (c.className = a), c;
      },
      getScrollY: function () {
        var a = window.pageYOffset;
        return void 0 !== a ? a : document.documentElement.scrollTop;
      },
      unbind: function (a, b, c) {
        e.bind(a, b, c, !0);
      },
      removeClass: function (a, b) {
        var c = new RegExp("(\\s|^)" + b + "(\\s|$)");
        a.className = a.className
          .replace(c, " ")
          .replace(/^\s\s*/, "")
          .replace(/\s\s*$/, "");
      },
      addClass: function (a, b) {
        e.hasClass(a, b) || (a.className += (a.className ? " " : "") + b);
      },
      hasClass: function (a, b) {
        return (
          a.className && new RegExp("(^|\\s)" + b + "(\\s|$)").test(a.className)
        );
      },
      getChildByClass: function (a, b) {
        for (var c = a.firstChild; c; ) {
          if (e.hasClass(c, b)) return c;
          c = c.nextSibling;
        }
      },
      arraySearch: function (a, b, c) {
        for (var d = a.length; d--; ) if (a[d][c] === b) return d;
        return -1;
      },
      extend: function (a, b, c) {
        for (var d in b)
          if (b.hasOwnProperty(d)) {
            if (c && a.hasOwnProperty(d)) continue;
            a[d] = b[d];
          }
      },
      easing: {
        sine: {
          out: function (a) {
            return Math.sin(a * (Math.PI / 2));
          },
          inOut: function (a) {
            return -(Math.cos(Math.PI * a) - 1) / 2;
          },
        },
        cubic: {
          out: function (a) {
            return --a * a * a + 1;
          },
        },
      },
      detectFeatures: function () {
        if (e.features) return e.features;
        var a = e.createEl(),
          b = a.style,
          c = "",
          d = {};
        if (
          ((d.oldIE = document.all && !document.addEventListener),
          (d.touch = "ontouchstart" in window),
          window.requestAnimationFrame &&
            ((d.raf = window.requestAnimationFrame),
            (d.caf = window.cancelAnimationFrame)),
          (d.pointerEvent =
            navigator.pointerEnabled || navigator.msPointerEnabled),
          !d.pointerEvent)
        ) {
          var f = navigator.userAgent;
          if (/iP(hone|od)/.test(navigator.platform)) {
            var g = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
            g &&
              g.length > 0 &&
              ((g = parseInt(g[1], 10)),
              g >= 1 && g < 8 && (d.isOldIOSPhone = !0));
          }
          var h = f.match(/Android\s([0-9\.]*)/),
            i = h ? h[1] : 0;
          (i = parseFloat(i)),
            i >= 1 &&
              (i < 4.4 && (d.isOldAndroid = !0), (d.androidVersion = i)),
            (d.isMobileOpera = /opera mini|opera mobi/i.test(f));
        }
        for (
          var j,
            k,
            l = ["transform", "perspective", "animationName"],
            m = ["", "webkit", "Moz", "ms", "O"],
            n = 0;
          n < 4;
          n++
        ) {
          c = m[n];
          for (var o = 0; o < 3; o++)
            (j = l[o]),
              (k = c + (c ? j.charAt(0).toUpperCase() + j.slice(1) : j)),
              !d[j] && k in b && (d[j] = k);
          c &&
            !d.raf &&
            ((c = c.toLowerCase()),
            (d.raf = window[c + "RequestAnimationFrame"]),
            d.raf &&
              (d.caf =
                window[c + "CancelAnimationFrame"] ||
                window[c + "CancelRequestAnimationFrame"]));
        }
        if (!d.raf) {
          var p = 0;
          (d.raf = function (a) {
            var b = new Date().getTime(),
              c = Math.max(0, 16 - (b - p)),
              d = window.setTimeout(function () {
                a(b + c);
              }, c);
            return (p = b + c), d;
          }),
            (d.caf = function (a) {
              clearTimeout(a);
            });
        }
        return (
          (d.svg =
            !!document.createElementNS &&
            !!document.createElementNS("http://www.w3.org/2000/svg", "svg")
              .createSVGRect),
          (e.features = d),
          d
        );
      },
    };
    e.detectFeatures(),
      e.features.oldIE &&
        (e.bind = function (a, b, c, d) {
          b = b.split(" ");
          for (
            var e,
              f = (d ? "detach" : "attach") + "Event",
              g = function () {
                c.handleEvent.call(c);
              },
              h = 0;
            h < b.length;
            h++
          )
            if ((e = b[h]))
              if ("object" == typeof c && c.handleEvent) {
                if (d) {
                  if (!c["oldIE" + e]) return !1;
                } else c["oldIE" + e] = g;
                a[f]("on" + e, c["oldIE" + e]);
              } else a[f]("on" + e, c);
        });
    var f = this,
      g = 25,
      h = 3,
      i = {
        allowPanToNext: !0,
        spacing: 0.12,
        bgOpacity: 1,
        mouseUsed: !1,
        loop: !0,
        pinchToClose: !0,
        closeOnScroll: !0,
        closeOnVerticalDrag: !0,
        verticalDragRange: 0.75,
        hideAnimationDuration: 333,
        showAnimationDuration: 333,
        showHideOpacity: !1,
        focus: !0,
        escKey: !0,
        arrowKeys: !0,
        mainScrollEndFriction: 0.35,
        panEndFriction: 0.35,
        isClickableElement: function (a) {
          return "A" === a.tagName;
        },
        getDoubleTapZoom: function (a, b) {
          return a ? 1 : b.initialZoomLevel < 0.7 ? 1 : 1.33;
        },
        maxSpreadZoom: 1.33,
        modal: !0,
        scaleMode: "fit",
      };
    e.extend(i, d);
    var j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u,
      v,
      w,
      x,
      y,
      z,
      A,
      B,
      C,
      D,
      E,
      F,
      G,
      H,
      I,
      J,
      K,
      L,
      M,
      N,
      O,
      P,
      Q,
      R,
      S,
      T,
      U,
      V,
      W,
      X,
      Y,
      Z,
      $,
      _,
      aa,
      ba,
      ca,
      da,
      ea,
      fa,
      ga,
      ha,
      ia,
      ja,
      ka,
      la,
      ma = function () {
        return { x: 0, y: 0 };
      },
      na = ma(),
      oa = ma(),
      pa = ma(),
      qa = {},
      ra = 0,
      sa = {},
      ta = ma(),
      ua = 0,
      va = !0,
      wa = [],
      xa = {},
      ya = !1,
      za = function (a, b) {
        e.extend(f, b.publicMethods), wa.push(a);
      },
      Aa = function (a) {
        var b = ac();
        return a > b - 1 ? a - b : a < 0 ? b + a : a;
      },
      Ba = {},
      Ca = function (a, b) {
        return Ba[a] || (Ba[a] = []), Ba[a].push(b);
      },
      Da = function (a) {
        var b = Ba[a];
        if (b) {
          var c = Array.prototype.slice.call(arguments);
          c.shift();
          for (var d = 0; d < b.length; d++) b[d].apply(f, c);
        }
      },
      Ea = function () {
        return new Date().getTime();
      },
      Fa = function (a) {
        (ja = a), (f.bg.style.opacity = a * i.bgOpacity);
      },
      Ga = function (a, b, c, d, e) {
        (!ya || (e && e !== f.currItem)) &&
          (d /= e ? e.fitRatio : f.currItem.fitRatio),
          (a[E] = u + b + "px, " + c + "px" + v + " scale(" + d + ")");
      },
      Ha = function (a) {
        ea &&
          (a &&
            (s > f.currItem.fitRatio
              ? ya || (mc(f.currItem, !1, !0), (ya = !0))
              : ya && (mc(f.currItem), (ya = !1))),
          Ga(ea, pa.x, pa.y, s));
      },
      Ia = function (a) {
        a.container &&
          Ga(
            a.container.style,
            a.initialPosition.x,
            a.initialPosition.y,
            a.initialZoomLevel,
            a
          );
      },
      Ja = function (a, b) {
        b[E] = u + a + "px, 0px" + v;
      },
      Ka = function (a, b) {
        if (!i.loop && b) {
          var c = m + (ta.x * ra - a) / ta.x,
            d = Math.round(a - tb.x);
          ((c < 0 && d > 0) || (c >= ac() - 1 && d < 0)) &&
            (a = tb.x + d * i.mainScrollEndFriction);
        }
        (tb.x = a), Ja(a, n);
      },
      La = function (a, b) {
        var c = ub[a] - sa[a];
        return oa[a] + na[a] + c - c * (b / t);
      },
      Ma = function (a, b) {
        (a.x = b.x), (a.y = b.y), b.id && (a.id = b.id);
      },
      Na = function (a) {
        (a.x = Math.round(a.x)), (a.y = Math.round(a.y));
      },
      Oa = null,
      Pa = function () {
        Oa &&
          (e.unbind(document, "mousemove", Pa),
          e.addClass(a, "pswp--has_mouse"),
          (i.mouseUsed = !0),
          Da("mouseUsed")),
          (Oa = setTimeout(function () {
            Oa = null;
          }, 100));
      },
      Qa = function () {
        e.bind(document, "keydown", f),
          N.transform && e.bind(f.scrollWrap, "click", f),
          i.mouseUsed || e.bind(document, "mousemove", Pa),
          e.bind(window, "resize scroll orientationchange", f),
          Da("bindEvents");
      },
      Ra = function () {
        e.unbind(window, "resize scroll orientationchange", f),
          e.unbind(window, "scroll", r.scroll),
          e.unbind(document, "keydown", f),
          e.unbind(document, "mousemove", Pa),
          N.transform && e.unbind(f.scrollWrap, "click", f),
          V && e.unbind(window, p, f),
          clearTimeout(O),
          Da("unbindEvents");
      },
      Sa = function (a, b) {
        var c = ic(f.currItem, qa, a);
        return b && (da = c), c;
      },
      Ta = function (a) {
        return a || (a = f.currItem), a.initialZoomLevel;
      },
      Ua = function (a) {
        return a || (a = f.currItem), a.w > 0 ? i.maxSpreadZoom : 1;
      },
      Va = function (a, b, c, d) {
        return d === f.currItem.initialZoomLevel
          ? ((c[a] = f.currItem.initialPosition[a]), !0)
          : ((c[a] = La(a, d)),
            c[a] > b.min[a]
              ? ((c[a] = b.min[a]), !0)
              : c[a] < b.max[a] && ((c[a] = b.max[a]), !0));
      },
      Wa = function () {
        if (E) {
          var b = N.perspective && !G;
          return (
            (u = "translate" + (b ? "3d(" : "(")),
            void (v = N.perspective ? ", 0px)" : ")")
          );
        }
        (E = "left"),
          e.addClass(a, "pswp--ie"),
          (Ja = function (a, b) {
            b.left = a + "px";
          }),
          (Ia = function (a) {
            var b = a.fitRatio > 1 ? 1 : a.fitRatio,
              c = a.container.style,
              d = b * a.w,
              e = b * a.h;
            (c.width = d + "px"),
              (c.height = e + "px"),
              (c.left = a.initialPosition.x + "px"),
              (c.top = a.initialPosition.y + "px");
          }),
          (Ha = function () {
            if (ea) {
              var a = ea,
                b = f.currItem,
                c = b.fitRatio > 1 ? 1 : b.fitRatio,
                d = c * b.w,
                e = c * b.h;
              (a.width = d + "px"),
                (a.height = e + "px"),
                (a.left = pa.x + "px"),
                (a.top = pa.y + "px");
            }
          });
      },
      Xa = function (a) {
        var b = "";
        i.escKey && 27 === a.keyCode
          ? (b = "close")
          : i.arrowKeys &&
            (37 === a.keyCode
              ? (b = "prev")
              : 39 === a.keyCode && (b = "next")),
          b &&
            (a.ctrlKey ||
              a.altKey ||
              a.shiftKey ||
              a.metaKey ||
              (a.preventDefault ? a.preventDefault() : (a.returnValue = !1),
              f[b]()));
      },
      Ya = function (a) {
        a && (Y || X || fa || T) && (a.preventDefault(), a.stopPropagation());
      },
      Za = function () {
        f.setScrollOffset(0, e.getScrollY());
      },
      $a = {},
      _a = 0,
      ab = function (a) {
        $a[a] && ($a[a].raf && I($a[a].raf), _a--, delete $a[a]);
      },
      bb = function (a) {
        $a[a] && ab(a), $a[a] || (_a++, ($a[a] = {}));
      },
      cb = function () {
        for (var a in $a) $a.hasOwnProperty(a) && ab(a);
      },
      db = function (a, b, c, d, e, f, g) {
        var h,
          i = Ea();
        bb(a);
        var j = function () {
          if ($a[a]) {
            if (((h = Ea() - i), h >= d)) return ab(a), f(c), void (g && g());
            f((c - b) * e(h / d) + b), ($a[a].raf = H(j));
          }
        };
        j();
      },
      eb = {
        shout: Da,
        listen: Ca,
        viewportSize: qa,
        options: i,
        isMainScrollAnimating: function () {
          return fa;
        },
        getZoomLevel: function () {
          return s;
        },
        getCurrentIndex: function () {
          return m;
        },
        isDragging: function () {
          return V;
        },
        isZooming: function () {
          return aa;
        },
        setScrollOffset: function (a, b) {
          (sa.x = a), (M = sa.y = b), Da("updateScrollOffset", sa);
        },
        applyZoomPan: function (a, b, c, d) {
          (pa.x = b), (pa.y = c), (s = a), Ha(d);
        },
        init: function () {
          if (!j && !k) {
            var c;
            (f.framework = e),
              (f.template = a),
              (f.bg = e.getChildByClass(a, "pswp__bg")),
              (J = a.className),
              (j = !0),
              (N = e.detectFeatures()),
              (H = N.raf),
              (I = N.caf),
              (E = N.transform),
              (L = N.oldIE),
              (f.scrollWrap = e.getChildByClass(a, "pswp__scroll-wrap")),
              (f.container = e.getChildByClass(
                f.scrollWrap,
                "pswp__container"
              )),
              (n = f.container.style),
              (f.itemHolders = y = [
                { el: f.container.children[0], wrap: 0, index: -1 },
                { el: f.container.children[1], wrap: 0, index: -1 },
                { el: f.container.children[2], wrap: 0, index: -1 },
              ]),
              (y[0].el.style.display = y[2].el.style.display = "none"),
              Wa(),
              (r = {
                resize: f.updateSize,
                orientationchange: function () {
                  clearTimeout(O),
                    (O = setTimeout(function () {
                      qa.x !== f.scrollWrap.clientWidth && f.updateSize();
                    }, 500));
                },
                scroll: Za,
                keydown: Xa,
                click: Ya,
              });
            var d = N.isOldIOSPhone || N.isOldAndroid || N.isMobileOpera;
            for (
              (N.animationName && N.transform && !d) ||
                (i.showAnimationDuration = i.hideAnimationDuration = 0),
                c = 0;
              c < wa.length;
              c++
            )
              f["init" + wa[c]]();
            if (b) {
              var g = (f.ui = new b(f, e));
              g.init();
            }
            Da("firstUpdate"),
              (m = m || i.index || 0),
              (isNaN(m) || m < 0 || m >= ac()) && (m = 0),
              (f.currItem = _b(m)),
              (N.isOldIOSPhone || N.isOldAndroid) && (va = !1),
              a.setAttribute("aria-hidden", "false"),
              i.modal &&
                (va
                  ? (a.style.position = "fixed")
                  : ((a.style.position = "absolute"),
                    (a.style.top = e.getScrollY() + "px"))),
              void 0 === M && (Da("initialLayout"), (M = K = e.getScrollY()));
            var l = "pswp--open ";
            for (
              i.mainClass && (l += i.mainClass + " "),
                i.showHideOpacity && (l += "pswp--animate_opacity "),
                l += G ? "pswp--touch" : "pswp--notouch",
                l += N.animationName ? " pswp--css_animation" : "",
                l += N.svg ? " pswp--svg" : "",
                e.addClass(a, l),
                f.updateSize(),
                o = -1,
                ua = null,
                c = 0;
              c < h;
              c++
            )
              Ja((c + o) * ta.x, y[c].el.style);
            L || e.bind(f.scrollWrap, q, f),
              Ca("initialZoomInEnd", function () {
                f.setContent(y[0], m - 1),
                  f.setContent(y[2], m + 1),
                  (y[0].el.style.display = y[2].el.style.display = "block"),
                  i.focus && a.focus(),
                  Qa();
              }),
              f.setContent(y[1], m),
              f.updateCurrItem(),
              Da("afterInit"),
              va ||
                (w = setInterval(function () {
                  _a ||
                    V ||
                    aa ||
                    s !== f.currItem.initialZoomLevel ||
                    f.updateSize();
                }, 1e3)),
              e.addClass(a, "pswp--visible");
          }
        },
        close: function () {
          j &&
            ((j = !1),
            (k = !0),
            Da("close"),
            Ra(),
            cc(f.currItem, null, !0, f.destroy));
        },
        destroy: function () {
          Da("destroy"),
            Xb && clearTimeout(Xb),
            a.setAttribute("aria-hidden", "true"),
            (a.className = J),
            w && clearInterval(w),
            e.unbind(f.scrollWrap, q, f),
            e.unbind(window, "scroll", f),
            zb(),
            cb(),
            (Ba = null);
        },
        panTo: function (a, b, c) {
          c ||
            (a > da.min.x ? (a = da.min.x) : a < da.max.x && (a = da.max.x),
            b > da.min.y ? (b = da.min.y) : b < da.max.y && (b = da.max.y)),
            (pa.x = a),
            (pa.y = b),
            Ha();
        },
        handleEvent: function (a) {
          (a = a || window.event), r[a.type] && r[a.type](a);
        },
        goTo: function (a) {
          a = Aa(a);
          var b = a - m;
          (ua = b),
            (m = a),
            (f.currItem = _b(m)),
            (ra -= b),
            Ka(ta.x * ra),
            cb(),
            (fa = !1),
            f.updateCurrItem();
        },
        next: function () {
          f.goTo(m + 1);
        },
        prev: function () {
          f.goTo(m - 1);
        },
        updateCurrZoomItem: function (a) {
          if ((a && Da("beforeChange", 0), y[1].el.children.length)) {
            var b = y[1].el.children[0];
            ea = e.hasClass(b, "pswp__zoom-wrap") ? b.style : null;
          } else ea = null;
          (da = f.currItem.bounds),
            (t = s = f.currItem.initialZoomLevel),
            (pa.x = da.center.x),
            (pa.y = da.center.y),
            a && Da("afterChange");
        },
        invalidateCurrItems: function () {
          x = !0;
          for (var a = 0; a < h; a++) y[a].item && (y[a].item.needsUpdate = !0);
        },
        updateCurrItem: function (a) {
          if (0 !== ua) {
            var b,
              c = Math.abs(ua);
            if (!(a && c < 2)) {
              (f.currItem = _b(m)),
                (ya = !1),
                Da("beforeChange", ua),
                c >= h && ((o += ua + (ua > 0 ? -h : h)), (c = h));
              for (var d = 0; d < c; d++)
                ua > 0
                  ? ((b = y.shift()),
                    (y[h - 1] = b),
                    o++,
                    Ja((o + 2) * ta.x, b.el.style),
                    f.setContent(b, m - c + d + 1 + 1))
                  : ((b = y.pop()),
                    y.unshift(b),
                    o--,
                    Ja(o * ta.x, b.el.style),
                    f.setContent(b, m + c - d - 1 - 1));
              if (ea && 1 === Math.abs(ua)) {
                var e = _b(z);
                e.initialZoomLevel !== s && (ic(e, qa), mc(e), Ia(e));
              }
              (ua = 0), f.updateCurrZoomItem(), (z = m), Da("afterChange");
            }
          }
        },
        updateSize: function (b) {
          if (!va && i.modal) {
            var c = e.getScrollY();
            if (
              (M !== c && ((a.style.top = c + "px"), (M = c)),
              !b && xa.x === window.innerWidth && xa.y === window.innerHeight)
            )
              return;
            (xa.x = window.innerWidth),
              (xa.y = window.innerHeight),
              (a.style.height = xa.y + "px");
          }
          if (
            ((qa.x = f.scrollWrap.clientWidth),
            (qa.y = f.scrollWrap.clientHeight),
            Za(),
            (ta.x = qa.x + Math.round(qa.x * i.spacing)),
            (ta.y = qa.y),
            Ka(ta.x * ra),
            Da("beforeResize"),
            void 0 !== o)
          ) {
            for (var d, g, j, k = 0; k < h; k++)
              (d = y[k]),
                Ja((k + o) * ta.x, d.el.style),
                (j = m + k - 1),
                i.loop && ac() > 2 && (j = Aa(j)),
                (g = _b(j)),
                g && (x || g.needsUpdate || !g.bounds)
                  ? (f.cleanSlide(g),
                    f.setContent(d, j),
                    1 === k && ((f.currItem = g), f.updateCurrZoomItem(!0)),
                    (g.needsUpdate = !1))
                  : d.index === -1 && j >= 0 && f.setContent(d, j),
                g && g.container && (ic(g, qa), mc(g), Ia(g));
            x = !1;
          }
          (t = s = f.currItem.initialZoomLevel),
            (da = f.currItem.bounds),
            da && ((pa.x = da.center.x), (pa.y = da.center.y), Ha(!0)),
            Da("resize");
        },
        zoomTo: function (a, b, c, d, f) {
          b &&
            ((t = s),
            (ub.x = Math.abs(b.x) - pa.x),
            (ub.y = Math.abs(b.y) - pa.y),
            Ma(oa, pa));
          var g = Sa(a, !1),
            h = {};
          Va("x", g, h, a), Va("y", g, h, a);
          var i = s,
            j = { x: pa.x, y: pa.y };
          Na(h);
          var k = function (b) {
            1 === b
              ? ((s = a), (pa.x = h.x), (pa.y = h.y))
              : ((s = (a - i) * b + i),
                (pa.x = (h.x - j.x) * b + j.x),
                (pa.y = (h.y - j.y) * b + j.y)),
              f && f(b),
              Ha(1 === b);
          };
          c ? db("customZoomTo", 0, 1, c, d || e.easing.sine.inOut, k) : k(1);
        },
      },
      fb = 30,
      gb = 10,
      hb = {},
      ib = {},
      jb = {},
      kb = {},
      lb = {},
      mb = [],
      nb = {},
      ob = [],
      pb = {},
      qb = 0,
      rb = ma(),
      sb = 0,
      tb = ma(),
      ub = ma(),
      vb = ma(),
      wb = function (a, b) {
        return a.x === b.x && a.y === b.y;
      },
      xb = function (a, b) {
        return Math.abs(a.x - b.x) < g && Math.abs(a.y - b.y) < g;
      },
      yb = function (a, b) {
        return (
          (pb.x = Math.abs(a.x - b.x)),
          (pb.y = Math.abs(a.y - b.y)),
          Math.sqrt(pb.x * pb.x + pb.y * pb.y)
        );
      },
      zb = function () {
        Z && (I(Z), (Z = null));
      },
      Ab = function () {
        V && ((Z = H(Ab)), Qb());
      },
      Bb = function () {
        return !("fit" === i.scaleMode && s === f.currItem.initialZoomLevel);
      },
      Cb = function (a, b) {
        return (
          !(!a || a === document) &&
          !(
            a.getAttribute("class") &&
            a.getAttribute("class").indexOf("pswp__scroll-wrap") > -1
          ) &&
          (b(a) ? a : Cb(a.parentNode, b))
        );
      },
      Db = {},
      Eb = function (a, b) {
        return (
          (Db.prevent = !Cb(a.target, i.isClickableElement)),
          Da("preventDragEvent", a, b, Db),
          Db.prevent
        );
      },
      Fb = function (a, b) {
        return (b.x = a.pageX), (b.y = a.pageY), (b.id = a.identifier), b;
      },
      Gb = function (a, b, c) {
        (c.x = 0.5 * (a.x + b.x)), (c.y = 0.5 * (a.y + b.y));
      },
      Hb = function (a, b, c) {
        if (a - Q > 50) {
          var d = ob.length > 2 ? ob.shift() : {};
          (d.x = b), (d.y = c), ob.push(d), (Q = a);
        }
      },
      Ib = function () {
        var a = pa.y - f.currItem.initialPosition.y;
        return 1 - Math.abs(a / (qa.y / 2));
      },
      Jb = {},
      Kb = {},
      Lb = [],
      Mb = function (a) {
        for (; Lb.length > 0; ) Lb.pop();
        return (
          F
            ? ((la = 0),
              mb.forEach(function (a) {
                0 === la ? (Lb[0] = a) : 1 === la && (Lb[1] = a), la++;
              }))
            : a.type.indexOf("touch") > -1
            ? a.touches &&
              a.touches.length > 0 &&
              ((Lb[0] = Fb(a.touches[0], Jb)),
              a.touches.length > 1 && (Lb[1] = Fb(a.touches[1], Kb)))
            : ((Jb.x = a.pageX), (Jb.y = a.pageY), (Jb.id = ""), (Lb[0] = Jb)),
          Lb
        );
      },
      Nb = function (a, b) {
        var c,
          d,
          e,
          g,
          h = 0,
          j = pa[a] + b[a],
          k = b[a] > 0,
          l = tb.x + b.x,
          m = tb.x - nb.x;
        return (
          (c = j > da.min[a] || j < da.max[a] ? i.panEndFriction : 1),
          (j = pa[a] + b[a] * c),
          (!i.allowPanToNext && s !== f.currItem.initialZoomLevel) ||
          (ea
            ? "h" !== ga ||
              "x" !== a ||
              X ||
              (k
                ? (j > da.min[a] &&
                    ((c = i.panEndFriction),
                    (h = da.min[a] - j),
                    (d = da.min[a] - oa[a])),
                  (d <= 0 || m < 0) && ac() > 1
                    ? ((g = l), m < 0 && l > nb.x && (g = nb.x))
                    : da.min.x !== da.max.x && (e = j))
                : (j < da.max[a] &&
                    ((c = i.panEndFriction),
                    (h = j - da.max[a]),
                    (d = oa[a] - da.max[a])),
                  (d <= 0 || m > 0) && ac() > 1
                    ? ((g = l), m > 0 && l < nb.x && (g = nb.x))
                    : da.min.x !== da.max.x && (e = j)))
            : (g = l),
          "x" !== a)
            ? void (fa || $ || (s > f.currItem.fitRatio && (pa[a] += b[a] * c)))
            : (void 0 !== g && (Ka(g, !0), ($ = g !== nb.x)),
              da.min.x !== da.max.x &&
                (void 0 !== e ? (pa.x = e) : $ || (pa.x += b.x * c)),
              void 0 !== g)
        );
      },
      Ob = function (a) {
        if (!("mousedown" === a.type && a.button > 0)) {
          if ($b) return void a.preventDefault();
          if (!U || "mousedown" !== a.type) {
            if ((Eb(a, !0) && a.preventDefault(), Da("pointerDown"), F)) {
              var b = e.arraySearch(mb, a.pointerId, "id");
              b < 0 && (b = mb.length),
                (mb[b] = { x: a.pageX, y: a.pageY, id: a.pointerId });
            }
            var c = Mb(a),
              d = c.length;
            (_ = null),
              cb(),
              (V && 1 !== d) ||
                ((V = ha = !0),
                e.bind(window, p, f),
                (S = ka = ia = T = $ = Y = W = X = !1),
                (ga = null),
                Da("firstTouchStart", c),
                Ma(oa, pa),
                (na.x = na.y = 0),
                Ma(kb, c[0]),
                Ma(lb, kb),
                (nb.x = ta.x * ra),
                (ob = [{ x: kb.x, y: kb.y }]),
                (Q = P = Ea()),
                Sa(s, !0),
                zb(),
                Ab()),
              !aa &&
                d > 1 &&
                !fa &&
                !$ &&
                ((t = s),
                (X = !1),
                (aa = W = !0),
                (na.y = na.x = 0),
                Ma(oa, pa),
                Ma(hb, c[0]),
                Ma(ib, c[1]),
                Gb(hb, ib, vb),
                (ub.x = Math.abs(vb.x) - pa.x),
                (ub.y = Math.abs(vb.y) - pa.y),
                (ba = ca = yb(hb, ib)));
          }
        }
      },
      Pb = function (a) {
        if ((a.preventDefault(), F)) {
          var b = e.arraySearch(mb, a.pointerId, "id");
          if (b > -1) {
            var c = mb[b];
            (c.x = a.pageX), (c.y = a.pageY);
          }
        }
        if (V) {
          var d = Mb(a);
          if (ga || Y || aa) _ = d;
          else if (tb.x !== ta.x * ra) ga = "h";
          else {
            var f = Math.abs(d[0].x - kb.x) - Math.abs(d[0].y - kb.y);
            Math.abs(f) >= gb && ((ga = f > 0 ? "h" : "v"), (_ = d));
          }
        }
      },
      Qb = function () {
        if (_) {
          var a = _.length;
          if (0 !== a)
            if (
              (Ma(hb, _[0]),
              (jb.x = hb.x - kb.x),
              (jb.y = hb.y - kb.y),
              aa && a > 1)
            ) {
              if (
                ((kb.x = hb.x), (kb.y = hb.y), !jb.x && !jb.y && wb(_[1], ib))
              )
                return;
              Ma(ib, _[1]), X || ((X = !0), Da("zoomGestureStarted"));
              var b = yb(hb, ib),
                c = Vb(b);
              c >
                f.currItem.initialZoomLevel +
                  f.currItem.initialZoomLevel / 15 && (ka = !0);
              var d = 1,
                e = Ta(),
                g = Ua();
              if (c < e)
                if (i.pinchToClose && !ka && t <= f.currItem.initialZoomLevel) {
                  var h = e - c,
                    j = 1 - h / (e / 1.2);
                  Fa(j), Da("onPinchClose", j), (ia = !0);
                } else
                  (d = (e - c) / e), d > 1 && (d = 1), (c = e - d * (e / 3));
              else
                c > g &&
                  ((d = (c - g) / (6 * e)), d > 1 && (d = 1), (c = g + d * e));
              d < 0 && (d = 0),
                (ba = b),
                Gb(hb, ib, rb),
                (na.x += rb.x - vb.x),
                (na.y += rb.y - vb.y),
                Ma(vb, rb),
                (pa.x = La("x", c)),
                (pa.y = La("y", c)),
                (S = c > s),
                (s = c),
                Ha();
            } else {
              if (!ga) return;
              if (
                (ha &&
                  ((ha = !1),
                  Math.abs(jb.x) >= gb && (jb.x -= _[0].x - lb.x),
                  Math.abs(jb.y) >= gb && (jb.y -= _[0].y - lb.y)),
                (kb.x = hb.x),
                (kb.y = hb.y),
                0 === jb.x && 0 === jb.y)
              )
                return;
              if ("v" === ga && i.closeOnVerticalDrag && !Bb()) {
                (na.y += jb.y), (pa.y += jb.y);
                var k = Ib();
                return (T = !0), Da("onVerticalDrag", k), Fa(k), void Ha();
              }
              Hb(Ea(), hb.x, hb.y), (Y = !0), (da = f.currItem.bounds);
              var l = Nb("x", jb);
              l || (Nb("y", jb), Na(pa), Ha());
            }
        }
      },
      Rb = function (a) {
        if (N.isOldAndroid) {
          if (U && "mouseup" === a.type) return;
          a.type.indexOf("touch") > -1 &&
            (clearTimeout(U),
            (U = setTimeout(function () {
              U = 0;
            }, 600)));
        }
        Da("pointerUp"), Eb(a, !1) && a.preventDefault();
        var b;
        if (F) {
          var c = e.arraySearch(mb, a.pointerId, "id");
          if (c > -1)
            if (((b = mb.splice(c, 1)[0]), navigator.pointerEnabled))
              b.type = a.pointerType || "mouse";
            else {
              var d = { 4: "mouse", 2: "touch", 3: "pen" };
              (b.type = d[a.pointerType]),
                b.type || (b.type = a.pointerType || "mouse");
            }
        }
        var g,
          h = Mb(a),
          j = h.length;
        if (("mouseup" === a.type && (j = 0), 2 === j)) return (_ = null), !0;
        1 === j && Ma(lb, h[0]),
          0 !== j ||
            ga ||
            fa ||
            (b ||
              ("mouseup" === a.type
                ? (b = { x: a.pageX, y: a.pageY, type: "mouse" })
                : a.changedTouches &&
                  a.changedTouches[0] &&
                  (b = {
                    x: a.changedTouches[0].pageX,
                    y: a.changedTouches[0].pageY,
                    type: "touch",
                  })),
            Da("touchRelease", a, b));
        var k = -1;
        if (
          (0 === j &&
            ((V = !1),
            e.unbind(window, p, f),
            zb(),
            aa ? (k = 0) : sb !== -1 && (k = Ea() - sb)),
          (sb = 1 === j ? Ea() : -1),
          (g = k !== -1 && k < 150 ? "zoom" : "swipe"),
          aa &&
            j < 2 &&
            ((aa = !1),
            1 === j && (g = "zoomPointerUp"),
            Da("zoomGestureEnded")),
          (_ = null),
          Y || X || fa || T)
        )
          if ((cb(), R || (R = Sb()), R.calculateSwipeSpeed("x"), T)) {
            var l = Ib();
            if (l < i.verticalDragRange) f.close();
            else {
              var m = pa.y,
                n = ja;
              db("verticalDrag", 0, 1, 300, e.easing.cubic.out, function (a) {
                (pa.y = (f.currItem.initialPosition.y - m) * a + m),
                  Fa((1 - n) * a + n),
                  Ha();
              }),
                Da("onVerticalDrag", 1);
            }
          } else {
            if (($ || fa) && 0 === j) {
              var o = Ub(g, R);
              if (o) return;
              g = "zoomPointerUp";
            }
            if (!fa)
              return "swipe" !== g
                ? void Wb()
                : void (!$ && s > f.currItem.fitRatio && Tb(R));
          }
      },
      Sb = function () {
        var a,
          b,
          c = {
            lastFlickOffset: {},
            lastFlickDist: {},
            lastFlickSpeed: {},
            slowDownRatio: {},
            slowDownRatioReverse: {},
            speedDecelerationRatio: {},
            speedDecelerationRatioAbs: {},
            distanceOffset: {},
            backAnimDestination: {},
            backAnimStarted: {},
            calculateSwipeSpeed: function (d) {
              ob.length > 1
                ? ((a = Ea() - Q + 50), (b = ob[ob.length - 2][d]))
                : ((a = Ea() - P), (b = lb[d])),
                (c.lastFlickOffset[d] = kb[d] - b),
                (c.lastFlickDist[d] = Math.abs(c.lastFlickOffset[d])),
                c.lastFlickDist[d] > 20
                  ? (c.lastFlickSpeed[d] = c.lastFlickOffset[d] / a)
                  : (c.lastFlickSpeed[d] = 0),
                Math.abs(c.lastFlickSpeed[d]) < 0.1 &&
                  (c.lastFlickSpeed[d] = 0),
                (c.slowDownRatio[d] = 0.95),
                (c.slowDownRatioReverse[d] = 1 - c.slowDownRatio[d]),
                (c.speedDecelerationRatio[d] = 1);
            },
            calculateOverBoundsAnimOffset: function (a, b) {
              c.backAnimStarted[a] ||
                (pa[a] > da.min[a]
                  ? (c.backAnimDestination[a] = da.min[a])
                  : pa[a] < da.max[a] && (c.backAnimDestination[a] = da.max[a]),
                void 0 !== c.backAnimDestination[a] &&
                  ((c.slowDownRatio[a] = 0.7),
                  (c.slowDownRatioReverse[a] = 1 - c.slowDownRatio[a]),
                  c.speedDecelerationRatioAbs[a] < 0.05 &&
                    ((c.lastFlickSpeed[a] = 0),
                    (c.backAnimStarted[a] = !0),
                    db(
                      "bounceZoomPan" + a,
                      pa[a],
                      c.backAnimDestination[a],
                      b || 300,
                      e.easing.sine.out,
                      function (b) {
                        (pa[a] = b), Ha();
                      }
                    ))));
            },
            calculateAnimOffset: function (a) {
              c.backAnimStarted[a] ||
                ((c.speedDecelerationRatio[a] =
                  c.speedDecelerationRatio[a] *
                  (c.slowDownRatio[a] +
                    c.slowDownRatioReverse[a] -
                    (c.slowDownRatioReverse[a] * c.timeDiff) / 10)),
                (c.speedDecelerationRatioAbs[a] = Math.abs(
                  c.lastFlickSpeed[a] * c.speedDecelerationRatio[a]
                )),
                (c.distanceOffset[a] =
                  c.lastFlickSpeed[a] *
                  c.speedDecelerationRatio[a] *
                  c.timeDiff),
                (pa[a] += c.distanceOffset[a]));
            },
            panAnimLoop: function () {
              if (
                $a.zoomPan &&
                (($a.zoomPan.raf = H(c.panAnimLoop)),
                (c.now = Ea()),
                (c.timeDiff = c.now - c.lastNow),
                (c.lastNow = c.now),
                c.calculateAnimOffset("x"),
                c.calculateAnimOffset("y"),
                Ha(),
                c.calculateOverBoundsAnimOffset("x"),
                c.calculateOverBoundsAnimOffset("y"),
                c.speedDecelerationRatioAbs.x < 0.05 &&
                  c.speedDecelerationRatioAbs.y < 0.05)
              )
                return (
                  (pa.x = Math.round(pa.x)),
                  (pa.y = Math.round(pa.y)),
                  Ha(),
                  void ab("zoomPan")
                );
            },
          };
        return c;
      },
      Tb = function (a) {
        return (
          a.calculateSwipeSpeed("y"),
          (da = f.currItem.bounds),
          (a.backAnimDestination = {}),
          (a.backAnimStarted = {}),
          Math.abs(a.lastFlickSpeed.x) <= 0.05 &&
          Math.abs(a.lastFlickSpeed.y) <= 0.05
            ? ((a.speedDecelerationRatioAbs.x = a.speedDecelerationRatioAbs.y = 0),
              a.calculateOverBoundsAnimOffset("x"),
              a.calculateOverBoundsAnimOffset("y"),
              !0)
            : (bb("zoomPan"), (a.lastNow = Ea()), void a.panAnimLoop())
        );
      },
      Ub = function (a, b) {
        var c;
        fa || (qb = m);
        var d;
        if ("swipe" === a) {
          var g = kb.x - lb.x,
            h = b.lastFlickDist.x < 10;
          g > fb && (h || b.lastFlickOffset.x > 20)
            ? (d = -1)
            : g < -fb && (h || b.lastFlickOffset.x < -20) && (d = 1);
        }
        var j;
        d &&
          ((m += d),
          m < 0
            ? ((m = i.loop ? ac() - 1 : 0), (j = !0))
            : m >= ac() && ((m = i.loop ? 0 : ac() - 1), (j = !0)),
          (j && !i.loop) || ((ua += d), (ra -= d), (c = !0)));
        var k,
          l = ta.x * ra,
          n = Math.abs(l - tb.x);
        return (
          c || l > tb.x == b.lastFlickSpeed.x > 0
            ? ((k =
                Math.abs(b.lastFlickSpeed.x) > 0
                  ? n / Math.abs(b.lastFlickSpeed.x)
                  : 333),
              (k = Math.min(k, 400)),
              (k = Math.max(k, 250)))
            : (k = 333),
          qb === m && (c = !1),
          (fa = !0),
          Da("mainScrollAnimStart"),
          db("mainScroll", tb.x, l, k, e.easing.cubic.out, Ka, function () {
            cb(),
              (fa = !1),
              (qb = -1),
              (c || qb !== m) && f.updateCurrItem(),
              Da("mainScrollAnimComplete");
          }),
          c && f.updateCurrItem(!0),
          c
        );
      },
      Vb = function (a) {
        return (1 / ca) * a * t;
      },
      Wb = function () {
        var a = s,
          b = Ta(),
          c = Ua();
        s < b ? (a = b) : s > c && (a = c);
        var d,
          g = 1,
          h = ja;
        return ia && !S && !ka && s < b
          ? (f.close(), !0)
          : (ia &&
              (d = function (a) {
                Fa((g - h) * a + h);
              }),
            f.zoomTo(a, 0, 200, e.easing.cubic.out, d),
            !0);
      };
    za("Gestures", {
      publicMethods: {
        initGestures: function () {
          var a = function (a, b, c, d, e) {
            (A = a + b), (B = a + c), (C = a + d), (D = e ? a + e : "");
          };
          (F = N.pointerEvent),
            F && N.touch && (N.touch = !1),
            F
              ? navigator.pointerEnabled
                ? a("pointer", "down", "move", "up", "cancel")
                : a("MSPointer", "Down", "Move", "Up", "Cancel")
              : N.touch
              ? (a("touch", "start", "move", "end", "cancel"), (G = !0))
              : a("mouse", "down", "move", "up"),
            (p = B + " " + C + " " + D),
            (q = A),
            F &&
              !G &&
              (G =
                navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1),
            (f.likelyTouchDevice = G),
            (r[A] = Ob),
            (r[B] = Pb),
            (r[C] = Rb),
            D && (r[D] = r[C]),
            N.touch &&
              ((q += " mousedown"),
              (p += " mousemove mouseup"),
              (r.mousedown = r[A]),
              (r.mousemove = r[B]),
              (r.mouseup = r[C])),
            G || (i.allowPanToNext = !1);
        },
      },
    });
    var Xb,
      Yb,
      Zb,
      $b,
      _b,
      ac,
      bc,
      cc = function (b, c, d, g) {
        Xb && clearTimeout(Xb), ($b = !0), (Zb = !0);
        var h;
        b.initialLayout
          ? ((h = b.initialLayout), (b.initialLayout = null))
          : (h = i.getThumbBoundsFn && i.getThumbBoundsFn(m));
        var j = d ? i.hideAnimationDuration : i.showAnimationDuration,
          k = function () {
            ab("initialZoom"),
              d
                ? (f.template.removeAttribute("style"),
                  f.bg.removeAttribute("style"))
                : (Fa(1),
                  c && (c.style.display = "block"),
                  e.addClass(a, "pswp--animated-in"),
                  Da("initialZoom" + (d ? "OutEnd" : "InEnd"))),
              g && g(),
              ($b = !1);
          };
        if (!j || !h || void 0 === h.x)
          return (
            Da("initialZoom" + (d ? "Out" : "In")),
            (s = b.initialZoomLevel),
            Ma(pa, b.initialPosition),
            Ha(),
            (a.style.opacity = d ? 0 : 1),
            Fa(1),
            void (j
              ? setTimeout(function () {
                  k();
                }, j)
              : k())
          );
        var n = function () {
          var c = l,
            g = !f.currItem.src || f.currItem.loadError || i.showHideOpacity;
          b.miniImg && (b.miniImg.style.webkitBackfaceVisibility = "hidden"),
            d ||
              ((s = h.w / b.w),
              (pa.x = h.x),
              (pa.y = h.y - K),
              (f[g ? "template" : "bg"].style.opacity = 0.001),
              Ha()),
            bb("initialZoom"),
            d && !c && e.removeClass(a, "pswp--animated-in"),
            g &&
              (d
                ? e[(c ? "remove" : "add") + "Class"](
                    a,
                    "pswp--animate_opacity"
                  )
                : setTimeout(function () {
                    e.addClass(a, "pswp--animate_opacity");
                  }, 30)),
            (Xb = setTimeout(
              function () {
                if ((Da("initialZoom" + (d ? "Out" : "In")), d)) {
                  var f = h.w / b.w,
                    i = { x: pa.x, y: pa.y },
                    l = s,
                    m = ja,
                    n = function (b) {
                      1 === b
                        ? ((s = f), (pa.x = h.x), (pa.y = h.y - M))
                        : ((s = (f - l) * b + l),
                          (pa.x = (h.x - i.x) * b + i.x),
                          (pa.y = (h.y - M - i.y) * b + i.y)),
                        Ha(),
                        g ? (a.style.opacity = 1 - b) : Fa(m - b * m);
                    };
                  c
                    ? db("initialZoom", 0, 1, j, e.easing.cubic.out, n, k)
                    : (n(1), (Xb = setTimeout(k, j + 20)));
                } else
                  (s = b.initialZoomLevel),
                    Ma(pa, b.initialPosition),
                    Ha(),
                    Fa(1),
                    g ? (a.style.opacity = 1) : Fa(1),
                    (Xb = setTimeout(k, j + 20));
              },
              d ? 25 : 90
            ));
        };
        n();
      },
      dc = {},
      ec = [],
      fc = {
        index: 0,
        errorMsg:
          '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
        forceProgressiveLoading: !1,
        preload: [1, 1],
        getNumItemsFn: function () {
          return Yb.length;
        },
      },
      gc = function () {
        return {
          center: { x: 0, y: 0 },
          max: { x: 0, y: 0 },
          min: { x: 0, y: 0 },
        };
      },
      hc = function (a, b, c) {
        var d = a.bounds;
        (d.center.x = Math.round((dc.x - b) / 2)),
          (d.center.y = Math.round((dc.y - c) / 2) + a.vGap.top),
          (d.max.x = b > dc.x ? Math.round(dc.x - b) : d.center.x),
          (d.max.y = c > dc.y ? Math.round(dc.y - c) + a.vGap.top : d.center.y),
          (d.min.x = b > dc.x ? 0 : d.center.x),
          (d.min.y = c > dc.y ? a.vGap.top : d.center.y);
      },
      ic = function (a, b, c) {
        if (a.src && !a.loadError) {
          var d = !c;
          if (
            (d &&
              (a.vGap || (a.vGap = { top: 0, bottom: 0 }),
              Da("parseVerticalMargin", a)),
            (dc.x = b.x),
            (dc.y = b.y - a.vGap.top - a.vGap.bottom),
            d)
          ) {
            var e = dc.x / a.w,
              f = dc.y / a.h;
            a.fitRatio = e < f ? e : f;
            var g = i.scaleMode;
            "orig" === g ? (c = 1) : "fit" === g && (c = a.fitRatio),
              c > 1 && (c = 1),
              (a.initialZoomLevel = c),
              a.bounds || (a.bounds = gc());
          }
          if (!c) return;
          return (
            hc(a, a.w * c, a.h * c),
            d &&
              c === a.initialZoomLevel &&
              (a.initialPosition = a.bounds.center),
            a.bounds
          );
        }
        return (
          (a.w = a.h = 0),
          (a.initialZoomLevel = a.fitRatio = 1),
          (a.bounds = gc()),
          (a.initialPosition = a.bounds.center),
          a.bounds
        );
      },
      jc = function (a, b, c, d, e, g) {
        b.loadError ||
          (d &&
            ((b.imageAppended = !0),
            mc(b, d, b === f.currItem && ya),
            c.appendChild(d),
            g &&
              setTimeout(function () {
                b &&
                  b.loaded &&
                  b.placeholder &&
                  ((b.placeholder.style.display = "none"),
                  (b.placeholder = null));
              }, 500)));
      },
      kc = function (a) {
        (a.loading = !0), (a.loaded = !1);
        var b = (a.img = e.createEl("pswp__img", "img")),
          c = function () {
            (a.loading = !1),
              (a.loaded = !0),
              a.loadComplete ? a.loadComplete(a) : (a.img = null),
              (b.onload = b.onerror = null),
              (b = null);
          };
        return (
          (b.onload = c),
          (b.onerror = function () {
            (a.loadError = !0), c();
          }),
          (b.src = a.src),
          b
        );
      },
      lc = function (a, b) {
        if (a.src && a.loadError && a.container)
          return (
            b && (a.container.innerHTML = ""),
            (a.container.innerHTML = i.errorMsg.replace("%url%", a.src)),
            !0
          );
      },
      mc = function (a, b, c) {
        if (a.src) {
          b || (b = a.container.lastChild);
          var d = c ? a.w : Math.round(a.w * a.fitRatio),
            e = c ? a.h : Math.round(a.h * a.fitRatio);
          a.placeholder &&
            !a.loaded &&
            ((a.placeholder.style.width = d + "px"),
            (a.placeholder.style.height = e + "px")),
            (b.style.width = d + "px"),
            (b.style.height = e + "px");
        }
      },
      nc = function () {
        if (ec.length) {
          for (var a, b = 0; b < ec.length; b++)
            (a = ec[b]),
              a.holder.index === a.index &&
                jc(a.index, a.item, a.baseDiv, a.img, !1, a.clearPlaceholder);
          ec = [];
        }
      };
    za("Controller", {
      publicMethods: {
        lazyLoadItem: function (a) {
          a = Aa(a);
          var b = _b(a);
          b &&
            ((!b.loaded && !b.loading) || x) &&
            (Da("gettingData", a, b), b.src && kc(b));
        },
        initController: function () {
          e.extend(i, fc, !0),
            (f.items = Yb = c),
            (_b = f.getItemAt),
            (ac = i.getNumItemsFn),
            (bc = i.loop),
            ac() < 3 && (i.loop = !1),
            Ca("beforeChange", function (a) {
              var b,
                c = i.preload,
                d = null === a || a >= 0,
                e = Math.min(c[0], ac()),
                g = Math.min(c[1], ac());
              for (b = 1; b <= (d ? g : e); b++) f.lazyLoadItem(m + b);
              for (b = 1; b <= (d ? e : g); b++) f.lazyLoadItem(m - b);
            }),
            Ca("initialLayout", function () {
              f.currItem.initialLayout =
                i.getThumbBoundsFn && i.getThumbBoundsFn(m);
            }),
            Ca("mainScrollAnimComplete", nc),
            Ca("initialZoomInEnd", nc),
            Ca("destroy", function () {
              for (var a, b = 0; b < Yb.length; b++)
                (a = Yb[b]),
                  a.container && (a.container = null),
                  a.placeholder && (a.placeholder = null),
                  a.img && (a.img = null),
                  a.preloader && (a.preloader = null),
                  a.loadError && (a.loaded = a.loadError = !1);
              ec = null;
            });
        },
        getItemAt: function (a) {
          return a >= 0 && void 0 !== Yb[a] && Yb[a];
        },
        allowProgressiveImg: function () {
          return (
            i.forceProgressiveLoading ||
            !G ||
            i.mouseUsed ||
            screen.width > 1200
          );
        },
        setContent: function (a, b) {
          i.loop && (b = Aa(b));
          var c = f.getItemAt(a.index);
          c && (c.container = null);
          var d,
            g = f.getItemAt(b);
          if (!g) return void (a.el.innerHTML = "");
          Da("gettingData", b, g), (a.index = b), (a.item = g);
          var h = (g.container = e.createEl("pswp__zoom-wrap"));
          if (
            (!g.src &&
              g.html &&
              (g.html.tagName ? h.appendChild(g.html) : (h.innerHTML = g.html)),
            lc(g),
            ic(g, qa),
            !g.src || g.loadError || g.loaded)
          )
            g.src &&
              !g.loadError &&
              ((d = e.createEl("pswp__img", "img")),
              (d.style.opacity = 1),
              (d.src = g.src),
              mc(g, d),
              jc(b, g, h, d, !0));
          else {
            if (
              ((g.loadComplete = function (c) {
                if (j) {
                  if (a && a.index === b) {
                    if (lc(c, !0))
                      return (
                        (c.loadComplete = c.img = null),
                        ic(c, qa),
                        Ia(c),
                        void (a.index === m && f.updateCurrZoomItem())
                      );
                    c.imageAppended
                      ? !$b &&
                        c.placeholder &&
                        ((c.placeholder.style.display = "none"),
                        (c.placeholder = null))
                      : N.transform && (fa || $b)
                      ? ec.push({
                          item: c,
                          baseDiv: h,
                          img: c.img,
                          index: b,
                          holder: a,
                          clearPlaceholder: !0,
                        })
                      : jc(b, c, h, c.img, fa || $b, !0);
                  }
                  (c.loadComplete = null),
                    (c.img = null),
                    Da("imageLoadComplete", b, c);
                }
              }),
              e.features.transform)
            ) {
              var k = "pswp__img pswp__img--placeholder";
              k += g.msrc ? "" : " pswp__img--placeholder--blank";
              var l = e.createEl(k, g.msrc ? "img" : "");
              g.msrc && (l.src = g.msrc),
                mc(g, l),
                h.appendChild(l),
                (g.placeholder = l);
            }
            g.loading || kc(g),
              f.allowProgressiveImg() &&
                (!Zb && N.transform
                  ? ec.push({
                      item: g,
                      baseDiv: h,
                      img: g.img,
                      index: b,
                      holder: a,
                    })
                  : jc(b, g, h, g.img, !0, !0));
          }
          Zb || b !== m ? Ia(g) : ((ea = h.style), cc(g, d || g.img)),
            (a.el.innerHTML = ""),
            a.el.appendChild(h);
        },
        cleanSlide: function (a) {
          a.img && (a.img.onload = a.img.onerror = null),
            (a.loaded = a.loading = a.img = a.imageAppended = !1);
        },
      },
    });
    var oc,
      pc = {},
      qc = function (a, b, c) {
        var d = document.createEvent("CustomEvent"),
          e = {
            origEvent: a,
            target: a.target,
            releasePoint: b,
            pointerType: c || "touch",
          };
        d.initCustomEvent("pswpTap", !0, !0, e), a.target.dispatchEvent(d);
      };
    za("Tap", {
      publicMethods: {
        initTap: function () {
          Ca("firstTouchStart", f.onTapStart),
            Ca("touchRelease", f.onTapRelease),
            Ca("destroy", function () {
              (pc = {}), (oc = null);
            });
        },
        onTapStart: function (a) {
          a.length > 1 && (clearTimeout(oc), (oc = null));
        },
        onTapRelease: function (a, b) {
          if (b && !Y && !W && !_a) {
            var c = b;
            if (oc && (clearTimeout(oc), (oc = null), xb(c, pc)))
              return void Da("doubleTap", c);
            if ("mouse" === b.type) return void qc(a, b, "mouse");
            var d = a.target.tagName.toUpperCase();
            if ("BUTTON" === d || e.hasClass(a.target, "pswp__single-tap"))
              return void qc(a, b);
            Ma(pc, c),
              (oc = setTimeout(function () {
                qc(a, b), (oc = null);
              }, 300));
          }
        },
      },
    });
    var rc;
    za("DesktopZoom", {
      publicMethods: {
        initDesktopZoom: function () {
          L ||
            (G
              ? Ca("mouseUsed", function () {
                  f.setupDesktopZoom();
                })
              : f.setupDesktopZoom(!0));
        },
        setupDesktopZoom: function (b) {
          rc = {};
          var c = "wheel mousewheel DOMMouseScroll";
          Ca("bindEvents", function () {
            e.bind(a, c, f.handleMouseWheel);
          }),
            Ca("unbindEvents", function () {
              rc && e.unbind(a, c, f.handleMouseWheel);
            }),
            (f.mouseZoomedIn = !1);
          var d,
            g = function () {
              f.mouseZoomedIn &&
                (e.removeClass(a, "pswp--zoomed-in"), (f.mouseZoomedIn = !1)),
                s < 1
                  ? e.addClass(a, "pswp--zoom-allowed")
                  : e.removeClass(a, "pswp--zoom-allowed"),
                h();
            },
            h = function () {
              d && (e.removeClass(a, "pswp--dragging"), (d = !1));
            };
          Ca("resize", g),
            Ca("afterChange", g),
            Ca("pointerDown", function () {
              f.mouseZoomedIn && ((d = !0), e.addClass(a, "pswp--dragging"));
            }),
            Ca("pointerUp", h),
            b || g();
        },
        handleMouseWheel: function (a) {
          if (s <= f.currItem.fitRatio)
            return (
              i.modal &&
                (!i.closeOnScroll || _a || V
                  ? a.preventDefault()
                  : E && Math.abs(a.deltaY) > 2 && ((l = !0), f.close())),
              !0
            );
          if ((a.stopPropagation(), (rc.x = 0), "deltaX" in a))
            1 === a.deltaMode
              ? ((rc.x = 18 * a.deltaX), (rc.y = 18 * a.deltaY))
              : ((rc.x = a.deltaX), (rc.y = a.deltaY));
          else if ("wheelDelta" in a)
            a.wheelDeltaX && (rc.x = -0.16 * a.wheelDeltaX),
              a.wheelDeltaY
                ? (rc.y = -0.16 * a.wheelDeltaY)
                : (rc.y = -0.16 * a.wheelDelta);
          else {
            if (!("detail" in a)) return;
            rc.y = a.detail;
          }
          Sa(s, !0);
          var b = pa.x - rc.x,
            c = pa.y - rc.y;
          (i.modal ||
            (b <= da.min.x &&
              b >= da.max.x &&
              c <= da.min.y &&
              c >= da.max.y)) &&
            a.preventDefault(),
            f.panTo(b, c);
        },
        toggleDesktopZoom: function (b) {
          b = b || { x: qa.x / 2 + sa.x, y: qa.y / 2 + sa.y };
          var c = i.getDoubleTapZoom(!0, f.currItem),
            d = s === c;
          (f.mouseZoomedIn = !d),
            f.zoomTo(d ? f.currItem.initialZoomLevel : c, b, 333),
            e[(d ? "remove" : "add") + "Class"](a, "pswp--zoomed-in");
        },
      },
    });
    var sc,
      tc,
      uc,
      vc,
      wc,
      xc,
      yc,
      zc,
      Ac,
      Bc,
      Cc,
      Dc,
      Ec = { history: !0, galleryUID: 1 },
      Fc = function () {
        return Cc.hash.substring(1);
      },
      Gc = function () {
        sc && clearTimeout(sc), uc && clearTimeout(uc);
      },
      Hc = function () {
        var a = Fc(),
          b = {};
        if (a.length < 5) return b;
        var c,
          d = a.split("&");
        for (c = 0; c < d.length; c++)
          if (d[c]) {
            var e = d[c].split("=");
            e.length < 2 || (b[e[0]] = e[1]);
          }
        if (i.galleryPIDs) {
          var f = b.pid;
          for (b.pid = 0, c = 0; c < Yb.length; c++)
            if (Yb[c].pid === f) {
              b.pid = c;
              break;
            }
        } else b.pid = parseInt(b.pid, 10) - 1;
        return b.pid < 0 && (b.pid = 0), b;
      },
      Ic = function () {
        if ((uc && clearTimeout(uc), _a || V))
          return void (uc = setTimeout(Ic, 500));
        vc ? clearTimeout(tc) : (vc = !0);
        var a = m + 1,
          b = _b(m);
        b.hasOwnProperty("pid") && (a = b.pid);
        var c = yc + "&gid=" + i.galleryUID + "&pid=" + a;
        zc || (Cc.hash.indexOf(c) === -1 && (Bc = !0));
        var d = Cc.href.split("#")[0] + "#" + c;
        Dc
          ? "#" + c !== window.location.hash &&
            history[zc ? "replaceState" : "pushState"]("", document.title, d)
          : zc
          ? Cc.replace(d)
          : (Cc.hash = c),
          (zc = !0),
          (tc = setTimeout(function () {
            vc = !1;
          }, 60));
      };
    za("History", {
      publicMethods: {
        initHistory: function () {
          if ((e.extend(i, Ec, !0), i.history)) {
            (Cc = window.location),
              (Bc = !1),
              (Ac = !1),
              (zc = !1),
              (yc = Fc()),
              (Dc = "pushState" in history),
              yc.indexOf("gid=") > -1 &&
                ((yc = yc.split("&gid=")[0]), (yc = yc.split("?gid=")[0])),
              Ca("afterChange", f.updateURL),
              Ca("unbindEvents", function () {
                e.unbind(window, "hashchange", f.onHashChange);
              });
            var a = function () {
              (xc = !0),
                Ac ||
                  (Bc
                    ? history.back()
                    : yc
                    ? (Cc.hash = yc)
                    : Dc
                    ? history.pushState(
                        "",
                        document.title,
                        Cc.pathname + Cc.search
                      )
                    : (Cc.hash = "")),
                Gc();
            };
            Ca("unbindEvents", function () {
              l && a();
            }),
              Ca("destroy", function () {
                xc || a();
              }),
              Ca("firstUpdate", function () {
                m = Hc().pid;
              });
            var b = yc.indexOf("pid=");
            b > -1 &&
              ((yc = yc.substring(0, b)),
              "&" === yc.slice(-1) && (yc = yc.slice(0, -1))),
              setTimeout(function () {
                j && e.bind(window, "hashchange", f.onHashChange);
              }, 40);
          }
        },
        onHashChange: function () {
          return Fc() === yc
            ? ((Ac = !0), void f.close())
            : void (vc || ((wc = !0), f.goTo(Hc().pid), (wc = !1)));
        },
        updateURL: function () {
          Gc(), wc || (zc ? (sc = setTimeout(Ic, 800)) : Ic());
        },
      },
    }),
      e.extend(f, eb);
  };
  return a;
});
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.sal = t())
    : (e.sal = t());
})(this, function () {
  return (function (e) {
    function t(r) {
      if (n[r]) return n[r].exports;
      var o = (n[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
    }
    var n = {};
    return (
      (t.m = e),
      (t.c = n),
      (t.d = function (e, n, r) {
        t.o(e, n) ||
          Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r,
          });
      }),
      (t.n = function (e) {
        var n =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return t.d(n, "a", n), n;
      }),
      (t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (t.p = "dist/"),
      t((t.s = 0))
    );
  })([
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        };
      n(1);
      var o = {
          rootMargin: "0% 50%",
          threshold: 0.5,
          animateClassName: "sal-animate",
          disabledClassName: "sal-disabled",
          selector: "[data-sal]",
          once: !0,
          disabled: !1,
        },
        s = [],
        a = null,
        i = function (e) {
          return e.classList.add(o.animateClassName);
        },
        l = function (e) {
          return e.classList.remove(o.animateClassName);
        },
        c = function (e) {
          return e.classList.contains(o.animateClassName);
        },
        u = function () {
          document.body.classList.remove(o.disabledClassName);
        },
        d = function () {
          document.body.classList.add(o.disabledClassName);
        },
        f = function () {
          return (
            o.disabled || ("function" == typeof o.disabled && o.disabled())
          );
        },
        b = function (e, t) {
          e.forEach(function (e) {
            e.intersectionRatio >= o.threshold
              ? (i(e.target), o.once && t.unobserve(e.target))
              : o.once || l(e.target);
          });
        },
        m = function () {
          d(), a.disconnect(), (a = null);
        },
        p = function () {
          u(),
            (a = new IntersectionObserver(b, {
              rootMargin: o.rootMargin,
              threshold: o.threshold,
            })),
            (s = [].filter.call(
              document.querySelectorAll(o.selector),
              function (e) {
                return !c(e, o.animateClassName);
              }
            )),
            s.forEach(function (e) {
              return a.observe(e);
            });
        },
        h = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
          if ((e !== o && (o = r({}, o, e)), !window.IntersectionObserver))
            throw (
              (d(),
              Error(
                "\n      Your browser does not support IntersectionObserver!\n      Get a polyfill from here:\n      https://github.com/w3c/IntersectionObserver/tree/master/polyfill\n    "
              ))
            );
          return f() ? d() : p(), { elements: s, disable: m, enable: p };
        };
      t.default = h;
    },
    function (e, t) {},
  ]).default;
});
/*!
 * modernizr v3.5.0
 * Build https://modernizr.com/download?-objectfit-touchevents-setclasses-dontmin
 *
 * Copyright (c)
 *  Faruk Ates
 *  Paul Irish
 *  Alex Sexton
 *  Ryan Seddon
 *  Patrick Kettner
 *  Stu Cox
 *  Richard Herrera

 * MIT License
 */

/*
 * Modernizr tests which native CSS3 and HTML5 features are available in the
 * current UA and makes the results available to you in two ways: as properties on
 * a global `Modernizr` object, and as classes on the `<html>` element. This
 * information allows you to progressively enhance your pages with a granular level
 * of control over the experience.
 */

(function (window, document, undefined) {
  var classes = [];

  var tests = [];

  /**
   *
   * ModernizrProto is the constructor for Modernizr
   *
   * @class
   * @access public
   */

  var ModernizrProto = {
    // The current version, dummy
    _version: "3.5.0",

    // Any settings that don't work as separate modules
    // can go in here as configuration.
    _config: {
      classPrefix: "",
      enableClasses: true,
      enableJSClass: true,
      usePrefixes: true,
    },

    // Queue of tests
    _q: [],

    // Stub these for people who are listening
    on: function (test, cb) {
      // I don't really think people should do this, but we can
      // safe guard it a bit.
      // -- NOTE:: this gets WAY overridden in src/addTest for actual async tests.
      // This is in case people listen to synchronous tests. I would leave it out,
      // but the code to *disallow* sync tests in the real version of this
      // function is actually larger than this.
      var self = this;
      setTimeout(function () {
        cb(self[test]);
      }, 0);
    },

    addTest: function (name, fn, options) {
      tests.push({ name: name, fn: fn, options: options });
    },

    addAsyncTest: function (fn) {
      tests.push({ name: null, fn: fn });
    },
  };

  // Fake some of Object.create so we can force non test results to be non "own" properties.
  var Modernizr = function () {};
  Modernizr.prototype = ModernizrProto;

  // Leak modernizr globally when you `require` it rather than force it here.
  // Overwrite name so constructor name is nicer :D
  Modernizr = new Modernizr();

  /**
   * is returns a boolean if the typeof an obj is exactly type.
   *
   * @access private
   * @function is
   * @param {*} obj - A thing we want to check the type of
   * @param {string} type - A string to compare the typeof against
   * @returns {boolean}
   */

  function is(obj, type) {
    return typeof obj === type;
  }
  /**
   * Run through all tests and detect their support in the current UA.
   *
   * @access private
   */

  function testRunner() {
    var featureNames;
    var feature;
    var aliasIdx;
    var result;
    var nameIdx;
    var featureName;
    var featureNameSplit;

    for (var featureIdx in tests) {
      if (tests.hasOwnProperty(featureIdx)) {
        featureNames = [];
        feature = tests[featureIdx];
        // run the test, throw the return value into the Modernizr,
        // then based on that boolean, define an appropriate className
        // and push it into an array of classes we'll join later.
        //
        // If there is no name, it's an 'async' test that is run,
        // but not directly added to the object. That should
        // be done with a post-run addTest call.
        if (feature.name) {
          featureNames.push(feature.name.toLowerCase());

          if (
            feature.options &&
            feature.options.aliases &&
            feature.options.aliases.length
          ) {
            // Add all the aliases into the names list
            for (
              aliasIdx = 0;
              aliasIdx < feature.options.aliases.length;
              aliasIdx++
            ) {
              featureNames.push(
                feature.options.aliases[aliasIdx].toLowerCase()
              );
            }
          }
        }

        // Run the test, or use the raw value if it's not a function
        result = is(feature.fn, "function") ? feature.fn() : feature.fn;

        // Set each of the names on the Modernizr object
        for (nameIdx = 0; nameIdx < featureNames.length; nameIdx++) {
          featureName = featureNames[nameIdx];
          // Support dot properties as sub tests. We don't do checking to make sure
          // that the implied parent tests have been added. You must call them in
          // order (either in the test, or make the parent test a dependency).
          //
          // Cap it to TWO to make the logic simple and because who needs that kind of subtesting
          // hashtag famous last words
          featureNameSplit = featureName.split(".");

          if (featureNameSplit.length === 1) {
            Modernizr[featureNameSplit[0]] = result;
          } else {
            // cast to a Boolean, if not one already
            if (
              Modernizr[featureNameSplit[0]] &&
              !(Modernizr[featureNameSplit[0]] instanceof Boolean)
            ) {
              Modernizr[featureNameSplit[0]] = new Boolean(
                Modernizr[featureNameSplit[0]]
              );
            }

            Modernizr[featureNameSplit[0]][featureNameSplit[1]] = result;
          }

          classes.push((result ? "" : "no-") + featureNameSplit.join("-"));
        }
      }
    }
  }
  /**
   * docElement is a convenience wrapper to grab the root element of the document
   *
   * @access private
   * @returns {HTMLElement|SVGElement} The root element of the document
   */

  var docElement = document.documentElement;

  /**
   * A convenience helper to check if the document we are running in is an SVG document
   *
   * @access private
   * @returns {boolean}
   */

  var isSVG = docElement.nodeName.toLowerCase() === "svg";

  /**
   * setClasses takes an array of class names and adds them to the root element
   *
   * @access private
   * @function setClasses
   * @param {string[]} classes - Array of class names
   */

  // Pass in an and array of class names, e.g.:
  //  ['no-webp', 'borderradius', ...]
  function setClasses(classes) {
    var className = docElement.className;
    var classPrefix = Modernizr._config.classPrefix || "";

    if (isSVG) {
      className = className.baseVal;
    }

    // Change `no-js` to `js` (independently of the `enableClasses` option)
    // Handle classPrefix on this too
    if (Modernizr._config.enableJSClass) {
      var reJS = new RegExp("(^|\\s)" + classPrefix + "no-js(\\s|$)");
      className = className.replace(reJS, "$1" + classPrefix + "js$2");
    }

    if (Modernizr._config.enableClasses) {
      // Add the new classes
      className += " " + classPrefix + classes.join(" " + classPrefix);
      if (isSVG) {
        docElement.className.baseVal = className;
      } else {
        docElement.className = className;
      }
    }
  }

  /**
   * List of property values to set for css tests. See ticket #21
   * http://git.io/vUGl4
   *
   * @memberof Modernizr
   * @name Modernizr._prefixes
   * @optionName Modernizr._prefixes
   * @optionProp prefixes
   * @access public
   * @example
   *
   * Modernizr._prefixes is the internal list of prefixes that we test against
   * inside of things like [prefixed](#modernizr-prefixed) and [prefixedCSS](#-code-modernizr-prefixedcss). It is simply
   * an array of kebab-case vendor prefixes you can use within your code.
   *
   * Some common use cases include
   *
   * Generating all possible prefixed version of a CSS property
   * ```js
   * var rule = Modernizr._prefixes.join('transform: rotate(20deg); ');
   *
   * rule === 'transform: rotate(20deg); webkit-transform: rotate(20deg); moz-transform: rotate(20deg); o-transform: rotate(20deg); ms-transform: rotate(20deg);'
   * ```
   *
   * Generating all possible prefixed version of a CSS value
   * ```js
   * rule = 'display:' +  Modernizr._prefixes.join('flex; display:') + 'flex';
   *
   * rule === 'display:flex; display:-webkit-flex; display:-moz-flex; display:-o-flex; display:-ms-flex; display:flex'
   * ```
   */

  // we use ['',''] rather than an empty array in order to allow a pattern of .`join()`ing prefixes to test
  // values in feature detects to continue to work
  var prefixes = ModernizrProto._config.usePrefixes
    ? " -webkit- -moz- -o- -ms- ".split(" ")
    : ["", ""];

  // expose these for the plugin API. Look in the source for how to join() them against your input
  ModernizrProto._prefixes = prefixes;

  /**
   * createElement is a convenience wrapper around document.createElement. Since we
   * use createElement all over the place, this allows for (slightly) smaller code
   * as well as abstracting away issues with creating elements in contexts other than
   * HTML documents (e.g. SVG documents).
   *
   * @access private
   * @function createElement
   * @returns {HTMLElement|SVGElement} An HTML or SVG element
   */

  function createElement() {
    if (typeof document.createElement !== "function") {
      // This is the case in IE7, where the type of createElement is "object".
      // For this reason, we cannot call apply() as Object is not a Function.
      return document.createElement(arguments[0]);
    } else if (isSVG) {
      return document.createElementNS.call(
        document,
        "http://www.w3.org/2000/svg",
        arguments[0]
      );
    } else {
      return document.createElement.apply(document, arguments);
    }
  }

  /**
   * getBody returns the body of a document, or an element that can stand in for
   * the body if a real body does not exist
   *
   * @access private
   * @function getBody
   * @returns {HTMLElement|SVGElement} Returns the real body of a document, or an
   * artificially created element that stands in for the body
   */

  function getBody() {
    // After page load injecting a fake body doesn't work so check if body exists
    var body = document.body;

    if (!body) {
      // Can't use the real body create a fake one.
      body = createElement(isSVG ? "svg" : "body");
      body.fake = true;
    }

    return body;
  }

  /**
   * injectElementWithStyles injects an element with style element and some CSS rules
   *
   * @access private
   * @function injectElementWithStyles
   * @param {string} rule - String representing a css rule
   * @param {function} callback - A function that is used to test the injected element
   * @param {number} [nodes] - An integer representing the number of additional nodes you want injected
   * @param {string[]} [testnames] - An array of strings that are used as ids for the additional nodes
   * @returns {boolean}
   */

  function injectElementWithStyles(rule, callback, nodes, testnames) {
    var mod = "modernizr";
    var style;
    var ret;
    var node;
    var docOverflow;
    var div = createElement("div");
    var body = getBody();

    if (parseInt(nodes, 10)) {
      // In order not to give false positives we create a node for each test
      // This also allows the method to scale for unspecified uses
      while (nodes--) {
        node = createElement("div");
        node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
        div.appendChild(node);
      }
    }

    style = createElement("style");
    style.type = "text/css";
    style.id = "s" + mod;

    // IE6 will false positive on some tests due to the style element inside the test div somehow interfering offsetHeight, so insert it into body or fakebody.
    // Opera will act all quirky when injecting elements in documentElement when page is served as xml, needs fakebody too. #270
    (!body.fake ? div : body).appendChild(style);
    body.appendChild(div);

    if (style.styleSheet) {
      style.styleSheet.cssText = rule;
    } else {
      style.appendChild(document.createTextNode(rule));
    }
    div.id = mod;

    if (body.fake) {
      //avoid crashing IE8, if background image is used
      body.style.background = "";
      //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
      body.style.overflow = "hidden";
      docOverflow = docElement.style.overflow;
      docElement.style.overflow = "hidden";
      docElement.appendChild(body);
    }

    ret = callback(div, rule);
    // If this is done after page load we don't want to remove the body so check if body exists
    if (body.fake) {
      body.parentNode.removeChild(body);
      docElement.style.overflow = docOverflow;
      // Trigger layout so kinetic scrolling isn't disabled in iOS6+
      // eslint-disable-next-line
      docElement.offsetHeight;
    } else {
      div.parentNode.removeChild(div);
    }

    return !!ret;
  }

  /**
   * testStyles injects an element with style element and some CSS rules
   *
   * @memberof Modernizr
   * @name Modernizr.testStyles
   * @optionName Modernizr.testStyles()
   * @optionProp testStyles
   * @access public
   * @function testStyles
   * @param {string} rule - String representing a css rule
   * @param {function} callback - A function that is used to test the injected element
   * @param {number} [nodes] - An integer representing the number of additional nodes you want injected
   * @param {string[]} [testnames] - An array of strings that are used as ids for the additional nodes
   * @returns {boolean}
   * @example
   *
   * `Modernizr.testStyles` takes a CSS rule and injects it onto the current page
   * along with (possibly multiple) DOM elements. This lets you check for features
   * that can not be detected by simply checking the [IDL](https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Interface_development_guide/IDL_interface_rules).
   *
   * ```js
   * Modernizr.testStyles('#modernizr { width: 9px; color: papayawhip; }', function(elem, rule) {
   *   // elem is the first DOM node in the page (by default #modernizr)
   *   // rule is the first argument you supplied - the CSS rule in string form
   *
   *   addTest('widthworks', elem.style.width === '9px')
   * });
   * ```
   *
   * If your test requires multiple nodes, you can include a third argument
   * indicating how many additional div elements to include on the page. The
   * additional nodes are injected as children of the `elem` that is returned as
   * the first argument to the callback.
   *
   * ```js
   * Modernizr.testStyles('#modernizr {width: 1px}; #modernizr2 {width: 2px}', function(elem) {
   *   document.getElementById('modernizr').style.width === '1px'; // true
   *   document.getElementById('modernizr2').style.width === '2px'; // true
   *   elem.firstChild === document.getElementById('modernizr2'); // true
   * }, 1);
   * ```
   *
   * By default, all of the additional elements have an ID of `modernizr[n]`, where
   * `n` is its index (e.g. the first additional, second overall is `#modernizr2`,
   * the second additional is `#modernizr3`, etc.).
   * If you want to have more meaningful IDs for your function, you can provide
   * them as the fourth argument, as an array of strings
   *
   * ```js
   * Modernizr.testStyles('#foo {width: 10px}; #bar {height: 20px}', function(elem) {
   *   elem.firstChild === document.getElementById('foo'); // true
   *   elem.lastChild === document.getElementById('bar'); // true
   * }, 2, ['foo', 'bar']);
   * ```
   *
   */

  var testStyles = (ModernizrProto.testStyles = injectElementWithStyles);

  /*!
{
  "name": "Touch Events",
  "property": "touchevents",
  "caniuse" : "touch",
  "tags": ["media", "attribute"],
  "notes": [{
    "name": "Touch Events spec",
    "href": "https://www.w3.org/TR/2013/WD-touch-events-20130124/"
  }],
  "warnings": [
    "Indicates if the browser supports the Touch Events spec, and does not necessarily reflect a touchscreen device"
  ],
  "knownBugs": [
    "False-positive on some configurations of Nokia N900",
    "False-positive on some BlackBerry 6.0 builds â€“ https://github.com/Modernizr/Modernizr/issues/372#issuecomment-3112695"
  ]
}
!*/
  /* DOC
Indicates if the browser supports the W3C Touch Events API.

This *does not* necessarily reflect a touchscreen device:

* Older touchscreen devices only emulate mouse events
* Modern IE touch devices implement the Pointer Events API instead: use `Modernizr.pointerevents` to detect support for that
* Some browsers & OS setups may enable touch APIs when no touchscreen is connected
* Future browsers may implement other event models for touch interactions

See this article: [You Can't Detect A Touchscreen](http://www.stucox.com/blog/you-cant-detect-a-touchscreen/).

It's recommended to bind both mouse and touch/pointer events simultaneously â€“ see [this HTML5 Rocks tutorial](http://www.html5rocks.com/en/mobile/touchandmouse/).

This test will also return `true` for Firefox 4 Multitouch support.
*/

  // Chrome (desktop) used to lie about its support on this, but that has since been rectified: http://crbug.com/36415
  Modernizr.addTest("touchevents", function () {
    var bool;
    if (
      "ontouchstart" in window ||
      (window.DocumentTouch && document instanceof DocumentTouch)
    ) {
      bool = true;
    } else {
      // include the 'heartz' as a way to have a non matching MQ to help terminate the join
      // https://git.io/vznFH
      var query = [
        "@media (",
        prefixes.join("touch-enabled),("),
        "heartz",
        ")",
        "{#modernizr{top:9px;position:absolute}}",
      ].join("");
      testStyles(query, function (node) {
        bool = node.offsetTop === 9;
      });
    }
    return bool;
  });

  /**
   * cssToDOM takes a kebab-case string and converts it to camelCase
   * e.g. box-sizing -> boxSizing
   *
   * @access private
   * @function cssToDOM
   * @param {string} name - String name of kebab-case prop we want to convert
   * @returns {string} The camelCase version of the supplied name
   */

  function cssToDOM(name) {
    return name
      .replace(/([a-z])-([a-z])/g, function (str, m1, m2) {
        return m1 + m2.toUpperCase();
      })
      .replace(/^-/, "");
  }
  /**
   * contains checks to see if a string contains another string
   *
   * @access private
   * @function contains
   * @param {string} str - The string we want to check for substrings
   * @param {string} substr - The substring we want to search the first string for
   * @returns {boolean}
   */

  function contains(str, substr) {
    return !!~("" + str).indexOf(substr);
  }

  /**
   * If the browsers follow the spec, then they would expose vendor-specific styles as:
   *   elem.style.WebkitBorderRadius
   * instead of something like the following (which is technically incorrect):
   *   elem.style.webkitBorderRadius

   * WebKit ghosts their properties in lowercase but Opera & Moz do not.
   * Microsoft uses a lowercase `ms` instead of the correct `Ms` in IE8+
   *   erik.eae.net/archives/2008/03/10/21.48.10/

   * More here: github.com/Modernizr/Modernizr/issues/issue/21
   *
   * @access private
   * @returns {string} The string representing the vendor-specific style properties
   */

  var omPrefixes = "Moz O ms Webkit";

  /**
   * List of JavaScript DOM values used for tests
   *
   * @memberof Modernizr
   * @name Modernizr._domPrefixes
   * @optionName Modernizr._domPrefixes
   * @optionProp domPrefixes
   * @access public
   * @example
   *
   * Modernizr._domPrefixes is exactly the same as [_prefixes](#modernizr-_prefixes), but rather
   * than kebab-case properties, all properties are their Capitalized variant
   *
   * ```js
   * Modernizr._domPrefixes === [ "Moz", "O", "ms", "Webkit" ];
   * ```
   */

  var domPrefixes = ModernizrProto._config.usePrefixes
    ? omPrefixes.toLowerCase().split(" ")
    : [];
  ModernizrProto._domPrefixes = domPrefixes;

  var cssomPrefixes = ModernizrProto._config.usePrefixes
    ? omPrefixes.split(" ")
    : [];
  ModernizrProto._cssomPrefixes = cssomPrefixes;

  /**
   * atRule returns a given CSS property at-rule (eg @keyframes), possibly in
   * some prefixed form, or false, in the case of an unsupported rule
   *
   * @memberof Modernizr
   * @name Modernizr.atRule
   * @optionName Modernizr.atRule()
   * @optionProp atRule
   * @access public
   * @function atRule
   * @param {string} prop - String name of the @-rule to test for
   * @returns {string|boolean} The string representing the (possibly prefixed)
   * valid version of the @-rule, or `false` when it is unsupported.
   * @example
   * ```js
   *  var keyframes = Modernizr.atRule('@keyframes');
   *
   *  if (keyframes) {
   *    // keyframes are supported
   *    // could be `@-webkit-keyframes` or `@keyframes`
   *  } else {
   *    // keyframes === `false`
   *  }
   * ```
   *
   */

  var atRule = function (prop) {
    var length = prefixes.length;
    var cssrule = window.CSSRule;
    var rule;

    if (typeof cssrule === "undefined") {
      return undefined;
    }

    if (!prop) {
      return false;
    }

    // remove literal @ from beginning of provided property
    prop = prop.replace(/^@/, "");

    // CSSRules use underscores instead of dashes
    rule = prop.replace(/-/g, "_").toUpperCase() + "_RULE";

    if (rule in cssrule) {
      return "@" + prop;
    }

    for (var i = 0; i < length; i++) {
      // prefixes gives us something like -o-, and we want O_
      var prefix = prefixes[i];
      var thisRule = prefix.toUpperCase() + "_" + rule;

      if (thisRule in cssrule) {
        return "@-" + prefix.toLowerCase() + "-" + prop;
      }
    }

    return false;
  };

  ModernizrProto.atRule = atRule;

  /**
   * fnBind is a super small [bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) polyfill.
   *
   * @access private
   * @function fnBind
   * @param {function} fn - a function you want to change `this` reference to
   * @param {object} that - the `this` you want to call the function with
   * @returns {function} The wrapped version of the supplied function
   */

  function fnBind(fn, that) {
    return function () {
      return fn.apply(that, arguments);
    };
  }

  /**
   * testDOMProps is a generic DOM property test; if a browser supports
   *   a certain property, it won't return undefined for it.
   *
   * @access private
   * @function testDOMProps
   * @param {array.<string>} props - An array of properties to test for
   * @param {object} obj - An object or Element you want to use to test the parameters again
   * @param {boolean|object} elem - An Element to bind the property lookup again. Use `false` to prevent the check
   * @returns {false|*} returns false if the prop is unsupported, otherwise the value that is supported
   */
  function testDOMProps(props, obj, elem) {
    var item;

    for (var i in props) {
      if (props[i] in obj) {
        // return the property name as a string
        if (elem === false) {
          return props[i];
        }

        item = obj[props[i]];

        // let's bind a function
        if (is(item, "function")) {
          // bind to obj unless overriden
          return fnBind(item, elem || obj);
        }

        // return the unbound function or obj or value
        return item;
      }
    }
    return false;
  }

  /**
   * wrapper around getComputedStyle, to fix issues with Firefox returning null when
   * called inside of a hidden iframe
   *
   * @access private
   * @function computedStyle
   * @param {HTMLElement|SVGElement} - The element we want to find the computed styles of
   * @param {string|null} [pseudoSelector]- An optional pseudo element selector (e.g. :before), of null if none
   * @returns {CSSStyleDeclaration}
   */

  function computedStyle(elem, pseudo, prop) {
    var result;

    if ("getComputedStyle" in window) {
      result = getComputedStyle.call(window, elem, pseudo);
      var console = window.console;

      if (result !== null) {
        if (prop) {
          result = result.getPropertyValue(prop);
        }
      } else {
        if (console) {
          var method = console.error ? "error" : "log";
          console[method].call(
            console,
            "getComputedStyle returning null, its possible modernizr test results are inaccurate"
          );
        }
      }
    } else {
      result = !pseudo && elem.currentStyle && elem.currentStyle[prop];
    }

    return result;
  }

  /**
   * domToCSS takes a camelCase string and converts it to kebab-case
   * e.g. boxSizing -> box-sizing
   *
   * @access private
   * @function domToCSS
   * @param {string} name - String name of camelCase prop we want to convert
   * @returns {string} The kebab-case version of the supplied name
   */

  function domToCSS(name) {
    return name
      .replace(/([A-Z])/g, function (str, m1) {
        return "-" + m1.toLowerCase();
      })
      .replace(/^ms-/, "-ms-");
  }
  /**
   * nativeTestProps allows for us to use native feature detection functionality if available.
   * some prefixed form, or false, in the case of an unsupported rule
   *
   * @access private
   * @function nativeTestProps
   * @param {array} props - An array of property names
   * @param {string} value - A string representing the value we want to check via @supports
   * @returns {boolean|undefined} A boolean when @supports exists, undefined otherwise
   */

  // Accepts a list of property names and a single value
  // Returns `undefined` if native detection not available
  function nativeTestProps(props, value) {
    var i = props.length;
    // Start with the JS API: http://www.w3.org/TR/css3-conditional/#the-css-interface
    if ("CSS" in window && "supports" in window.CSS) {
      // Try every prefixed variant of the property
      while (i--) {
        if (window.CSS.supports(domToCSS(props[i]), value)) {
          return true;
        }
      }
      return false;
    }
    // Otherwise fall back to at-rule (for Opera 12.x)
    else if ("CSSSupportsRule" in window) {
      // Build a condition string for every prefixed variant
      var conditionText = [];
      while (i--) {
        conditionText.push("(" + domToCSS(props[i]) + ":" + value + ")");
      }
      conditionText = conditionText.join(" or ");
      return injectElementWithStyles(
        "@supports (" +
          conditionText +
          ") { #modernizr { position: absolute; } }",
        function (node) {
          return computedStyle(node, null, "position") == "absolute";
        }
      );
    }
    return undefined;
  }
  /**
   * Create our "modernizr" element that we do most feature tests on.
   *
   * @access private
   */

  var modElem = {
    elem: createElement("modernizr"),
  };

  // Clean up this element
  Modernizr._q.push(function () {
    delete modElem.elem;
  });

  var mStyle = {
    style: modElem.elem.style,
  };

  // kill ref for gc, must happen before mod.elem is removed, so we unshift on to
  // the front of the queue.
  Modernizr._q.unshift(function () {
    delete mStyle.style;
  });

  // testProps is a generic CSS / DOM property test.

  // In testing support for a given CSS property, it's legit to test:
  //    `elem.style[styleName] !== undefined`
  // If the property is supported it will return an empty string,
  // if unsupported it will return undefined.

  // We'll take advantage of this quick test and skip setting a style
  // on our modernizr element, but instead just testing undefined vs
  // empty string.

  // Property names can be provided in either camelCase or kebab-case.

  function testProps(props, prefixed, value, skipValueTest) {
    skipValueTest = is(skipValueTest, "undefined") ? false : skipValueTest;

    // Try native detect first
    if (!is(value, "undefined")) {
      var result = nativeTestProps(props, value);
      if (!is(result, "undefined")) {
        return result;
      }
    }

    // Otherwise do it properly
    var afterInit, i, propsLength, prop, before;

    // If we don't have a style element, that means we're running async or after
    // the core tests, so we'll need to create our own elements to use

    // inside of an SVG element, in certain browsers, the `style` element is only
    // defined for valid tags. Therefore, if `modernizr` does not have one, we
    // fall back to a less used element and hope for the best.
    // for strict XHTML browsers the hardly used samp element is used
    var elems = ["modernizr", "tspan", "samp"];
    while (!mStyle.style && elems.length) {
      afterInit = true;
      mStyle.modElem = createElement(elems.shift());
      mStyle.style = mStyle.modElem.style;
    }

    // Delete the objects if we created them.
    function cleanElems() {
      if (afterInit) {
        delete mStyle.style;
        delete mStyle.modElem;
      }
    }

    propsLength = props.length;
    for (i = 0; i < propsLength; i++) {
      prop = props[i];
      before = mStyle.style[prop];

      if (contains(prop, "-")) {
        prop = cssToDOM(prop);
      }

      if (mStyle.style[prop] !== undefined) {
        // If value to test has been passed in, do a set-and-check test.
        // 0 (integer) is a valid property value, so check that `value` isn't
        // undefined, rather than just checking it's truthy.
        if (!skipValueTest && !is(value, "undefined")) {
          // Needs a try catch block because of old IE. This is slow, but will
          // be avoided in most cases because `skipValueTest` will be used.
          try {
            mStyle.style[prop] = value;
          } catch (e) {}

          // If the property value has changed, we assume the value used is
          // supported. If `value` is empty string, it'll fail here (because
          // it hasn't changed), which matches how browsers have implemented
          // CSS.supports()
          if (mStyle.style[prop] != before) {
            cleanElems();
            return prefixed == "pfx" ? prop : true;
          }
        }
        // Otherwise just return true, or the property name if this is a
        // `prefixed()` call
        else {
          cleanElems();
          return prefixed == "pfx" ? prop : true;
        }
      }
    }
    cleanElems();
    return false;
  }

  /**
   * testPropsAll tests a list of DOM properties we want to check against.
   * We specify literally ALL possible (known and/or likely) properties on
   * the element including the non-vendor prefixed one, for forward-
   * compatibility.
   *
   * @access private
   * @function testPropsAll
   * @param {string} prop - A string of the property to test for
   * @param {string|object} [prefixed] - An object to check the prefixed properties on. Use a string to skip
   * @param {HTMLElement|SVGElement} [elem] - An element used to test the property and value against
   * @param {string} [value] - A string of a css value
   * @param {boolean} [skipValueTest] - An boolean representing if you want to test if value sticks when set
   * @returns {false|string} returns the string version of the property, or false if it is unsupported
   */
  function testPropsAll(prop, prefixed, elem, value, skipValueTest) {
    var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
      props = (prop + " " + cssomPrefixes.join(ucProp + " ") + ucProp).split(
        " "
      );

    // did they call .prefixed('boxSizing') or are we just testing a prop?
    if (is(prefixed, "string") || is(prefixed, "undefined")) {
      return testProps(props, prefixed, value, skipValueTest);

      // otherwise, they called .prefixed('requestAnimationFrame', window[, elem])
    } else {
      props = (prop + " " + domPrefixes.join(ucProp + " ") + ucProp).split(" ");
      return testDOMProps(props, prefixed, elem);
    }
  }

  // Modernizr.testAllProps() investigates whether a given style property,
  // or any of its vendor-prefixed variants, is recognized
  //
  // Note that the property names must be provided in the camelCase variant.
  // Modernizr.testAllProps('boxSizing')
  ModernizrProto.testAllProps = testPropsAll;

  /**
   * prefixed returns the prefixed or nonprefixed property name variant of your input
   *
   * @memberof Modernizr
   * @name Modernizr.prefixed
   * @optionName Modernizr.prefixed()
   * @optionProp prefixed
   * @access public
   * @function prefixed
   * @param {string} prop - String name of the property to test for
   * @param {object} [obj] - An object to test for the prefixed properties on
   * @param {HTMLElement} [elem] - An element used to test specific properties against
   * @returns {string|false} The string representing the (possibly prefixed) valid
   * version of the property, or `false` when it is unsupported.
   * @example
   *
   * Modernizr.prefixed takes a string css value in the DOM style camelCase (as
   * opposed to the css style kebab-case) form and returns the (possibly prefixed)
   * version of that property that the browser actually supports.
   *
   * For example, in older Firefox...
   * ```js
   * prefixed('boxSizing')
   * ```
   * returns 'MozBoxSizing'
   *
   * In newer Firefox, as well as any other browser that support the unprefixed
   * version would simply return `boxSizing`. Any browser that does not support
   * the property at all, it will return `false`.
   *
   * By default, prefixed is checked against a DOM element. If you want to check
   * for a property on another object, just pass it as a second argument
   *
   * ```js
   * var rAF = prefixed('requestAnimationFrame', window);
   *
   * raf(function() {
   *  renderFunction();
   * })
   * ```
   *
   * Note that this will return _the actual function_ - not the name of the function.
   * If you need the actual name of the property, pass in `false` as a third argument
   *
   * ```js
   * var rAFProp = prefixed('requestAnimationFrame', window, false);
   *
   * rafProp === 'WebkitRequestAnimationFrame' // in older webkit
   * ```
   *
   * One common use case for prefixed is if you're trying to determine which transition
   * end event to bind to, you might do something like...
   * ```js
   * var transEndEventNames = {
   *     'WebkitTransition' : 'webkitTransitionEnd', * Saf 6, Android Browser
   *     'MozTransition'    : 'transitionend',       * only for FF < 15
   *     'transition'       : 'transitionend'        * IE10, Opera, Chrome, FF 15+, Saf 7+
   * };
   *
   * var transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ];
   * ```
   *
   * If you want a similar lookup, but in kebab-case, you can use [prefixedCSS](#modernizr-prefixedcss).
   */

  var prefixed = (ModernizrProto.prefixed = function (prop, obj, elem) {
    if (prop.indexOf("@") === 0) {
      return atRule(prop);
    }

    if (prop.indexOf("-") != -1) {
      // Convert kebab-case to camelCase
      prop = cssToDOM(prop);
    }
    if (!obj) {
      return testPropsAll(prop, "pfx");
    } else {
      // Testing DOM property e.g. Modernizr.prefixed('requestAnimationFrame', window) // 'mozRequestAnimationFrame'
      return testPropsAll(prop, obj, elem);
    }
  });

  /*!
{
  "name": "CSS Object Fit",
  "caniuse": "object-fit",
  "property": "objectfit",
  "tags": ["css"],
  "builderAliases": ["css_objectfit"],
  "notes": [{
    "name": "Opera Article on Object Fit",
    "href": "https://dev.opera.com/articles/css3-object-fit-object-position/"
  }]
}
!*/

  Modernizr.addTest("objectfit", !!prefixed("objectFit"), {
    aliases: ["object-fit"],
  });

  // Run each test
  testRunner();

  // Remove the "no-js" class if it exists
  setClasses(classes);

  delete ModernizrProto.addTest;
  delete ModernizrProto.addAsyncTest;

  // Run the things that are supposed to run after the tests
  for (var i = 0; i < Modernizr._q.length; i++) {
    Modernizr._q[i]();
  }

  // Leak Modernizr namespace
  window.Modernizr = Modernizr;
})(window, document);
// The MIT License (MIT)

// Copyright (c) 2015 BG Stock - html5backgroundvideos.com

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

(function ($) {
  // Add js class to html
  $("html").addClass("js");

  // Add IE8 shim for Date.now()
  if (!Date.now) {
    Date.now = function () {
      return new Date().getTime();
    };
  }

  // Return current time in seconds
  function currentTime() {
    return Math.floor(Date.now() / 1000);
  }

  // The plugin
  $.fn.bgVideo = function (options) {
    // @bool iOS
    function iOSversion() {
      if (/iP(hone|od|ad)/.test(navigator.platform)) {
        var v = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        return [
          parseInt(v[1], 10),
          parseInt(v[2], 10),
          parseInt(v[3] || 0, 10),
        ];
      }
    }

    var iOSVersion = iOSversion();
    var old_iOS = false;

    if (iOSVersion && iOSVersion[0] < 10) {
      old_iOS = true;
    }

    // Settings
    var settings = $.extend({}, $.fn.bgVideo.defaults, options);

    // Do the things
    return this.each(function () {
      // Set some handy variables
      var $video = $(this); // jQuery Object
      var video = $video[0]; // DOM node
      var poster = $video.attr("poster") || "";
      var $container = $video.parent();
      var $pauseplay = $(
        '<button class="jquery-background-video-pauseplay pause"><span>Pause</span></button>'
      );
      var start_time; // We'll set this when it starts playing

      // Check for any data attributes that will override the settings for this particular element
      var el_settings = $.extend({}, settings);
      var data_attrs = $video.data();
      $.each(data_attrs, function (data_name, data_val) {
        if (data_name.indexOf("bgvideo") === 0) {
          // It's a match! Strip the bgvideo prefix and lowercase the first letter
          data_name = data_name.replace("bgvideo", "");
          data_name = data_name.charAt(0).toLowerCase() + data_name.slice(1);
          // Then set the setting
          el_settings[data_name] = data_val;
        }
      });

      // Attach to playing event
      $video.on("playing", function () {
        if (start_time == null) {
          start_time = currentTime();
        }
        $video.addClass("is-playing is-visible");
        $pauseplay
          .removeClass("play")
          .addClass("pause")
          .find("span")
          .text("Pause");
        $.fn.bgVideo.fitVideo($video);
      });

      // If the video is already playing before js loads
      if (video.currentTime > 0) {
        $video.addClass("is-playing is-visible");
      }

      // Attach to pause event
      $video.on("pause", function () {
        $video.removeClass("is-playing");
        $pauseplay
          .removeClass("pause")
          .addClass("play")
          .find("span")
          .text("Play");
        if (el_settings.fadeOnPause) {
          $video.removeClass("is-visible");
        }
      });

      // Set default styles
      $container.css({
        position: "relative",
        overflow: "hidden",
        "background-size": "cover",
        "background-position": "center center",
        "background-repeat": "no-repeat",
        "background-image": "url(" + poster + ")",
      });
      $video.css({
        "min-width": "auto",
        "min-height": "auto",
        width: "100%",
        height: "auto",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
      });
      if (el_settings.fullScreen) {
        $container.css({
          position: "fixed",
          top: "0",
          bottom: "0",
          left: "0",
          right: "0",
          height: "auto",
          margin: "0",
          "z-index": "-1",
        });
      }

      // Fade in video by setting the transition duration
      $video.css("transition-duration", el_settings.fadeIn + "ms");

      // Remove on iOS
      if (old_iOS) {
        // Unset sources to prevent them from continuing to download
        $video.attr("src", "");
        $video.find("source").attr("src", "");
        $video.remove();
      }

      // Mimic background-size: cover with video element
      $.fn.bgVideo.fitVideo($video);
      $(window).resize(function () {
        $.fn.bgVideo.fitVideo($video);
      });

      // Pause after X seconds
      el_settings.pauseAfter = parseInt(el_settings.pauseAfter, 10);
      if (el_settings.pauseAfter > 0) {
        $video.on("timeupdate", function () {
          var now = currentTime();
          if (now > start_time + el_settings.pauseAfter) {
            video.pause();
            if (el_settings.fadeOnEnd) {
              $video.removeClass("is-visible");
            }
          }
        });
      }

      // Play / pause button
      if (el_settings.showPausePlay && !old_iOS) {
        // Append pauseplay element created earlier
        $container.append($pauseplay);
        // Position element
        $pauseplay.css({
          left: "auto",
          right: "auto",
          top: "auto",
          bottom: "auto",
        });
        $pauseplay.css(el_settings.pausePlayXPos, el_settings.pausePlayXOffset);
        $pauseplay.css(el_settings.pausePlayYPos, el_settings.pausePlayYOffset);
        if (el_settings.pausePlayXPos === "center") {
          $pauseplay.css({
            left: "50%",
            "margin-left": "-10px",
          });
        }
        if (el_settings.pausePlayYPos === "center") {
          $pauseplay.css({
            top: "50%",
            "margin-top": "-10px",
          });
        }
        // Add functionality
        $pauseplay.on("click", function () {
          if (video.paused) {
            video.play();
            start_time = currentTime();
          } else {
            video.pause();
          }
        });
      }
    });
  };

  // Default settings
  $.fn.bgVideo.defaults = {
    fullScreen: false, // Sets the video to be fixed to the full window
    fadeIn: 500, // Milliseconds to fade video in/out (0 for no fade)
    pauseAfter: 120, // Seconds to play before pausing (0 for forever)
    fadeOnPause: false, // For all (including manual) pauses
    fadeOnEnd: true, // When we've reached the pauseAfter time
    showPausePlay: true, // Show pause/play button
    pausePlayXPos: "right", // left|right|center
    pausePlayYPos: "top", // top|bottom|center
    pausePlayXOffset: "15px", // pixels or percent from side - ignored if positioned center
    pausePlayYOffset: "15px", // pixels or percent from top/bottom - ignored if positioned center
  };

  // Fit video
  $.fn.bgVideo.fitVideo = function ($video) {
    var $container = $video.parent(),
      container_height = $container.outerHeight(),
      container_width = $container.outerWidth();

    // Do this again every time the screen size changes
    $video.css({
      height: "auto",
      width: container_width + "px",
    });

    var video_height = $video.height();

    if (container_height > video_height) {
      //console.log('Container height > video height');
      $video.css({
        height: container_height + "px",
        width: "auto",
      });
    }
  };

  // Auto run based on data attributes
  $(document).ready(function () {
    $("[data-bgvideo]").bgVideo();
  });
})(jQuery);
("use strict");
function _slicedToArray(t, a) {
  return (
    _arrayWithHoles(t) || _iterableToArrayLimit(t, a) || _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function _iterableToArrayLimit(t, a) {
  var n = [],
    e = !0,
    r = !1,
    o = void 0;
  try {
    for (
      var l, i = t[Symbol.iterator]();
      !(e = (l = i.next()).done) && (n.push(l.value), !a || n.length !== a);
      e = !0
    );
  } catch (t) {
    (r = !0), (o = t);
  } finally {
    try {
      e || null == i.return || i.return();
    } finally {
      if (r) throw o;
    }
  }
  return n;
}
function _arrayWithHoles(t) {
  if (Array.isArray(t)) return t;
}
!(function () {
  var lax = (function () {
    for (
      var lax = { elements: [] },
        lastY = 0,
        currentBreakpoint = "default",
        breakpointsSeparator = "_",
        transformFns = {
          "data-lax-opacity": function (t, a) {
            t.opacity = a;
          },
          "data-lax-translate": function (t, a) {
            t.transform += " translate(".concat(a, "px, ").concat(a, "px)");
          },
          "data-lax-translate-x": function (t, a) {
            t.transform += " translateX(".concat(a, "px)");
          },
          "data-lax-translate-y": function (t, a) {
            t.transform += " translateY(".concat(a, "px)");
          },
          "data-lax-scale": function (t, a) {
            t.transform += " scale(".concat(a, ")");
          },
          "data-lax-scale-x": function (t, a) {
            t.transform += " scaleX(".concat(a, ")");
          },
          "data-lax-scale-y": function (t, a) {
            t.transform += " scaleY(".concat(a, ")");
          },
          "data-lax-skew": function (t, a) {
            t.transform += " skew(".concat(a, "deg, ").concat(a, "deg)");
          },
          "data-lax-skew-x": function (t, a) {
            t.transform += " skewX(".concat(a, "deg)");
          },
          "data-lax-skew-y": function (t, a) {
            t.transform += " skewY(".concat(a, "deg)");
          },
          "data-lax-rotate": function (t, a) {
            t.transform += " rotate(".concat(a, "deg)");
          },
          "data-lax-rotate-x": function (t, a) {
            t.transform += " rotateX(".concat(a, "deg)");
          },
          "data-lax-rotate-y": function (t, a) {
            t.transform += " rotateY(".concat(a, "deg)");
          },
          "data-lax-brightness": function (t, a) {
            t.filter += " brightness(".concat(a, "%)");
          },
          "data-lax-contrast": function (t, a) {
            t.filter += " contrast(".concat(a, "%)");
          },
          "data-lax-hue-rotate": function (t, a) {
            t.filter += " hue-rotate(".concat(a, "deg)");
          },
          "data-lax-blur": function (t, a) {
            t.filter += " blur(".concat(a, "px)");
          },
          "data-lax-invert": function (t, a) {
            t.filter += "  invert(".concat(a, "%)");
          },
          "data-lax-saturate": function (t, a) {
            t.filter += "  saturate(".concat(a, "%)");
          },
          "data-lax-grayscale": function (t, a) {
            t.filter += "  grayscale(".concat(a, "%)");
          },
          "data-lax-bg-pos": function (t, a) {
            t.backgroundPosition = "".concat(a, "px ").concat(a, "px");
          },
          "data-lax-bg-pos-x": function (t, a) {
            t.backgroundPositionX = "".concat(a, "px");
          },
          "data-lax-bg-pos-y": function (t, a) {
            t.backgroundPositionY = "".concat(a, "px");
          },
        },
        _crazy = "",
        i = 0;
      i < 20;
      i++
    )
      _crazy += " " + 5 * i + " " + ((47 * i) % 360) + ", ";
    function intrp(t, a) {
      for (var n = 0; t[n][0] <= a && void 0 !== t[n + 1]; ) n += 1;
      var e = t[n][0],
        r = void 0 === t[n - 1] ? e : t[n - 1][0],
        o = t[n][1],
        l = void 0 === t[n - 1] ? o : t[n - 1][1];
      return Math.min(Math.max((a - r) / (e - r), 0), 1) * (o - l) + l;
    }
    function fnOrVal(s) {
      return "(" === s[0] ? eval(s) : parseFloat(s);
    }
    return (
      (lax.presets = {
        linger: function (t) {
          return { "data-lax-translate-y": "(vh*0.7) 0, 0 200, -500 0" };
        },
        lazy: function (t) {
          return {
            "data-lax-translate-y": "(vh) 0, (-elh) ".concat(
              0 < arguments.length && void 0 !== t ? t : 100
            ),
          };
        },
        eager: function (t) {
          return {
            "data-lax-translate-y": "(vh) 0, (-elh) -".concat(
              0 < arguments.length && void 0 !== t ? t : 100
            ),
          };
        },
        slalom: function (t) {
          var a = 0 < arguments.length && void 0 !== t ? t : 50;
          return {
            "data-lax-translate-x": "vh "
              .concat(a, ", (vh*0.8) ")
              .concat(-a, ", (vh*0.6) ")
              .concat(a, ", (vh*0.4) ")
              .concat(-a, ", (vh*0.2) ")
              .concat(a, ", (vh*0) ")
              .concat(-a, ", (-elh) ")
              .concat(a),
          };
        },
        crazy: function (t) {
          return { "data-lax-hue-rotate": "".concat(_crazy, " | loop=20") };
        },
        spin: function (t) {
          return {
            "data-lax-rotate": "(vh) 0, (-elh) ".concat(
              0 < arguments.length && void 0 !== t ? t : 360
            ),
          };
        },
        spinRev: function (t) {
          return {
            "data-lax-rotate": "(vh) 0, (-elh) ".concat(
              -(0 < arguments.length && void 0 !== t ? t : 360)
            ),
          };
        },
        spinIn: function (t) {
          return {
            "data-lax-rotate": "vh ".concat(
              0 < arguments.length && void 0 !== t ? t : 360,
              ", (vh*0.5) 0"
            ),
          };
        },
        spinOut: function (t) {
          return {
            "data-lax-rotate": "(vh*0.5) 0, -elh ".concat(
              0 < arguments.length && void 0 !== t ? t : 360
            ),
          };
        },
        blurInOut: function (t) {
          var a = 0 < arguments.length && void 0 !== t ? t : 40;
          return {
            "data-lax-blur": "(vh) "
              .concat(a, ", (vh*0.8) 0, (vh*0.2) 0, 0 ")
              .concat(a),
          };
        },
        blurIn: function (t) {
          return {
            "data-lax-blur": "(vh) ".concat(
              0 < arguments.length && void 0 !== t ? t : 40,
              ", (vh*0.7) 0"
            ),
          };
        },
        blurOut: function (t) {
          return {
            "data-lax-blur": "(vh*0.3) 0, 0 ".concat(
              0 < arguments.length && void 0 !== t ? t : 40
            ),
          };
        },
        fadeInOut: function () {
          return { "data-lax-opacity": "(vh) 0, (vh*0.8) 1, (vh*0.2) 1, 0 0" };
        },
        fadeIn: function () {
          return { "data-lax-opacity": "(vh) 0, (vh*0.7) 1" };
        },
        fadeOut: function () {
          return { "data-lax-opacity": "(vh*0.3) 1, 0 0" };
        },
        driftLeft: function (t) {
          var a = 0 < arguments.length && void 0 !== t ? t : 100;
          return {
            "data-lax-translate-x": "vh ".concat(a, ", -elh ").concat(-a),
          };
        },
        driftRight: function (t) {
          var a = 0 < arguments.length && void 0 !== t ? t : 100;
          return {
            "data-lax-translate-x": "vh ".concat(-a, ", -elh ").concat(a),
          };
        },
        leftToRight: function (t) {
          return {
            "data-lax-translate-x": "vh 0, -elh (vw*".concat(
              0 < arguments.length && void 0 !== t ? t : 1,
              ")"
            ),
          };
        },
        rightToLeft: function (t) {
          return {
            "data-lax-translate-x": "vh 0, -elh (vw*".concat(
              -(0 < arguments.length && void 0 !== t ? t : 1),
              ")"
            ),
          };
        },
        zoomInOut: function (t) {
          var a = 0 < arguments.length && void 0 !== t ? t : 0.2;
          return {
            "data-lax-scale": "(vh) "
              .concat(a, ", (vh*0.8) 1, (vh*0.2) 1, -elh ")
              .concat(a),
          };
        },
        zoomIn: function (t) {
          return {
            "data-lax-scale": "(vh) ".concat(
              0 < arguments.length && void 0 !== t ? t : 0.2,
              ", (vh*0.7) 1"
            ),
          };
        },
        zoomOut: function (t) {
          return {
            "data-lax-scale": "(vh*0.3) 1, -elh ".concat(
              0 < arguments.length && void 0 !== t ? t : 0.2
            ),
          };
        },
        speedy: function (t) {
          var a = 0 < arguments.length && void 0 !== t ? t : 30;
          return { "data-lax-skew-x": "(vh) ".concat(a, ", -elh ").concat(-a) };
        },
        swing: function (t) {
          var a = 0 < arguments.length && void 0 !== t ? t : 30;
          return { "data-lax-skew-y": "(vh) ".concat(a, ", -elh ").concat(-a) };
        },
      }),
      (lax.addPreset = function (t, a) {
        lax.presets[t] = a;
      }),
      (lax.setup = function () {
        var t =
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        (lax.breakpoints = t.breakpoints || {}),
          (lax.selector = t.selector || ".lax"),
          lax.populateElements();
      }),
      (lax.removeElement = function (a) {
        var t = lax.elements.findIndex(function (t) {
          return (t.el = a);
        });
        -1 < t && lax.elements.splice(t, 1);
      }),
      (lax.createLaxObject = function (t) {
        return {
          el: t,
          originalStyle: {
            transform: t.style.transform,
            filter: t.style.filter,
          },
          transforms: {},
        };
      }),
      (lax.calcTransforms = function (l) {
        for (var i = l.el, r = [], t = 0; t < i.attributes.length; t++) {
          var a = i.attributes[t];
          -1 < a.name.indexOf("data-lax-preset") && r.push(a);
        }
        for (
          var n = function (t) {
              var a = r[t],
                n = a.name.split(breakpointsSeparator),
                o = n[1] ? "".concat(breakpointsSeparator).concat(n[1]) : "";
              a.value.split(" ").forEach(function (t) {
                var a = t.split("-"),
                  n = lax.presets[a[0]];
                if (n) {
                  var e = n(a[1]);
                  for (var r in e) i.setAttribute("".concat(r).concat(o), e[r]);
                } else console.log("lax error: preset ".concat(a[0], " is not defined"));
              });
              var e = i.getAttribute("data-lax-anchor");
              (e && "" !== e) || i.setAttribute("data-lax-anchor", "self"),
                i.attributes.removeNamedItem(a.name);
            },
            e = 0;
          e < r.length;
          e++
        )
          n(e);
        if (
          (!(
            i.attributes["data-lax-use-gpu"] &&
            "false" === i.attributes["data-lax-use-gpu"].value
          ) &&
            ((i.style["backface-visibility"] = "hidden"),
            (i.style["-webkit-backface-visibility"] = "hidden")),
          i.attributes["data-lax-use-gpu"] &&
            i.attributes.removeNamedItem("data-lax-use-gpu"),
          (l.optimise = !1),
          i.attributes["data-lax-optimize"] &&
            "true" === i.attributes["data-lax-optimize"].value)
        ) {
          l.optimise = !0;
          var o = i.getBoundingClientRect();
          i.setAttribute(
            "data-lax-opacity",
            ""
              .concat(-o.height - 1, " 0, ")
              .concat(-o.height, " 1, ")
              .concat(window.innerHeight, " 1, ")
              .concat(window.innerHeight + 1, " 0")
          ),
            i.attributes.removeNamedItem("data-lax-optimize");
        }
        for (var c = 0; c < i.attributes.length; c++) {
          var s = i.attributes[c];
          if (!(s.name.indexOf("data-lax") < 0)) {
            var u = s.name.split(breakpointsSeparator),
              f = u[0].split("-"),
              d = u[1] || "default";
            if ("lax" === f[1])
              if ("data-lax-anchor" === s.name) {
                l["data-lax-anchor"] =
                  "self" === s.value ? i : document.querySelector(s.value);
                var x = l["data-lax-anchor"].getBoundingClientRect();
                l.anchorTop = Math.floor(x.top) + window.scrollY;
              } else
                !(function () {
                  var t = _slicedToArray(
                      s.value
                        .replace(/vw/g, window.innerWidth)
                        .replace(/vh/g, window.innerHeight)
                        .replace(/elh/g, i.clientHeight)
                        .replace(/elw/g, i.clientWidth)
                        .replace(/\s+/g, " ")
                        .split("|"),
                      2
                    ),
                    a = t[0],
                    n = t[1],
                    r = {};
                  n &&
                    n.split(" ").forEach(function (t) {
                      var a = _slicedToArray(t.split("="), 2),
                        n = a[0],
                        e = a[1];
                      r[n] = n && fnOrVal(e);
                    });
                  var e = u[0],
                    o = a
                      .split(",")
                      .map(function (t) {
                        return t.trim().split(" ").map(fnOrVal);
                      })
                      .sort(function (t, a) {
                        return t[0] - a[0];
                      });
                  l.transforms[e] || (l.transforms[e] = {}),
                    (l.transforms[e][d] = { valueMap: o, options: r });
                })();
          }
        }
        var v =
          i.attributes["data-lax-sprite-data"] &&
          i.attributes["data-lax-sprite-data"].value;
        if (v) {
          (l.spriteData = v.split(",").map(function (t) {
            return parseInt(t);
          })),
            (i.style.height = l.spriteData[1] + "px"),
            (i.style.width = l.spriteData[0] + "px");
          var p =
            i.attributes["data-lax-sprite-image"] &&
            i.attributes["data-lax-sprite-image"].value;
          p && (i.style.backgroundImage = "url(".concat(p, ")"));
        }
        return l;
      }),
      (lax.addElement = function (t) {
        var a = lax.calcTransforms(lax.createLaxObject(t));
        lax.elements.push(a), lax.updateElement(a);
      }),
      (lax.populateElements = function () {
        (lax.elements = []),
          document.querySelectorAll(lax.selector).forEach(lax.addElement),
          (currentBreakpoint = lax.getCurrentBreakPoint());
      }),
      (lax.updateElements = function () {
        lax.elements.forEach(function (t) {
          lax.calcTransforms(t), lax.updateElement(t);
        }),
          (currentBreakpoint = lax.getCurrentBreakPoint());
      }),
      (lax.getCurrentBreakPoint = function () {
        var t = "default",
          a = window.innerWidth;
        for (var n in lax.breakpoints) {
          if (!(parseFloat(lax.breakpoints[n]) <= a)) break;
          t = n;
        }
        return t;
      }),
      (lax.updateElement = function (t) {
        var a = t.originalStyle,
          n = t.anchorTop,
          e = t.transforms,
          r = t.spriteData,
          o = t.el,
          l = n ? n - lastY : lastY,
          i = { transform: a.transform, filter: a.filter };
        for (var c in e) {
          var s = e[c][currentBreakpoint] || e[c].default;
          if (s) {
            var u = l;
            s.options.offset && (u += s.options.offset),
              s.options.speed && (u *= s.options.speed),
              s.options.loop && (u %= s.options.loop);
            var f = transformFns[c],
              d = intrp(s.valueMap, u);
            f && f(i, d);
          }
        }
        if (r) {
          var x = _slicedToArray(r, 5),
            v = x[0],
            p = x[1],
            h = x[2],
            m = x[3],
            g = x[4],
            b = Math.floor(lastY / g) % h,
            y = b % m,
            k = Math.floor(b / m);
          i.backgroundPosition = "-".concat(y * v, "px -").concat(k * p, "px");
        }
        if (0 === i.opacity) o.style.opacity = 0;
        else for (var w in i) o.style[w] = i[w];
      }),
      (lax.update = function (t) {
        lastY !== t && ((lastY = t), lax.elements.forEach(lax.updateElement));
      }),
      lax
    );
  })();
  "undefined" != typeof module && void 0 !== module.exports
    ? (module.exports = lax)
    : (window.lax = lax);
})();
/*!
 * Flickity PACKAGED v2.2.0
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2018 Metafizzy
 */

!(function (e, i) {
  "function" == typeof define && define.amd
    ? define("jquery-bridget/jquery-bridget", ["jquery"], function (t) {
        return i(e, t);
      })
    : "object" == typeof module && module.exports
    ? (module.exports = i(e, require("jquery")))
    : (e.jQueryBridget = i(e, e.jQuery));
})(window, function (t, e) {
  "use strict";
  var d = Array.prototype.slice,
    i = t.console,
    u =
      void 0 === i
        ? function () {}
        : function (t) {
            i.error(t);
          };
  function n(h, s, c) {
    (c = c || e || t.jQuery) &&
      (s.prototype.option ||
        (s.prototype.option = function (t) {
          c.isPlainObject(t) && (this.options = c.extend(!0, this.options, t));
        }),
      (c.fn[h] = function (t) {
        if ("string" != typeof t)
          return (
            (n = t),
            this.each(function (t, e) {
              var i = c.data(e, h);
              i
                ? (i.option(n), i._init())
                : ((i = new s(e, n)), c.data(e, h, i));
            }),
            this
          );
        var e,
          o,
          r,
          a,
          l,
          n,
          i = d.call(arguments, 1);
        return (
          (r = i),
          (l = "$()." + h + '("' + (o = t) + '")'),
          (e = this).each(function (t, e) {
            var i = c.data(e, h);
            if (i) {
              var n = i[o];
              if (n && "_" != o.charAt(0)) {
                var s = n.apply(i, r);
                a = void 0 === a ? s : a;
              } else u(l + " is not a valid method");
            } else u(h + " not initialized. Cannot call methods, i.e. " + l);
          }),
          void 0 !== a ? a : e
        );
      }),
      o(c));
  }
  function o(t) {
    !t || (t && t.bridget) || (t.bridget = n);
  }
  return o(e || t.jQuery), n;
}),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.EvEmitter = e());
  })("undefined" != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function (t, e) {
        if (t && e) {
          var i = (this._events = this._events || {}),
            n = (i[t] = i[t] || []);
          return -1 == n.indexOf(e) && n.push(e), this;
        }
      }),
      (e.once = function (t, e) {
        if (t && e) {
          this.on(t, e);
          var i = (this._onceEvents = this._onceEvents || {});
          return ((i[t] = i[t] || {})[e] = !0), this;
        }
      }),
      (e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var n = i.indexOf(e);
          return -1 != n && i.splice(n, 1), this;
        }
      }),
      (e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          (i = i.slice(0)), (e = e || []);
          for (
            var n = this._onceEvents && this._onceEvents[t], s = 0;
            s < i.length;
            s++
          ) {
            var o = i[s];
            n && n[o] && (this.off(t, o), delete n[o]), o.apply(this, e);
          }
          return this;
        }
      }),
      (e.allOff = function () {
        delete this._events, delete this._onceEvents;
      }),
      t
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("get-size/get-size", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.getSize = e());
  })(window, function () {
    "use strict";
    function m(t) {
      var e = parseFloat(t);
      return -1 == t.indexOf("%") && !isNaN(e) && e;
    }
    var i =
        "undefined" == typeof console
          ? function () {}
          : function (t) {
              console.error(t);
            },
      y = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ],
      b = y.length;
    function E(t) {
      var e = getComputedStyle(t);
      return (
        e ||
          i(
            "Style returned " +
              e +
              ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
          ),
        e
      );
    }
    var S,
      C = !1;
    function x(t) {
      if (
        ((function () {
          if (!C) {
            C = !0;
            var t = document.createElement("div");
            (t.style.width = "200px"),
              (t.style.padding = "1px 2px 3px 4px"),
              (t.style.borderStyle = "solid"),
              (t.style.borderWidth = "1px 2px 3px 4px"),
              (t.style.boxSizing = "border-box");
            var e = document.body || document.documentElement;
            e.appendChild(t);
            var i = E(t);
            (S = 200 == Math.round(m(i.width))),
              (x.isBoxSizeOuter = S),
              e.removeChild(t);
          }
        })(),
        "string" == typeof t && (t = document.querySelector(t)),
        t && "object" == typeof t && t.nodeType)
      ) {
        var e = E(t);
        if ("none" == e.display)
          return (function () {
            for (
              var t = {
                  width: 0,
                  height: 0,
                  innerWidth: 0,
                  innerHeight: 0,
                  outerWidth: 0,
                  outerHeight: 0,
                },
                e = 0;
              e < b;
              e++
            )
              t[y[e]] = 0;
            return t;
          })();
        var i = {};
        (i.width = t.offsetWidth), (i.height = t.offsetHeight);
        for (
          var n = (i.isBorderBox = "border-box" == e.boxSizing), s = 0;
          s < b;
          s++
        ) {
          var o = y[s],
            r = e[o],
            a = parseFloat(r);
          i[o] = isNaN(a) ? 0 : a;
        }
        var l = i.paddingLeft + i.paddingRight,
          h = i.paddingTop + i.paddingBottom,
          c = i.marginLeft + i.marginRight,
          d = i.marginTop + i.marginBottom,
          u = i.borderLeftWidth + i.borderRightWidth,
          f = i.borderTopWidth + i.borderBottomWidth,
          p = n && S,
          g = m(e.width);
        !1 !== g && (i.width = g + (p ? 0 : l + u));
        var v = m(e.height);
        return (
          !1 !== v && (i.height = v + (p ? 0 : h + f)),
          (i.innerWidth = i.width - (l + u)),
          (i.innerHeight = i.height - (h + f)),
          (i.outerWidth = i.width + c),
          (i.outerHeight = i.height + d),
          i
        );
      }
    }
    return x;
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("desandro-matches-selector/matches-selector", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.matchesSelector = e());
  })(window, function () {
    "use strict";
    var i = (function () {
      var t = window.Element.prototype;
      if (t.matches) return "matches";
      if (t.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
        var n = e[i] + "MatchesSelector";
        if (t[n]) return n;
      }
    })();
    return function (t, e) {
      return t[i](e);
    };
  }),
  (function (e, i) {
    "function" == typeof define && define.amd
      ? define("fizzy-ui-utils/utils", [
          "desandro-matches-selector/matches-selector",
        ], function (t) {
          return i(e, t);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = i(e, require("desandro-matches-selector")))
      : (e.fizzyUIUtils = i(e, e.matchesSelector));
  })(window, function (h, o) {
    var c = {
        extend: function (t, e) {
          for (var i in e) t[i] = e[i];
          return t;
        },
        modulo: function (t, e) {
          return ((t % e) + e) % e;
        },
      },
      e = Array.prototype.slice;
    (c.makeArray = function (t) {
      return Array.isArray(t)
        ? t
        : null == t
        ? []
        : "object" == typeof t && "number" == typeof t.length
        ? e.call(t)
        : [t];
    }),
      (c.removeFrom = function (t, e) {
        var i = t.indexOf(e);
        -1 != i && t.splice(i, 1);
      }),
      (c.getParent = function (t, e) {
        for (; t.parentNode && t != document.body; )
          if (((t = t.parentNode), o(t, e))) return t;
      }),
      (c.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t;
      }),
      (c.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (c.filterFindElements = function (t, n) {
        t = c.makeArray(t);
        var s = [];
        return (
          t.forEach(function (t) {
            if (t instanceof HTMLElement)
              if (n) {
                o(t, n) && s.push(t);
                for (var e = t.querySelectorAll(n), i = 0; i < e.length; i++)
                  s.push(e[i]);
              } else s.push(t);
          }),
          s
        );
      }),
      (c.debounceMethod = function (t, e, n) {
        n = n || 100;
        var s = t.prototype[e],
          o = e + "Timeout";
        t.prototype[e] = function () {
          var t = this[o];
          clearTimeout(t);
          var e = arguments,
            i = this;
          this[o] = setTimeout(function () {
            s.apply(i, e), delete i[o];
          }, n);
        };
      }),
      (c.docReady = function (t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e
          ? setTimeout(t)
          : document.addEventListener("DOMContentLoaded", t);
      }),
      (c.toDashed = function (t) {
        return t
          .replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i;
          })
          .toLowerCase();
      });
    var d = h.console;
    return (
      (c.htmlInit = function (a, l) {
        c.docReady(function () {
          var t = c.toDashed(l),
            s = "data-" + t,
            e = document.querySelectorAll("[" + s + "]"),
            i = document.querySelectorAll(".js-" + t),
            n = c.makeArray(e).concat(c.makeArray(i)),
            o = s + "-options",
            r = h.jQuery;
          n.forEach(function (e) {
            var t,
              i = e.getAttribute(s) || e.getAttribute(o);
            try {
              t = i && JSON.parse(i);
            } catch (t) {
              return void (
                d &&
                d.error("Error parsing " + s + " on " + e.className + ": " + t)
              );
            }
            var n = new a(e, t);
            r && r.data(e, l, n);
          });
        });
      }),
      c
    );
  }),
  (function (e, i) {
    "function" == typeof define && define.amd
      ? define("flickity/js/cell", ["get-size/get-size"], function (t) {
          return i(e, t);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = i(e, require("get-size")))
      : ((e.Flickity = e.Flickity || {}), (e.Flickity.Cell = i(e, e.getSize)));
  })(window, function (t, e) {
    function i(t, e) {
      (this.element = t), (this.parent = e), this.create();
    }
    var n = i.prototype;
    return (
      (n.create = function () {
        (this.element.style.position = "absolute"),
          this.element.setAttribute("aria-hidden", "true"),
          (this.x = 0),
          (this.shift = 0);
      }),
      (n.destroy = function () {
        this.unselect(), (this.element.style.position = "");
        var t = this.parent.originSide;
        this.element.style[t] = "";
      }),
      (n.getSize = function () {
        this.size = e(this.element);
      }),
      (n.setPosition = function (t) {
        (this.x = t), this.updateTarget(), this.renderPosition(t);
      }),
      (n.updateTarget = n.setDefaultTarget = function () {
        var t = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
        this.target =
          this.x + this.size[t] + this.size.width * this.parent.cellAlign;
      }),
      (n.renderPosition = function (t) {
        var e = this.parent.originSide;
        this.element.style[e] = this.parent.getPositionValue(t);
      }),
      (n.select = function () {
        this.element.classList.add("is-selected"),
          this.element.removeAttribute("aria-hidden");
      }),
      (n.unselect = function () {
        this.element.classList.remove("is-selected"),
          this.element.setAttribute("aria-hidden", "true");
      }),
      (n.wrapShift = function (t) {
        (this.shift = t),
          this.renderPosition(this.x + this.parent.slideableWidth * t);
      }),
      (n.remove = function () {
        this.element.parentNode.removeChild(this.element);
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("flickity/js/slide", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : ((t.Flickity = t.Flickity || {}), (t.Flickity.Slide = e()));
  })(window, function () {
    "use strict";
    function t(t) {
      (this.parent = t),
        (this.isOriginLeft = "left" == t.originSide),
        (this.cells = []),
        (this.outerWidth = 0),
        (this.height = 0);
    }
    var e = t.prototype;
    return (
      (e.addCell = function (t) {
        if (
          (this.cells.push(t),
          (this.outerWidth += t.size.outerWidth),
          (this.height = Math.max(t.size.outerHeight, this.height)),
          1 == this.cells.length)
        ) {
          this.x = t.x;
          var e = this.isOriginLeft ? "marginLeft" : "marginRight";
          this.firstMargin = t.size[e];
        }
      }),
      (e.updateTarget = function () {
        var t = this.isOriginLeft ? "marginRight" : "marginLeft",
          e = this.getLastCell(),
          i = e ? e.size[t] : 0,
          n = this.outerWidth - (this.firstMargin + i);
        this.target = this.x + this.firstMargin + n * this.parent.cellAlign;
      }),
      (e.getLastCell = function () {
        return this.cells[this.cells.length - 1];
      }),
      (e.select = function () {
        this.cells.forEach(function (t) {
          t.select();
        });
      }),
      (e.unselect = function () {
        this.cells.forEach(function (t) {
          t.unselect();
        });
      }),
      (e.getCellElements = function () {
        return this.cells.map(function (t) {
          return t.element;
        });
      }),
      t
    );
  }),
  (function (e, i) {
    "function" == typeof define && define.amd
      ? define("flickity/js/animate", ["fizzy-ui-utils/utils"], function (t) {
          return i(e, t);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = i(e, require("fizzy-ui-utils")))
      : ((e.Flickity = e.Flickity || {}),
        (e.Flickity.animatePrototype = i(e, e.fizzyUIUtils)));
  })(window, function (t, e) {
    var i = {
      startAnimation: function () {
        this.isAnimating ||
          ((this.isAnimating = !0), (this.restingFrames = 0), this.animate());
      },
      animate: function () {
        this.applyDragForce(), this.applySelectedAttraction();
        var t = this.x;
        if (
          (this.integratePhysics(),
          this.positionSlider(),
          this.settle(t),
          this.isAnimating)
        ) {
          var e = this;
          requestAnimationFrame(function () {
            e.animate();
          });
        }
      },
      positionSlider: function () {
        var t = this.x;
        this.options.wrapAround &&
          1 < this.cells.length &&
          ((t = e.modulo(t, this.slideableWidth)),
          (t -= this.slideableWidth),
          this.shiftWrapCells(t)),
          this.setTranslateX(t, this.isAnimating),
          this.dispatchScrollEvent();
      },
      setTranslateX: function (t, e) {
        (t += this.cursorPosition), (t = this.options.rightToLeft ? -t : t);
        var i = this.getPositionValue(t);
        this.slider.style.transform = e
          ? "translate3d(" + i + ",0,0)"
          : "translateX(" + i + ")";
      },
      dispatchScrollEvent: function () {
        var t = this.slides[0];
        if (t) {
          var e = -this.x - t.target,
            i = e / this.slidesWidth;
          this.dispatchEvent("scroll", null, [i, e]);
        }
      },
      positionSliderAtSelected: function () {
        this.cells.length &&
          ((this.x = -this.selectedSlide.target),
          (this.velocity = 0),
          this.positionSlider());
      },
      getPositionValue: function (t) {
        return this.options.percentPosition
          ? 0.01 * Math.round((t / this.size.innerWidth) * 1e4) + "%"
          : Math.round(t) + "px";
      },
      settle: function (t) {
        this.isPointerDown ||
          Math.round(100 * this.x) != Math.round(100 * t) ||
          this.restingFrames++,
          2 < this.restingFrames &&
            ((this.isAnimating = !1),
            delete this.isFreeScrolling,
            this.positionSlider(),
            this.dispatchEvent("settle", null, [this.selectedIndex]));
      },
      shiftWrapCells: function (t) {
        var e = this.cursorPosition + t;
        this._shiftCells(this.beforeShiftCells, e, -1);
        var i =
          this.size.innerWidth -
          (t + this.slideableWidth + this.cursorPosition);
        this._shiftCells(this.afterShiftCells, i, 1);
      },
      _shiftCells: function (t, e, i) {
        for (var n = 0; n < t.length; n++) {
          var s = t[n],
            o = 0 < e ? i : 0;
          s.wrapShift(o), (e -= s.size.outerWidth);
        }
      },
      _unshiftCells: function (t) {
        if (t && t.length) for (var e = 0; e < t.length; e++) t[e].wrapShift(0);
      },
      integratePhysics: function () {
        (this.x += this.velocity), (this.velocity *= this.getFrictionFactor());
      },
      applyForce: function (t) {
        this.velocity += t;
      },
      getFrictionFactor: function () {
        return (
          1 -
          this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
        );
      },
      getRestingPosition: function () {
        return this.x + this.velocity / (1 - this.getFrictionFactor());
      },
      applyDragForce: function () {
        if (this.isDraggable && this.isPointerDown) {
          var t = this.dragX - this.x - this.velocity;
          this.applyForce(t);
        }
      },
      applySelectedAttraction: function () {
        if (
          !(this.isDraggable && this.isPointerDown) &&
          !this.isFreeScrolling &&
          this.slides.length
        ) {
          var t =
            (-1 * this.selectedSlide.target - this.x) *
            this.options.selectedAttraction;
          this.applyForce(t);
        }
      },
    };
    return i;
  }),
  (function (r, a) {
    if ("function" == typeof define && define.amd)
      define("flickity/js/flickity", [
        "ev-emitter/ev-emitter",
        "get-size/get-size",
        "fizzy-ui-utils/utils",
        "./cell",
        "./slide",
        "./animate",
      ], function (t, e, i, n, s, o) {
        return a(r, t, e, i, n, s, o);
      });
    else if ("object" == typeof module && module.exports)
      module.exports = a(
        r,
        require("ev-emitter"),
        require("get-size"),
        require("fizzy-ui-utils"),
        require("./cell"),
        require("./slide"),
        require("./animate")
      );
    else {
      var t = r.Flickity;
      r.Flickity = a(
        r,
        r.EvEmitter,
        r.getSize,
        r.fizzyUIUtils,
        t.Cell,
        t.Slide,
        t.animatePrototype
      );
    }
  })(window, function (n, t, e, a, i, r, s) {
    var l = n.jQuery,
      o = n.getComputedStyle,
      h = n.console;
    function c(t, e) {
      for (t = a.makeArray(t); t.length; ) e.appendChild(t.shift());
    }
    var d = 0,
      u = {};
    function f(t, e) {
      var i = a.getQueryElement(t);
      if (i) {
        if (((this.element = i), this.element.flickityGUID)) {
          var n = u[this.element.flickityGUID];
          return n.option(e), n;
        }
        l && (this.$element = l(this.element)),
          (this.options = a.extend({}, this.constructor.defaults)),
          this.option(e),
          this._create();
      } else h && h.error("Bad element for Flickity: " + (i || t));
    }
    (f.defaults = {
      accessibility: !0,
      cellAlign: "center",
      freeScrollFriction: 0.075,
      friction: 0.28,
      namespaceJQueryEvents: !0,
      percentPosition: !0,
      resize: !0,
      selectedAttraction: 0.025,
      setGallerySize: !0,
    }),
      (f.createMethods = []);
    var p = f.prototype;
    a.extend(p, t.prototype),
      (p._create = function () {
        var t = (this.guid = ++d);
        for (var e in ((this.element.flickityGUID = t),
        ((u[t] = this).selectedIndex = 0),
        (this.restingFrames = 0),
        (this.x = 0),
        (this.velocity = 0),
        (this.originSide = this.options.rightToLeft ? "right" : "left"),
        (this.viewport = document.createElement("div")),
        (this.viewport.className = "flickity-viewport"),
        this._createSlider(),
        (this.options.resize || this.options.watchCSS) &&
          n.addEventListener("resize", this),
        this.options.on)) {
          var i = this.options.on[e];
          this.on(e, i);
        }
        f.createMethods.forEach(function (t) {
          this[t]();
        }, this),
          this.options.watchCSS ? this.watchCSS() : this.activate();
      }),
      (p.option = function (t) {
        a.extend(this.options, t);
      }),
      (p.activate = function () {
        this.isActive ||
          ((this.isActive = !0),
          this.element.classList.add("flickity-enabled"),
          this.options.rightToLeft &&
            this.element.classList.add("flickity-rtl"),
          this.getSize(),
          c(this._filterFindCellElements(this.element.children), this.slider),
          this.viewport.appendChild(this.slider),
          this.element.appendChild(this.viewport),
          this.reloadCells(),
          this.options.accessibility &&
            ((this.element.tabIndex = 0),
            this.element.addEventListener("keydown", this)),
          this.emitEvent("activate"),
          this.selectInitialIndex(),
          (this.isInitActivated = !0),
          this.dispatchEvent("ready"));
      }),
      (p._createSlider = function () {
        var t = document.createElement("div");
        (t.className = "flickity-slider"),
          (t.style[this.originSide] = 0),
          (this.slider = t);
      }),
      (p._filterFindCellElements = function (t) {
        return a.filterFindElements(t, this.options.cellSelector);
      }),
      (p.reloadCells = function () {
        (this.cells = this._makeCells(this.slider.children)),
          this.positionCells(),
          this._getWrapShiftCells(),
          this.setGallerySize();
      }),
      (p._makeCells = function (t) {
        return this._filterFindCellElements(t).map(function (t) {
          return new i(t, this);
        }, this);
      }),
      (p.getLastCell = function () {
        return this.cells[this.cells.length - 1];
      }),
      (p.getLastSlide = function () {
        return this.slides[this.slides.length - 1];
      }),
      (p.positionCells = function () {
        this._sizeCells(this.cells), this._positionCells(0);
      }),
      (p._positionCells = function (t) {
        (t = t || 0), (this.maxCellHeight = (t && this.maxCellHeight) || 0);
        var e = 0;
        if (0 < t) {
          var i = this.cells[t - 1];
          e = i.x + i.size.outerWidth;
        }
        for (var n = this.cells.length, s = t; s < n; s++) {
          var o = this.cells[s];
          o.setPosition(e),
            (e += o.size.outerWidth),
            (this.maxCellHeight = Math.max(
              o.size.outerHeight,
              this.maxCellHeight
            ));
        }
        (this.slideableWidth = e),
          this.updateSlides(),
          this._containSlides(),
          (this.slidesWidth = n
            ? this.getLastSlide().target - this.slides[0].target
            : 0);
      }),
      (p._sizeCells = function (t) {
        t.forEach(function (t) {
          t.getSize();
        });
      }),
      (p.updateSlides = function () {
        if (((this.slides = []), this.cells.length)) {
          var n = new r(this);
          this.slides.push(n);
          var s = "left" == this.originSide ? "marginRight" : "marginLeft",
            o = this._getCanCellFit();
          this.cells.forEach(function (t, e) {
            if (n.cells.length) {
              var i =
                n.outerWidth - n.firstMargin + (t.size.outerWidth - t.size[s]);
              o.call(this, e, i) ||
                (n.updateTarget(), (n = new r(this)), this.slides.push(n)),
                n.addCell(t);
            } else n.addCell(t);
          }, this),
            n.updateTarget(),
            this.updateSelectedSlide();
        }
      }),
      (p._getCanCellFit = function () {
        var t = this.options.groupCells;
        if (!t)
          return function () {
            return !1;
          };
        if ("number" == typeof t) {
          var e = parseInt(t, 10);
          return function (t) {
            return t % e != 0;
          };
        }
        var i = "string" == typeof t && t.match(/^(\d+)%$/),
          n = i ? parseInt(i[1], 10) / 100 : 1;
        return function (t, e) {
          return e <= (this.size.innerWidth + 1) * n;
        };
      }),
      (p._init = p.reposition = function () {
        this.positionCells(), this.positionSliderAtSelected();
      }),
      (p.getSize = function () {
        (this.size = e(this.element)),
          this.setCellAlign(),
          (this.cursorPosition = this.size.innerWidth * this.cellAlign);
      });
    var g = {
      center: { left: 0.5, right: 0.5 },
      left: { left: 0, right: 1 },
      right: { right: 0, left: 1 },
    };
    return (
      (p.setCellAlign = function () {
        var t = g[this.options.cellAlign];
        this.cellAlign = t ? t[this.originSide] : this.options.cellAlign;
      }),
      (p.setGallerySize = function () {
        if (this.options.setGallerySize) {
          var t =
            this.options.adaptiveHeight && this.selectedSlide
              ? this.selectedSlide.height
              : this.maxCellHeight;
          this.viewport.style.height = t + "px";
        }
      }),
      (p._getWrapShiftCells = function () {
        if (this.options.wrapAround) {
          this._unshiftCells(this.beforeShiftCells),
            this._unshiftCells(this.afterShiftCells);
          var t = this.cursorPosition,
            e = this.cells.length - 1;
          (this.beforeShiftCells = this._getGapCells(t, e, -1)),
            (t = this.size.innerWidth - this.cursorPosition),
            (this.afterShiftCells = this._getGapCells(t, 0, 1));
        }
      }),
      (p._getGapCells = function (t, e, i) {
        for (var n = []; 0 < t; ) {
          var s = this.cells[e];
          if (!s) break;
          n.push(s), (e += i), (t -= s.size.outerWidth);
        }
        return n;
      }),
      (p._containSlides = function () {
        if (
          this.options.contain &&
          !this.options.wrapAround &&
          this.cells.length
        ) {
          var t = this.options.rightToLeft,
            e = t ? "marginRight" : "marginLeft",
            i = t ? "marginLeft" : "marginRight",
            n = this.slideableWidth - this.getLastCell().size[i],
            s = n < this.size.innerWidth,
            o = this.cursorPosition + this.cells[0].size[e],
            r = n - this.size.innerWidth * (1 - this.cellAlign);
          this.slides.forEach(function (t) {
            t.target = s
              ? n * this.cellAlign
              : ((t.target = Math.max(t.target, o)), Math.min(t.target, r));
          }, this);
        }
      }),
      (p.dispatchEvent = function (t, e, i) {
        var n = e ? [e].concat(i) : i;
        if ((this.emitEvent(t, n), l && this.$element)) {
          var s = (t += this.options.namespaceJQueryEvents ? ".flickity" : "");
          if (e) {
            var o = l.Event(e);
            (o.type = t), (s = o);
          }
          this.$element.trigger(s, i);
        }
      }),
      (p.select = function (t, e, i) {
        if (
          this.isActive &&
          ((t = parseInt(t, 10)),
          this._wrapSelect(t),
          (this.options.wrapAround || e) &&
            (t = a.modulo(t, this.slides.length)),
          this.slides[t])
        ) {
          var n = this.selectedIndex;
          (this.selectedIndex = t),
            this.updateSelectedSlide(),
            i ? this.positionSliderAtSelected() : this.startAnimation(),
            this.options.adaptiveHeight && this.setGallerySize(),
            this.dispatchEvent("select", null, [t]),
            t != n && this.dispatchEvent("change", null, [t]),
            this.dispatchEvent("cellSelect");
        }
      }),
      (p._wrapSelect = function (t) {
        var e = this.slides.length;
        if (!(this.options.wrapAround && 1 < e)) return t;
        var i = a.modulo(t, e),
          n = Math.abs(i - this.selectedIndex),
          s = Math.abs(i + e - this.selectedIndex),
          o = Math.abs(i - e - this.selectedIndex);
        !this.isDragSelect && s < n
          ? (t += e)
          : !this.isDragSelect && o < n && (t -= e),
          t < 0
            ? (this.x -= this.slideableWidth)
            : e <= t && (this.x += this.slideableWidth);
      }),
      (p.previous = function (t, e) {
        this.select(this.selectedIndex - 1, t, e);
      }),
      (p.next = function (t, e) {
        this.select(this.selectedIndex + 1, t, e);
      }),
      (p.updateSelectedSlide = function () {
        var t = this.slides[this.selectedIndex];
        t &&
          (this.unselectSelectedSlide(),
          (this.selectedSlide = t).select(),
          (this.selectedCells = t.cells),
          (this.selectedElements = t.getCellElements()),
          (this.selectedCell = t.cells[0]),
          (this.selectedElement = this.selectedElements[0]));
      }),
      (p.unselectSelectedSlide = function () {
        this.selectedSlide && this.selectedSlide.unselect();
      }),
      (p.selectInitialIndex = function () {
        var t = this.options.initialIndex;
        if (this.isInitActivated) this.select(this.selectedIndex, !1, !0);
        else {
          if (t && "string" == typeof t)
            if (this.queryCell(t)) return void this.selectCell(t, !1, !0);
          var e = 0;
          t && this.slides[t] && (e = t), this.select(e, !1, !0);
        }
      }),
      (p.selectCell = function (t, e, i) {
        var n = this.queryCell(t);
        if (n) {
          var s = this.getCellSlideIndex(n);
          this.select(s, e, i);
        }
      }),
      (p.getCellSlideIndex = function (t) {
        for (var e = 0; e < this.slides.length; e++) {
          if (-1 != this.slides[e].cells.indexOf(t)) return e;
        }
      }),
      (p.getCell = function (t) {
        for (var e = 0; e < this.cells.length; e++) {
          var i = this.cells[e];
          if (i.element == t) return i;
        }
      }),
      (p.getCells = function (t) {
        t = a.makeArray(t);
        var i = [];
        return (
          t.forEach(function (t) {
            var e = this.getCell(t);
            e && i.push(e);
          }, this),
          i
        );
      }),
      (p.getCellElements = function () {
        return this.cells.map(function (t) {
          return t.element;
        });
      }),
      (p.getParentCell = function (t) {
        var e = this.getCell(t);
        return (
          e || ((t = a.getParent(t, ".flickity-slider > *")), this.getCell(t))
        );
      }),
      (p.getAdjacentCellElements = function (t, e) {
        if (!t) return this.selectedSlide.getCellElements();
        e = void 0 === e ? this.selectedIndex : e;
        var i = this.slides.length;
        if (i <= 1 + 2 * t) return this.getCellElements();
        for (var n = [], s = e - t; s <= e + t; s++) {
          var o = this.options.wrapAround ? a.modulo(s, i) : s,
            r = this.slides[o];
          r && (n = n.concat(r.getCellElements()));
        }
        return n;
      }),
      (p.queryCell = function (t) {
        if ("number" == typeof t) return this.cells[t];
        if ("string" == typeof t) {
          if (t.match(/^[#\.]?[\d\/]/)) return;
          t = this.element.querySelector(t);
        }
        return this.getCell(t);
      }),
      (p.uiChange = function () {
        this.emitEvent("uiChange");
      }),
      (p.childUIPointerDown = function (t) {
        "touchstart" != t.type && t.preventDefault(), this.focus();
      }),
      (p.onresize = function () {
        this.watchCSS(), this.resize();
      }),
      a.debounceMethod(f, "onresize", 150),
      (p.resize = function () {
        if (this.isActive) {
          this.getSize(),
            this.options.wrapAround &&
              (this.x = a.modulo(this.x, this.slideableWidth)),
            this.positionCells(),
            this._getWrapShiftCells(),
            this.setGallerySize(),
            this.emitEvent("resize");
          var t = this.selectedElements && this.selectedElements[0];
          this.selectCell(t, !1, !0);
        }
      }),
      (p.watchCSS = function () {
        this.options.watchCSS &&
          (-1 != o(this.element, ":after").content.indexOf("flickity")
            ? this.activate()
            : this.deactivate());
      }),
      (p.onkeydown = function (t) {
        var e =
          document.activeElement && document.activeElement != this.element;
        if (this.options.accessibility && !e) {
          var i = f.keyboardHandlers[t.keyCode];
          i && i.call(this);
        }
      }),
      (f.keyboardHandlers = {
        37: function () {
          var t = this.options.rightToLeft ? "next" : "previous";
          this.uiChange(), this[t]();
        },
        39: function () {
          var t = this.options.rightToLeft ? "previous" : "next";
          this.uiChange(), this[t]();
        },
      }),
      (p.focus = function () {
        var t = n.pageYOffset;
        this.element.focus({ preventScroll: !0 }),
          n.pageYOffset != t && n.scrollTo(n.pageXOffset, t);
      }),
      (p.deactivate = function () {
        this.isActive &&
          (this.element.classList.remove("flickity-enabled"),
          this.element.classList.remove("flickity-rtl"),
          this.unselectSelectedSlide(),
          this.cells.forEach(function (t) {
            t.destroy();
          }),
          this.element.removeChild(this.viewport),
          c(this.slider.children, this.element),
          this.options.accessibility &&
            (this.element.removeAttribute("tabIndex"),
            this.element.removeEventListener("keydown", this)),
          (this.isActive = !1),
          this.emitEvent("deactivate"));
      }),
      (p.destroy = function () {
        this.deactivate(),
          n.removeEventListener("resize", this),
          this.allOff(),
          this.emitEvent("destroy"),
          l && this.$element && l.removeData(this.element, "flickity"),
          delete this.element.flickityGUID,
          delete u[this.guid];
      }),
      a.extend(p, s),
      (f.data = function (t) {
        var e = (t = a.getQueryElement(t)) && t.flickityGUID;
        return e && u[e];
      }),
      a.htmlInit(f, "flickity"),
      l && l.bridget && l.bridget("flickity", f),
      (f.setJQuery = function (t) {
        l = t;
      }),
      (f.Cell = i),
      (f.Slide = r),
      f
    );
  }),
  (function (e, i) {
    "function" == typeof define && define.amd
      ? define("unipointer/unipointer", ["ev-emitter/ev-emitter"], function (
          t
        ) {
          return i(e, t);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = i(e, require("ev-emitter")))
      : (e.Unipointer = i(e, e.EvEmitter));
  })(window, function (s, t) {
    function e() {}
    var i = (e.prototype = Object.create(t.prototype));
    (i.bindStartEvent = function (t) {
      this._bindStartEvent(t, !0);
    }),
      (i.unbindStartEvent = function (t) {
        this._bindStartEvent(t, !1);
      }),
      (i._bindStartEvent = function (t, e) {
        var i = (e = void 0 === e || e)
            ? "addEventListener"
            : "removeEventListener",
          n = "mousedown";
        s.PointerEvent
          ? (n = "pointerdown")
          : "ontouchstart" in s && (n = "touchstart"),
          t[i](n, this);
      }),
      (i.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (i.getTouch = function (t) {
        for (var e = 0; e < t.length; e++) {
          var i = t[e];
          if (i.identifier == this.pointerIdentifier) return i;
        }
      }),
      (i.onmousedown = function (t) {
        var e = t.button;
        (e && 0 !== e && 1 !== e) || this._pointerDown(t, t);
      }),
      (i.ontouchstart = function (t) {
        this._pointerDown(t, t.changedTouches[0]);
      }),
      (i.onpointerdown = function (t) {
        this._pointerDown(t, t);
      }),
      (i._pointerDown = function (t, e) {
        t.button ||
          this.isPointerDown ||
          ((this.isPointerDown = !0),
          (this.pointerIdentifier =
            void 0 !== e.pointerId ? e.pointerId : e.identifier),
          this.pointerDown(t, e));
      }),
      (i.pointerDown = function (t, e) {
        this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e]);
      });
    var n = {
      mousedown: ["mousemove", "mouseup"],
      touchstart: ["touchmove", "touchend", "touchcancel"],
      pointerdown: ["pointermove", "pointerup", "pointercancel"],
    };
    return (
      (i._bindPostStartEvents = function (t) {
        if (t) {
          var e = n[t.type];
          e.forEach(function (t) {
            s.addEventListener(t, this);
          }, this),
            (this._boundPointerEvents = e);
        }
      }),
      (i._unbindPostStartEvents = function () {
        this._boundPointerEvents &&
          (this._boundPointerEvents.forEach(function (t) {
            s.removeEventListener(t, this);
          }, this),
          delete this._boundPointerEvents);
      }),
      (i.onmousemove = function (t) {
        this._pointerMove(t, t);
      }),
      (i.onpointermove = function (t) {
        t.pointerId == this.pointerIdentifier && this._pointerMove(t, t);
      }),
      (i.ontouchmove = function (t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerMove(t, e);
      }),
      (i._pointerMove = function (t, e) {
        this.pointerMove(t, e);
      }),
      (i.pointerMove = function (t, e) {
        this.emitEvent("pointerMove", [t, e]);
      }),
      (i.onmouseup = function (t) {
        this._pointerUp(t, t);
      }),
      (i.onpointerup = function (t) {
        t.pointerId == this.pointerIdentifier && this._pointerUp(t, t);
      }),
      (i.ontouchend = function (t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerUp(t, e);
      }),
      (i._pointerUp = function (t, e) {
        this._pointerDone(), this.pointerUp(t, e);
      }),
      (i.pointerUp = function (t, e) {
        this.emitEvent("pointerUp", [t, e]);
      }),
      (i._pointerDone = function () {
        this._pointerReset(), this._unbindPostStartEvents(), this.pointerDone();
      }),
      (i._pointerReset = function () {
        (this.isPointerDown = !1), delete this.pointerIdentifier;
      }),
      (i.pointerDone = function () {}),
      (i.onpointercancel = function (t) {
        t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t);
      }),
      (i.ontouchcancel = function (t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerCancel(t, e);
      }),
      (i._pointerCancel = function (t, e) {
        this._pointerDone(), this.pointerCancel(t, e);
      }),
      (i.pointerCancel = function (t, e) {
        this.emitEvent("pointerCancel", [t, e]);
      }),
      (e.getPointerPoint = function (t) {
        return { x: t.pageX, y: t.pageY };
      }),
      e
    );
  }),
  (function (e, i) {
    "function" == typeof define && define.amd
      ? define("unidragger/unidragger", ["unipointer/unipointer"], function (
          t
        ) {
          return i(e, t);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = i(e, require("unipointer")))
      : (e.Unidragger = i(e, e.Unipointer));
  })(window, function (o, t) {
    function e() {}
    var i = (e.prototype = Object.create(t.prototype));
    (i.bindHandles = function () {
      this._bindHandles(!0);
    }),
      (i.unbindHandles = function () {
        this._bindHandles(!1);
      }),
      (i._bindHandles = function (t) {
        for (
          var e = (t = void 0 === t || t)
              ? "addEventListener"
              : "removeEventListener",
            i = t ? this._touchActionValue : "",
            n = 0;
          n < this.handles.length;
          n++
        ) {
          var s = this.handles[n];
          this._bindStartEvent(s, t),
            s[e]("click", this),
            o.PointerEvent && (s.style.touchAction = i);
        }
      }),
      (i._touchActionValue = "none"),
      (i.pointerDown = function (t, e) {
        this.okayPointerDown(t) &&
          ((this.pointerDownPointer = e),
          t.preventDefault(),
          this.pointerDownBlur(),
          this._bindPostStartEvents(t),
          this.emitEvent("pointerDown", [t, e]));
      });
    var s = { TEXTAREA: !0, INPUT: !0, SELECT: !0, OPTION: !0 },
      r = {
        radio: !0,
        checkbox: !0,
        button: !0,
        submit: !0,
        image: !0,
        file: !0,
      };
    return (
      (i.okayPointerDown = function (t) {
        var e = s[t.target.nodeName],
          i = r[t.target.type],
          n = !e || i;
        return n || this._pointerReset(), n;
      }),
      (i.pointerDownBlur = function () {
        var t = document.activeElement;
        t && t.blur && t != document.body && t.blur();
      }),
      (i.pointerMove = function (t, e) {
        var i = this._dragPointerMove(t, e);
        this.emitEvent("pointerMove", [t, e, i]), this._dragMove(t, e, i);
      }),
      (i._dragPointerMove = function (t, e) {
        var i = {
          x: e.pageX - this.pointerDownPointer.pageX,
          y: e.pageY - this.pointerDownPointer.pageY,
        };
        return (
          !this.isDragging && this.hasDragStarted(i) && this._dragStart(t, e), i
        );
      }),
      (i.hasDragStarted = function (t) {
        return 3 < Math.abs(t.x) || 3 < Math.abs(t.y);
      }),
      (i.pointerUp = function (t, e) {
        this.emitEvent("pointerUp", [t, e]), this._dragPointerUp(t, e);
      }),
      (i._dragPointerUp = function (t, e) {
        this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e);
      }),
      (i._dragStart = function (t, e) {
        (this.isDragging = !0),
          (this.isPreventingClicks = !0),
          this.dragStart(t, e);
      }),
      (i.dragStart = function (t, e) {
        this.emitEvent("dragStart", [t, e]);
      }),
      (i._dragMove = function (t, e, i) {
        this.isDragging && this.dragMove(t, e, i);
      }),
      (i.dragMove = function (t, e, i) {
        t.preventDefault(), this.emitEvent("dragMove", [t, e, i]);
      }),
      (i._dragEnd = function (t, e) {
        (this.isDragging = !1),
          setTimeout(
            function () {
              delete this.isPreventingClicks;
            }.bind(this)
          ),
          this.dragEnd(t, e);
      }),
      (i.dragEnd = function (t, e) {
        this.emitEvent("dragEnd", [t, e]);
      }),
      (i.onclick = function (t) {
        this.isPreventingClicks && t.preventDefault();
      }),
      (i._staticClick = function (t, e) {
        (this.isIgnoringMouseUp && "mouseup" == t.type) ||
          (this.staticClick(t, e),
          "mouseup" != t.type &&
            ((this.isIgnoringMouseUp = !0),
            setTimeout(
              function () {
                delete this.isIgnoringMouseUp;
              }.bind(this),
              400
            )));
      }),
      (i.staticClick = function (t, e) {
        this.emitEvent("staticClick", [t, e]);
      }),
      (e.getPointerPoint = t.getPointerPoint),
      e
    );
  }),
  (function (n, s) {
    "function" == typeof define && define.amd
      ? define("flickity/js/drag", [
          "./flickity",
          "unidragger/unidragger",
          "fizzy-ui-utils/utils",
        ], function (t, e, i) {
          return s(n, t, e, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = s(
          n,
          require("./flickity"),
          require("unidragger"),
          require("fizzy-ui-utils")
        ))
      : (n.Flickity = s(n, n.Flickity, n.Unidragger, n.fizzyUIUtils));
  })(window, function (i, t, e, a) {
    a.extend(t.defaults, { draggable: ">1", dragThreshold: 3 }),
      t.createMethods.push("_createDrag");
    var n = t.prototype;
    a.extend(n, e.prototype), (n._touchActionValue = "pan-y");
    var s = "createTouch" in document,
      o = !1;
    (n._createDrag = function () {
      this.on("activate", this.onActivateDrag),
        this.on("uiChange", this._uiChangeDrag),
        this.on("deactivate", this.onDeactivateDrag),
        this.on("cellChange", this.updateDraggable),
        s && !o && (i.addEventListener("touchmove", function () {}), (o = !0));
    }),
      (n.onActivateDrag = function () {
        (this.handles = [this.viewport]),
          this.bindHandles(),
          this.updateDraggable();
      }),
      (n.onDeactivateDrag = function () {
        this.unbindHandles(), this.element.classList.remove("is-draggable");
      }),
      (n.updateDraggable = function () {
        ">1" == this.options.draggable
          ? (this.isDraggable = 1 < this.slides.length)
          : (this.isDraggable = this.options.draggable),
          this.isDraggable
            ? this.element.classList.add("is-draggable")
            : this.element.classList.remove("is-draggable");
      }),
      (n.bindDrag = function () {
        (this.options.draggable = !0), this.updateDraggable();
      }),
      (n.unbindDrag = function () {
        (this.options.draggable = !1), this.updateDraggable();
      }),
      (n._uiChangeDrag = function () {
        delete this.isFreeScrolling;
      }),
      (n.pointerDown = function (t, e) {
        this.isDraggable
          ? this.okayPointerDown(t) &&
            (this._pointerDownPreventDefault(t),
            this.pointerDownFocus(t),
            document.activeElement != this.element && this.pointerDownBlur(),
            (this.dragX = this.x),
            this.viewport.classList.add("is-pointer-down"),
            (this.pointerDownScroll = l()),
            i.addEventListener("scroll", this),
            this._pointerDownDefault(t, e))
          : this._pointerDownDefault(t, e);
      }),
      (n._pointerDownDefault = function (t, e) {
        (this.pointerDownPointer = { pageX: e.pageX, pageY: e.pageY }),
          this._bindPostStartEvents(t),
          this.dispatchEvent("pointerDown", t, [e]);
      });
    var r = { INPUT: !0, TEXTAREA: !0, SELECT: !0 };
    function l() {
      return { x: i.pageXOffset, y: i.pageYOffset };
    }
    return (
      (n.pointerDownFocus = function (t) {
        r[t.target.nodeName] || this.focus();
      }),
      (n._pointerDownPreventDefault = function (t) {
        var e = "touchstart" == t.type,
          i = "touch" == t.pointerType,
          n = r[t.target.nodeName];
        e || i || n || t.preventDefault();
      }),
      (n.hasDragStarted = function (t) {
        return Math.abs(t.x) > this.options.dragThreshold;
      }),
      (n.pointerUp = function (t, e) {
        delete this.isTouchScrolling,
          this.viewport.classList.remove("is-pointer-down"),
          this.dispatchEvent("pointerUp", t, [e]),
          this._dragPointerUp(t, e);
      }),
      (n.pointerDone = function () {
        i.removeEventListener("scroll", this), delete this.pointerDownScroll;
      }),
      (n.dragStart = function (t, e) {
        this.isDraggable &&
          ((this.dragStartPosition = this.x),
          this.startAnimation(),
          i.removeEventListener("scroll", this),
          this.dispatchEvent("dragStart", t, [e]));
      }),
      (n.pointerMove = function (t, e) {
        var i = this._dragPointerMove(t, e);
        this.dispatchEvent("pointerMove", t, [e, i]), this._dragMove(t, e, i);
      }),
      (n.dragMove = function (t, e, i) {
        if (this.isDraggable) {
          t.preventDefault(), (this.previousDragX = this.dragX);
          var n = this.options.rightToLeft ? -1 : 1;
          this.options.wrapAround && (i.x = i.x % this.slideableWidth);
          var s = this.dragStartPosition + i.x * n;
          if (!this.options.wrapAround && this.slides.length) {
            var o = Math.max(-this.slides[0].target, this.dragStartPosition);
            s = o < s ? 0.5 * (s + o) : s;
            var r = Math.min(
              -this.getLastSlide().target,
              this.dragStartPosition
            );
            s = s < r ? 0.5 * (s + r) : s;
          }
          (this.dragX = s),
            (this.dragMoveTime = new Date()),
            this.dispatchEvent("dragMove", t, [e, i]);
        }
      }),
      (n.dragEnd = function (t, e) {
        if (this.isDraggable) {
          this.options.freeScroll && (this.isFreeScrolling = !0);
          var i = this.dragEndRestingSelect();
          if (this.options.freeScroll && !this.options.wrapAround) {
            var n = this.getRestingPosition();
            this.isFreeScrolling =
              -n > this.slides[0].target && -n < this.getLastSlide().target;
          } else
            this.options.freeScroll ||
              i != this.selectedIndex ||
              (i += this.dragEndBoostSelect());
          delete this.previousDragX,
            (this.isDragSelect = this.options.wrapAround),
            this.select(i),
            delete this.isDragSelect,
            this.dispatchEvent("dragEnd", t, [e]);
        }
      }),
      (n.dragEndRestingSelect = function () {
        var t = this.getRestingPosition(),
          e = Math.abs(this.getSlideDistance(-t, this.selectedIndex)),
          i = this._getClosestResting(t, e, 1),
          n = this._getClosestResting(t, e, -1);
        return i.distance < n.distance ? i.index : n.index;
      }),
      (n._getClosestResting = function (t, e, i) {
        for (
          var n = this.selectedIndex,
            s = 1 / 0,
            o =
              this.options.contain && !this.options.wrapAround
                ? function (t, e) {
                    return t <= e;
                  }
                : function (t, e) {
                    return t < e;
                  };
          o(e, s) &&
          ((n += i), (s = e), null !== (e = this.getSlideDistance(-t, n)));

        )
          e = Math.abs(e);
        return { distance: s, index: n - i };
      }),
      (n.getSlideDistance = function (t, e) {
        var i = this.slides.length,
          n = this.options.wrapAround && 1 < i,
          s = n ? a.modulo(e, i) : e,
          o = this.slides[s];
        if (!o) return null;
        var r = n ? this.slideableWidth * Math.floor(e / i) : 0;
        return t - (o.target + r);
      }),
      (n.dragEndBoostSelect = function () {
        if (
          void 0 === this.previousDragX ||
          !this.dragMoveTime ||
          100 < new Date() - this.dragMoveTime
        )
          return 0;
        var t = this.getSlideDistance(-this.dragX, this.selectedIndex),
          e = this.previousDragX - this.dragX;
        return 0 < t && 0 < e ? 1 : t < 0 && e < 0 ? -1 : 0;
      }),
      (n.staticClick = function (t, e) {
        var i = this.getParentCell(t.target),
          n = i && i.element,
          s = i && this.cells.indexOf(i);
        this.dispatchEvent("staticClick", t, [e, n, s]);
      }),
      (n.onscroll = function () {
        var t = l(),
          e = this.pointerDownScroll.x - t.x,
          i = this.pointerDownScroll.y - t.y;
        (3 < Math.abs(e) || 3 < Math.abs(i)) && this._pointerDone();
      }),
      t
    );
  }),
  (function (n, s) {
    "function" == typeof define && define.amd
      ? define("flickity/js/prev-next-button", [
          "./flickity",
          "unipointer/unipointer",
          "fizzy-ui-utils/utils",
        ], function (t, e, i) {
          return s(n, t, e, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = s(
          n,
          require("./flickity"),
          require("unipointer"),
          require("fizzy-ui-utils")
        ))
      : s(n, n.Flickity, n.Unipointer, n.fizzyUIUtils);
  })(window, function (t, e, i, n) {
    "use strict";
    var s = "http://www.w3.org/2000/svg";
    function o(t, e) {
      (this.direction = t), (this.parent = e), this._create();
    }
    ((o.prototype = Object.create(i.prototype))._create = function () {
      (this.isEnabled = !0), (this.isPrevious = -1 == this.direction);
      var t = this.parent.options.rightToLeft ? 1 : -1;
      this.isLeft = this.direction == t;
      var e = (this.element = document.createElement("button"));
      (e.className = "flickity-button flickity-prev-next-button"),
        (e.className += this.isPrevious ? " previous" : " next"),
        e.setAttribute("type", "button"),
        this.disable(),
        e.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");
      var i = this.createSVG();
      e.appendChild(i),
        this.parent.on("select", this.update.bind(this)),
        this.on(
          "pointerDown",
          this.parent.childUIPointerDown.bind(this.parent)
        );
    }),
      (o.prototype.activate = function () {
        this.bindStartEvent(this.element),
          this.element.addEventListener("click", this),
          this.parent.element.appendChild(this.element);
      }),
      (o.prototype.deactivate = function () {
        this.parent.element.removeChild(this.element),
          this.unbindStartEvent(this.element),
          this.element.removeEventListener("click", this);
      }),
      (o.prototype.createSVG = function () {
        var t = document.createElementNS(s, "svg");
        t.setAttribute("class", "flickity-button-icon"),
          t.setAttribute("viewBox", "0 0 100 100");
        var e,
          i = document.createElementNS(s, "path"),
          n =
            "string" != typeof (e = this.parent.options.arrowShape)
              ? "M " +
                e.x0 +
                ",50 L " +
                e.x1 +
                "," +
                (e.y1 + 50) +
                " L " +
                e.x2 +
                "," +
                (e.y2 + 50) +
                " L " +
                e.x3 +
                ",50  L " +
                e.x2 +
                "," +
                (50 - e.y2) +
                " L " +
                e.x1 +
                "," +
                (50 - e.y1) +
                " Z"
              : e;
        return (
          i.setAttribute("d", n),
          i.setAttribute("class", "arrow"),
          this.isLeft ||
            i.setAttribute("transform", "translate(100, 100) rotate(180) "),
          t.appendChild(i),
          t
        );
      }),
      (o.prototype.handleEvent = n.handleEvent),
      (o.prototype.onclick = function () {
        if (this.isEnabled) {
          this.parent.uiChange();
          var t = this.isPrevious ? "previous" : "next";
          this.parent[t]();
        }
      }),
      (o.prototype.enable = function () {
        this.isEnabled || ((this.element.disabled = !1), (this.isEnabled = !0));
      }),
      (o.prototype.disable = function () {
        this.isEnabled && ((this.element.disabled = !0), (this.isEnabled = !1));
      }),
      (o.prototype.update = function () {
        var t = this.parent.slides;
        if (this.parent.options.wrapAround && 1 < t.length) this.enable();
        else {
          var e = t.length ? t.length - 1 : 0,
            i = this.isPrevious ? 0 : e;
          this[this.parent.selectedIndex == i ? "disable" : "enable"]();
        }
      }),
      (o.prototype.destroy = function () {
        this.deactivate(), this.allOff();
      }),
      n.extend(e.defaults, {
        prevNextButtons: !0,
        arrowShape: { x0: 10, x1: 60, y1: 50, x2: 70, y2: 40, x3: 30 },
      }),
      e.createMethods.push("_createPrevNextButtons");
    var r = e.prototype;
    return (
      (r._createPrevNextButtons = function () {
        this.options.prevNextButtons &&
          ((this.prevButton = new o(-1, this)),
          (this.nextButton = new o(1, this)),
          this.on("activate", this.activatePrevNextButtons));
      }),
      (r.activatePrevNextButtons = function () {
        this.prevButton.activate(),
          this.nextButton.activate(),
          this.on("deactivate", this.deactivatePrevNextButtons);
      }),
      (r.deactivatePrevNextButtons = function () {
        this.prevButton.deactivate(),
          this.nextButton.deactivate(),
          this.off("deactivate", this.deactivatePrevNextButtons);
      }),
      (e.PrevNextButton = o),
      e
    );
  }),
  (function (n, s) {
    "function" == typeof define && define.amd
      ? define("flickity/js/page-dots", [
          "./flickity",
          "unipointer/unipointer",
          "fizzy-ui-utils/utils",
        ], function (t, e, i) {
          return s(n, t, e, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = s(
          n,
          require("./flickity"),
          require("unipointer"),
          require("fizzy-ui-utils")
        ))
      : s(n, n.Flickity, n.Unipointer, n.fizzyUIUtils);
  })(window, function (t, e, i, n) {
    function s(t) {
      (this.parent = t), this._create();
    }
    ((s.prototype = Object.create(i.prototype))._create = function () {
      (this.holder = document.createElement("ol")),
        (this.holder.className = "flickity-page-dots"),
        (this.dots = []),
        (this.handleClick = this.onClick.bind(this)),
        this.on(
          "pointerDown",
          this.parent.childUIPointerDown.bind(this.parent)
        );
    }),
      (s.prototype.activate = function () {
        this.setDots(),
          this.holder.addEventListener("click", this.handleClick),
          this.bindStartEvent(this.holder),
          this.parent.element.appendChild(this.holder);
      }),
      (s.prototype.deactivate = function () {
        this.holder.removeEventListener("click", this.handleClick),
          this.unbindStartEvent(this.holder),
          this.parent.element.removeChild(this.holder);
      }),
      (s.prototype.setDots = function () {
        var t = this.parent.slides.length - this.dots.length;
        0 < t ? this.addDots(t) : t < 0 && this.removeDots(-t);
      }),
      (s.prototype.addDots = function (t) {
        for (
          var e = document.createDocumentFragment(),
            i = [],
            n = this.dots.length,
            s = n + t,
            o = n;
          o < s;
          o++
        ) {
          var r = document.createElement("li");
          (r.className = "dot"),
            r.setAttribute("aria-label", "Page dot " + (o + 1)),
            e.appendChild(r),
            i.push(r);
        }
        this.holder.appendChild(e), (this.dots = this.dots.concat(i));
      }),
      (s.prototype.removeDots = function (t) {
        this.dots.splice(this.dots.length - t, t).forEach(function (t) {
          this.holder.removeChild(t);
        }, this);
      }),
      (s.prototype.updateSelected = function () {
        this.selectedDot &&
          ((this.selectedDot.className = "dot"),
          this.selectedDot.removeAttribute("aria-current")),
          this.dots.length &&
            ((this.selectedDot = this.dots[this.parent.selectedIndex]),
            (this.selectedDot.className = "dot is-selected"),
            this.selectedDot.setAttribute("aria-current", "step"));
      }),
      (s.prototype.onTap = s.prototype.onClick = function (t) {
        var e = t.target;
        if ("LI" == e.nodeName) {
          this.parent.uiChange();
          var i = this.dots.indexOf(e);
          this.parent.select(i);
        }
      }),
      (s.prototype.destroy = function () {
        this.deactivate(), this.allOff();
      }),
      (e.PageDots = s),
      n.extend(e.defaults, { pageDots: !0 }),
      e.createMethods.push("_createPageDots");
    var o = e.prototype;
    return (
      (o._createPageDots = function () {
        this.options.pageDots &&
          ((this.pageDots = new s(this)),
          this.on("activate", this.activatePageDots),
          this.on("select", this.updateSelectedPageDots),
          this.on("cellChange", this.updatePageDots),
          this.on("resize", this.updatePageDots),
          this.on("deactivate", this.deactivatePageDots));
      }),
      (o.activatePageDots = function () {
        this.pageDots.activate();
      }),
      (o.updateSelectedPageDots = function () {
        this.pageDots.updateSelected();
      }),
      (o.updatePageDots = function () {
        this.pageDots.setDots();
      }),
      (o.deactivatePageDots = function () {
        this.pageDots.deactivate();
      }),
      (e.PageDots = s),
      e
    );
  }),
  (function (t, n) {
    "function" == typeof define && define.amd
      ? define("flickity/js/player", [
          "ev-emitter/ev-emitter",
          "fizzy-ui-utils/utils",
          "./flickity",
        ], function (t, e, i) {
          return n(t, e, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = n(
          require("ev-emitter"),
          require("fizzy-ui-utils"),
          require("./flickity")
        ))
      : n(t.EvEmitter, t.fizzyUIUtils, t.Flickity);
  })(window, function (t, e, i) {
    function n(t) {
      (this.parent = t),
        (this.state = "stopped"),
        (this.onVisibilityChange = this.visibilityChange.bind(this)),
        (this.onVisibilityPlay = this.visibilityPlay.bind(this));
    }
    ((n.prototype = Object.create(t.prototype)).play = function () {
      "playing" != this.state &&
        (document.hidden
          ? document.addEventListener("visibilitychange", this.onVisibilityPlay)
          : ((this.state = "playing"),
            document.addEventListener(
              "visibilitychange",
              this.onVisibilityChange
            ),
            this.tick()));
    }),
      (n.prototype.tick = function () {
        if ("playing" == this.state) {
          var t = this.parent.options.autoPlay;
          t = "number" == typeof t ? t : 3e3;
          var e = this;
          this.clear(),
            (this.timeout = setTimeout(function () {
              e.parent.next(!0), e.tick();
            }, t));
        }
      }),
      (n.prototype.stop = function () {
        (this.state = "stopped"),
          this.clear(),
          document.removeEventListener(
            "visibilitychange",
            this.onVisibilityChange
          );
      }),
      (n.prototype.clear = function () {
        clearTimeout(this.timeout);
      }),
      (n.prototype.pause = function () {
        "playing" == this.state && ((this.state = "paused"), this.clear());
      }),
      (n.prototype.unpause = function () {
        "paused" == this.state && this.play();
      }),
      (n.prototype.visibilityChange = function () {
        this[document.hidden ? "pause" : "unpause"]();
      }),
      (n.prototype.visibilityPlay = function () {
        this.play(),
          document.removeEventListener(
            "visibilitychange",
            this.onVisibilityPlay
          );
      }),
      e.extend(i.defaults, { pauseAutoPlayOnHover: !0 }),
      i.createMethods.push("_createPlayer");
    var s = i.prototype;
    return (
      (s._createPlayer = function () {
        (this.player = new n(this)),
          this.on("activate", this.activatePlayer),
          this.on("uiChange", this.stopPlayer),
          this.on("pointerDown", this.stopPlayer),
          this.on("deactivate", this.deactivatePlayer);
      }),
      (s.activatePlayer = function () {
        this.options.autoPlay &&
          (this.player.play(),
          this.element.addEventListener("mouseenter", this));
      }),
      (s.playPlayer = function () {
        this.player.play();
      }),
      (s.stopPlayer = function () {
        this.player.stop();
      }),
      (s.pausePlayer = function () {
        this.player.pause();
      }),
      (s.unpausePlayer = function () {
        this.player.unpause();
      }),
      (s.deactivatePlayer = function () {
        this.player.stop(),
          this.element.removeEventListener("mouseenter", this);
      }),
      (s.onmouseenter = function () {
        this.options.pauseAutoPlayOnHover &&
          (this.player.pause(),
          this.element.addEventListener("mouseleave", this));
      }),
      (s.onmouseleave = function () {
        this.player.unpause(),
          this.element.removeEventListener("mouseleave", this);
      }),
      (i.Player = n),
      i
    );
  }),
  (function (i, n) {
    "function" == typeof define && define.amd
      ? define("flickity/js/add-remove-cell", [
          "./flickity",
          "fizzy-ui-utils/utils",
        ], function (t, e) {
          return n(i, t, e);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = n(
          i,
          require("./flickity"),
          require("fizzy-ui-utils")
        ))
      : n(i, i.Flickity, i.fizzyUIUtils);
  })(window, function (t, e, n) {
    var i = e.prototype;
    return (
      (i.insert = function (t, e) {
        var i = this._makeCells(t);
        if (i && i.length) {
          var n = this.cells.length;
          e = void 0 === e ? n : e;
          var s,
            o,
            r =
              ((s = i),
              (o = document.createDocumentFragment()),
              s.forEach(function (t) {
                o.appendChild(t.element);
              }),
              o),
            a = e == n;
          if (a) this.slider.appendChild(r);
          else {
            var l = this.cells[e].element;
            this.slider.insertBefore(r, l);
          }
          if (0 === e) this.cells = i.concat(this.cells);
          else if (a) this.cells = this.cells.concat(i);
          else {
            var h = this.cells.splice(e, n - e);
            this.cells = this.cells.concat(i).concat(h);
          }
          this._sizeCells(i), this.cellChange(e, !0);
        }
      }),
      (i.append = function (t) {
        this.insert(t, this.cells.length);
      }),
      (i.prepend = function (t) {
        this.insert(t, 0);
      }),
      (i.remove = function (t) {
        var e = this.getCells(t);
        if (e && e.length) {
          var i = this.cells.length - 1;
          e.forEach(function (t) {
            t.remove();
            var e = this.cells.indexOf(t);
            (i = Math.min(e, i)), n.removeFrom(this.cells, t);
          }, this),
            this.cellChange(i, !0);
        }
      }),
      (i.cellSizeChange = function (t) {
        var e = this.getCell(t);
        if (e) {
          e.getSize();
          var i = this.cells.indexOf(e);
          this.cellChange(i);
        }
      }),
      (i.cellChange = function (t, e) {
        var i = this.selectedElement;
        this._positionCells(t),
          this._getWrapShiftCells(),
          this.setGallerySize();
        var n = this.getCell(i);
        n && (this.selectedIndex = this.getCellSlideIndex(n)),
          (this.selectedIndex = Math.min(
            this.slides.length - 1,
            this.selectedIndex
          )),
          this.emitEvent("cellChange", [t]),
          this.select(this.selectedIndex),
          e && this.positionSliderAtSelected();
      }),
      e
    );
  }),
  (function (i, n) {
    "function" == typeof define && define.amd
      ? define("flickity/js/lazyload", [
          "./flickity",
          "fizzy-ui-utils/utils",
        ], function (t, e) {
          return n(i, t, e);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = n(
          i,
          require("./flickity"),
          require("fizzy-ui-utils")
        ))
      : n(i, i.Flickity, i.fizzyUIUtils);
  })(window, function (t, e, o) {
    "use strict";
    e.createMethods.push("_createLazyload");
    var i = e.prototype;
    function s(t, e) {
      (this.img = t), (this.flickity = e), this.load();
    }
    return (
      (i._createLazyload = function () {
        this.on("select", this.lazyLoad);
      }),
      (i.lazyLoad = function () {
        var t = this.options.lazyLoad;
        if (t) {
          var e = "number" == typeof t ? t : 0,
            i = this.getAdjacentCellElements(e),
            n = [];
          i.forEach(function (t) {
            var e = (function (t) {
              if ("IMG" == t.nodeName) {
                var e = t.getAttribute("data-flickity-lazyload"),
                  i = t.getAttribute("data-flickity-lazyload-src"),
                  n = t.getAttribute("data-flickity-lazyload-srcset");
                if (e || i || n) return [t];
              }
              var s = t.querySelectorAll(
                "img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]"
              );
              return o.makeArray(s);
            })(t);
            n = n.concat(e);
          }),
            n.forEach(function (t) {
              new s(t, this);
            }, this);
        }
      }),
      (s.prototype.handleEvent = o.handleEvent),
      (s.prototype.load = function () {
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this);
        var t =
            this.img.getAttribute("data-flickity-lazyload") ||
            this.img.getAttribute("data-flickity-lazyload-src"),
          e = this.img.getAttribute("data-flickity-lazyload-srcset");
        (this.img.src = t),
          e && this.img.setAttribute("srcset", e),
          this.img.removeAttribute("data-flickity-lazyload"),
          this.img.removeAttribute("data-flickity-lazyload-src"),
          this.img.removeAttribute("data-flickity-lazyload-srcset");
      }),
      (s.prototype.onload = function (t) {
        this.complete(t, "flickity-lazyloaded");
      }),
      (s.prototype.onerror = function (t) {
        this.complete(t, "flickity-lazyerror");
      }),
      (s.prototype.complete = function (t, e) {
        this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
        var i = this.flickity.getParentCell(this.img),
          n = i && i.element;
        this.flickity.cellSizeChange(n),
          this.img.classList.add(e),
          this.flickity.dispatchEvent("lazyLoad", t, n);
      }),
      (e.LazyLoader = s),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("flickity/js/index", [
          "./flickity",
          "./drag",
          "./prev-next-button",
          "./page-dots",
          "./player",
          "./add-remove-cell",
          "./lazyload",
        ], e)
      : "object" == typeof module &&
        module.exports &&
        (module.exports = e(
          require("./flickity"),
          require("./drag"),
          require("./prev-next-button"),
          require("./page-dots"),
          require("./player"),
          require("./add-remove-cell"),
          require("./lazyload")
        ));
  })(window, function (t) {
    return t;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("flickity-as-nav-for/as-nav-for", [
          "flickity/js/index",
          "fizzy-ui-utils/utils",
        ], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("flickity"), require("fizzy-ui-utils")))
      : (t.Flickity = e(t.Flickity, t.fizzyUIUtils));
  })(window, function (n, s) {
    n.createMethods.push("_createAsNavFor");
    var t = n.prototype;
    return (
      (t._createAsNavFor = function () {
        this.on("activate", this.activateAsNavFor),
          this.on("deactivate", this.deactivateAsNavFor),
          this.on("destroy", this.destroyAsNavFor);
        var t = this.options.asNavFor;
        if (t) {
          var e = this;
          setTimeout(function () {
            e.setNavCompanion(t);
          });
        }
      }),
      (t.setNavCompanion = function (t) {
        t = s.getQueryElement(t);
        var e = n.data(t);
        if (e && e != this) {
          this.navCompanion = e;
          var i = this;
          (this.onNavCompanionSelect = function () {
            i.navCompanionSelect();
          }),
            e.on("select", this.onNavCompanionSelect),
            this.on("staticClick", this.onNavStaticClick),
            this.navCompanionSelect(!0);
        }
      }),
      (t.navCompanionSelect = function (t) {
        if (this.navCompanion) {
          var e,
            i,
            n,
            s = this.navCompanion.selectedCells[0],
            o = this.navCompanion.cells.indexOf(s),
            r = o + this.navCompanion.selectedCells.length - 1,
            a = Math.floor(
              ((e = o),
              (i = r),
              (n = this.navCompanion.cellAlign),
              (i - e) * n + e)
            );
          if (
            (this.selectCell(a, !1, t),
            this.removeNavSelectedElements(),
            !(a >= this.cells.length))
          ) {
            var l = this.cells.slice(o, r + 1);
            (this.navSelectedElements = l.map(function (t) {
              return t.element;
            })),
              this.changeNavSelectedClass("add");
          }
        }
      }),
      (t.changeNavSelectedClass = function (e) {
        this.navSelectedElements.forEach(function (t) {
          t.classList[e]("is-nav-selected");
        });
      }),
      (t.activateAsNavFor = function () {
        this.navCompanionSelect(!0);
      }),
      (t.removeNavSelectedElements = function () {
        this.navSelectedElements &&
          (this.changeNavSelectedClass("remove"),
          delete this.navSelectedElements);
      }),
      (t.onNavStaticClick = function (t, e, i, n) {
        "number" == typeof n && this.navCompanion.selectCell(n);
      }),
      (t.deactivateAsNavFor = function () {
        this.removeNavSelectedElements();
      }),
      (t.destroyAsNavFor = function () {
        this.navCompanion &&
          (this.navCompanion.off("select", this.onNavCompanionSelect),
          this.off("staticClick", this.onNavStaticClick),
          delete this.navCompanion);
      }),
      n
    );
  }),
  (function (e, i) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("imagesloaded/imagesloaded", [
          "ev-emitter/ev-emitter",
        ], function (t) {
          return i(e, t);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = i(e, require("ev-emitter")))
      : (e.imagesLoaded = i(e, e.EvEmitter));
  })("undefined" != typeof window ? window : this, function (e, t) {
    var o = e.jQuery,
      r = e.console;
    function a(t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }
    var l = Array.prototype.slice;
    function h(t, e, i) {
      if (!(this instanceof h)) return new h(t, e, i);
      var n,
        s = t;
      ("string" == typeof t && (s = document.querySelectorAll(t)), s)
        ? ((this.elements =
            ((n = s),
            Array.isArray(n)
              ? n
              : "object" == typeof n && "number" == typeof n.length
              ? l.call(n)
              : [n])),
          (this.options = a({}, this.options)),
          "function" == typeof e ? (i = e) : a(this.options, e),
          i && this.on("always", i),
          this.getImages(),
          o && (this.jqDeferred = new o.Deferred()),
          setTimeout(this.check.bind(this)))
        : r.error("Bad element for imagesLoaded " + (s || t));
    }
    ((h.prototype = Object.create(t.prototype)).options = {}),
      (h.prototype.getImages = function () {
        (this.images = []), this.elements.forEach(this.addElementImages, this);
      }),
      (h.prototype.addElementImages = function (t) {
        "IMG" == t.nodeName && this.addImage(t),
          !0 === this.options.background && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && c[e]) {
          for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
            var s = i[n];
            this.addImage(s);
          }
          if ("string" == typeof this.options.background) {
            var o = t.querySelectorAll(this.options.background);
            for (n = 0; n < o.length; n++) {
              var r = o[n];
              this.addElementBackgroundImages(r);
            }
          }
        }
      });
    var c = { 1: !0, 9: !0, 11: !0 };
    function i(t) {
      this.img = t;
    }
    function n(t, e) {
      (this.url = t), (this.element = e), (this.img = new Image());
    }
    return (
      (h.prototype.addElementBackgroundImages = function (t) {
        var e = getComputedStyle(t);
        if (e)
          for (
            var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage);
            null !== n;

          ) {
            var s = n && n[2];
            s && this.addBackground(s, t), (n = i.exec(e.backgroundImage));
          }
      }),
      (h.prototype.addImage = function (t) {
        var e = new i(t);
        this.images.push(e);
      }),
      (h.prototype.addBackground = function (t, e) {
        var i = new n(t, e);
        this.images.push(i);
      }),
      (h.prototype.check = function () {
        var n = this;
        function e(t, e, i) {
          setTimeout(function () {
            n.progress(t, e, i);
          });
        }
        (this.progressedCount = 0),
          (this.hasAnyBroken = !1),
          this.images.length
            ? this.images.forEach(function (t) {
                t.once("progress", e), t.check();
              })
            : this.complete();
      }),
      (h.prototype.progress = function (t, e, i) {
        this.progressedCount++,
          (this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded),
          this.emitEvent("progress", [this, t, e]),
          this.jqDeferred &&
            this.jqDeferred.notify &&
            this.jqDeferred.notify(this, t),
          this.progressedCount == this.images.length && this.complete(),
          this.options.debug && r && r.log("progress: " + i, t, e);
      }),
      (h.prototype.complete = function () {
        var t = this.hasAnyBroken ? "fail" : "done";
        if (
          ((this.isComplete = !0),
          this.emitEvent(t, [this]),
          this.emitEvent("always", [this]),
          this.jqDeferred)
        ) {
          var e = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[e](this);
        }
      }),
      ((i.prototype = Object.create(t.prototype)).check = function () {
        this.getIsImageComplete()
          ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
          : ((this.proxyImage = new Image()),
            this.proxyImage.addEventListener("load", this),
            this.proxyImage.addEventListener("error", this),
            this.img.addEventListener("load", this),
            this.img.addEventListener("error", this),
            (this.proxyImage.src = this.img.src));
      }),
      (i.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth;
      }),
      (i.prototype.confirm = function (t, e) {
        (this.isLoaded = t), this.emitEvent("progress", [this, this.img, e]);
      }),
      (i.prototype.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (i.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents();
      }),
      (i.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents();
      }),
      (i.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this),
          this.proxyImage.removeEventListener("error", this),
          this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      ((n.prototype = Object.create(i.prototype)).check = function () {
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this),
          (this.img.src = this.url),
          this.getIsImageComplete() &&
            (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
            this.unbindEvents());
      }),
      (n.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (n.prototype.confirm = function (t, e) {
        (this.isLoaded = t),
          this.emitEvent("progress", [this, this.element, e]);
      }),
      (h.makeJQueryPlugin = function (t) {
        (t = t || e.jQuery) &&
          ((o = t).fn.imagesLoaded = function (t, e) {
            return new h(this, t, e).jqDeferred.promise(o(this));
          });
      }),
      h.makeJQueryPlugin(),
      h
    );
  }),
  (function (i, n) {
    "function" == typeof define && define.amd
      ? define(["flickity/js/index", "imagesloaded/imagesloaded"], function (
          t,
          e
        ) {
          return n(i, t, e);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = n(i, require("flickity"), require("imagesloaded")))
      : (i.Flickity = n(i, i.Flickity, i.imagesLoaded));
  })(window, function (t, e, i) {
    "use strict";
    e.createMethods.push("_createImagesLoaded");
    var n = e.prototype;
    return (
      (n._createImagesLoaded = function () {
        this.on("activate", this.imagesLoaded);
      }),
      (n.imagesLoaded = function () {
        if (this.options.imagesLoaded) {
          var n = this;
          i(this.slider).on("progress", function (t, e) {
            var i = n.getParentCell(e.img);
            n.cellSizeChange(i && i.element),
              n.options.freeScroll || n.positionSliderAtSelected();
          });
        }
      }),
      e
    );
  });
/**
 * Flickity fade v1.0.0
 * Fade between Flickity slides
 */

/* jshint browser: true, undef: true, unused: true */

(function (window, factory) {
  // universal module definition
  /*globals define, module, require */
  if (typeof define == "function" && define.amd) {
    // AMD
    define(["flickity/js/index", "fizzy-ui-utils/utils"], factory);
  } else if (typeof module == "object" && module.exports) {
    // CommonJS
    module.exports = factory(require("flickity"), require("fizzy-ui-utils"));
  } else {
    // browser global
    factory(window.Flickity, window.fizzyUIUtils);
  }
})(this, function factory(Flickity, utils) {
  // ---- Slide ---- //

  var Slide = Flickity.Slide;

  var slideUpdateTarget = Slide.prototype.updateTarget;
  Slide.prototype.updateTarget = function () {
    slideUpdateTarget.apply(this, arguments);
    if (!this.parent.options.fade) {
      return;
    }
    // position cells at selected target
    var slideTargetX = this.target - this.x;
    var firstCellX = this.cells[0].x;
    this.cells.forEach(function (cell) {
      var targetX = cell.x - firstCellX - slideTargetX;
      cell.renderPosition(targetX);
    });
  };

  Slide.prototype.setOpacity = function (alpha) {
    this.cells.forEach(function (cell) {
      cell.element.style.opacity = alpha;
    });
  };

  // ---- Flickity ---- //

  var proto = Flickity.prototype;

  Flickity.createMethods.push("_createFade");

  proto._createFade = function () {
    this.fadeIndex = this.selectedIndex;
    this.prevSelectedIndex = this.selectedIndex;
    this.on("select", this.onSelectFade);
    this.on("dragEnd", this.onDragEndFade);
    this.on("settle", this.onSettleFade);
    this.on("activate", this.onActivateFade);
    this.on("deactivate", this.onDeactivateFade);
  };

  var updateSlides = proto.updateSlides;
  proto.updateSlides = function () {
    updateSlides.apply(this, arguments);
    if (!this.options.fade) {
      return;
    }
    // set initial opacity
    this.slides.forEach(function (slide, i) {
      var alpha = i == this.selectedIndex ? 1 : 0;
      slide.setOpacity(alpha);
    }, this);
  };

  /* ---- events ---- */

  proto.onSelectFade = function () {
    // in case of resize, keep fadeIndex within current count
    this.fadeIndex = Math.min(this.prevSelectedIndex, this.slides.length - 1);
    this.prevSelectedIndex = this.selectedIndex;
  };

  proto.onSettleFade = function () {
    delete this.didDragEnd;
    if (!this.options.fade) {
      return;
    }
    // set full and 0 opacity on selected & faded slides
    this.selectedSlide.setOpacity(1);
    var fadedSlide = this.slides[this.fadeIndex];
    if (fadedSlide && this.fadeIndex != this.selectedIndex) {
      this.slides[this.fadeIndex].setOpacity(0);
    }
  };

  proto.onDragEndFade = function () {
    // set flag
    this.didDragEnd = true;
  };

  proto.onActivateFade = function () {
    if (this.options.fade) {
      this.element.classList.add("is-fade");
    }
  };

  proto.onDeactivateFade = function () {
    if (!this.options.fade) {
      return;
    }
    this.element.classList.remove("is-fade");
    // reset opacity
    this.slides.forEach(function (slide) {
      slide.setOpacity("");
    });
  };

  /* ---- position & fading ---- */

  var positionSlider = proto.positionSlider;
  proto.positionSlider = function () {
    if (!this.options.fade) {
      positionSlider.apply(this, arguments);
      return;
    }

    this.fadeSlides();
    this.dispatchScrollEvent();
  };

  var positionSliderAtSelected = proto.positionSliderAtSelected;
  proto.positionSliderAtSelected = function () {
    if (this.options.fade) {
      // position fade slider at origin
      this.setTranslateX(0);
    }
    positionSliderAtSelected.apply(this, arguments);
  };

  proto.fadeSlides = function () {
    if (this.slides.length < 2) {
      return;
    }
    // get slides to fade-in & fade-out
    var indexes = this.getFadeIndexes();
    var fadeSlideA = this.slides[indexes.a];
    var fadeSlideB = this.slides[indexes.b];
    var distance = this.wrapDifference(fadeSlideA.target, fadeSlideB.target);
    var progress = this.wrapDifference(fadeSlideA.target, -this.x);
    progress = progress / distance;

    fadeSlideA.setOpacity(1 - progress);
    fadeSlideB.setOpacity(progress);

    // hide previous slide
    var fadeHideIndex = indexes.a;
    if (this.isDragging) {
      fadeHideIndex = progress > 0.5 ? indexes.a : indexes.b;
    }
    var isNewHideIndex =
      this.fadeHideIndex != undefined &&
      this.fadeHideIndex != fadeHideIndex &&
      this.fadeHideIndex != indexes.a &&
      this.fadeHideIndex != indexes.b;
    if (isNewHideIndex) {
      // new fadeHideSlide set, hide previous
      this.slides[this.fadeHideIndex].setOpacity(0);
    }
    this.fadeHideIndex = fadeHideIndex;
  };

  proto.getFadeIndexes = function () {
    if (!this.isDragging && !this.didDragEnd) {
      return {
        a: this.fadeIndex,
        b: this.selectedIndex,
      };
    }
    if (this.options.wrapAround) {
      return this.getFadeDragWrapIndexes();
    } else {
      return this.getFadeDragLimitIndexes();
    }
  };

  proto.getFadeDragWrapIndexes = function () {
    var distances = this.slides.map(function (slide, i) {
      return this.getSlideDistance(-this.x, i);
    }, this);
    var absDistances = distances.map(function (distance) {
      return Math.abs(distance);
    });
    var minDistance = Math.min.apply(Math, absDistances);
    var closestIndex = absDistances.indexOf(minDistance);
    var distance = distances[closestIndex];
    var len = this.slides.length;

    var delta = distance >= 0 ? 1 : -1;
    return {
      a: closestIndex,
      b: utils.modulo(closestIndex + delta, len),
    };
  };

  proto.getFadeDragLimitIndexes = function () {
    // calculate closest previous slide
    var dragIndex = 0;
    for (var i = 0; i < this.slides.length - 1; i++) {
      var slide = this.slides[i];
      if (-this.x < slide.target) {
        break;
      }
      dragIndex = i;
    }
    return {
      a: dragIndex,
      b: dragIndex + 1,
    };
  };

  proto.wrapDifference = function (a, b) {
    var diff = b - a;

    if (!this.options.wrapAround) {
      return diff;
    }

    var diffPlus = diff + this.slideableWidth;
    var diffMinus = diff - this.slideableWidth;
    if (Math.abs(diffPlus) < Math.abs(diff)) {
      diff = diffPlus;
    }
    if (Math.abs(diffMinus) < Math.abs(diff)) {
      diff = diffMinus;
    }
    return diff;
  };

  // ---- wrapAround ---- //

  var _getWrapShiftCells = proto._getWrapShiftCells;
  proto._getWrapShiftCells = function () {
    if (!this.options.fade) {
      _getWrapShiftCells.apply(this, arguments);
    }
  };

  var shiftWrapCells = proto.shiftWrapCells;
  proto.shiftWrapCells = function () {
    if (!this.options.fade) {
      shiftWrapCells.apply(this, arguments);
    }
  };

  return Flickity;
});
/* jquery.panzoom.min.js 3.2.2 (c) Timmy Willison - MIT License */

!(function (a, b) {
  "function" == typeof define && define.amd
    ? define(["jquery"], function (c) {
        return b(a, c);
      })
    : "object" == typeof exports
    ? b(a, require("jquery"))
    : b(a, a.jQuery);
})("undefined" != typeof window ? window : this, function (a, b) {
  "use strict";
  function c(a, b) {
    for (var c = a.length; --c; )
      if (Math.round(+a[c]) !== Math.round(+b[c])) return !1;
    return !0;
  }
  function d(a) {
    var c = { range: !0, animate: !0 };
    return "boolean" == typeof a ? (c.animate = a) : b.extend(c, a), c;
  }
  function e(a, c, d, e, f, g, h, i, j) {
    "array" === b.type(a)
      ? (this.elements = [+a[0], +a[2], +a[4], +a[1], +a[3], +a[5], 0, 0, 1])
      : (this.elements = [a, c, d, e, f, g, h || 0, i || 0, j || 1]);
  }
  function f(a, b, c) {
    this.elements = [a, b, c];
  }
  function g(a, c) {
    if (!(this instanceof g)) return new g(a, c);
    1 !== a.nodeType && b.error("Panzoom called on non-Element node"),
      b.contains(h, a) ||
        b.error("Panzoom element must be attached to the document");
    var d = b.data(a, i);
    if (d) return d;
    (this.options = c = b.extend({}, g.defaults, c)), (this.elem = a);
    var e = (this.$elem = b(a));
    (this.$set = c.$set && c.$set.length ? c.$set : e),
      (this.$doc = b(a.ownerDocument || h)),
      (this.$parent = e.parent()),
      (this.parent = this.$parent[0]),
      (this.isSVG =
        n.test(a.namespaceURI) && "svg" !== a.nodeName.toLowerCase()),
      (this.panning = !1),
      this._buildTransform(),
      (this._transform = b.cssProps.transform
        ? b.cssProps.transform.replace(m, "-$1").toLowerCase()
        : "transform"),
      this._buildTransition(),
      this.resetDimensions();
    var f = b(),
      j = this;
    b.each(["$zoomIn", "$zoomOut", "$zoomRange", "$reset"], function (a, b) {
      j[b] = c[b] || f;
    }),
      this.enable(),
      (this.scale = this.getMatrix()[0]),
      this._checkPanWhenZoomed(),
      b.data(a, i, this);
  }
  var h = a.document,
    i = "__pz__",
    j = Array.prototype.slice,
    k = /trident\/7./i,
    l = (function () {
      if (k.test(navigator.userAgent)) return !1;
      var a = h.createElement("input");
      return (
        a.setAttribute("oninput", "return"), "function" == typeof a.oninput
      );
    })(),
    m = /([A-Z])/g,
    n = /^http:[\w\.\/]+svg$/,
    o = "(\\-?\\d[\\d\\.e-]*)",
    p = new RegExp(
      "^matrix\\(" +
        o +
        "\\,?\\s*" +
        o +
        "\\,?\\s*" +
        o +
        "\\,?\\s*" +
        o +
        "\\,?\\s*" +
        o +
        "\\,?\\s*" +
        o +
        "\\)$"
    );
  return (
    (e.prototype = {
      x: function (a) {
        var b = a instanceof f,
          c = this.elements,
          d = a.elements;
        return b && 3 === d.length
          ? new f(
              c[0] * d[0] + c[1] * d[1] + c[2] * d[2],
              c[3] * d[0] + c[4] * d[1] + c[5] * d[2],
              c[6] * d[0] + c[7] * d[1] + c[8] * d[2]
            )
          : d.length === c.length &&
              new e(
                c[0] * d[0] + c[1] * d[3] + c[2] * d[6],
                c[0] * d[1] + c[1] * d[4] + c[2] * d[7],
                c[0] * d[2] + c[1] * d[5] + c[2] * d[8],
                c[3] * d[0] + c[4] * d[3] + c[5] * d[6],
                c[3] * d[1] + c[4] * d[4] + c[5] * d[7],
                c[3] * d[2] + c[4] * d[5] + c[5] * d[8],
                c[6] * d[0] + c[7] * d[3] + c[8] * d[6],
                c[6] * d[1] + c[7] * d[4] + c[8] * d[7],
                c[6] * d[2] + c[7] * d[5] + c[8] * d[8]
              );
      },
      inverse: function () {
        var a = 1 / this.determinant(),
          b = this.elements;
        return new e(
          a * (b[8] * b[4] - b[7] * b[5]),
          a * -(b[8] * b[1] - b[7] * b[2]),
          a * (b[5] * b[1] - b[4] * b[2]),
          a * -(b[8] * b[3] - b[6] * b[5]),
          a * (b[8] * b[0] - b[6] * b[2]),
          a * -(b[5] * b[0] - b[3] * b[2]),
          a * (b[7] * b[3] - b[6] * b[4]),
          a * -(b[7] * b[0] - b[6] * b[1]),
          a * (b[4] * b[0] - b[3] * b[1])
        );
      },
      determinant: function () {
        var a = this.elements;
        return (
          a[0] * (a[8] * a[4] - a[7] * a[5]) -
          a[3] * (a[8] * a[1] - a[7] * a[2]) +
          a[6] * (a[5] * a[1] - a[4] * a[2])
        );
      },
    }),
    (f.prototype.e = e.prototype.e = function (a) {
      return this.elements[a];
    }),
    (g.rmatrix = p),
    (g.defaults = {
      eventNamespace: ".panzoom",
      transition: !0,
      cursor: "move",
      disablePan: !1,
      disableZoom: !1,
      disableXAxis: !1,
      disableYAxis: !1,
      which: 1,
      increment: 0.3,
      linearZoom: !1,
      panOnlyWhenZoomed: !1,
      minScale: 0.3,
      maxScale: 6,
      rangeStep: 0.05,
      duration: 200,
      easing: "ease-in-out",
      contain: !1,
    }),
    (g.prototype = {
      constructor: g,
      instance: function () {
        return this;
      },
      enable: function () {
        this._initStyle(), this._bind(), (this.disabled = !1);
      },
      disable: function () {
        (this.disabled = !0), this._resetStyle(), this._unbind();
      },
      isDisabled: function () {
        return this.disabled;
      },
      destroy: function () {
        this.disable(), b.removeData(this.elem, i);
      },
      resetDimensions: function () {
        this.container = this.parent.getBoundingClientRect();
        var a = this.elem,
          c = a.getBoundingClientRect(),
          d = Math.abs(this.scale);
        this.dimensions = {
          width: c.width,
          height: c.height,
          left: b.css(a, "left", !0) || 0,
          top: b.css(a, "top", !0) || 0,
          border: {
            top: b.css(a, "borderTopWidth", !0) * d || 0,
            bottom: b.css(a, "borderBottomWidth", !0) * d || 0,
            left: b.css(a, "borderLeftWidth", !0) * d || 0,
            right: b.css(a, "borderRightWidth", !0) * d || 0,
          },
          margin: {
            top: b.css(a, "marginTop", !0) * d || 0,
            left: b.css(a, "marginLeft", !0) * d || 0,
          },
        };
      },
      reset: function (a) {
        a = d(a);
        var b = this.setMatrix(this._origTransform, a);
        a.silent || this._trigger("reset", b);
      },
      resetZoom: function (a) {
        a = d(a);
        var b = this.getMatrix(this._origTransform);
        (a.dValue = b[3]), this.zoom(b[0], a);
      },
      resetPan: function (a) {
        var b = this.getMatrix(this._origTransform);
        this.pan(b[4], b[5], d(a));
      },
      setTransform: function (a) {
        for (var c = this.$set, d = c.length; d--; )
          b.style(c[d], "transform", a),
            this.isSVG && c[d].setAttribute("transform", a);
      },
      getTransform: function (a) {
        var c = this.$set,
          d = c[0];
        return (
          a
            ? this.setTransform(a)
            : ((a = b.style(d, "transform")),
              !this.isSVG ||
                (a && "none" !== a) ||
                (a = b.attr(d, "transform") || "none")),
          "none" === a ||
            p.test(a) ||
            this.setTransform((a = b.css(d, "transform"))),
          a || "none"
        );
      },
      getMatrix: function (a) {
        var b = p.exec(a || this.getTransform());
        return b && b.shift(), b || [1, 0, 0, 1, 0, 0];
      },
      getScale: function (a) {
        return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2));
      },
      setMatrix: function (a, c) {
        if (!this.disabled) {
          c || (c = {}), "string" == typeof a && (a = this.getMatrix(a));
          var d = this.getScale(a),
            e = void 0 !== c.contain ? c.contain : this.options.contain;
          if (e) {
            var f = c.dims;
            f || (this.resetDimensions(), (f = this.dimensions));
            var g,
              h,
              i,
              j = this.container,
              k = f.width,
              l = f.height,
              m = j.width,
              n = j.height,
              o = m / k,
              p = n / l;
            "center" !== this.$parent.css("textAlign") ||
            "inline" !== b.css(this.elem, "display")
              ? ((i = (k - this.elem.offsetWidth) / 2),
                (g = i - f.border.left),
                (h = k - m - i + f.border.right))
              : (g = h = (k - m) / 2);
            var q = (l - n) / 2 + f.border.top,
              r = (l - n) / 2 - f.border.top - f.border.bottom;
            (a[4] =
              "invert" === e || ("automatic" === e && o < 1.01)
                ? Math.max(Math.min(a[4], g - f.border.left), -h)
                : Math.min(Math.max(a[4], g), -h)),
              (a[5] =
                "invert" === e || ("automatic" === e && p < 1.01)
                  ? Math.max(Math.min(a[5], q - f.border.top), -r)
                  : Math.min(Math.max(a[5], q), -r));
          }
          if (
            ("skip" !== c.animate && this.transition(!c.animate),
            c.range && this.$zoomRange.val(d),
            this.options.disableXAxis || this.options.disableYAxis)
          ) {
            var s = this.getMatrix();
            this.options.disableXAxis && (a[4] = s[4]),
              this.options.disableYAxis && (a[5] = s[5]);
          }
          return (
            this.setTransform("matrix(" + a.join(",") + ")"),
            (this.scale = d),
            this._checkPanWhenZoomed(d),
            c.silent || this._trigger("change", a),
            a
          );
        }
      },
      isPanning: function () {
        return this.panning;
      },
      transition: function (a) {
        if (this._transition)
          for (
            var c = a || !this.options.transition ? "none" : this._transition,
              d = this.$set,
              e = d.length;
            e--;

          )
            b.style(d[e], "transition") !== c && b.style(d[e], "transition", c);
      },
      pan: function (a, b, c) {
        if (!this.options.disablePan) {
          c || (c = {});
          var d = c.matrix;
          d || (d = this.getMatrix()),
            c.relative && ((a += +d[4]), (b += +d[5])),
            (d[4] = a),
            (d[5] = b),
            this.setMatrix(d, c),
            c.silent || this._trigger("pan", d[4], d[5]);
        }
      },
      zoom: function (a, c) {
        "object" == typeof a ? ((c = a), (a = null)) : c || (c = {});
        var d = b.extend({}, this.options, c);
        if (!d.disableZoom) {
          var g = !1,
            h = d.matrix || this.getMatrix(),
            i = new e(h),
            j = this.getScale(h);
          "number" != typeof a
            ? ((a = d.linearZoom
                ? 1 + (d.increment * (a ? -1 : 1)) / j
                : a
                ? 1 / (1 + d.increment)
                : 1 + d.increment),
              (g = !0))
            : (a = 1 / j),
            (a = Math.max(Math.min(a, d.maxScale / j), d.minScale / j));
          var k = i.x(
              new e(
                a,
                0,
                0,
                0,
                "number" == typeof d.dValue ? d.dValue / j : a,
                0
              )
            ),
            l = d.focal;
          if (l && !d.disablePan) {
            this.resetDimensions();
            var m = (d.dims = this.dimensions),
              n = l.clientX,
              o = l.clientY;
            this.isSVG || ((n -= m.width / j / 2), (o -= m.height / j / 2));
            var p = new f(n, o, 1),
              q = this.parentOffset || this.$parent.offset(),
              r = new e(
                1,
                0,
                q.left - this.$doc.scrollLeft(),
                0,
                1,
                q.top - this.$doc.scrollTop()
              ),
              s = i.inverse().x(r.inverse().x(p));
            (i = i.x(new e([a, 0, 0, a, 0, 0]))),
              (p = r.x(i.x(s))),
              (h[4] = +h[4] + (n - p.e(0))),
              (h[5] = +h[5] + (o - p.e(1)));
          }
          (h[0] = k.e(0)),
            (h[1] = k.e(3)),
            (h[2] = k.e(1)),
            (h[3] = k.e(4)),
            this.setMatrix(h, {
              animate: void 0 !== d.animate ? d.animate : g,
              range: !d.noSetRange,
            }),
            d.silent || this._trigger("zoom", a, d);
        }
      },
      option: function (a, c) {
        var d;
        if (!a) return b.extend({}, this.options);
        if ("string" == typeof a) {
          if (1 === arguments.length)
            return void 0 !== this.options[a] ? this.options[a] : null;
          (d = {}), (d[a] = c);
        } else d = a;
        this._setOptions(d);
      },
      _setOptions: function (a) {
        b.each(
          a,
          b.proxy(function (a, c) {
            switch (a) {
              case "disablePan":
                this._resetStyle();
              case "$zoomIn":
              case "$zoomOut":
              case "$zoomRange":
              case "$reset":
              case "disableZoom":
              case "onStart":
              case "onChange":
              case "onZoom":
              case "onPan":
              case "onEnd":
              case "onReset":
              case "eventNamespace":
                this._unbind();
            }
            switch (((this.options[a] = c), a)) {
              case "disablePan":
                this._initStyle();
              case "$zoomIn":
              case "$zoomOut":
              case "$zoomRange":
              case "$reset":
                this[a] = c;
              case "disableZoom":
              case "onStart":
              case "onChange":
              case "onZoom":
              case "onPan":
              case "onEnd":
              case "onReset":
              case "eventNamespace":
                this._bind();
                break;
              case "cursor":
                b.style(this.elem, "cursor", c);
                break;
              case "minScale":
                this.$zoomRange.attr("min", c);
                break;
              case "maxScale":
                this.$zoomRange.attr("max", c);
                break;
              case "rangeStep":
                this.$zoomRange.attr("step", c);
                break;
              case "startTransform":
                this._buildTransform();
                break;
              case "duration":
              case "easing":
                this._buildTransition();
              case "transition":
                this.transition();
                break;
              case "panOnlyWhenZoomed":
                this._checkPanWhenZoomed();
                break;
              case "$set":
                c instanceof b &&
                  c.length &&
                  ((this.$set = c), this._initStyle(), this._buildTransform());
            }
          }, this)
        );
      },
      _checkPanWhenZoomed: function (a) {
        var b = this.options;
        if (b.panOnlyWhenZoomed) {
          a || (a = this.getMatrix()[0]);
          var c = a <= b.minScale;
          b.disablePan !== c && this.option("disablePan", c);
        }
      },
      _initStyle: function () {
        var a = { "transform-origin": this.isSVG ? "0 0" : "50% 50%" };
        this.options.disablePan || (a.cursor = this.options.cursor),
          this.$set.css(a);
        var c = this.$parent;
        c.length &&
          !b.nodeName(this.parent, "body") &&
          ((a = { overflow: "hidden" }),
          "static" === c.css("position") && (a.position = "relative"),
          c.css(a));
      },
      _resetStyle: function () {
        this.$elem.css({ cursor: "", transition: "" }),
          this.$parent.css({ overflow: "", position: "" });
      },
      _bind: function () {
        var a = this,
          c = this.options,
          d = c.eventNamespace,
          e = "mousedown" + d + " pointerdown" + d + " MSPointerDown" + d,
          f = "touchstart" + d + " " + e,
          h =
            "touchend" +
            d +
            " click" +
            d +
            " pointerup" +
            d +
            " MSPointerUp" +
            d,
          i = {},
          j = this.$reset,
          k = this.$zoomRange;
        if (
          (b.each(
            ["Start", "Change", "Zoom", "Pan", "End", "Reset"],
            function () {
              var a = c["on" + this];
              b.isFunction(a) && (i["panzoom" + this.toLowerCase() + d] = a);
            }
          ),
          (c.disablePan && c.disableZoom) ||
            ((i[f] = function (b) {
              var d;
              ("touchstart" === b.type
                ? !(d = b.touches || b.originalEvent.touches) ||
                  ((1 !== d.length || c.disablePan) && 2 !== d.length)
                : c.disablePan ||
                  (b.which || b.originalEvent.which) !== c.which) ||
                (b.preventDefault(), b.stopPropagation(), a._startMove(b, d));
            }),
            3 === c.which && (i.contextmenu = !1)),
          this.$elem.on(i),
          j.length &&
            j.on(h, function (b) {
              b.preventDefault(), a.reset();
            }),
          k.length &&
            k
              .attr({
                step:
                  (c.rangeStep === g.defaults.rangeStep && k.attr("step")) ||
                  c.rangeStep,
                min: c.minScale,
                max: c.maxScale,
              })
              .prop({ value: this.getMatrix()[0] }),
          !c.disableZoom)
        ) {
          var m = this.$zoomIn,
            n = this.$zoomOut;
          m.length &&
            n.length &&
            (m.on(h, function (b) {
              b.preventDefault(), a.zoom();
            }),
            n.on(h, function (b) {
              b.preventDefault(), a.zoom(!0);
            })),
            k.length &&
              ((i = {}),
              (i[e] = function () {
                a.transition(!0);
              }),
              (i[(l ? "input" : "change") + d] = function () {
                a.zoom(+this.value, { noSetRange: !0 });
              }),
              k.on(i));
        }
      },
      _unbind: function () {
        this.$elem
          .add(this.$zoomIn)
          .add(this.$zoomOut)
          .add(this.$reset)
          .off(this.options.eventNamespace);
      },
      _buildTransform: function () {
        return (this._origTransform = this.getTransform(
          this.options.startTransform
        ));
      },
      _buildTransition: function () {
        if (this._transform) {
          var a = this.options;
          this._transition =
            this._transform + " " + a.duration + "ms " + a.easing;
        }
      },
      _getDistance: function (a) {
        var b = a[0],
          c = a[1];
        return Math.sqrt(
          Math.pow(Math.abs(c.clientX - b.clientX), 2) +
            Math.pow(Math.abs(c.clientY - b.clientY), 2)
        );
      },
      _getMiddle: function (a) {
        var b = a[0],
          c = a[1];
        return {
          clientX: (c.clientX - b.clientX) / 2 + b.clientX,
          clientY: (c.clientY - b.clientY) / 2 + b.clientY,
        };
      },
      _trigger: function (a) {
        "string" == typeof a && (a = "panzoom" + a),
          this.$elem.triggerHandler(a, [this].concat(j.call(arguments, 1)));
      },
      _startMove: function (a, d) {
        if (!this.panning) {
          var e,
            f,
            g,
            i,
            j,
            k,
            l,
            m,
            n = this,
            o = this.options,
            p = o.eventNamespace,
            q = this.getMatrix(),
            r = q.slice(0),
            s = +r[4],
            t = +r[5],
            u = { matrix: q, animate: "skip" },
            v = a.type;
          "pointerdown" === v
            ? ((e = "pointermove"), (f = "pointerup"))
            : "touchstart" === v
            ? ((e = "touchmove"), (f = "touchend"))
            : "MSPointerDown" === v
            ? ((e = "MSPointerMove"), (f = "MSPointerUp"))
            : ((e = "mousemove"), (f = "mouseup")),
            (e += p),
            (f += p),
            this.transition(!0),
            (this.panning = !0),
            this._trigger("start", a, d);
          var w = function (a, b) {
            if (b) {
              if (2 === b.length) {
                if (null != g) return;
                return (
                  (g = n._getDistance(b)),
                  (i = n.getScale(q)),
                  void (j = n._getMiddle(b))
                );
              }
              if (null != k) return;
              (m = b[0]) && ((k = m.pageX), (l = m.pageY));
            }
            null == k && ((k = a.pageX), (l = a.pageY));
          };
          w(a, d);
          var x = function (a) {
            var b;
            if (
              (a.preventDefault(),
              (d = a.touches || a.originalEvent.touches),
              w(a, d),
              d)
            ) {
              if (2 === d.length) {
                var c = n._getMiddle(d),
                  e = n._getDistance(d) - g;
                return (
                  n.zoom(e * (o.increment / 100) + i, {
                    focal: c,
                    matrix: q,
                    animate: "skip",
                  }),
                  n.pan(
                    +q[4] + c.clientX - j.clientX,
                    +q[5] + c.clientY - j.clientY,
                    u
                  ),
                  void (j = c)
                );
              }
              b = d[0] || { pageX: 0, pageY: 0 };
            }
            b || (b = a), n.pan(s + b.pageX - k, t + b.pageY - l, u);
          };
          b(h)
            .off(p)
            .on(e, x)
            .on(f, function (a) {
              a.preventDefault(),
                b(this).off(p),
                (n.panning = !1),
                (a.type = "panzoomend"),
                n._trigger(a, q, !c(q, r));
            });
        }
      },
    }),
    (b.Panzoom = g),
    (b.fn.panzoom = function (a) {
      var c, d, e, f;
      return "string" == typeof a
        ? ((f = []),
          (d = j.call(arguments, 1)),
          this.each(function () {
            (c = b.data(this, i)),
              c
                ? "_" !== a.charAt(0) &&
                  "function" == typeof (e = c[a]) &&
                  void 0 !== (e = e.apply(c, d)) &&
                  f.push(e)
                : f.push(void 0);
          }),
          f.length ? (1 === f.length ? f[0] : f) : this)
        : this.each(function () {
            new g(this, a);
          });
    }),
    g
  );
});
