import React from "react";
import { connect } from "react-redux";

function Detail({ toDos }) {
	return (
		<>
			<h1>{toDos?.text}</h1>
			<span>created at {new Date(toDos?.id).toString()}</span>
		</>
	);
}

function mapStateToProps(state, mapProps) {
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
