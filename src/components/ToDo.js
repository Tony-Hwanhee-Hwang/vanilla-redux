import React from "react";
import { connect } from "react-redux";
import { actionCreator } from "../store";

function ToDo({ text, deleteToDo }) {
	return (
		<li>
			{text}
			<button onClick={deleteToDo}>DEL</button>
		</li>
	);
}

const mapDispatchToProps = (dispatch, optProps) => {
	return {
		deleteToDo: () => dispatch(actionCreator.deleteToDo(optProps.id)),
	};
};

export default connect(null, mapDispatchToProps)(ToDo);
