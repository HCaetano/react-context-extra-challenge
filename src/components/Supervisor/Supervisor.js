import React from "react";
import classNames from "classnames";
import userPicture from "../../assets/Avatar.png";
import styles from "./styles.module.css";

export default function Supervisor() {
	return (
		<section className={styles.container}>
			<article className={styles.card}>
				<img
					className={styles.picture}
					src={userPicture}
					alt="User's profile picture"
				/>
				<h1 className={styles.name}>{"Sergio Martin"}</h1>
				<div className={styles["content-wrapper"]}>
					<p className={classNames(styles["card-text"], styles.label)}>Email</p>
					<p
						className={classNames(
							styles["card-text"],
							styles["user-information"]
						)}
					>
						{"sergio.decas@martin.com"}
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
						{"0456 456 456"}
					</p>
				</div>
				<button className={styles.button}>Back to the list</button>
			</article>
		</section>
	);
}
