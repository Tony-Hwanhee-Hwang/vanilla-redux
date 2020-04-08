import React from "react";
import { connect } from "react-redux";
import { remove } from "../store";
import { Link } from "react-router-dom";

function ToDo({ text, id, deleteToDo }) {
	return (
		<li>
			<Link to={`/${id}`} key={id}>
				{text}
			</Link>

			<button onClick={deleteToDo}>DEL</button>
		</li>
	);
}

const mapDispatchToProps = (dispatch, optProps) => {
	return {
		deleteToDo: () => dispatch(remove(optProps.id)),
	};
};

export default connect(null, mapDispatchToProps)(ToDo);
