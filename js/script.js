$(document).ready(function () {
    //sticky
    // $('.js--section-produtos').waypoint(function (direction) {
    //     if (direction == "down") {
    //         $('nav').addClass('sticky');
    //     } else {
    //         $('nav').removeClass('sticky');
    //     }
    // }, {
    //         offset: '60px;'
    //     });

    $('.js-home').click(function () {
        $('html, body').animate({ scrollTop: $('#home').offset().top }, 1000);
    });

    $('.js-masculinos').click(function () {
        console.log('Teste')
        $('html, body').animate({ scrollTop: $('.js--masculinos').offset().top }, 1000);
    });

    $('.js-femininos').click(function () {
        $('html, body').animate({ scrollTop: $('.js--femininos').offset().top }, 1000);
    });
});