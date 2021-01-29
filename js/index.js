$(document).ready(function() {


    // //slider height
    // $(".owl-carousel .item").height($(window).height())
    // $(window).resize(function() {
    //     $('.owl-carousel .item').height($(window).height())
    // })


    // Owl carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        animateOut: 'fadeOut',
        smartSpeed: 450,
    })


    //side-menu
    $('.menu').on('click', function() {
        $('.side-menu').toggleClass('open')
    })

    $('.fa-times').on('click', function() {
        $('.side-menu').removeClass('open')
    })

    //scroll navbar
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 30) {
            $('.nav-left').fadeOut(500);
            $('.nav-top').fadeIn(500);
        } else {
            $('.nav-left').fadeIn(500);
            $('.nav-top').fadeOut(500);
        }
    })


    // Counter up
    const counters = document.querySelectorAll('.about .num');
    const delay = 200;

    counters.forEach(counter => {
        const updateCount = () => {
            const target = counter.getAttribute('data-target')
            const count = +counter.innerText;
            const speed = target / delay;


            if (count < target) {

                counter.innerText = Math.ceil(count + speed);
                setTimeout(updateCount, 1);

            } else {
                counter.innerText = target;
            }
        }
        updateCount();
    })

    // count down
    var content = $('.count-down').html();

    $('.count-down').countdown('2021/03/28', function(event) {
        $(this).html(event.strftime(content));
    });



    // Switch between colors
    var link = $('link[data-color="switch"]');

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

    // switch image logo

})