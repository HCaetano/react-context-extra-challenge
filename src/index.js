import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import App from "./components/App/App";
import Supervisor from "./components/Supervisor/Supervisor";
import SupervisorList from "./components/SupervisorList/SupervisorList";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<App path="/">
				<SupervisorList path="/" />
				<Supervisor path="/:supervisorId" />
			</App>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
