import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Favorites } from "./favorite";

import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-dark bg-dark mb-3 ">
			<Favorites />
			<button
				onClick={() => {
					actions.deleteToken();
				}}
				type="button"
				className="btn btn-danger">
				Logout
			</button>
		</nav>
	);
};
