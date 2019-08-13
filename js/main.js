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
		forwardButton = document.querySelector('#forward'),
		newsContainer = document.querySelector('.news-Content-Container'),
		news = document.querySelectorAll('.news-Content'),
		nextNews = document.querySelector('.nextNews'),
		previousNews = document.querySelector('.prevNews'),
		nextNewsDesk = document.querySelector('.nextNewsDesk'),
		previousNewsDesk = document.querySelector('.prevNewsDesk'),
		slideRight = document.querySelector('.news-Content-Container');

		//const newsContainer = document.querySelector('.news-Content-Container');
		//const style = getComputedStyle(newsContainer);
	

	let totalNewsCount = 0,
		finalTransform = 0,
		offset = 291,
		offsetTablet = 667;

	function hamburgerMenu() {
		burgerCon.classList.toggle("slideToggle");
		button.classList.toggle("expanded");
	}

	function animateNext() {
		if (totalNewsCount < 2) {
			//changes back previous arrow opacity to original
			previousNews.style.opacity = 1.0;
			totalNewsCount += 1;
			console.log(totalNewsCount);

			finalTransform = offset * totalNewsCount;
			console.log(finalTransform);

			newsContainer.style.transform = `translateX(-${finalTransform}px)`;
		} else {
			console.log('No more news!');
		}

	}

	function animatePrev() {
		if (totalNewsCount == 0) {
			previousNews.style.opacity = 0.2;
		} else {
			previousNews.style.opacity = 1.0;
		}

		if (totalNewsCount > 1) {
			//changes back the next arrow opacity to original
			nextNews.style.opacity = 1.0;

			totalNewsCount -= 1;
			console.log('Prev ' + totalNewsCount);

			finalTransform = offset * totalNewsCount;
			console.log('Prev ' + finalTransform);

			newsContainer.style.transform = `translateX(-${finalTransform}px)`;
		} else if (totalNewsCount == 1 ) {
			totalNewsCount = 0;
			finalTransform = offset * totalNewsCount;
			console.log('Prev ' + finalTransform);
			newsContainer.style.transform = `translateX(-${finalTransform}px)`;

		} else {
			console.log('No more news!');
		}
	}

	function nextArrowOpacity() {
		if (finalTransform > 291) {
			nextNews.style.opacity = 0.2;
		} else {
			return;
		}
	}

	function prevArrowOpacity() {
		if (finalTransform < 291) {
			previousNews.style.opacity = 0.2;
		} else {
			return;
		}
	}

	//DESKTOP CAROUSEL
	function animateNextDesk() {
		if (totalNewsCount < 2) {
			//changes back previous arrow opacity to original
			previousNewsDesk.style.opacity = 1.0;
			totalNewsCount += 1;
			console.log(totalNewsCount);

			finalTransform = offsetTablet * totalNewsCount;
			console.log(finalTransform);

			newsContainer.style.transform = `translateX(-${finalTransform}px)`;
		} else {
			console.log('No more news!');
		}

	}

	function animatePrevDesk() {
		if (totalNewsCount == 0) {
			previousNewsDesk.style.opacity = 0.2;
		} else {
			previousNewsDesk.style.opacity = 1.0;
		}

		if (totalNewsCount > 1) {
			//changes back the next arrow opacity to original
			nextNewsDesk.style.opacity = 1.0;

			totalNewsCount -= 1;
			console.log('Prev ' + totalNewsCount);

			finalTransform = offsetTablet * totalNewsCount;
			console.log('Prev ' + finalTransform);

			newsContainer.style.transform = `translateX(-${finalTransform}px)`;
		} else if (totalNewsCount == 1 ) {
			totalNewsCount = 0;
			finalTransform = offsetTablet * totalNewsCount;
			console.log('Prev ' + finalTransform);
			newsContainer.style.transform = `translateX(-${finalTransform}px)`;

		} else {
			console.log('No more news!');
		}
	}

	function nextArrowOpacityDesk() {
		if (finalTransform > 662) {
			nextNewsDesk.style.opacity = 0.2;
		} else {
			return;
		}
	}

	function prevArrowOpacityDesk() {
		if (finalTransform < 662) {
			previousNewsDesk.style.opacity = 0.2;
		} else {
			return;
		}
	}

	//VIDEO
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

	

	nextNews.addEventListener('click', animateNext);

	previousNews.addEventListener('click', animatePrev);

	nextNews.addEventListener('click', nextArrowOpacity);

	previousNews.addEventListener('click', prevArrowOpacity);

	//DESKTOP CAROUSEL
	nextNewsDesk.addEventListener('click', animateNextDesk);

	previousNewsDesk.addEventListener('click', animatePrevDesk);

	nextNewsDesk.addEventListener('click', nextArrowOpacityDesk);

	previousNewsDesk.addEventListener('click', prevArrowOpacityDesk);

	button.addEventListener("click", hamburgerMenu, false);

	closeButton.addEventListener("click", closeLightBox);

	programVideo.addEventListener('ended', closeLightBox);

	backButton.addEventListener("click", backVideo);

	pauseButton.addEventListener("click", pauseVideo);

	playButton.addEventListener("click", playVideo);

	forwardButton.addEventListener("click", forwardVideo);

	videoClick.addEventListener('click', popLightBox);

})();
