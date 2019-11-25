function instagram() {
	window.open("https://www.instagram.com/mikac_inc/", '_blank');
}

function github() {
	window.open("https://github.com/MikaCinc", '_blank');
}

function linkedin() {
	window.open("https://www.linkedin.com/in/mikacinc/", '_blank');
}

function about_div(n) {
	const height = document.getElementById('slika').height
	const width = document.getElementById('slika').width
	//console.log(height + " / " + width)
	if (n == 1) {
		document.getElementById("about_div").style.display = "inline-block"
	} else {
		document.getElementById("about_div").style.display = "none"
	}
	document.getElementById("about_div").style.height = height
	document.getElementById("about_div").style.width = width
}

window.onload = function () {
	// TYPED.JS things:
	const options = {
		stringsElement: null,
		strings: ["Incorrigible enthusiast", "Ready to go to the end", "Doing", "Web Development", "Street Workout", "and Elfak"],
		typeSpeed: 10,
		backSpeed: 20,
		shuffle: false,
		backDelay: 1500,
		loop: true,
		loopCount: Infinity,
		smartBackspace: true,
		showCursor: true,
	}

	var typed = new Typed(".typed", options);

	// @mikac_inc menja boju
	minc_color()

	document.getElementById("slika").addEventListener("mouseover", function () {
		this.src = "slike/prof2.jpg"
	})
	document.getElementById("slika").addEventListener("mouseout", function () {
		this.src = "slike/prof.jpg"
	})

	// @todo
	/* const initializeTypedJS = (id) => {
		console.log(id)
		var typed1 = new Typed(`#${id}`, {
			stringsElement: `#${id}`,
			typeSpeed: 50,
		});
	} */

	// Content switching

	var elems = document.getElementsByClassName("switch");
	var contents = document.getElementsByClassName("content_switch");

	var pageNames = [];
	for (let n = 0; n < contents.length; n++) {
		pageNames.push(contents[n].id.split("_")[1]);
	}

	for (let i = 0; i < elems.length; i++) {
		elems[i].addEventListener("click", () => {
			for (let k = 0; k < elems.length; k++) {
				elems[k].className = "switch"
			}
			elems[i].className = "switch selected";
			for (let n = 0; n < contents.length; n++) {
				if (elems[i].innerHTML.toLowerCase() === pageNames[n]) {
					//contents[n].style.display = "inline-block";
					contents[n].className = 'content_switch active';
					updateURL(n);
					//initializeTypedJS('sectionTitle_' + pageNames[n]); TODO
				} else {
					//contents[n].style.display = "none";
					contents[n].className = 'content_switch';
				}
			}
		})
	}

	const updateURL = (n) => {
		let newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + `?page=${pageNames[n]}`;
		window.history.replaceState({}, '', newurl);
	}

	// Open default page / Initialisation:
	var pageInURL = window.location.search.substring(1).split('=')[1];
	var default_page_index = pageNames.indexOf(pageInURL) >= 0 ? pageNames.indexOf(pageInURL) : 2;
	//contents[default_page_index].style.display = "inline-block";
	contents[default_page_index].className = "content_switch active";
	elems[default_page_index].className = "switch selected";
	updateURL(default_page_index);
}

function minc_color() {
	function rnd_color() {
		return Math.floor(Math.random() * 255)
	}

	function rnd_rgb() {
		return "rgb( " + rnd_color() + ", " + rnd_color() + ", " + rnd_color() + ")";
	}

	var interval = setInterval(function () {
		document.getElementById("mikac_inc").style.color = rnd_rgb();
		document.getElementById("mikac_inc").style.textShadow = "0 0 20px " + rnd_rgb();
	}, 1000)
}