// var vid = document.getElementById("bgvid");
var speed = 400;

$('nav a.inner').click(function(){
	var who = this.getAttribute('href');
	$('.content, #menu, .watermark img').fadeOut(speed);
	$(who).delay(speed).fadeIn(speed);
	$('.watermark > a').delay(speed).fadeIn(speed);
});

$('.watermark > a').click(function() {
	$(this).fadeOut(speed);
	$('.content').fadeOut(speed);
	$('#menu, .watermark img').delay(speed).fadeIn(speed);
});
