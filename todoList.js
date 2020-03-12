const todoForm = document.querySelector(".js-todoForm"),
	  todoList = document.querySelector(".js-todoList"),
	  todoInput = todoForm.querySelector(".js-todo-input");

const todo_list = [];

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
	const newId = todo_list.length+1;
	span.innerText = text;
	button.innerHTML = "X";
	li.id =newId;
	li.appendChild(span);
	li.appendChild(button);
	todoList.appendChild(li);
	todoObj = {
		text:text,
		id:newId
	};
	todo_list.push(todoObj);
}

function handleSubmit(event){
	event.preventDefault();
	let currentValue = todoInput.value;
	paintTodo(currentValue);
	//pushLS()
	todoInput.value ="";
}

init();