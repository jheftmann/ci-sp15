$(document).ready(function () {
	// check if background images are loaded
	var images = $('img');
	$('.is-load-background-images').each(function(){
	  var el = $(this)
	    , image = el.css('background-image').match(/url\((['"])?(.*?)\1\)/);
	  if(image)
	    images = images.add($('<img>').attr('src', image.pop()));
	});

	// do stuff when they are
	images.imagesLoaded(function() {
		$('.is-load-background-images').addClass('is-background-loaded');
		$('body').addClass('is-background-images-loaded');
		console.log('background loaded!');
	});
});

/*
$(document).ready(function () {

  $('body').addClass('js-background-images-loading');

  // check if background images are loaded
  var images = $('img');
  $('.js-load-background').each(function(){
    var el = $(this)
      , image = el.css('background-image').match(/url\((['"])?(.*?)\1\)/);
    if(image)
      images = images.add($('<img>').attr('src', image.pop()));
  });

  // do stuff when they are
  images.imagesLoaded(function() {
    $('body').removeClass('js-background-images-loading').addClass('js-background-images-loaded');
  });

});
*/