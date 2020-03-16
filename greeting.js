const greetingForm = document.querySelector(".js-greeting"),
	  greetingInput = greetingForm.querySelector(".js-greeting-input"),
	  name = document.querySelector(".js-name");

function init(){
	getName();
}

function getName(){
	const localName = localStorage.getItem("NAME");
	if(localName === null){
		
	}
	else{
		
	}
}

init();