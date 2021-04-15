import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import { Context } from "../store/appContext";
import { Container, Form, Input, Button, Row, Col, FormGroup } from "react-bootstrap";
import { Login } from "./login";

import "../../styles/demo.scss";

export const SignUp = () => {
	const { store, actions } = useContext(Context);
	const [fname, setFirstName] = useState("");
	const [lname, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [user, setUsername] = useState("");
	const [pass, setPassword] = useState("");
	const history = useHistory();
	useEffect(() => {
		console.log("estoy en el useEffect");
		if (store.register) {
			alert("Username was created successfully");
			history.push("/");
		}
	});

	return (
		<Container>
			<Row className="justify-content-center pt-5 mt-5 mr-1">
				<Col className="col-md-4 formulary">
					<Form action="">
						<FormGroup className="text-center pb-3">
							<h1 className="text-light">Register</h1>
						</FormGroup>
						<FormGroup className="mx-sm-4 pb-3">
							<input
								type="text"
								className="form-control"
								placeholder="First Name"
								onChange={e => setFirstName(e.target.value)}
							/>
						</FormGroup>
						<FormGroup className="mx-sm-4 pb-3">
							<input
								type="text"
								className="form-control"
								placeholder="Last Name"
								onChange={e => setLastName(e.target.value)}
							/>
						</FormGroup>
						<FormGroup className="mx-sm-4 pb-3">
							<input
								type="text"
								className="form-control"
								placeholder="E-mail"
								onChange={e => setEmail(e.target.value)}
							/>
						</FormGroup>
						<FormGroup className="mx-sm-4 pb-3">
							<input
								type="text"
								className="form-control"
								placeholder="Username"
								onChange={e => setUsername(e.target.value)}
							/>
						</FormGroup>
						<FormGroup className="mx-sm-4 pb-3">
							<input
								type="password"
								className="form-control"
								placeholder="Password"
								onChange={e => setPassword(e.target.value)}
							/>
						</FormGroup>
						<FormGroup className="mx-sm-4 pb-3">
							<Button
								className="btn btn-block signin"
								onClick={() => {
									actions.registerValidation(fname, lname, email, user, pass);
								}}>
								Register
							</Button>
						</FormGroup>
						<FormGroup className="mx-sm-4 pb-3 text-center">
							<Link to="/">
								<input type="submit" className="btn btn-block register" value="Back to Login" />
							</Link>
						</FormGroup>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};
