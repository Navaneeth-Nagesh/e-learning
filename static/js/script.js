/*jslint browser: true*/
/*global $, jQuery, alert*/


//sticky header

var position = 0;

$(window).scroll(function (e) {
    "use strict";
    var $element = $('.header');
    var scrollTop = $(this).scrollTop();
    if (scrollTop <= 0) {
        $element.removeClass('hide').removeClass('scrolling');
    } else if (scrollTop < position) {
        $element.removeClass('hide');
    } else if (scrollTop > position) {
        $element.addClass('scrolling');
        if (scrollTop + $(window).height() >= $(document).height() - $element.height()) {
            $element.removeClass('hide');
        } else if (Math.abs($element.position().top) < $element.height()) {
            $element.addClass('hide');
        }
    }
    position = scrollTop;
});


// waypoint image
var $dipper = $('.dipper');
$dipper.waypoint(function () {
    "use strict";

    $(this.element).addClass('dipper-animate');


}, {
    offset: '80%'
});

var $animate = $('.feature-paragraph:nth-child(odd)');
$animate.waypoint(function () {
    "use strict";
    $(this.element).addClass('animated');
    $(this.element).addClass('bounceInLeft');

}, {
    offset: '80%'
});

var $animate2 = $('.feature-paragraph:nth-child(even)');
$animate2.waypoint(function () {
    "use strict";
    $(this.element).addClass('animated');
    $(this.element).addClass('bounceInRight');

}, {
    offset: '80%'
});

var $coverPic = $('.cover-pic');
var $coverCaption = $('.cover-caption');

$coverPic.waypoint(function (direction) {
    "use strict";
    if (direction === 'down') {
        $coverPic.addClass('cover-picBlur');
        $coverCaption.css('opacity', '1');

    } else {
        $coverPic.removeClass('cover-picBlur');
        $coverCaption.css('opacity', '0');

    }
}, {
    offset: '-50%'
});

var login = document.getElementById('login');

window.onclick = function (event) {
    "use strict";
    if (event.target === login) {
        login.style.display = "none";
    }
};

//sign up
var signup = document.getElementById('signup');

window.onclick = function (event) {
    "use strict";
    if (event.target === signup) {
        signup.style.display = "none";
    }
};

function blured(event) {
    "use strict";
    if (event.target === login) {
        console.log("you work");
        //        backgroundBlur.style.filter.blur('5px');
    }
}

var login = document.getElementById('log').addEventListener('click', blured);
var backgroundBlur = document.getElementById('blur');

window.onclick = blured;

//smooth scroll effect

$(document).ready(function () {
    "use strict";
    $('.header_container ul li a[href*=#]').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
            location.hostname === this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target ||
                $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body')
                    .animate({
                        scrollTop: targetOffset
                    }, 1000);
                return false;
            }
        }
    });
});



// carousels


// Quote carousel
var owl = $('.owl-quotes');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
});
// quote next and previous buttons
var quoteBtn = $('.owl-quotes');
owl.owlCarousel();
$('#quoteNextBtn').click(function () {
    "use strict";
    quoteBtn.trigger('next.owl.carousel');
});

$('#quotePrevBtn').click(function () {
    "use strict";
    quoteBtn.trigger('prev.owl.carousel', [300]);
});


// Data Science Carousel
var owl = $('.owl-science');
owl.owlCarousel({
    items: 3,
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 3
        }
    }

});
// Data science next and previous buttons
var scienceBtn = $('.owl-science');
owl.owlCarousel();
$('#scienceNextBtn').click(function () {
    "use strict";
    scienceBtn.trigger('next.owl.carousel');
});

$('#sciencePrevBtn').click(function () {
    "use strict";
    scienceBtn.trigger('prev.owl.carousel', [300]);
});



// Computer science carousel
var owl = $('.owl-computer-science');
owl.owlCarousel({
    items: 3,
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 3
        }
    }

});

// Computer science next and previous buttons
var computerBtn = $('.owl-computer-science');
owl.owlCarousel();
$('#computerNextBtn').click(function () {
    "use strict";
    computerBtn.trigger('next.owl.carousel');
});

$('#computerPrevBtn').click(function () {
    "use strict";
    computerBtn.trigger('prev.owl.carousel', [300]);
});

// Social science Carousel
var owl = $('.owl-social');
owl.owlCarousel({
    items: 3,
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
});
// social science next and previous buttons
var socialBtn = $('.owl-social');
owl.owlCarousel();
$('#socialNextBtn').click(function () {
    "use strict";
    socialBtn.trigger('next.owl.carousel');
});

$('#socialPrevBtn').click(function () {
    "use strict";
    socialBtn.trigger('prev.owl.carousel', [300]);
});



// Financial and Mangement Carousel
var owl = $('.owl-finance');
owl.owlCarousel({
    items: 3,
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
});
// Financial and mangement next and previous buttons
var owl = $('.owl-finance');
owl.owlCarousel();
$('#financeNextBtn').click(function () {
    "use strict";
    owl.trigger('next.owl.carousel');
});

$('#financePrevBtn').click(function () {
    "use strict";
    owl.trigger('prev.owl.carousel', [300]);
});


