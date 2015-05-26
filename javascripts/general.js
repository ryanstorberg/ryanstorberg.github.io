var resizeBoxes = function(element) {
	var elementHeight = element.height();
	var elementMargin = element.css("margin").replace("px", "") * 2;
	var elementPadding = element.css("padding").replace("px", "") * 2;
	element.css("height", elementHeight - elementPadding - elementMargin);
}

$(document).on("ready", function() {

	$(window).on("scroll", function() {
		if($(window).scrollTop() == 0) {

		} else {

		}
	});
  resizeBoxes($("#welcome"));
});
