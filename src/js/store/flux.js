const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			starShips: [],
			people: []
		},
		actions: {
			getVehicles: async () => {
				let response = await fetch("https://swapi.dev/api/starships/");
				let newStarShips = await response.json();
				setStore({ starShips: newStarShips.results });
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
