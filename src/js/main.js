$(function() {
  $(".header__slider").slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="" />',
    nextArrow:
      '<img class="slider-arrows slider-arrows__rigth" src="img/arrows-right.svg" alt="" />',
    asNavFor: ".slider-dots"
  });
  $(".slider-dots").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: ".header__slider"
  });
});
