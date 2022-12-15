AOS.init()

document.addEventListener('DOMContentLoaded', function () {
    $('.slider__body').slick({
        infinite: false,
        speed: 1000,
        slidesToShow: 1,
        variableWidth: false,
        arrows: false,
        autoplaySpeed: 3000,
        pauseOnHover: true,
    });
    $('.slider__body').on('afterChange', function () {
        // Hide/show captions
        if (!$('video').hasClass('slick-active')) {
            $('video').trigger('pause')
        }
    });

    $('audio').prop('volume', 0.4)
    $('video').on('play', function () {
        $('audio').trigger('pause')
    })

    $('video').on('pause', function () {
        $('audio').trigger('play')
    })

    window.addEventListener('focus', function () {
        $('audio').trigger('play')
    });

    window.addEventListener('blur', function () {
        $('audio').trigger('pause')
    });
});