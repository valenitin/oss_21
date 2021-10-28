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
        arrows: true,
        appendArrows:'.slider-arrows',
        prevArrow:'<span class="slider-arrow"><svg width="9" height="15"><use href="./img/icons.svg#icon-arrow-left"></use></svg></span>',
        nextArrow:'<span class="slider-arrow"><svg width="9" height="15"><use href="./img/icons.svg#icon-arrow-right"></use></svg></span>',
        dots: true,
        variableWidth: true,
        dotsClass: 'products__dots',
        slidesToShow: 2,
        slidesToScroll: 2
    });
});


