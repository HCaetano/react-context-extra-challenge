import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import AppProvider from "../../context/AppProvider";

export default class App extends Component {
	render() {
		return (
			<AppProvider>
				<main>
					<Navbar />
					{this.props.children}
				</main>
			</AppProvider>
		);
	}
}
