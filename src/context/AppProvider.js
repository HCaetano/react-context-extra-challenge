import React, { Component } from "react";

export const AppContext = React.createContext();

class AppProvider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			supervisors: [],
		};

		this.setSupervisor = this.setSupervisor.bind(this);
	}

	setSupervisor(supervisor) {
		this.setState((previousState) => ({
			supervisors: [...previousState.supervisors, supervisor],
		}));
	}

	render() {
		const { children } = this.props;

		return (
			<AppContext.Provider
				value={{
					supervisors: this.state.supervisors,
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
