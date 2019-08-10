/*
    Template  Name: 
    Template URI:
    Description: 
    Author:
    Author URI: 
    Version: 
*/
/*==============================================
[  Table of contents  ]
================================================

    01. Sticky Menu
    02. Slick Nav
    03. Rocket Scroll Top
    04. Preloader

======================================
[ End table content ]
======================================*/
(function($) {
    "use strict";


    /*---------------------------------------------*
     * 01. Sticky Menu
     ---------------------------------------------*/

    jQuery(document).ready(function($) {

        $(".header_area").sticky({
            stopSpacing: 0
        });

    /*---------------------------------------------*
     * 02. Slick Nav
     ---------------------------------------------*/

        if ($.fn.slicknav) {
            $('.mainmenu ul#nav').slicknav({
                prependTo: ".responsive_menu",
                label: ""
            })
        }

        $(".testimonial-carousel").owlCarousel({
            items: 1,
            dots: true,
            loop: true,
            nav: true,
            margin: 30,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                375: {
                    items: 1
                },
                480: {
                    items: 1
                },
                769: {
                    items: 2
                },
                1000: {
                    items: 2
                },
                1200: {
                    items: 2
                },
            },
            navText: ["<img src='assets/img/angle-left.png'>", "<img src='assets/img/angle-right.png'>"]
        });

    });


    /*---------------------------------------------*
     * 03. Rocket Scroll Top
     ---------------------------------------------*/

    jQuery(window).scroll(function() {
        if (jQuery(window).scrollTop() < 50) {
            jQuery('#rocketmeluncur').slideUp(500);
        } else {
            jQuery('#rocketmeluncur').slideDown(500);
        }
        var ftrocketmeluncur = jQuery("#ft")[0] ? jQuery("#ft")[0] : jQuery(document.body)[0];
        var scrolltoprocketmeluncur = $('rocketmeluncur');
        var viewPortHeightrocketmeluncur = parseInt(document.documentElement.clientHeight);
        var scrollHeightrocketmeluncur = parseInt(document.body.getBoundingClientRect().top);
        var basewrocketmeluncur = parseInt(ftrocketmeluncur.clientWidth);
        var swrocketmeluncur = scrolltoprocketmeluncur.clientWidth;
    })

    jQuery('#rocketmeluncur').click(function() {
        jQuery("html, body").animate({
            scrollTop: '0px',
            display: 'none'
        }, {
            duration: 600,
            easing: 'linear'
        });

        var self = this;
        this.className += ' ' + "launchrocket";
        setTimeout(function() {
            self.className = 'showrocket';
        }, 800)
    });




    /*---------------------------------------------*
     * 04. Preloader
     ---------------------------------------------*/

    $(window).load(function() { // makes sure the whole site is loaded
        $('#status').fadeOut(); // will first fade out the loading animation
        $('.preloader-wrapper').delay(200).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(200).css({
            'overflow-x': 'hidden'
        });
    })


}(jQuery));
    /*---------------------------------------------*
     * 05. Scroll
     ---------------------------------------------*/

    $(document).scroll(function() {
    // Onepage Nav
        $('.mainmenu').onePageNav({
            currentClass: 'active',
            changeHash: true,
            scrollSpeed: 900,
            scrollOffset: 0,
            scrollThreshold: 0.3,
            filter: ':not(.no-scroll)'
        });

    });



$(function() {
    $('a[href*="#"]:not([href="#"]), #nav a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 100
                }, 1000);
                return false;
            }
        }
    });
});