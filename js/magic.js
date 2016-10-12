// var vid = document.getElementById("bgvid");
var speed = 400;
var audio_file = new Audio('assets/background_music.mp3');

$('nav a.inner').click(function(){
	var who = this.getAttribute('href');
	$('.content, #menu, .watermark img').fadeOut(speed);
	$('.overlay').fadeIn(speed);
	$(who).delay(speed).fadeIn(speed);
	$('.watermark > a').delay(speed).fadeIn(speed);
});

$('.watermark > a').click(function() {
	$(this).fadeOut(speed);
	$('.content, .overlay').fadeOut(speed);
	$('#menu, .watermark img').delay(speed).fadeIn(speed);
});

$('nav a.lang').click(function(){
	$(this).parent().fadeOut(speed);
	$(this).parent().siblings().delay(speed).fadeIn(speed);
});

audio_file.addEventListener('timeupdate', function(){
	console.log('ee');
	var buffer = .44
	if(this.currentTime > this.duration - buffer){
	this.currentTime = 0
	this.play()
}}, false);
