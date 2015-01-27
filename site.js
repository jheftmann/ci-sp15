var palm = 767;
var lap = 768;
var desk = 992;
var cinema = 1200;

$(document).ready(function() {


	// nav
	$('nav ul').onePageNav({
	    currentClass: 'current',
	    changeHash: false,
	    scrollSpeed: 750,
	    scrollThreshold: 0.5,
	    filter: '',
	    easing: 'swing',
	    begin: function() {
	        //I get fired when the animation is starting
	    },
	    end: function() {
	        //I get fired when the animation is ending
	    },
	    scrollChange: function($currentListItem) {
	        //I get fired when you enter a section and I pass the list item of the section
	    }
	});

	// scrxol to top
	$('#top').click(function() {
		$("html, body").animate({ scrollTop: 0 }, "fast");
	});

});