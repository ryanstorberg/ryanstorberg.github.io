$(document).ready(function() {
	$("html").hide();
	$("ul").css("margin-top", "1000px");
	$("ul").animate({marginTop: "0px"}, 5000);
	$("html").delay(5).fadeIn(5000);
});