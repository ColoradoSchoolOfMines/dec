function moveTo(filename) {
	  window.location.href = filename + '.html';
}

function stylesheet(filename) {
	css_prefix='<link rel="stylesheet" type="text/css" href="';
	css_suffix='.css">';
	style=css_prefix + filename + css_suffix;
	$('head').append(style);
}

function loadHeader(dir) {
	$(document).ready(function(){
		pre = dir + '/css/';
		stylesheet(pre + 'headers');
		stylesheet(pre + 'navbar');
		stylesheet(pre + 'buttons');
		$('#header').load("header.html");
	});
}

function loadInternalHeader(dir) {
	$(document).ready(function(){
		pre = dir + '/css/';
		stylesheet(pre + 'headers');
		stylesheet(pre + 'navbar');
		stylesheet(pre + 'buttons');
		$('#header').load("internal_header.html");
	});
}

function loadSponsors(dir) {
	$(document).ready(function(){
		pre = dir + '/css/';
		stylesheet(pre + 'sponsors');
		$('#sponsors').load('sponsors.html');
	});
}

function loadFooter(dir) {
	$(document).ready(function(){
		pre = dir + '/css/';
		stylesheet(pre + 'footer');
		c = dir + "/footer.html";
		$('#footer').load(c);
	});
}
