var video = document.querySelector(".video");
var playButton = document.getElementById('play');
var pauseButton = document.getElementById('pause');
var slowerButton = document.getElementById('slower');
var fasterButton = document.getElementById('faster');
var skipButton = document.getElementById('skip');
var muteButton = document.getElementById('mute');
var volumeSlider = document.getElementById('slider');
var volumeSpan = document.getElementById('volume');
var vintageButton = document.getElementById('vintage');
var origButton = document.getElementById('orig');
video.preload = "auto"


console.log("hi");
video.addEventListener("load", function(){
	console.log("here") 
})

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

document.addEventListener("load", function(){
	if(video){
		video.play();
	}

})

playButton.addEventListener("click", function(){
	video.play();
	volumeSpan.innerHTML = video.volume * 100 + "%";
})

pauseButton.addEventListener("click", function(){
	video.pause();
})

slowerButton.addEventListener('click', function() {
	video.playbackRate -= 0.1;
	console.log(video.playbackRate);
});

fasterButton.addEventListener('click', function() {
	video.playbackRate += 0.1;
	console.log(video.playbackRate);
});

skipButton.addEventListener('click', function() {
	video.currentTime += 10; // Skips ahead 10 seconds
	console.log(video.currentTime)
});

muteButton.addEventListener('click', function(){
	if(video.muted == 0){
		muteButton.innerHTML = "Unmute";
		video.muted = 1;
	} else{
		muteButton.innerHTML = "Mute";
		video.muted = 0;
	}
})

volumeSlider.addEventListener('input', function(){
	video.volume = volumeSlider.value/100;
	volumeSpan.innerHTML = video.volume * 100 + "%";
})

vintageButton.addEventListener('click', function(){
	video.classList.add('oldSchool');
})
origButton.addEventListener('click', function(){
	video.classList.remove('oldSchool');
})