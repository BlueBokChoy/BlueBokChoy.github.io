/**
 * 
 */

function openmenu() {
	if (document.getElementById("menuopt").offsetHeight == "0") {
		document.getElementById("menuopt").style.height = "20vw"
	}
	else {
		document.getElementById("menuopt").style.height = "0";
	}
}

/* Open and close quiz */
function quizopen() {
	document.getElementById("quizdiv").style.height = "80%"
	document.getElementById("quizdiv").style.width = "70%";
	document.getElementById("quizdiv").style.padding = "4vh";
}

function exitquiz() {
	document.getElementById("quizdiv").style.width = "0";
	document.getElementById("quizdiv").style.height = "0";
	document.getElementById("quizdiv").style.padding = "0";
}

/* Checks Answer */

function answer() {
	if (document.getElementById("q1opt2").checked == true) {
		document.getElementById("question1").style.color = "#A1CF6B";
	}
	else {
		document.getElementById("question1").style.color = "#FF0000";
	}
	if (document.getElementById("q2opt3").checked == true) {
		document.getElementById("question2").style.color = "#A1CF6B";
	}
	else {
		document.getElementById("question2").style.color = "#FF0000";
	}
	if (document.getElementById("q3opt1").checked == true) {
		document.getElementById("question3").style.color = "#A1CF6B";
	}
	else {
		document.getElementById("question3").style.color = "#FF0000";
	}
	if (document.getElementById("q4opt2").checked == true) {
		document.getElementById("question4").style.color = "#A1CF6B";
	}
	else {
		document.getElementById("question4").style.color = "#FF0000";
	}
	if (document.getElementById("q1opt2").checked == true && document.getElementById("q2opt3").checked == true && document.getElementById("q3opt1").checked == true && document.getElementById("q4opt2").checked == true) {
		document.getElementById("SuccessAnimation").classList.add("successanimation");
		document.getElementById("SuccessAnimation").style.display = "flex"
	}
	else { }
}

/* Hints */

/* THIS IS AN UNADDED FEATURE
let btnpresses = 0
document.getElementById("check").onclick = function count() {
	btnpresses++
}*/

/*
if (btnpresses = 5) {
	document.getElementById("hint").classList.add("fade");
	document.getElementById("SuccessAnimation").style.display = "flex"
}*/

