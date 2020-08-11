import React from "react";
import Card from "../component/card.js";
import "../../styles/home.scss";

export const Home = () => (
	<div className="mt-5 ml-3">
		<div className="container border-bottom border-danger">
			<h1 className="text-danger">
				<strong>Characters</strong>
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
		<div className="container border-bottom border-danger mt-5">
			<h1 className="text-danger">
				<strong>Planets</strong>
			</h1>
		</div>
		<div className="container bg-white mt-2 ">
			<div className="row p-3 box d-flex flex-nowrap">
				<Card name="Endor" char1="male" char2="blond" char3="blue" />
				<Card name="Anakin Skywalker" char1="male" char2="brown" char3="blue" />
				<Card name="Princess Leia" char1="female" char2="brown" char3="green" />
				<Card name="Han Solo" char1="male" char2="dark brown" char3="blue" />
				<Card name="C3P0" char1="n/a" char2="n/a" char3="yellow" />
			</div>
		</div>
	</div>
);
