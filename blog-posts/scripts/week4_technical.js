$(document).ready(function() {
	$("header, #content, footer").hide();
	$("header").delay(10).fadeIn("slow", function(){
		$("#content, footer").fadeIn("slow");
	});
});