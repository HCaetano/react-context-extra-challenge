import React, { Component } from "react";
import { navigate } from "@reach/router";
import classNames from "classnames";
import { AppContext } from "../../context/AppProvider";
// import supervisors from "../data.js";
import userPicture from "../../assets/Avatar.png";
import styles from "./styles.module.css";

export default class Supervisor extends Component {
	static contextType = AppContext;

	constructor(props) {
		super(props);

		this.state = {
			supervisor: {
				firstName: "",
				lastName: "",
				phone: "",
				email: "",
			},
		};
	}

	componentDidMount() {
		const { supervisors } = this.context;
		const idFromUrl = Number(this.props.supervisorId);
		const fetchedSupervisor = supervisors.find(
			(supervisor) => supervisor.id === idFromUrl
		);
		this.setState({ supervisor: fetchedSupervisor });
	}

	render() {
		const {
			supervisor: { firstName, lastName, phone, email },
		} = this.state;

		return (
			<section className={styles.container}>
				<article className={styles.card}>
					<img
						className={styles.picture}
						src={userPicture}
						alt="User's profile"
					/>
					<h1 className={styles.name}>{`${firstName} ${lastName}`}</h1>
					<div className={styles["content-wrapper"]}>
						<p className={classNames(styles["card-text"], styles.label)}>
							Email
						</p>
						<p
							className={classNames(
								styles["card-text"],
								styles["user-information"]
							)}
						>
							{email}
						</p>
					</div>
					<div className={styles["content-wrapper"]}>
						<p className={classNames(styles["card-text"], styles.label)}>
							Mobile phone
						</p>
						<p
							className={classNames(
								styles["card-text"],
								styles["user-information"]
							)}
						>
							{phone}
						</p>
					</div>
					<button className={styles.button} onClick={() => navigate("/")}>
						Back to the list
					</button>
				</article>
			</section>
		);
	}
}
