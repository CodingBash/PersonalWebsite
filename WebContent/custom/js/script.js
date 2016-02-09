/**
 * 
 */

/**
 * jQuery ready function
 */
$(document).ready(function() {
	var classes = $(".container-fluid");
	for (var i = 0; i < classes.length; i++) {
		if (i % 2 == 1) {
			classes[i].className += (" bg-grey");
		}
	}
});

// var classes = document.getElementsByClassName("container-fluid");
// for (var i = 0; i < classes.length; i++) {
//
// if (i % 2 == 1) {
// classes[i].className += " bg-grey";
// }
// }
