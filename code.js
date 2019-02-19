function instagram() {
	window.open("https://www.instagram.com/mikac_inc/",'_blank');
}

function github() {
	window.open("https://github.com/MikaCinc",'_blank');
}

function linkedin() {
	window.open("https://www.linkedin.com/in/mikacinc/", '_blank');
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
	/* var a = "1px solid #0f0"
	var b = "1px solid red"
	var interval = setInterval (function() {
		var timeout = setTimeout (function() {
			document.getElementById('about_div').style.border = a
		}, 1000)
		document.getElementById('about_div').style.border = b
	}, 2000) */

	// @mikac_inc menja boju
	minc_color()

	document.getElementById("slika").addEventListener("mouseover", function() {
		this.src="prof2.jpeg"
	})
	document.getElementById("slika").addEventListener("mouseout", function() {
		this.src="prof.jpg"
	})

	//Content switching

	var elems = document.getElementsByClassName("switch");
	var contents = document.getElementsByClassName("content_switch");
	console.log(contents[3].id.split("_")[1], elems[3].innerHTML.toLowerCase())
	for(let i=0; i<elems.length; i++) {
		elems[i].addEventListener("click", ()=> {
			for(let n=0; n<elems.length; n++) {
				if(elems[i].innerHTML.toLowerCase() === contents[n].id.split("_")[1]) {
					contents[n].style.display = "block";
				} else {
					contents[n].style.display = "none";
				}
			}
		})
	}
}

function minc_color() {
	function rnd_color() {
		return Math.floor(Math.random()*255)
	}

	function rnd_rgb() {
		return "rgb( " + rnd_color() + ", " + rnd_color() + ", " + rnd_color() + ")";
	}

	var interval = setInterval(function() {
		document.getElementById("mikac_inc").style.color = rnd_rgb();
		document.getElementById("mikac_inc").style.textShadow = "0 0 20px " + rnd_rgb();
	}, 1000)
}