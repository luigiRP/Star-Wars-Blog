import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { Context } from "../store/appContext";
export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="d-flex row justify-content-between align-items-center border border-bottom bg-light">
			<a href="/">
				<img
					className="mx-5 my-3"
					src="https://seeklogo.com/images/S/Star_Wars-logo-B06952A462-seeklogo.com.png"
					alt="starWars"
					width="50"
					height="50"
				/>
			</a>
			<a href="/people">
				<h3 className="text-danger">Characters</h3>
			</a>
			<a href="/planets">
				<h3 className="text-danger">Planets</h3>
			</a>
			<a href="/Starships">
				<h3 className="text-danger">Vehicles</h3>
			</a>
			<Dropdown className="mx-5 my-3">
				<Dropdown.Toggle variant="success" id="dropdown-basic">
					Favorites
				</Dropdown.Toggle>

				<Dropdown.Menu>
					{store.favorites.map((variable, index) => {
						return (
							<Dropdown.Item key={index} href="#/action-3">
								{variable}
								<i
									onClick={() => {
										actions.deleteLike(variable);
									}}
									className="fas fa-trash ml-3"
								/>
							</Dropdown.Item>
						);
					})}
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
};
