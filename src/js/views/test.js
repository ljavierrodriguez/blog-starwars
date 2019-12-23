import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropsType from "prop-types";

export class Test extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		console.log(this.props.match.params.name);
	}
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<>
							<h1>Hola desde Test {store.name}</h1>
							<button className="btn btn-primary" onClick={() => actions.mensaje()}>
								Click {this.props.match.params.name != null ? this.props.match.params.name : ""}
							</button>
						</>
					);
				}}
			</Context.Consumer>
		);
	}
}

Test.propTypes = {
	match: PropsType.object
};
