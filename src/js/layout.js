import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Login } from "./views/login.js";
import { Home } from "./views/home";
import { Generic } from "./views/generic";
import { Details } from "./views/details.js";
import { SignUp } from "./views/signup.js";
import injectContext, { Context } from "./store/appContext";

import { Navbar } from "./component/navbar";
import { NavbarTwo } from "./component/navbar2";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	const { store, actions } = useContext(Context);

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					{store.login ? <Navbar /> : <NavbarTwo />}
					<Switch>
						<Route exact path="/">
							<Login />
						</Route>
						<Route exact path="/signup">
							<SignUp />
						</Route>
						<Route exact path="/home">
							<Home />
						</Route>
						<Route exact path="/generic/:value">
							<Generic />
						</Route>
						<Route exact path="/details/:value/:id">
							<Details />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
