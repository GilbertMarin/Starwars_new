import React from "react";
import { Link } from "react-router-dom";
import { Favorites } from "./favorite";
import { Image } from "react-bootstrap";

export const NavbarTwo = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3 ">
			<Image
				src="https://www.paredro.com/wp-content/uploads/2019/01/El-logo-de-Star-Wars-tiene-ma%CC%81s-de-9-variaciones-en-su-disen%CC%83o.jpg"
				// width="60"
				height="60"
				alt="Star Wars"
				style={{ display: "block", margin: "auto" }}
			/>
		</nav>
	);
};
