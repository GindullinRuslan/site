$(function () {
	$('.menu a, .hero__link, .logo').on("click", function (e) {
		e.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

  $('.header__burger, .menu a, .logo').click(function (event) {
    $('.menu').toggleClass('menu--active')
    $('.header__burger').toggleClass('header__burger--active')
    $('.logo').removeClass('logo--active')
  });

	var btn = $('.header');
  $(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
      btn.addClass('header--fixed');
    } else {
      btn.removeClass('header--fixed');
    }
	});
	
  var mixer = mixitup('.portfolio__content')
});