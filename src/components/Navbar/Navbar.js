import React, { Component } from "react";
import styles from "./styles.module.css";
import logo from "../../assets/Logo.png";

export default class Navbar extends Component {
	render() {
		return (
			<section className={styles.container}>
				<img className={styles.picture} src={logo} alt="Jungle Devs logo" />
			</section>
		);
	}
}
