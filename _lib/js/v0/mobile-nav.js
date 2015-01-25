$(document).ready(function() {

	//toggle mobile nav
	$('.js-toggle-navigation-menu').click(function() {
		$('.navigation-menu').slideToggle('fast');
		$(this).toggleClass('mobile-nav-button-close');
	});

});