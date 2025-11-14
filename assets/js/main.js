/*-----------------------------------------------------------------
Theme Name: Pyrion
Author: 
Author URI: 
Version: 1.0.0 
Description: Pyrion - Factory & Industry Html Template <

-------------------------------------------------------------------
JS TABLE OF CONTENTS
-------------------------------------------------------------------

        01. Mobile Menu 
        02. Sidebar Toggle 
        03. Body Overlay  
        04. Sticky Header   
        05. Counterup 
        06. Wow Animation 
        07. slider 
        08. Back to top 
        09. MagnificPopup view   
        10. Mouse Cursor  
        11. Team hover
        12. Preloader  


------------------------------------------------------------------*/

(function ($) {
  "use strict";

  $(document).ready(function () {
    /*-----------------------------------
    01. Mobile Menu  
    -----------------------------------*/
    $('#mobile-menu').meanmenu({
      meanMenuContainer: '.mobile-menu',
      meanScreenWidth: "1199",
      meanExpand: ['<i class="far fa-plus"></i>'],
    });


    /*-----------------------------------
    02. Sidebar Toggle  
    -----------------------------------*/
    $(".offcanvas__close,.offcanvas__overlay").on("click", function () {
      $(".offcanvas__info").removeClass("info-open");
      $(".offcanvas__overlay").removeClass("overlay-open");
    });

    $(".sidebar__toggle").on("click", function () {
      $(".offcanvas__info").addClass("info-open");
      $(".offcanvas__overlay").addClass("overlay-open");
    });


    /*-----------------------------------
    03. Body Overlay 
    -----------------------------------*/
    $(".body-overlay").on("click", function () {
      $(".offcanvas__area").removeClass("offcanvas-opened");
      $(".df-search-area").removeClass("opened");
      $(".body-overlay").removeClass("opened");
    });


    /*-----------------------------------
      04. Sticky Header 
    -----------------------------------*/
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 250) {
        $("#header-sticky").addClass("sticky");
      } else {
        $("#header-sticky").removeClass("sticky");
      }
    });

    /*-----------------------------------
    05. Counterup 
    -----------------------------------*/
    $('.counters-item').counterUp({
      delay: 10,
      time: 4000
    });

    /*-----------------------------------
    06. Wow Animation 
    -----------------------------------*/
    new WOW().init();

    /*-----------------------------------
    07.slider 
    -----------------------------------*/

    // Intro slider 
    if ($('.intro-slider-active').length > 0) {
      const teamSlider = new Swiper(".intro-slider-active", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        navigation: {
          prevEl: ".slider-prev",
          nextEl: ".slider-next",
        },

        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },

        breakpoints: {
          1199: {
            slidesPerView: 1,
          },
          991: {
            slidesPerView: 1,
          },
          767: {
            slidesPerView: 1,
          },
          575: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    // team slider 
    if ($('.team-slider').length > 0) {
      const teamSlider = new Swiper(".team-slider", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        navigation: {
          prevEl: ".slider-prev",
          nextEl: ".slider-next",
        },
        breakpoints: {
          1199: {
            slidesPerView: 3,
          },
          991: {
            slidesPerView: 2,
          },
          767: {
            slidesPerView: 2,
          },
          575: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    // Testimonial V3 slider 
    if ($('.testi-style3-active').length > 0) {
      const teamSlider = new Swiper(".testi-style3-active", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        navigation: {
          prevEl: ".slider-prev",
          nextEl: ".slider-next",
        },
        breakpoints: {
          1199: {
            slidesPerView: 3,
          },
          991: {
            slidesPerView: 2,
          },
          767: {
            slidesPerView: 2,
          },
          575: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    // Brand V3 slider 
    if ($('.brand-active').length > 0) {
      const teamSlider = new Swiper(".brand-active", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        navigation: {
          prevEl: ".slider-prev",
          nextEl: ".slider-next",
        },
        breakpoints: {
          1199: {
            slidesPerView: 5,
          },
          991: {
            slidesPerView: 5,
          },
          767: {
            slidesPerView: 3,
          },
          575: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    // Project slider 
    if ($('.project-active').length > 0) {
      const teamSlider = new Swiper(".project-active", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        navigation: {
          prevEl: ".slider-prev",
          nextEl: ".slider-next",
        },
        pagination: {
          el: ".slider-pagination",
          clickable: true,
          dynamicBullets: false,
        },
        breakpoints: {
          1400: {
            slidesPerView: 4.5,
          },
          1199: {
            slidesPerView: 3.5,
          },
          991: {
            slidesPerView: 2.5,
          },
          767: {
            slidesPerView: 2,
          },
          575: {
            slidesPerView: 1.5,
          },
          469: {
            slidesPerView: 1.5,
          },
          0: {
            slidesPerView: 1.1,
          },
        },
      });
    }

    /*-----------------------------------
    08.Back to top    
    -----------------------------------*/
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 20) {
        $("#back-top").addClass("show");
      } else {
        $("#back-top").removeClass("show");
      }
    });

    $("#back-top").on('click', function () {
      $("html, body").animate({ scrollTop: 0 }, 800);
      return false;
    });

    /*-----------------------------------
    9.MagnificPopup  view    
    -----------------------------------*/
    $(".popup-video").magnificPopup({
      type: "iframe",
      removalDelay: 260,
      mainClass: "mfp-zoom-in",
    });

    $(".img-popup").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });

    /*-----------------------------------
    10. Mouse Cursor    
    -----------------------------------*/
    function mousecursor() {
      if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
          t = document.querySelector(".cursor-outer");
        let n,
          i = 0,
          o = !1;
        (window.onmousemove = function (s) {
          o ||
            (t.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (e.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (n = s.clientY),
            (i = s.clientX);
        }),
          $("body").on("mouseenter", "a, .cursor-pointer", function () {
            e.classList.add("cursor-hover");
            t.classList.add("cursor-hover");
          }),
          $("body").on("mouseleave", "a, .cursor-pointer", function () {
            ($(this).is("a") && $(this).closest(".cursor-pointer").length) ||
              (e.classList.remove("cursor-hover"),
                t.classList.remove("cursor-hover"));
          }),
          (e.style.visibility = "visible"),
          (t.style.visibility = "visible");
      }
    }
    $(function () {
      mousecursor();
    });


    /*-----------------------------------
    11. Team hover
    -----------------------------------*/
    $(document).on("mouseenter mouseleave", ".team-card .icon i, .team-card .thumb-box", function (event) {
      var $teamCard = $(this).closest(".team-card");
      var $thumbSocialInfo = $teamCard.find(".thumb-social-info");

      if (event.type === "mouseenter") {
        $thumbSocialInfo.css({
          visibility: "visible",
          opacity: "1",
          transition: "opacity 0.5s ease"
        });
      } else if (event.type === "mouseleave") {
        var iconHovered = $teamCard.find(".icon i:hover").length;
        var thumbBoxHovered = $teamCard.find(".thumb-box:hover").length;

        if (iconHovered === 0 && thumbBoxHovered === 0) {
          $thumbSocialInfo.css({
            visibility: "hidden",
            opacity: "0",
            transition: "opacity 0.5s ease"
          });
        }

        $teamCard.find(".icon i").css({
          backgroundColor: "",
          transition: "background-color 0.5s ease"
        });
      }
    });
    var value = parseInt("123", 10);

    /*-----------------------------------
    12. // PreLoader  
    -----------------------------------*/

    $(".preloader").addClass("loaded")

  });

})(jQuery);