/*
	Filepath:    /var/www/html/src/js/external.js
	Description: Alerts user when clicked link leads to an external website that is not on the allowlist.
	Author:      bernard
	Last Edited: 2020/08/06
*/

$(document).ready( function() {
	// list of hostnames on allowlist to exempt from alerts
	var internal = ["scioly.org", "www.scioly.org", "soinc.org", "www.soinc.org"];

	$('a').filter(function() {
			// checks if hostname of clicked link is in `internal`
			return this.hostname && this.hostname !== location.hostname && !internal.includes((this.hostname).toString().toLowerCase());
		}).click(function(e) {
		// displays warning when user clicks a link leading to an external site
		if(!confirm("The link you have clicked leads to an external website, " + this.hostname + ". Would you like to proceed?")) {
			// if user clicks 'no' then do not proceed to link
			e.preventDefault();
		};
	});
});