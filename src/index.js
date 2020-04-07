import { createStore } from "redux";

const input = document.querySelector("input");
const btn = document.querySelector("button");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = (text) => {
	return { type: ADD_TODO, text: text };
};
const deleteTodo = (id) => {
	return { type: DELETE_TODO, id: id };
};
const handleTodo = (state = [], action) => {
	switch (action.type) {
		case ADD_TODO:
			return [...state, { text: action.text, id: Date.now() }];
		case DELETE_TODO:
			console.log(state.filter((item) => item.id !== action.id));
			return state.filter((item) => item.id !== action.id);
		default:
			return state;
	}
};

const todolist = createStore(handleTodo);

const dispatchAddToDo = (text) => {
	todolist.dispatch(addToDo(text));
};

const dispatchDeleteToDo = (e) => {
	console.log(e.target.parentNode.id);
	const id = parseInt(e.target.parentNode.id);
	todolist.dispatch(deleteTodo(id));
};

const paintToDos = () => {
	const todos = todolist.getState();
	ul.innerText = "";
	todos.forEach((item) => {
		let li = document.createElement("li");
		li.id = item.id;
		li.innerText = item.text;
		let deleteBtn = document.createElement("button");
		deleteBtn.innerText = "DEL";
		deleteBtn.addEventListener("click", dispatchDeleteToDo);
		li.appendChild(deleteBtn);
		ul.appendChild(li);
	});
};

todolist.subscribe(paintToDos);

const onSubmit = (e) => {
	e.preventDefault();
	const todo = input.value;
	input.value = "";
	dispatchAddToDo(todo);
};

btn.addEventListener("click", onSubmit);
