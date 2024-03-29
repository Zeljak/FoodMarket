if (location.hash) {
	window.scrollTo(0, 0);
	setTimeout(function() {
		window.scrollTo(0, 0);
	}, 1);
}

$(function() {
	window.scrollTo(0, 0);
	
	// variables
	const hamburger = document.querySelector('.hamburger');
	const navMenu = document.querySelector('.nav-menu');
	const hash = location.hash;

	
	// funtcions
	const mobileMenu = () => {
		hamburger.classList.toggle('active');
		navMenu.classList.toggle('active');
	};

	const pageScroll = location => {
		$('html, body').animate(
			{
				scrollTop: $(location).offset().top
			},
			1000
		);
	};

	// events
	hamburger.addEventListener('click', mobileMenu);

	$('.nav-link').on('click', event => {
		const classArr = event.target.classList.value;
		const hash = event.target.hash;
		if (classArr.includes('scroll-me') && hash) {
			event.preventDefault();
			pageScroll(hash);
		} else if (classArr.includes('nav-link--current')) {
			event.preventDefault();
			pageScroll('#top');
		}
		mobileMenu();
	});

	// on load action
	if (hash) {
		pageScroll(hash);

		history.pushState('', document.title, window.location.pathname + window.location.search);
	}
});




