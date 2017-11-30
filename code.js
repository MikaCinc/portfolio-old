function instagram() {
	window.open("https://www.instagram.com/mikac_inc/",'_blank');
}

function github() {
	window.open("https://github.com/MikaCinc",'_blank');
}

function about_div(n) {
	var height = document.getElementById('slika').height
	var width = document.getElementById('slika').width
	//console.log(height + " / " + width)
	if(n == 1) {
		document.getElementById("about_div").style.display = "inline-block"
	} else {
		document.getElementById("about_div").style.display = "none"
	}
	document.getElementById("about_div").style.height = height
	document.getElementById("about_div").style.width = width
}

window.onload = function () {
	var a = "1px solid #0f0"
	var b = "1px solid red"
	var interval = setInterval (function() {
		var timeout = setTimeout (function() {
			document.getElementById('about_div').style.border = a
		}, 1000)
		document.getElementById('about_div').style.border = b
	}, 2000)

	// @mikac_inc menja boju
	minc_color()
}

function minc_color() {
	function rnd_color() {
		return Math.floor(Math.random()*255)
	}

	var interval = setInterval(function() {
		document.getElementById("mikac_inc").style.color = "rgb( " + rnd_color() + ", " + rnd_color() + ", " + rnd_color() + ")"
	}, 1000)
}

