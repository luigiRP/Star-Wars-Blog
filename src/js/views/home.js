import React from "react";
import CardRow from "../component/cardRow.js";
import "../../styles/home.scss";

export const Home = () => (
	<div className="mt-5 ml-3">
		<CardRow title="Characters" />
		<CardRow title="Planets" />
	</div>
);
