$(document).ready(function() {



    //loading page
    $(window).on('load', function() {

        $('.loading').fadeOut(2000)
    });

    /*=========================================================================================== */

    // Owl carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        animateOut: 'fadeOut',
        smartSpeed: 450,
    })

    /*=========================================================================================== */

    //side-menu
    $('.menu').on('click', function() {
        $('.side-menu').toggleClass('open')
    })

    $('.fa-times').on('click', function() {
        $('.side-menu').removeClass('open')
    })



    /*=========================================================================================== */

    $(window).scroll(function() {

        //scroll navbar
        if ($(this).scrollTop() >= 30) {
            $('.nav-left').fadeOut(500);
            $('.nav-top').fadeIn(500);
        } else {
            $('.nav-left').fadeIn(500);
            $('.nav-top').fadeOut(500);
        }


        // button up
        if ($(window).scrollTop() >= 800) {
            $('.up').fadeIn(1000);

        } else {
            $('.up').fadeOut(1000);
        }
    })

    // when click button
    $('.up').click(function() {

        $('html,body').animate({
            scrollTop: 0
        }, 2000)

    });
    /*=========================================================================================== */

    /* ===========  [ Counter up ]  ===========*/


    $('.countTo-1').countTo({
        from: 0,
        to: 13,
        speed: 12000,
        refreshInterval: 80
    });

    $('.countTo-2').countTo({
        from: 0,
        to: 210,
        speed: 12000,
        refreshInterval: 80
    });
    $('.countTo-3').countTo({
        from: 0,
        to: 26,
        speed: 12000,
        refreshInterval: 80
    });
    $('.countTo-4').countTo({
        from: 0,
        to: 1000,
        speed: 12000,
        refreshInterval: 80
    });





    /*=========================================================================================== */

    // count down
    var content = $('.count-down').html();

    $('.count-down').countdown('2022/03/28', function(event) {
        $(this).html(event.strftime(content));
    });


    /*=========================================================================================== */


    // Switch between colors
    var link = $('link[data-color="switch"]');

    // switch image logo
    var logo = $('.logo img');

    $('.fa-adjust').on('click', function() {
        if (link.attr('href') == 'css/darkMode.css') {
            link.attr('href', 'css/ligthMode.css')
            logo.attr('src', 'images/logo/black.png')

        } else {
            link.attr('href', 'css/darkMode.css')
            logo.attr('src', 'images/logo/white.png')
        }
    })


    /*=========================================================================================== */
    //Smooth scroll
    $('.side-menu li a').on('click', function() {

        //add class active on menu
        $(this).addClass('active').parent().siblings().find('a').removeClass('active')

        $('html,body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top - 150
        })
    })


    /*=========================================================================================== */
    //Aos animation scroll
    AOS.init();


})