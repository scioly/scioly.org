/*
	Filepath:    /var/www/html/src/js/hamburger.js
	Description: Animates hamburger menu icon and displays menus when clicked. Used for enabling functionality of the site-wide navigation bar hamburger menu on small screens.
	Author:      bernard
	Last Edited: 2020/08/06
*/

menu = false; // variable for recording if dropdown menu is displayed

// this function is called by the HTML element for the hamburger menu when it is clicked
function hamburger(element) {
	element.classList.toggle("hamburger-toggle"); // animates hamburger
	// toggles display of navigation dropdown
	if (!menu) {
		$('.site-nav > ul').css('display', 'block');
		menu = true;
	} else {
		$('.site-nav > ul').css('display', 'none');
		menu = false;
	}
}

// enables or disables display of dropdown when window is resized
$(window).resize(function () {
	if($(window).width() >= 1200) {
		$('.site-nav > ul').css('display', 'block');
	} else {
		$('.site-nav > ul').css('display', 'none');
		// keeps menu open on resize if it is already open
		if(menu == true) {
			$('.site-nav > ul').css('display', 'block');
		}
	}
});