function moveTo(filename) {
	  window.location.href = filename + '.html';
}

function loadHeader() {
	$(document).ready(function(){
	   $('#header').load("header.html");
	});
}
