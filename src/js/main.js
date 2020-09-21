/*
	Filepath:    /var/www/html/src/js/main.js
	Description: Referenced by HTML pages of the site to enable common sitewide Javascript functionalities.
	Author:      bernard
	Last Edited: 2020/08/06
*/

// function for including javascript
function include(file) {
	var script = document.createElement('script');
	script.src = file;
	script.type = 'text/javascript';
	script.defer = true;
	document.getElementsByTagName('head').item(0).appendChild(script);
}

// adds HTML files for page head, site navigation bar, and site footer
$(document).ready(function() {
	$.get('/scioly.org/src/html/head.html', function(data) {
		$('head').append(data);
		$.get('/scioly.org/src/html/nav.html', function(data) {
			$('body').prepend(data);
			$('body').wrapInner('<div class="content"></div>');
			$.get('/scioly.org/src/html/footer.html', function(data) {
				$('body').append(data);
			});
		});
	});
});

// sets minimum height for page contents for proper footer positioning on page load and window resize
$(document).ready(function() {
	$('div#wrap').css("min-height", ($(window).outerHeight() - $('div.banner').outerHeight() - $('div.site-nav').outerHeight() - $('div.site-footer').outerHeight()));
});
$(window).resize(function() {
	$('div#wrap').css("min-height", ($(window).outerHeight() - $('div.banner').outerHeight() - $('div.site-nav').outerHeight() - $('div.site-footer').outerHeight()));
});

include('/scioly.org/src/js/hamburger.js'); // adds hamburger menu functionality
include('/scioly.org/src/js/external.js'); // allows alerts when external likes are clicked
include('/scioly.org/src/js/easteregg.js'); // enables easter egg for dark mode when correct keystrokes are inputted