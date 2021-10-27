$(document).ready(function(){
    $('.hero__slick').slick({
        arrows:false,
        dots: true,
        pauseOnHover:true,
        dotsClass:'hero__dots',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});