$(function($) {
    $('.hero-slider').slick({
        'dots':true,
        'prevArrow':false,
        'nextArrow':false,
        /*autoplay:true,*/
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.preparez-block__slider').slick ({
        'dots':true,
       /* 'prevArrow':false,
        'nextArrow':false,*/
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay:true
    });

    $('.preparez-block__next').on('click', function() {
        $('.preparez-block__slider').slick('slickNext');
    });

    $('.preparez-block__prev').on('click', function() {
        $('.preparez-block__slider').slick('slickPrev');
    });

});