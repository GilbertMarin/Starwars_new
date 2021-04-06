import React from "react";
import { Link } from "react-router-dom";
import { Favorites } from "./favorite";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3 ">
			<Favorites />
		</nav>
	);
};
