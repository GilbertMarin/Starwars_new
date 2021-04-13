import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Container, Button, InputGroup, FormControl } from "react-bootstrap";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [user, setUser] = useState("");
	const [pass, setPass] = useState("");
	const history = useHistory();
	useEffect(() => {
		actions.getToken();
		if (store.login) {
			history.push("/home");
			actions.getFavorites();
		}
	}, []);
	return (
		<Container>
			<InputGroup className="mb-3">
				<FormControl
					onChange={e => setUser(e.target.value)}
					placeholder="Username"
					aria-label="Username"
					aria-describedby="basic-addon1"
				/>
			</InputGroup>
			<InputGroup className="mb-3">
				<FormControl
					onChange={e => setPass(e.target.value)}
					type="password"
					placeholder="Password"
					aria-label="Password"
					aria-describedby="basic-addon1"
				/>
			</InputGroup>
			<Button
				onClick={() => {
					actions.loginValidation(user, pass);
				}}>
				Login
			</Button>
			<Button>Sign up</Button>
		</Container>
	);
};
