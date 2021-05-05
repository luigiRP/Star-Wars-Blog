import React from "react";
import CardRow from "../component/cardRow.js";
import "../../styles/home.scss";

export const Home = () => (
	<div className="container-fluid">
		<CardRow title="Characters" />
		<CardRow title="Planets" />
		<CardRow title="Vehicles" />
	</div>
);
