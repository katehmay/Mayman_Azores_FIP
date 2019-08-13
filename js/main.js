(function(){
	"use strict";

	console.log("fired");

	var button = document.querySelector("#button");
	var burgerCon = document.querySelector("#burgerCon");

	const lightBox = document.querySelector('.lightbox'),
		videoClick = document.querySelector('.program-vid-Container'),
		programVideo = document.querySelector('.program-video'),
		closeButton = document.querySelector('.close-lightbox'), 
		backButton = document.querySelector('#back'),
		playButton = document.querySelector('#play'),
		pauseButton = document.querySelector('#pause'),
		forwardButton = document.querySelector('#forward');

	function hamburgerMenu() {
		burgerCon.classList.toggle("slideToggle");
		button.classList.toggle("expanded");
	}

	function backVideo() {
		let backwardTime = programVideo.currentTime - 10;
		//console.log(backwardTime);

		programVideo.currentTime = backwardTime;
	}

	//pause video on click
	function pauseVideo() {
		programVideo.pause();
	}

	function playVideo() {
		programVideo.play();
	}

	function forwardVideo() {
		let forwardedTime = programVideo.currentTime + 10;
		//console.log(forwardedTime);

		programVideo.currentTime = forwardedTime;
	}

	function popLightBox() {
		//make lightbox show up
		lightBox.classList.add('show-lightbox');
		document.body.style.overflow='hidden';

		// use JavaScript string interpolation to build the path to the target video
		programVideo.load();
		programVideo.play();	
	}

	function closeLightBox(event) {
		event.preventDefault();
		//make lightbox close
		lightBox.classList.remove('show-lightbox');
		programVideo.currentTime = 0;
		programVideo.pause();
		document.body.style.overflow='auto';
	}

	button.addEventListener("click", hamburgerMenu, false);

	closeButton.addEventListener("click", closeLightBox);

	programVideo.addEventListener('ended', closeLightBox);

	backButton.addEventListener("click", backVideo);

	pauseButton.addEventListener("click", pauseVideo);

	playButton.addEventListener("click", playVideo);

	forwardButton.addEventListener("click", forwardVideo);

	videoClick.addEventListener('click', popLightBox);

})();
