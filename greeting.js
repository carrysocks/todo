const greetingForm = document.querySelector(".js-greeting"),
	  greetingInput = greetingForm.querySelector(".js-greeting-input"),
	  name = document.querySelector(".js-name");

const todoFormList = document.querySelector(".js-todoForm");

function init(){
	getName();
}

function getName(){
	const localName = localStorage.getItem("NAME");
	if(localName === null){
		greetingForm.addEventListener("submit",handleSubmitName);
	}
	else{
		showName(localName);
	}
}

function handleSubmitName(event){
	event.preventDefault();
	const userName = greetingInput.value;
	localStorage.setItem("NAME",userName);
	greetingInput.value = "";
	showName(userName);
}

function showName(localname){
	greetingForm.classList.add("hide");
	name.innerHTML = `반갑습니다. ${localname}님`;
	name.classList.replace("hide","show");
	todoFormList.classList.replace("hide","show");
}

init();