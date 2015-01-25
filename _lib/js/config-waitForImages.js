// 1. anything with a class .js-load-image will get a nice jammer
// 2.
// 3. give body a class of .js-images-loaded

$('img:uncached').addClass('js-img-loading');

/*
$('.js-load-images').waitForImages(function() {

	$.waitForImages.hasImgProperties = ['backgroundImage'];
    // All descendant images have loaded, now slide up.
    $(this).find('img').addClass('js-img-loaded').removeClass('js-img-loading');
    $(this).find('.img-container').addClass('js-img-loaded').removeClass('js-img-loading');
    console.log('images loaded!');
});
*/

/*
$(".img-container").waitForImages({
    finished: function() {
    	//$(this).parent().addClass('js-images-loaded').removeClass('js-img-loading');
    },
    each: function() {
      $(this).addClass('js-img-loaded').removeClass('js-img-loading');
    },
    waitForAll: true
});
*/

$('body').addClass('js-images-loading');
$('.js-load-img').addClass('js-img-loading');

$(".js-load-img").waitForImages({

    finished: function() {

    },
    each: function() {
      $(this).addClass('js-img-loaded').removeClass('js-img-loading');
      $('body').removeClass('js-images-loading').addClass('js-images-loaded');
    },
    waitForAll: true
});