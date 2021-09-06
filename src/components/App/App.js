import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";

export default class App extends Component {
	render() {
		return (
			<main>
				<Navbar />
				{this.props.children}
			</main>
		);
	}
}
