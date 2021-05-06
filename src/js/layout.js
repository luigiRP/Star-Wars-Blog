import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import CardRow from "./component/cardRow.js";
import Details from "./views/details.js";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/

	return (
		<div className="d-flex flex-column h-100">
			<HashRouter basename={process.env.BASENAME}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/people">
							<CardRow title="Characters" />
						</Route>
						<Route exact path="/planets">
							<CardRow title="Planets" />
						</Route>
						<Route exact path="/starShips">
							<CardRow title="Starships" />
						</Route>
						<Route path="/details">
							<Details />
						</Route>
						<Route>
							<img
								src="https://memegenerator.net/img/instances/64415524/404-error-occured-has-not-found-the-file-was.jpg"
								alt="yoda"
							/>
						</Route>
					</Switch>
				</ScrollToTop>
			</HashRouter>
		</div>
	);
};

export default injectContext(Layout);
