import React, { Component } from "react";
import { navigate } from "@reach/router";
import classNames from "classnames";
import { AppContext } from "../../context/AppProvider";
import SupervisorModal from "../SupervisorModal/SupervisorModal";
import styles from "./styles.module.css";
import supervisors from "../data.js";
import plusSign from "../../assets/Plus.png";

export default class SupervisorList extends Component {
	static contextType = AppContext;

	constructor() {
		super();
		this.state = {
			isOpen: false,
		};

		this.handleCloseModal = this.handleCloseModal.bind(this);
		this.handleOpenModal = this.handleOpenModal.bind(this);
		this.handleView = this.handleView.bind(this);
	}

	handleCloseModal() {
		this.setState({ isOpen: false });
	}

	handleOpenModal() {
		this.setState({ isOpen: true });
	}

	handleView(id) {
		navigate(`/${id}`);
	}

	render() {
		const { isOpen } = this.state;

		return (
			<section className={styles.container}>
				<SupervisorModal
					isOpen={isOpen}
					handleCloseModal={this.handleCloseModal}
				/>
				<section className={styles["content"]}>
					<div className={styles["content-header"]}>
						<h1 className={styles.title}>List of Supervisors</h1>
						<button
							className={styles["add-button"]}
							onClick={this.handleOpenModal}
						>
							<img
								className={styles["plus-sign"]}
								src={plusSign}
								alt="Plus sign"
							/>
							<p className={styles["add-button-text"]}>Add supervisor</p>
						</button>
					</div>
					<section className={styles["table"]}>
						<div className={styles["table-header"]}>
							<p
								className={classNames(
									styles["column-first-name"],
									styles["column-header-text"]
								)}
							>
								First Name
							</p>
							<p
								className={classNames(
									styles["column-last-name"],
									styles["column-header-text"]
								)}
							>
								Last Name
							</p>
							<p
								className={classNames(
									styles["column-state"],
									styles["column-header-text"]
								)}
							>
								State
							</p>
							<p
								className={classNames(
									styles["column-postcode"],
									styles["column-header-text"]
								)}
							>
								Postcode
							</p>
							<p
								className={classNames(
									styles["column-employer"],
									styles["column-header-text"]
								)}
							>
								Gym / Studio
							</p>
							<p
								className={classNames(
									styles["column-phone"],
									styles["column-header-text"]
								)}
							>
								Phone
							</p>
							<p
								className={classNames(
									styles["column-button"],
									styles["column-header-text"]
								)}
							></p>
						</div>
						{supervisors.map(
							({
								id,
								firstName,
								lastName,
								state,
								postcode,
								employer,
								phone,
							}) => (
								<div className={styles["table-row"]} key={id}>
									<p
										className={classNames(
											styles["column-first-name"],
											styles["column-content-text"]
										)}
									>
										{firstName}
									</p>
									<p
										className={classNames(
											styles["column-last-name"],
											styles["column-content-text"]
										)}
									>
										{lastName}
									</p>
									<p
										className={classNames(
											styles["column-state"],
											styles["column-content-text"]
										)}
									>
										{state}
									</p>
									<p
										className={classNames(
											styles["column-postcode"],
											styles["column-content-text"]
										)}
									>
										{postcode}
									</p>
									<p
										className={classNames(
											styles["column-employer"],
											styles["column-content-text"]
										)}
									>
										{employer}
									</p>
									<p
										className={classNames(
											styles["column-phone"],
											styles["column-content-text"]
										)}
									>
										{phone}
									</p>
									<p
										className={classNames(
											styles["column-button"],
											styles["column-content-text"]
										)}
									>
										<button
											className={styles["view-button"]}
											onClick={() => this.handleView(id)}
										>
											View profile
										</button>
									</p>
								</div>
							)
						)}
					</section>
				</section>
			</section>
		);
	}
}
