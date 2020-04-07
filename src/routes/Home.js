import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreator } from "../store";
import ToDo from "../components/ToDo";

function Home({ todos, addToDo }) {
	const [todo, setTodo] = useState("");
	const onChange = (e) => {
		setTodo(e.target.value);
	};
	const onSubmit = (e) => {
		e.preventDefault();
		addToDo(todo);
		setTodo("");
	};
	return (
		<>
			<h1>To Do</h1>
			<form onSubmit={onSubmit}>
				<input type='text' value={todo} onChange={onChange} />
				<button>Set</button>
			</form>
			<ul>
				{todos.map((item) => {
					return <ToDo {...item} key={item.id}></ToDo>;
				})}
			</ul>
		</>
	);
}

const mapStateToProps = (state) => {
	return { todos: state };
};
const mapDispatchToProps = (dispatch) => {
	return {
		addToDo: (text) => dispatch(actionCreator.addToDo(text)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
