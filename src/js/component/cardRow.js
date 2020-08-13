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
									title1="Eye Color"
									title2="Mass"
									title3="Gender"
									title4="Skin Color"
									title5="Birth Year"
									char1={person.eye_color}
									char2={person.mass}
									char3={person.gender}
									char4={person.skin_color}
									char5={person.birth_year}
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
									title1="Terrain"
									title2="Population"
									title3="Diameter"
									title4="Orbital Period"
									title5="Climate"
									char1={planet.terrain}
									char2={planet.population}
									char3={planet.diameter}
									char4={planet.orbital_period}
									char5={planet.climate}
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
					<div className="row p-3 box d-flex flex-nowrap ">
						{store.starShips.map((ships, index) => {
							return (
								<Card
									key={index}
									name={ships.name}
									title1="Passengers"
									title2="Speed"
									title3="Class"
									title4="Cost"
									title5="Length"
									char1={ships.passengers}
									char2={ships.max_atmosphering_speed}
									char3={ships.starship_class}
									char4={ships.cost_in_credits}
									char5={ships.length}
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
