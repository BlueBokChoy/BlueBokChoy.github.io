/**
 * 
 */

/* Opens the menu */
function openmenu() {
	if (document.getElementById("menuopt").offsetHeight == "0") {
		document.getElementById("menuopt").style.height = "20vw"
		document.getElementById("menuopt").style.width = "15vw";
	}
	else {
		document.getElementById("menuopt").style.height = "0";
		document.getElementById("menuopt").style.width = "0";
	}
}


/* Open and close more info boxes */
function career() {
	document.getElementById("careerinfo").style.height = "64%"
	document.getElementById("careerinfo").style.width = "64%";
	document.getElementById("careerinfo").style.padding = "3%";
}

function exitcareer() {
	document.getElementById("careerinfo").style.width = "0";
	document.getElementById("careerinfo").style.height = "0";
	document.getElementById("careerinfo").style.padding = "0";
}

function goals() {
	document.getElementById("goalsinfo").style.height = "64%"
	document.getElementById("goalsinfo").style.width = "64%";
	document.getElementById("goalsinfo").style.padding = "3%";
}

function exitgoals() {
	document.getElementById("goalsinfo").style.width = "0";
	document.getElementById("goalsinfo").style.height = "0";
	document.getElementById("goalsinfo").style.padding = "0";
}

function resume() {
	const pdfUrl = '.PDF/Resume2.pdf';
	window.open(pdfUrl, '_blank');
}

function skills() {
	document.getElementById("skillsinfo").style.height = "64%";
	document.getElementById("skillsinfo").style.width = "64%";
	document.getElementById("skillsinfo").style.padding = "3%";
}

function exitskills() {
	document.getElementById("skillsinfo").style.width = "0";
	document.getElementById("skillsinfo").style.height = "0";
	document.getElementById("skillsinfo").style.padding = "0";
}
