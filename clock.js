const clock = document.querySelector(".js-clock");

function init(){
	setInterval(getDate,1000);
}

function getDate(){
	const date = new Date();
	const hour = date.getHours();
	const minutes = date.getMinutes();
	
	clock.innerText = `${hour}:${minutes}`;
	
}

init();