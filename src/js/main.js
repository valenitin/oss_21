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
        // prevArrow:'<span class="slider-arrow"><svg width="9" height="15"><use href="./img/icons.svg#icon-arrow-left"></use></svg></span>',
        // nextArrow:'<span class="slider-arrow"><svg width="9" height="15"><use href="./img/icons.svg#icon-arrow-right"></use></svg></span>',
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




});


