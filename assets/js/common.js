AOS.init()

document.addEventListener('DOMContentLoaded', function(){
    $('.slider__body').slick({
        infinite: false,
        speed: 1000,
        slidesToShow: 1,
        variableWidth: false,
        arrows:false,
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover:true,
    });
    $('.slider__body').on('afterChange', function() {
        // Hide/show captions
        if(!$('video').hasClass('slick-active')){
            $('video').trigger('pause')
        }
    });
});





