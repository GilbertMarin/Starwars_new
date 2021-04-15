import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Container, Button, InputGroup, FormControl, Row, Form, FormGroup, Col } from "react-bootstrap";
import { SignUp } from "./signup";

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
			<Row className="justify-content-center pt-5 mt-5 mr-1">
				<Col className="col-md-4 formulary">
					<Form action="">
						<FormGroup className="text-center pb-3">
							<h1 className="text-light">Login</h1>
						</FormGroup>
						<FormGroup className="mx-sm-4 pb-3">
							<input
								type="text"
								className="form-control"
								placeholder="Username"
								onChange={e => setUser(e.target.value)}
							/>
						</FormGroup>
						<FormGroup className="mx-sm-4 pb-3">
							<input
								type="password"
								className="form-control"
								placeholder="Password"
								onChange={e => setPass(e.target.value)}
							/>
						</FormGroup>
						<FormGroup className="mx-sm-4 pb-3">
							<Button
								className="btn btn-block signin"
								onClick={() => {
									actions.loginValidation(user, pass);
								}}>
								Login
							</Button>
						</FormGroup>
						<FormGroup className="mx-sm-4 pb-3 text-center">
							<Link to="/signup">
								<input type="submit" className="btn btn-block register" value="Register" />
							</Link>
						</FormGroup>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

// 	return (
// 		<Container>
// 			<InputGroup className="mb-3">
// 				<FormControl
// 					onChange={e => setUser(e.target.value)}
// 					placeholder="Username"
// 					aria-label="Username"
// 					aria-describedby="basic-addon1"
// 				/>
// 			</InputGroup>
// 			<InputGroup className="mb-3">
// 				<FormControl
// 					onChange={e => setPass(e.target.value)}
// 					type="password"
// 					placeholder="Password"
// 					aria-label="Password"
// 					aria-describedby="basic-addon1"
// 				/>
// 			</InputGroup>
// 			<Button
// 				onClick={() => {
// 					actions.loginValidation(user, pass);
// 				}}>
// 				Login
// 			</Button>
// 			<Button>Sign up</Button>
// 		</Container>
// 	);
// };
