// image orientation
// get the orientation (landscape / portrait) of an image or div with background image and add a class accordingly
// it will automatically assign a class to every image
// set .js-image-orientation on an object to do this manually
// &#169; XXIX / Jacob Heftmann




// by default, add this to each image
$('img').each(function() {

	imgHeight = $(this).height();
	imgWidth = $(this).width();

	if (imgHeight > imgWidth) {
		$(this).addClass('img-portrait');
	} else {
		$(this).addClass('img-landscape');
	}
});

// also get them manually
$('.js-image-orientation').each(function() {

	imgHeight = $(this).height();
	imgWidth = $(this).width();

	if (imgHeight > imgWidth) {
		$(this).addClass('img-portrait');
	} else {
		$(this).addClass('img-landscape');
	}
});