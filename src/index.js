import $ from 'jquery';
import slick from 'slick-carousel';

$(function() {
    const heroSlider = $('.hero__slider');
    if (heroSlider.length) {
        heroSlider.slick({
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: $('.hero__slider-btn--prev'),
          nextArrow: $('.hero__slider-btn--next')
        });
      }
});
