import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { element } from "prop-types";
import { Container, Button, Card, Row, Col, Image } from "react-bootstrap";

export const getAllDet = () => {
	const { store, actions } = useContext(Context);

	return <h1>Hola</h1>;
};
