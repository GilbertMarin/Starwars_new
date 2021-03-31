import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Container, Button, Carousel, Image } from "react-bootstrap";

export const Home = () => {
	const { store, actions } = useContext(Context);
	//console.log("store", store);
	return (
		<Container>
			<Carousel>
				{store.home.map(([key, value], index) => {
					return (
						<Carousel.Item key={index}>
							{(() => {
								switch (key) {
									case "films":
										return (
											<Image
												src="https://cdn.pocket-lint.com/r/s/1200x/assets/images/147767-tv-feature-what-order-should-you-watch-all-the-star-wars-films-image1-1wdfjceytb.jpg"
												rounded
												alt={key}
												className="d-block w-100"
												width="500px"
												height="600px"
											/>
										);
									case "people":
										return (
											<Image
												src="https://www.geekgirlauthority.com/wp-content/uploads/2018/05/7773769005_star-wars-1280x640.jpg"
												rounded
												alt={key}
												className="d-block w-100"
												width="500px"
												height="600px"
											/>
										);
									case "planets":
										return (
											<Image
												src="http://www.spoon-tamago.com/wp-content/uploads/2015/12/takodana-1.jpg"
												rounded
												alt={key}
												className="d-block w-100"
												width="500px"
												height="600px"
											/>
										);
									case "species":
										return (
											<Image
												src="https://miro.medium.com/max/648/1*tY39TZEwBwQa_gJfD-zJsA.jpeg"
												rounded
												alt={key}
												className="d-block w-100"
												width="500px"
												height="600px"
											/>
										);
									case "starships":
										return (
											<Image
												src="https://www.denofgeek.com/wp-content/uploads/2016/01/millennium-falcon.jpg"
												rounded
												alt={key}
												className="d-block w-100"
												width="500px"
												height="600px"
											/>
										);
									case "vehicles":
										return (
											<Image
												src="https://www.sideshow.com/wp/wp-content/uploads/2018/09/X-Wing-Fighter_47c7c342.jpg"
												rounded
												alt={key}
												className="d-block w-100"
												width="500px"
												height="600px"
											/>
										);
									default:
										return (
											<Image
												src="https://www.geekgirlauthority.com/wp-content/uploads/2018/05/7773769005_star-wars-1280x640.jpg"
												rounded
												alt={key}
												className="d-block w-100"
												width="500px"
												height="600px"
											/>
										);
								}
							})()}
							<Carousel.Caption key={index}>
								<Link to={`/generic/${key}`}>
									<Button variant="primary">GO to {key}</Button>
								</Link>
							</Carousel.Caption>
						</Carousel.Item>
					);
				})}
			</Carousel>
		</Container>
	);
};
