var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();
var meridian = "AM";
var element = document.getElementById("clockElement")


function showTime (){
	let t = hours + " : " + minutes + " : " + seconds + " " + meridian;
	
	element.innerText = t;
}

showTime();
