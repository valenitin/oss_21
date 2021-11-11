$(document).ready(function () {

    $('.hero__slick').slick({
        arrows: false,
        dots: true,
        pauseOnHover: true,
        dotsClass: 'hero__dots',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.product-slider').slick({
        arrows: false,
        appendArrows:'.slider-arrows',
        dots: true,
        variableWidth: true,
        dotsClass: 'products__dots',
        slidesToShow: 2,
        slidesToScroll: 2,
    });

    $(".slider-arrows__next").click(function() {
        $(".product-slider").slick('slickNext');
    });

    $(".slider-arrows__prev").click(function() {
        $(".product-slider").slick('slickPrev');
    });

    $('.reviews-slider').slick({
        arrows: false,
        dots: false,
        pauseOnHover: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,

    });



});


