// window height
// give an object 100% by adding class .js-full-height
// &#169; XXIX / Jacob Heftmann

$(document).ready(function() {
	$(window).resize(function() {
		$('.js-full-height').height($(window).height()).css('max-height',$(window).height());
	});
	$(window).trigger('resize');
});