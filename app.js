window.onload = function () {
    $('.multiple-items').slick({
        infinite: true,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<button class="prev-btn left2"></button>',
        nextArrow: '<button class="next-btn right2"></button>',
    });
    $('.first-section-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000,
        arrows:false,
    })
    $('.div-kafelek-slider').slick({
        infinite:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:1500,
        arrows:false,
    })
};