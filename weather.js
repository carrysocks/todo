
const API_KEY = '480c4985686a82970e1b6d29f0e1d450';

function loadCoords(){
	const loadedCords = localStorage.getItem('coords');
	if(loadedCords === null){
		askForCoords();
	}
	else{
		const parsedCords = JSON.parse(loadedCords);
		getWeather(parsedCords.latitude , parsedCords.longitude);
		//getWeather();
	}
}

function getWeather(lat,lon){
	fetch(`api.openweathermap.org/data/2.5/weather?lat={${lat}&lon=${lon}&appid=${API_KEY}`);
}

function saveCoords(coordsObj){
	localStorage.setItem('coords',JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;
	const coordsObj = {
		latitude,
		longitude
	};
	saveCoords(coordsObj);
}

function handleGeoError(){
	console.log("Can't access geo location");
}

function askForCoords(){
	navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
}

function init(){
	loadCoords();
}

init();