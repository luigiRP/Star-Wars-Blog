import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Card from "./card.js";

export default function CardRow(props) {
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
						<Card name="Luke Skywalker" char1="male" char2="blond" char3="blue" />
						<Card name="Anakin Skywalker" char1="male" char2="brown" char3="blue" />
						<Card name="Princess Leia" char1="female" char2="brown" char3="green" />
						<Card name="Han Solo" char1="male" char2="dark brown" char3="blue" />
						<Card name="C3P0" char1="n/a" char2="n/a" char3="yellow" />
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
						<Card name="Endor" char1="male" char2="blond" char3="blue" />
						<Card name="Snow" char1="male" char2="brown" char3="blue" />
						<Card name="Earth" char1="female" char2="brown" char3="green" />
						<Card name="Death Star" char1="male" char2="dark brown" char3="blue" />
						<Card name="Moon" char1="n/a" char2="n/a" char3="yellow" />
					</div>
				</div>
			</Fragment>
		);
	}
}

CardRow.propTypes = {
	title: PropTypes.string
};
