
//var element = document.getElementById("clockElement")
var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
					"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function startTime(){
	var today = new Date();
	var weekDay = today.getDay();
	var month = today.getMonth();
	var dayNum = today.getDate();
	var hours = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	var meridian = "AM";
	m = checkTime(m);
	s = checkTime(s);
/*This converts hours 13 - 24 to the range 1 - 12, 
  and 0 back to 12:*/ 
	if(hours > 12) {
	hours -= 12;
}else if (house === 0){
	hours = 12;
}

	document.getElementById("clockElement").innerText = 
	dayNames[weekDay] + " " + 
	monthNames[month] + " " + 
	hours + ":" + m + ":" + s + " " + meridian;
	var t = setTimeout(startTime, 500);
}


//This makes the clock dynamic
function checkTime(i){
	if(i < 10){
		i = "0" + i;
	}
	return i;
}

startTime();

function changeTime(){
	var today = new Date();
	var weekDay = today.getDay();
	var month = today.getMonth();
	var dayNum = today.getDate();
	var hours = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	var meridian = "AM";
	m = checkTime(m);
	s = checkTime(s);
/*This converts hours 13 - 24 to the range 1 - 12, 
  and 0 back to 12:
	if(hours > 12) {
	hours -= 12;
}else if (house === 0){
	hours = 12;
}
*/
	document.getElementById("clockElement").innerText = 
	dayNames[weekDay] + " " + 
	monthNames[month] + " " + 
	hours + ":" + m + ":" + s + " " + meridian;
	var t = setTimeout(startTime, 500);
}

changeTime()
/*	
function startTime24(){
	document.getElementById("clockElement").innerText = 
	dayNames[weekDay] + " " + monthNames[month] + " " + hours + ":" + m + ":" + s + " " + meridian;
	var t = setTimeout(startTime24, 500);
}

startTime24();
*/