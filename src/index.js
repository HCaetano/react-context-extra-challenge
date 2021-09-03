import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import App from "./components/App/App";
import Supervisor from "./components/Supervisor/Supervisor";
import SupervistorList from "./components/SupervisorList/SupervistorList";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<App path="/">
				<SupervistorList path="/" />
				<Supervisor path="/:supervisorId" />
			</App>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
