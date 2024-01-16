(function ($, root, undefined) {
	
	$(function () {
		
		'use strict';
		
		$('.toggle-menu').click( function() {
			$(this).toggleClass('active');
			$('.nav-menu').toggleClass('active');
		});

	});
	
})(jQuery, this);
