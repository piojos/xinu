// var vid = document.getElementById("bgvid");
var speed = 400;
var audio_file = new Audio('assets/background_music.mp3');

// Nice other method: detects browser language preferences
// var language = window.navigator.userLanguage || window.navigator.language;
// alert(language);

$.get("http://ipinfo.io", function (response) {
	var country = response.country;
	var spanish = ['ES', 'AR', 'BO', 'CL', 'CO', 'CR', 'CU', 'DO', 'EC', 'SV', 'GT', 'HN', 'MX', 'NI', 'PN', 'PA', 'PE', 'PR', 'UY', 'VE'];
	if( $.inArray(country, spanish) != -1){
		console.log('español');
		$('nav .es').fadeIn('slow');
		$('.watermark').delay(speed).fadeIn(speed);
	} else {
		console.log('english');
		$('nav .en').fadeIn('slow');
		$('.watermark').delay(speed).fadeIn(speed);
	}
}, "jsonp");

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
