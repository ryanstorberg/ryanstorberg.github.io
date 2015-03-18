$(document).on("ready", function() {
	$(window).on("scroll", function() {
		if($(window).scrollTop() == 0) {
			$("#work").fadeIn();
			$("#name-and-title").fadeIn();
		} else {
			$("#work").fadeOut();
			$("#name-and-title").fadeOut();
		}
	});

	$(".project").css("height", $(".project").width() + "px");
	$(window).on("resize", function() {
		$(".project").css("height", $(".project").width() + "px");
	});

	$(".project").each(function() {
    var hue = 'rgb(' + (Math.floor((150-100)*Math.random()) + 50) + ',' + (Math.floor((256-199)*Math.random()) + 150) + ',' + (Math.floor((256-199)*Math.random()) + 150) + ')';
     	$(this).css("background-color", hue);
  });
});
