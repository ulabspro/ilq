var $status = $('.jsTopSliderStatus');
var $slickElement = $('.jsTopSlider');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + ' of ' + slick.slideCount);
});

$slickElement.slick({
    // slide: 'img',
    autoplay: true,
    dots: false,
    fade: true,
    prevArrow: $('.jsTopSliderLeft'),
    nextArrow: $('.jsTopSliderRight')
});

$('.top-slider__image').hover(function () {
  $(this).closest('.top-slider__item').find('.top-slider-content').toggleClass('_anactive');
});