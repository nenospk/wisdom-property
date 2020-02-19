$(document).ready(function(){
	$(".nav-button").click(function(){
		//$(".logo_nav").css("display", "block");
		$(".logo_bg_2").toggle();
		$(".logo_nav").toggle();
	});
});

function display_floor_plan(floor) {
	let img_url = "img/plan_floor_" + floor + ".jpg"
	$(".floor-display").html('<img src="' + img_url + '" width="300">');
	$(".floor-each").removeClass("floor-selected");
	$(".floor-" + floor).addClass("floor-selected");
}