const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			starShips: []
		},
		actions: {
			getVehicles: async () => {
				let response = await fetch("https://swapi.dev/api/starships/");
				let newStarShips = await response.json();
				setStore({ starShips: newStarShips.results });
			}
		}
	};
};

export default getState;
