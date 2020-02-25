$(document).ready(function(){
	$(".nav-button").click(function(){
		//$(".logo_nav").css("display", "block");
		$(".logo_bg_2").toggle();
		$(".logo_nav").toggle();
		$(".logo_nav").removeClass("delay-2s");
		$(".logo_nav").removeClass("slow");
	});

	$('a[href^="#"]').on('click', function(event) {
		var hash = '#' + $(this).attr('href').split('#')[1]
		var element = $(hash)
		if (element.length) {
		  event.preventDefault();
		  history.pushState(hash, undefined, hash)
		  $('html, body').animate({scrollTop: element.offset().top}, 1000)
		}
	});   

	window.addEventListener('popstate', function(e) {
		if(e.state && e.state.startsWith('#') && $(e.state).length){
		  $('html, body').animate({scrollTop: $(e.state).offset().top}, 1000)
		}
	});

	$('html, body').on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
		$('html, body').stop();
	});
});

function display_floor_plan(floor) {
	let img_url = "img/plan_floor_" + floor + ".jpg"
	$(".floor-display").html('<img src="' + img_url + '" width="300">');
	$(".floor-each").removeClass("floor-selected");
	$(".floor-" + floor).addClass("floor-selected");
}