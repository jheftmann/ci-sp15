// window height
// center an object within its parent
// give the parent container a class of .js-va-parent
// give the child container a class of .js-va-child
// &#169; XXIX / Jacob Heftmann




function verticalCenter() {
	var parent = $('.vcp');
	var child = parent.find('.vcc');
	var topMargin = (parent.height() - child.height()) / 2;
  $(parent).each(function(){
    child.css('margin-top', topMargin);
  });
}

$(document).ready(function () {

	verticalCenter();

	$(window).resize(function() {
	
		verticalCenter();
		
  }); 
  $(window).trigger('resize');
});