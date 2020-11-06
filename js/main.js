var today = new Date();
var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
					"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

var weekDay = today.getDay();
var month = today.getMonth();
var dayNum = today.getDate();
let clock = document.getElementById('clockElement');
let timer = null;

/* ========================================================= */
//When user clicks 12-hour display
/* ========================================================= */
document.getElementById("twelve").addEventListener("click", function(){
	//This section will clear any previously running timer
	if(timer !== null){
		clearInterval(timer);
		timer = null;
		} else {
		timer = setInterval(show12, 500);
	}

	function show12(){
		var today = new Date();
		var time = 	dayNames[weekDay] + " " + 
				monthNames[month] + " " + 
				dayNum + " " +
				today.toLocaleTimeString();
		//This lines puts the time in the html <p> element
		clock.textContent = time;
	}
})

/* ========================================================= */
//When user clicks 24-hour display
/* ========================================================= */
document.getElementById("twentyfour").addEventListener("click", function(){
	//This section will clear any previously running timer
	if(timer !== null){
			clearInterval(timer);
			timer = null;
		} else {
		timer = setInterval(show24, 500);
	}

	function show24(){
		var today = new Date();
		var time = 	dayNames[weekDay] + " " + 
				monthNames[month] + " " + 
				dayNum + " " +
				today.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit',hour12: false});
	
		//This lines puts the time in the html <p> element
		clock.textContent = time;
	}
})
