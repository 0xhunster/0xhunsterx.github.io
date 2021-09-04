$(document).ready(function(){
	// sticky menu
	$(".sticky-menu").waypoint(function(direction){
		if (direction == "down") {
			$("nav").addClass("sticky");
		} else {
			$("nav").removeClass("sticky");
		}
		
	});
});


#hello
