$('.top-slider').slick({
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  fade: true,
  arrows: false
})

$('.factory-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ],
});

$('.news-slider').slick({
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
})

$('.burger').click(function () {
  $('.burger-menu, .burger-menu-bg').toggleClass('active')
})

$('.burger-menu-bg').click(function () {
  $('.burger-menu, .burger-menu-bg').toggleClass('active')
})
