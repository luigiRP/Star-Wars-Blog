import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

export const Navbar = () => {
	return (
		<div className="d-flex row justify-content-between align-items-center border border-bottom bg-light">
			<img
				className="mx-5 my-3"
				src="https://seeklogo.com/images/S/Star_Wars-logo-B06952A462-seeklogo.com.png"
				alt="starWars"
				width="50"
				height="50"
			/>
			<a href="#">
				<h3 className="text-danger">Characters</h3>
			</a>
			<a href="#">
				<h3 className="text-danger">Planets</h3>
			</a>
			<a href="#">
				<h3 className="text-danger">Vehicles</h3>
			</a>
			<Dropdown className="mx-5 my-3">
				<Dropdown.Toggle variant="success" id="dropdown-basic">
					Favorites
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<Dropdown.Item href="#/action-1">
						Luke <i className="fas fa-trash ml-3" />
					</Dropdown.Item>
					<Dropdown.Item href="#/action-2">
						Vader <i className="fas fa-trash ml-3" />
					</Dropdown.Item>
					<Dropdown.Item href="#/action-3">
						R2D2 <i className="fas fa-trash ml-3" />
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
};
