import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { Navbar, Nav, Image, DropdownButton, Dropdown } from "react-bootstrap";

export const Favorites = () => {
	const { store, actions } = useContext(Context);

	return (
		<Navbar>
			<Navbar.Brand>
				<Link to="/">
					<Image
						src="https://www.paredro.com/wp-content/uploads/2019/01/El-logo-de-Star-Wars-tiene-ma%CC%81s-de-9-variaciones-en-su-disen%CC%83o.jpg"
						// width="60"
						height="60"
						alt="Star Wars"
					/>
				</Link>
			</Navbar.Brand>

			<DropdownButton id="dropdown-basic-button" title={`Favoritos ${store.favorites.length}`}>
				{store.favorites.map((item, index) => {
					return (
						<Dropdown.Item id="item-favorites" key={index} href="#/action-1">
							{item}{" "}
							<span onClick={() => actions.deleteFavorites(index)}>
								<i className="fas fa-trash-alt float-right" />
							</span>
						</Dropdown.Item>
					);
				})}
			</DropdownButton>
		</Navbar>
	);
};
