// even odd
// test if the number of children in a parent object is even or add and add a class to the parent
// set evenoddParent to the parent selector
// set evenoddChild to the child selector (defaults to all children)
// &#169; XXIX / Jacob Heftmann

var evenoddParent = $('.js-even-odd');

$(evenoddParent).each(function(){

	var evenoddChild = $(this).children();
	var evenoddCount = $(evenoddChild).length;

	if (evenoddCount % 2 === 0) {
		$(this).addClass('has-even');
	}
	else {
		$(this).addClass('has-odd');
	}

	//console.log(evenoddCount);

});