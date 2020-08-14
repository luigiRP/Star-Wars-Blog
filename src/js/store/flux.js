import { checkPropTypes } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			starShips: [],
			planets: [],
			people: [],
			favorites: []
		},
		actions: {
			deleteLike: props => {
				let listLike = [];

				for (let i = 0; i < getStore().favorites.length; i++) {
					if (props != getStore().favorites[i]) {
						listLike.push(getStore().favorites[i]);
					}
				}
				setStore({ favorites: listLike });
			},
			like: props => {
				if (!getStore().favorites.includes(props)) setStore({ favorites: [...getStore().favorites, props] });
			},

			getVehicles: async () => {
				let response = await fetch("https://swapi.dev/api/starships/");
				let newStarShips = await response.json();
				setStore({ starShips: newStarShips.results });
			},

			getPlanets: async () => {
				let response = await fetch("https://swapi.dev/api/planets/");
				let newPlanets = await response.json();
				setStore({ planets: newPlanets.results });
			},
			getCharacter: () => {
				fetch("https://swapi.dev/api/people/")
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						// Read the response as json.
						return response.json();
					})
					.then(function(responseAsJson) {
						// Do stuff with the JSON
						setStore({ people: responseAsJson.results });
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			}
		}
	};
};

export default getState;
