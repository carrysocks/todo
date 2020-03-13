const todoForm = document.querySelector(".js-todoForm"),
	  todoList = document.querySelector(".js-todoList"),
	  todoInput = todoForm.querySelector(".js-todo-input");

const TODOLIST = "TODOLIST";
let todo_list = [];

function init(){
	listCheck();
	todoForm.addEventListener("submit",handleSubmit);
}

function listCheck(){
	const loadesTodo = localStorage.getItem(TODOLIST);
	
	if(loadesTodo !== null){
		const parsedTodo = JSON.parse(loadesTodo);
		parsedTodo.forEach(function(toDo){
			paintTodo(toDo.text);
		});
		
	}
}

function handleDeleteButton(event){
	const btn = event.target;
	const li = btn.parentNode;
	todoList.removeChild(li);
	const cleanTodo = todo_list.filter(function(todo_list){
		return todo_list.id !== parseInt(li.id);
	});
	todo_list = cleanTodo;
	saveObj();
}

function paintTodo(text){
	const li = document.createElement("li");
	const span = document.createElement("span");
	const button = document.createElement("button");
	const newId = todo_list.length+1;
	button.addEventListener("click",handleDeleteButton);
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
	saveObj();
}

function saveObj(){
localStorage.setItem(TODOLIST,JSON.stringify(todo_list));
}

function handleSubmit(event){
	event.preventDefault();
	let currentValue = todoInput.value;
	paintTodo(currentValue);
	todoInput.value ="";
}

init();