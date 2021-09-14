import React, { Component } from "react";
import Modal from "react-modal";
import classNames from "classnames";
import { AppContext } from "../../context/AppProvider";
import styles from "./styles.module.css";

export default class SupervisorModal extends Component {
	static contextType = AppContext;

	constructor(props) {
		super(props);

		this.state = {};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange({ target: { name, value } }) {
		this.setState((previousState) => ({
			...previousState,
			[name]: value,
		}));
	}

	handleSubmit() {
		this.props.handleCloseModal();
	}

	render() {
		const { isOpen, handleCloseModal } = this.props;
		const {
			supervisor: {
				firstName,
				lastName,
				state,
				postcode,
				employer,
				phone,
				email,
			},
		} = this.context;

		return (
			<Modal
				className={styles.modal}
				overlayClassName={styles.overlay}
				isOpen={isOpen}
			>
				<section className={styles.container}>
					<h1 className={styles.title}>Add Supervisor</h1>
					<hr className={styles.line} />
					<form className={styles.form}>
						<div
							className={classNames(
								styles["content-wrapper"],
								styles["wrapper-first-name"]
							)}
						>
							<label className={styles.label} htmlFor="first-name">
								Name *
							</label>
							<input
								className={styles.input}
								type="text"
								name="firstName"
								placeholder="Add name"
								value={firstName}
								onChange={this.handleInputChange}
							/>
						</div>
						<div
							className={classNames(
								styles["content-wrapper"],
								styles["wrapper-last-name"]
							)}
						>
							<label className={styles.label} htmlFor="last-name">
								Surname *
							</label>
							<input
								className={styles.input}
								type="text"
								name="lastName"
								placeholder="Add surname"
								value={lastName}
								onChange={this.handleInputChange}
							/>
						</div>
						<div
							className={classNames(
								styles["content-wrapper"],
								styles["wrapper-state"]
							)}
						>
							<label className={styles.label} htmlFor="state">
								State *
							</label>
							<input
								className={styles.input}
								type="text"
								name="state"
								placeholder="i.e. NSW"
								value={state}
								onChange={this.handleInputChange}
							/>
						</div>
						<div
							className={classNames(
								styles["content-wrapper"],
								styles["wrapper-postcode"]
							)}
						>
							<label className={styles.label} htmlFor="postcode">
								Postcode *
							</label>
							<input
								className={styles.input}
								type="text"
								name="postcode"
								placeholder="i.e. 2000"
								value={postcode}
								onChange={this.handleInputChange}
							/>
						</div>
						<div
							className={classNames(
								styles["content-wrapper"],
								styles["wrapper-employer"]
							)}
						>
							<label className={styles.label} htmlFor="employer">
								Gym / studio *
							</label>
							<input
								className={styles.input}
								type="text"
								name="employer"
								placeholder="Add gym or studio"
								value={employer}
								onChange={this.handleInputChange}
							/>
						</div>
						<div
							className={classNames(
								styles["content-wrapper"],
								styles["wrapper-phone"]
							)}
						>
							<label className={styles.label} htmlFor="phone">
								Phone *
							</label>
							<input
								className={styles.input}
								type="text"
								name="phone"
								placeholder="0444 444 444"
								value={phone}
								onChange={this.handleInputChange}
							/>
						</div>
						<div
							className={classNames(
								styles["content-wrapper"],
								styles["wrapper-email"]
							)}
						>
							<label className={styles.label} htmlFor="email">
								Email *
							</label>
							<input
								className={styles.input}
								type="text"
								name="email"
								placeholder="Add email"
								value={email}
								onChange={this.handleInputChange}
							/>
						</div>
						<div>
							<button
								className={classNames(styles["button-return"], styles.button)}
								type="button"
								onClick={handleCloseModal}
							>
								Back
							</button>
							<button
								className={classNames(styles["button-submit"], styles.button)}
								type="button"
								onClick={this.handleSubmit}
							>
								Submit
							</button>
						</div>
					</form>
				</section>
			</Modal>
		);
	}
}
