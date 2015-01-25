// window height
// give 'body' a class based on the aspect ratio of the window
// you can adjust the sensitivity
// &#169; XXIX / Jacob Heftmann

$(document).ready(function() {
	$(window).resize(function() {

		var windowHeight = $(window).height();
		var windowWidth = $(window).width();
		var windowThresholdMax = 1.0;
		var windowThresholdMin = 1.0;

		if ((windowHeight / windowWidth) < windowThresholdMin) {

			console.log('landscape');
			$('body').addClass('js-window-landscape').removeClass('js-window-portrait js-window-square');

		} else if ((windowHeight / windowWidth) > windowThresholdMax) {

			console.log('portrait');
			$('body').addClass('js-window-portrait').removeClass('js-window-landscape js-window-square');

		} else {

			console.log('square');
			$('body').addClass('js-window-square').removeClass('js-window-portrait js-window-landscape');

		}

		//console.log(windowHeight);
		//console.log(windowWidth);

	});
	$(window).trigger('resize');
});