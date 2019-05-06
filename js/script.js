$(document).ready(function () {
    //sticky

    $('.js--section-feminino').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
            offset: '60px;'
        });

    $('.js-home').click(function () {
        $('html, body').animate({ scrollTop: $('#home').offset().top }, 1000);
    });

    $('.js-masculino').click(function () {
        console.log('Scrolled to waypoint!')
        $('html, body').animate({ scrollTop: $('.js--section-masculino').offset().top }, 1000);
    });

    $('.js-feminino').click(function () {
        console.log('Scrolled to waypoint!')
        $('html, body').animate({ scrollTop: $('.js--section-feminino').offset().top }, 1000);
    });
});