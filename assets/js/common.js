AOS.init()

document.addEventListener('DOMContentLoaded', function () {
    $('.slider__body').slick({
        infinite: false,
        speed: 3000,
        slidesToShow: 1,
        variableWidth: false,
        arrows: false,
        autoplay:true,
        autoplaySpeed: 7000,
        dots:true,
    });
    $('.slider__body').on('afterChange', function () {
        // Hide/show captions
        if (!$('video').hasClass('slick-active')) {
            $('video').trigger('pause')
        }
    });
    
    $('.play_button').on('click', function(){
        $('.video__wrapper').addClass('active')
        $('video').trigger('play')
        $(this).fadeOut()
    })
});