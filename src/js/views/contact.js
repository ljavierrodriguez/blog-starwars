import React from "react";
import { Link } from "react-router-dom";
import { Context } from "./../store/appContext";

export const Contact = props => {
	return (
		<Context.Consumer>
			{({ store, actions }) => {
				return (
					<ul>
						{store.demo.length > 0 &&
							store.demo.map((item, i) => {
								return <li key={i}>{item.title}</li>;
							})}
						<li>
							<Link to="/" className="btn btn-primary">
								Home
							</Link>
						</li>
					</ul>
				);
			}}
		</Context.Consumer>
	);
};
