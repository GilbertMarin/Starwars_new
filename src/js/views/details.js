import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { element } from "prop-types";
import { Container, Button, Card, Row, Col, Image } from "react-bootstrap";

export const Details = () => {
	let { value, id } = useParams();
	const history = useHistory();
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getAllDetails(value, id);
	}, []);

	const goBack = () => {
		history.goBack();
	};
	return (
		<Container>
			<Row>
				{store[value] && store[value][id - 1] ? (
					<Col className="offset-md-4">
						<br />
						<Card style={{ width: "18rem" }}>
							<Image
								src="https://i.blogs.es/26ba45/star-wars-eras/450_1000.jpeg"
								rounded
								className="card-img-top"
							/>
							<Card.Body>
								<Card.Title>
									{value == "films"
										? store[value][id - 1].properties.director
										: store[value][id - 1].name}
								</Card.Title>
							</Card.Body>
						</Card>
					</Col>
				) : (
					<h1 style={{ color: "white" }}>You must select a value... Go Back :)</h1>
				)}
				<br />
			</Row>
			<br />
			<Link to="/">
				<Button variant="primary" onClick={() => goBack()}>
					Go back
				</Button>
			</Link>
		</Container>
	);
};
