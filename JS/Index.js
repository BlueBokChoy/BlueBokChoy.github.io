/**
 * 
 */


/* Opens the menu */
function openmenu() {
	if (document.getElementById("menuopt").offsetHeight == "0") {
		document.getElementById("menuopt").style.height = "20vw"
	}
	else {
		document.getElementById("menuopt").style.height = "0";
	}
}