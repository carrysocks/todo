const body = document.querySelector("body");

function init(){
	setImage();
}

function setImage(){
	const randomNumber = Math.floor(Math.random() * 3) +1;
	console.log(randomNumber);
	paintImg(randomNumber);
}

function paintImg(number){
	const image = new Image();
	image.src = `./images/${number}.jpg`;
	image.classList.add("bgImage");
	body.prepend(image);
}

init();