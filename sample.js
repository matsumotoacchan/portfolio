$(document).ready(function(){
	$('.top-wrapper').hide().fadeIn(2000);

	$(".about-wrapper").hide().fadeIn(3000);

	$("header a").click(function(){
		var id = $(this).attr("href");
		var position = $(id).offset().top;
		$("html, body").animate({"scrollTop":position},"slow");
	});

	$(".menu-modal a").click(function(){
		var id = $(this).attr("href");
		var position = $(id).offset().top;
		$("html, body").animate({"scrollTop":position},"slow");
		$(".menu-modal").hide();
		$("header").fadeIn();
	});

	$(".menu-icon").click(function(){
		$(".menu-modal").fadeIn();
		$("header").hide();
	});

	$('.item').hover(
	  function(){
	    $(this).find('i').animate({
	      'font-size':'35px'
	    }, 300);
	  },
	  function(){
	    $(this).find('i').animate({
	      'font-size':'30px'
	    }, 300);
	  }
	);
});