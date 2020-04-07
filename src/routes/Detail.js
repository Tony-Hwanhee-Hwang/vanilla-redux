import React from "react";
import { connect } from "react-redux";
import { actionCreator } from "../store";

function Detail({ toDos }) {
	return (
		<>
			<h1>{toDos?.text}</h1>
			<span>created at {new Date(toDos?.id).toString()}</span>
		</>
	);
}

function mapStateToProps(state, mapProps) {
	console.log(1, state);
	console.log(2, mapProps);
	const {
		match: {
			params: { id },
		},
	} = mapProps;
	return {
		toDos: state.find((item) => item.id === parseInt(id)),
	};
}

export default connect(mapStateToProps)(Detail);
