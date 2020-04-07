import { createStore } from "redux";

const input = document.querySelector("input");
const btn = document.querySelector("button");
const ul = document.querySelector("ul");

const onSubmit = (e) => {
	e.preventDefault();
	let li = document.createElement("li");
	li.innerText = input.value;
	input.value = "";
	ul.appendChild(li);
};

btn.addEventListener("click", onSubmit);
