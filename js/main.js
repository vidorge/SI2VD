$( document ).ready(function() {
  

	$("#header").load("templates/header.html", function(){

		$('nav li ul').hide().removeClass('fallback');
		$('nav li').hover(
			function () {
				$('ul', this).stop().slideDown(500);
			},
			function () {
				$('ul', this).stop().slideUp(500);
			}
		);

	});


});
