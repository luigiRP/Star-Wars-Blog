import React from "react";
import PropTypes from "prop-types";
import Favorites from "./favorite.js";

export default function Card(props) {
	return (
		<div className="card col-3 mx-3">
			<img className="card-img-top mt-3" src={props.img} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title text-danger">{props.name}</h5>
				<p className="card-text">
					{props.char1} <br />
					{props.char2} <br /> {props.char3}
				</p>
				<div className="d-flex justify-content-between">
					<a href="#" className="btn btn-primary">
						Learn more!
					</a>
					<Favorites />
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	name: PropTypes.string,
	char1: PropTypes.string,
	char2: PropTypes.string,
	char3: PropTypes.string,
	img: PropTypes.string
};
