// scroll to top
// add id #top to <a>
// &#169; XXIX / Jacob Heftmann


$(document).ready(function(){
	$('#top').click(function() {
		$("html, body").animate({ scrollTop: 0 }, "fast");
	});
});