// window height
// match the height of an object to the height of a parent object
// set .js-resize-proportionally on the object whose height you want to match proportionally
// set the padding size if the object has left or right padding that increases the box size
// &#169; XXIX / Jacob Heftmann

$(document).ready(function () {
	$(window).resize(function() {

	    $('.js-resize-proportionally').each(function(){

	      var proportionalWidth = $(this).width();
	      var proportionalHeight = proportionalWidth;
	      var paddingSize = 15; //if you're using a grid system with built-in gutters

			$(this).css('height', proportionalHeight + (paddingSize * 2));

			// tests
	      // console.log(proportionalHeight);
	      // console.log(proportionalWidth);

	    });
	  });

	  $(window).trigger('resize');
});