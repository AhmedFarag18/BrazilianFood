$(document).ready(function() {
    //loading page
    $(window).on('load', function() {
        $('.loading').fadeOut(2000)
    });

    /*================== Owl carousel for Slider Images ========================================================================= */
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        animateOut: 'fadeOut',
        smartSpeed: 450,
    });

    /*=====================  Open Side Menu  ====================================================================== */
    $('.menu').on('click', function() {
        $('.side-menu').toggleClass('open')
    })
    $('.fa-times').on('click', function() {
        $('.side-menu').removeClass('open')
    });

    /*============================== search =====================================================*/
    let search = document.querySelector(".search-menu");
    let searchIcon = document.querySelectorAll(".search-icon i");
    let closeSearch = document.querySelector(".search-menu .fa-times");

    searchIcon.forEach(item => {
        item.onclick = function() {
            search.classList.add("open-search");
        }
    });
    closeSearch.onclick = function() {
        search.classList.remove("open-search");
    }

    /*====================  Hide and Show Navbar and Sidebar When Scroll =============================*/
    $(window).scroll(function() {
        //scroll navbar
        if ($(this).scrollTop() >= 30) {
            $('.nav-left').fadeOut(500);
            $('.nav-top').fadeIn(500);
        } else {
            $('.nav-left').fadeIn(500);
            $('.nav-top').fadeOut(500);
        }
        /*==================== Button to Top page =============================*/
        if ($(window).scrollTop() >= 800) {
            $('.up').fadeIn(1000);
        } else {
            $('.up').fadeOut(1000);
        }
    });
    // when click button
    $('.up').click(function() {
        $('html,body').animate({
            scrollTop: 0
        }, 2000);
    });

    /*================================= Count down ========================================================== */
    var content = $('.count-down').html();

    $('.count-down').countdown('2022/03/28', function(event) {
        $(this).html(event.strftime(content));
    });

    /*=========================================================================== 
    //Smooth scroll
    ============================================================================= */
    $('.side-menu li a').on('click', function() {
        //add class active on menu
        $(this).addClass('active').parent().siblings().find('a').removeClass('active')
        $('html,body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top - 150
        })
    });

    /* ===========================================================
        Start Counter when scroll
    ==========================================================*/
    let nums = document.querySelectorAll(".num-count");
    let numsSection = document.querySelector(".about");
    let started = false;

    window.onscroll = () => {
        // Start Counter when scroll
        if (window.scrollY >= numsSection.offsetTop - 600) {
            if (!started) {
                nums.forEach((num) => startCount(num));
            }
            started = true;
        }
    };
    // start count numbers 
    function startCount(ele) {
        let goal = ele.dataset.goal;
        let count = setInterval(() => {
            ele.textContent++;
            if (ele.textContent == goal) {
                clearInterval(count);
            }
        }, 6000 / goal);
    }


    /*===================================================================================
        Toogle Theme - light and dark mode 
    ==================================================================================== */
    let logo = $('.logo img');

    // to get theme from local storage
    function toggleTheme() {
        if (localStorage.getItem("restaurant-theme") !== null) {
            if (localStorage.getItem("restaurant-theme") === "darkmode") {
                $("body").addClass("darkmode");
            } else {
                $("body").removeClass("darkmode");
            }
        }
        updateIcon();
    }
    toggleTheme();

    // when click the icon change theme
    $(".toggle-theme").on("click", function() {
        $("body").toggleClass("darkmode");
        if ($("body").hasClass("darkmode")) {
            localStorage.setItem("restaurant-theme", "darkmode");
        } else {
            localStorage.setItem("restaurant-theme", "lightmode");
        }
        updateIcon();
    });

    // to update the icon when change theme
    function updateIcon() {
        if ($("body").hasClass("darkmode")) {
            $(".toggle-theme i").removeClass("fa-moon");
            $(".toggle-theme i").addClass("fa-sun");
            logo.attr('src', 'images/logo/white.png');
        } else {
            $(".toggle-theme i").removeClass("fa-sun");
            $(".toggle-theme i").addClass("fa-moon");
            logo.attr('src', 'images/logo/black.png');
        }
    }

    /*=========================================
    //Aos animation scroll
    ================================================== */
    AOS.init();
});
=======
/*---------------loading page [Preloader] ----------*/
$(window).on("load", function() {
    $(".loading").fadeOut("slow");
});

$(document).ready(function() {
    /*================== Owl carousel for Slider Images ========================================================================= */
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        animateOut: 'fadeOut',
        smartSpeed: 450,
    });

    /*=====================  Open Side Menu  ====================================================================== */
    $('.menu').on('click', function() {
        $('.side-menu').toggleClass('open')
    })
    $('.fa-times').on('click', function() {
        $('.side-menu').removeClass('open')
    });

    /*============================== search =====================================================*/
    let search = document.querySelector(".search-menu");
    let searchIcon = document.querySelectorAll(".search-icon i");
    let closeSearch = document.querySelector(".search-menu .fa-times");

    searchIcon.forEach(item => {
        item.onclick = function() {
            search.classList.add("open-search");
        }
    });
    closeSearch.onclick = function() {
        search.classList.remove("open-search");
    }

    /*====================  Hide and Show Navbar and Sidebar When Scroll =============================*/
    $(window).scroll(function() {
        //scroll navbar
        if ($(this).scrollTop() >= 30) {
            $('.nav-left').fadeOut(500);
            $('.nav-top').fadeIn(500);
        } else {
            $('.nav-left').fadeIn(500);
            $('.nav-top').fadeOut(500);
        }
        /*==================== Button to Top page =============================*/
        if ($(window).scrollTop() >= 800) {
            $('.up').fadeIn(1000);
        } else {
            $('.up').fadeOut(1000);
        }
    });
    // when click button
    $('.up').click(function() {
        $('html,body').animate({
            scrollTop: 0
        }, 2000);
    });

    /*================================= Count down ========================================================== */
    var content = $('.count-down').html();

    $('.count-down').countdown('2022/03/28', function(event) {
        $(this).html(event.strftime(content));
    });

    /*=========================================================================== 
    //Smooth scroll
    ============================================================================= */
    $('.side-menu li a').on('click', function() {
        //add class active on menu
        $(this).addClass('active').parent().siblings().find('a').removeClass('active')
        $('html,body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top - 150
        })
    });

    /* ===========================================================
        Start Counter when scroll
    ==========================================================*/
    let nums = document.querySelectorAll(".num-count");
    let numsSection = document.querySelector(".about");
    let started = false;

    window.onscroll = () => {
        // Start Counter when scroll
        if (window.scrollY >= numsSection.offsetTop - 600) {
            if (!started) {
                nums.forEach((num) => startCount(num));
            }
            started = true;
        }
    };
    // start count numbers 
    function startCount(ele) {
        let goal = ele.dataset.goal;
        let count = setInterval(() => {
            ele.textContent++;
            if (ele.textContent == goal) {
                clearInterval(count);
            }
        }, 6000 / goal);
    }


    /*===================================================================================
        Toogle Theme - light and dark mode 
    ==================================================================================== */
    let logo = $('.logo img');

    // to get theme from local storage
    function toggleTheme() {
        if (localStorage.getItem("restaurant-theme") !== null) {
            if (localStorage.getItem("restaurant-theme") === "darkmode") {
                $("body").addClass("darkmode");
            } else {
                $("body").removeClass("darkmode");
            }
        }
        updateIcon();
    }
    toggleTheme();

    // when click the icon change theme
    $(".toggle-theme").on("click", function() {
        $("body").toggleClass("darkmode");
        if ($("body").hasClass("darkmode")) {
            localStorage.setItem("restaurant-theme", "darkmode");
        } else {
            localStorage.setItem("restaurant-theme", "lightmode");
        }
        updateIcon();
    });

    // to update the icon when change theme
    function updateIcon() {
        if ($("body").hasClass("darkmode")) {
            $(".toggle-theme i").removeClass("fa-moon");
            $(".toggle-theme i").addClass("fa-sun");
            logo.attr('src', 'images/logo/white.png');
        } else {
            $(".toggle-theme i").removeClass("fa-sun");
            $(".toggle-theme i").addClass("fa-moon");
            logo.attr('src', 'images/logo/black.png');
        }
    }

    /*=========================================
    //Aos animation scroll
    ================================================== */
    AOS.init();
});
>>>>>>> 8d341d22d73bb44d9fc54418de11836565e0fb24
