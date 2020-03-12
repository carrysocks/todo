const todoForm = document.querySelector(".js-todoForm"),
	  todoList = document.querySelector(".js-todoList"),
	  todoInput = todoForm.querySelector(".js-todo-input");

function init(){
	listCheck();
	todoForm.addEventListener("submit",handleSubmit);
}

function listCheck(){
	
}

function pushLS(text){
	localStorage.setItem("TODOLIST",text);
}

function paintTodo(text){
	const li = document.createElement("li");
	const span = document.createElement("span");
	const button = document.createElement("button");
	span.innerText = text;
	button.innerHTML = "X";
	li.appendChild(span);
	li.appendChild(button);
	todoList.appendChild(li);
}

function handleSubmit(event){
	event.preventDefault();
	let currentValue = todoInput.value;
	paintTodo();
	pushLS(currentValue);
}

init();