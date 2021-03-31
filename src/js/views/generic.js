import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";
import { element } from "prop-types";
import { Container, Button, Card, Row, Col, Image } from "react-bootstrap";

export const Generic = () => {
	let { value } = useParams();
	const history = useHistory();
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getAllData(value);
	}, []);

	const goBack = () => {
		history.goBack();
	};

	return (
		<Container>
			<Row>
				{store[value] && store[value].length > 0 ? (
					store[value].map((element, index) => (
						<Col key={index}>
							<br />
							<Card style={{ width: "18rem" }}>
								<Image
									src="https://www.lacasadeel.net/wp-content/uploads/2014/12/Star-Wars-Logo.jpg"
									rounded
									className="card-img-top"
								/>
								<Card.Body>
									<Card.Title>
										{value == "films" ? element.properties.title : element.name}
									</Card.Title>
									<Link to={`/details/${value}/${element.uid}`}>
										<Button variant="primary">Go to details</Button>
									</Link>
									<Button
										variant="warning"
										onClick={() => {
											actions.addFavorite(
												value == "films" ? element.properties.title : element.name
											);
										}}>
										<i className="fa fa-heart" />
									</Button>
								</Card.Body>
							</Card>
						</Col>
					))
				) : (
					<h1>Cargando...</h1>
				)}
				<br />
			</Row>
			<br />
			<Link to="/">
				<Button variant="primary">Back to home</Button>
			</Link>
		</Container>
	);
};
