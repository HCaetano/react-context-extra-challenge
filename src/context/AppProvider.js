import React, { Component } from "react";

export const AppContext = React.createContext();

class AppProvider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			supervisor: {
				firstName: "John",
				lastName: "Dahl",
				state: "state",
				postcode: "post",
				employer: "Superfit",
				phone: "9232",
				email: "email@email.com",
			},
		};

		this.setSupervisor = this.setSupervisor.bind(this);
	}

	setSupervisor(supervisor) {
		this.setState(supervisor);
	}

	render() {
		const { children } = this.props;

		return (
			<AppContext.Provider
				value={{
					supervisor: this.state.supervisor,
					setSupervisor: this.setSupervisor,
				}}
			>
				{children}
			</AppContext.Provider>
		);
	}
}

export const AppConsumer = AppContext.Consumer;

export default AppProvider;
