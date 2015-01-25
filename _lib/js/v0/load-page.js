// load page
// add an effect when the page loads
// this plugin needs _load-page.less
// &#169; XXIX / Jacob Heftmann

$('body').addClass('js-load-page');

$(document).ready(function() {

	$('body').removeClass('js-load-page').addClass('js-page-loaded');

});