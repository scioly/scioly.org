/*
	Filepath:    /var/www/html/src/js/easteregg.js
	Description: Changes site style to dark mode when correct combination of keystrokes matching the Konami code are entered. Data is stored locally for user security.
	Author:      bernard
	Last Edited: 2020/09/02
*/

var easteregg = ""; // blank variable for storing keystrokes
var easteregg_key = "uuddlrlrba"; // correct combination of keystrokes required to activate effect

// checks from user's local storage if effect has already been activated and if so applies style
var easteregg_boolean = localStorage.getItem("easteregg");
if (easteregg_boolean == "true") {
	darkmode(true);
}

// function for checking keystrokes and activating or deactivating dark mode effect
document.onkeyup = function(e) {
	// checks keystrokes and appends relevant keystrokes to `easteregg`
	if(e.keyCode == 38) easteregg += "u"; 
	else if(e.keyCode == 40) easteregg += "d";
	else if(e.keyCode == 37) easteregg += "l";
	else if(e.keyCode == 39) easteregg += "r";
	else if(e.keyCode == 65) easteregg += "a";
	else if(e.keyCode == 66) easteregg += "b";
	else easteregg += " ";

	// checks if most recently set of keystrokes matches `easteregg_key`
	if(easteregg.substring(easteregg.length - easteregg_key.length).toLowerCase() == easteregg_key) {
		// deactivates dark mode effect is already activated and stores record of it on user's local storage
		if (easteregg_boolean == "true") {
			darkmode(false);
			easteregg_boolean = "false";
			localStorage.setItem("easteregg", easteregg_boolean);
		}
		// activates dark mode effect is not yet activated and stores record of it on user's local storage
		else {
			darkmode(true);
			easteregg_boolean = "true";
			localStorage.setItem("easteregg", easteregg_boolean);
		}
	}
}

// function for turning on or off darkmode and the associated styling
function darkmode(mode) {
	if (mode) { // turn on dark mode
		$('html').css({'transition': '0.2s', '-webkit-filter': 'hue-rotate(180deg) invert(80%)', 'filter': 'hue-rotate(180deg) invert(80%)'});
		$('img, iframe').css({'transition': '0.2s', '-webkit-filter': 'hue-rotate(180deg) invert(100%)', 'filter': 'hue-rotate(180deg) invert(100%)'});
	} else { // turn off dark mode
		$('html, img, iframe').css({'transition': '0.2s', '-webkit-filter': 'hue-rotate(0deg) invert(0%)', 'filter': 'hue-rotate(0deg) invert(0%)'});
	}
}