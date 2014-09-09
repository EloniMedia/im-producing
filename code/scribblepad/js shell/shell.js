// *** BEGIN GLOBAL VARIABLES ***



// *** END GLOBALS *** 

// *** MAIN FUNCTION ***

function init() {
// code that runs once browser loads

	document.write(averageThese(5,44));

}

// *** END MAIN FUNCTION ***


// *** BEGIN ANCILLARY FUNCTIONS ***

function averageThese(num1, num2) {
	var average = (num1 + num2) / 2;
	return average;
}



// *** END ANCILLARY FUNCTIONS ***


// the following line kicks off the script
// *** LEAVE INTACT TO LOAD PROGRAM AT PAGE LOAD ***
document.addEventListener("DOMContentLoaded", function(event) {
    init();
});