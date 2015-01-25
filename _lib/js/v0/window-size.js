// screensize check
// add a class to <body> based on the window size
// &#169; XXIX / Jacob Heftmann

$(document).ready(function() {

	var screenXs = 480;
	var screenSm = 768;
	var screenMd = 992;
	var screenLg = 1200;

	if (($(window).innerWidth()) <= screenXs) {
	$('body').addClass('screen-xs');
	$('body').removeClass('screen-sm screen-md screen-lg screen-xl');
	}
	if (($(window).innerWidth()) > screenXs && ($(window).innerWidth()) < screenSm) {
	$('body').addClass('screen-sm');
	$('body').removeClass('screen-xs screen-md screen-lg screen-xl');
	}
	if (($(window).innerWidth()) >= screenSm && ($(window).innerWidth()) < screenMd) {
	$('body').addClass('screen-md');
	$('body').removeClass('screen-xs screen-sm screen-lg screen-xl');
	}
	if (($(window).innerWidth()) >= screenMd && ($(window).innerWidth()) < screenLg) {
	$('body').addClass('screen-lg');
	$('body').removeClass(' screen-xs screen-sm screen-md screen-xl');
	}
	if (($(window).innerWidth()) >= screenLg) {
	$('body').addClass('screen-xl');
	$('body').removeClass(' screen-xs screen-sm screen-md screen-lg');
	}

	$(window).resize(function(){
		if (($(window).innerWidth()) <= screenXs) {
		$('body').addClass('screen-xs');
		$('body').removeClass('screen-sm screen-md screen-lg screen-xl');
		}
		if (($(window).innerWidth()) > screenXs && ($(window).innerWidth()) < screenSm) {
		$('body').addClass('screen-sm');
		$('body').removeClass('screen-xs screen-md screen-lg screen-xl');
		}
		if (($(window).innerWidth()) >= screenSm && ($(window).innerWidth()) < screenMd) {
		$('body').addClass('screen-md');
		$('body').removeClass('screen-xs screen-sm screen-lg screen-xl');
		}
		if (($(window).innerWidth()) >= screenMd && ($(window).innerWidth()) < screenLg) {
		$('body').addClass('screen-lg');
		$('body').removeClass(' screen-xs screen-sm screen-md screen-xl');
		}
		if (($(window).innerWidth()) >= screenLg) {
		$('body').addClass('screen-xl');
		$('body').removeClass(' screen-xs screen-sm screen-md screen-lg');
		}
	});

});