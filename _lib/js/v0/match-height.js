// window height
// match the height of an object to the height of a parent object
// set .js-height-parent on the object whose height you want to match
// set .js-height child on the object you want to give a height to
// &#169; XXIX / Jacob Heftmann

$(document).ready(function() {
	var parentHeight = $('.js-height-parent').height();
	var childHeight = $('.js-height-child').height();

	$('.js-height-child').height(parentHeight);

	console.log(childHeight);
	console.log(parentHeight);
});