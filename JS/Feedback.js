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

/* Submits feedback */
function back() {
	document.getElementById("feedback").classList.remove("submitanimation");
	void document.getElementById("feedback").offsetWidth;
	document.getElementById("feedback").classList.add("submitanimation");
	document.getElementById("feedback").value = "";
}