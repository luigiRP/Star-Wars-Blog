import React from "react";
import PropTypes from "prop-types";

export default function Card(props) {
	return (
		<div className="card col-3 mx-3">
			<img className="card-img-top mt-3" src="https://via.placeholder.com/150" alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title text-danger">{props.name}</h5>
				<p className="card-text">
					Gender: {props.char1} <br />
					Hair Color: {props.char2} <br /> Eye-Color: {props.char3}
				</p>
				<div className="d-flex justify-content-between">
					<a href="#" className="btn btn-primary">
						Learn more!
					</a>
					<button className="btn btn-danger">
						<i className="far fa-heart" />
					</button>
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	name: PropTypes.string,
	char1: PropTypes.string,
	char2: PropTypes.string,
	char3: PropTypes.string
};
