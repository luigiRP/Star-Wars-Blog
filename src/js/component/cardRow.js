import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import Card from "./card.js";
import { Context } from "../store/appContext.js";
export default function CardRow(props) {
	const { store } = useContext(Context);

	if (props.title == "Characters") {
		return (
			<Fragment>
				<div className="container border-bottom border-danger mt-5">
					<h1 className="text-danger">
						<strong>{props.title}</strong>
					</h1>
				</div>
				<div className="container bg-white mt-2 ">
					<div className="row p-3 box d-flex flex-nowrap">
						{store.people.map((person, index) => {
							return (
								<Card
									key={index}
									name={person.name}
									char1={"Eye Color: " + person.eye_color}
									char2={"Mass: " + person.mass}
									char3={"Gender: " + person.gender}
									img="https://super-ficcion.com/wp-content/uploads/2020/03/Portada-1-987x627.jpg"
								/>
							);
						})}
					</div>
				</div>
			</Fragment>
		);
	} else if (props.title == "Planets") {
		return (
			<Fragment>
				<div className="container border-bottom border-danger mt-5">
					<h1 className="text-danger">
						<strong>{props.title}</strong>
					</h1>
				</div>
				<div className="container bg-white mt-2 ">
					<div className="row p-3 box d-flex flex-nowrap">
						{store.planets.map((planet, index) => {
							return (
								<Card
									key={index}
									name={planet.name}
									char1={"Terrain: " + planet.terrain}
									char2={"Population: " + planet.population}
									char3={"Diameter: " + planet.diameter}
									img="https://d2cdo4blch85n8.cloudfront.net/wp-content/uploads/2019/08/Planet-with-Three-Suns-Discovered-Featured-image.jpg"
								/>
							);
						})}
					</div>
				</div>
			</Fragment>
		);
	} else {
		return (
			<Fragment>
				<div className="container border-bottom border-danger mt-5">
					<h1 className="text-danger">
						<strong>{props.title}</strong>
					</h1>
				</div>
				<div className="container bg-white mt-2 ">
					<div className="row p-3 box d-flex flex-nowrap">
						{store.starShips.map((ships, index) => {
							return (
								<Card
									key={index}
									name={ships.name}
									char1={"Passengers: " + ships.passengers}
									char2={"Speed: " + ships.max_atmosphering_speed}
									char3={"Class: " + ships.starship_class}
									img="https://www.homewallmurals.co.uk/ekmps/shops/allwallpapers/images/star-wars-starships-paper-wallpaper-[2]-5084-p.jpg"
								/>
							);
						})}
					</div>
				</div>
			</Fragment>
		);
	}
}

CardRow.propTypes = {
	title: PropTypes.string
};
