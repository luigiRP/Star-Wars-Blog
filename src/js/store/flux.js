const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
            starShips: [],
            planets: []
		},
		actions: {
			getVehicles: async () => {
				let response = await fetch("https://swapi.dev/api/starships/");
				let newStarShips = await response.json();
				setStore({ starShips: newStarShips.results });
            },

            getPlanets: async () => {
				let response = await fetch("https://swapi.dev/api/planets/");
				let newPlanets = await response.json();
				setStore({ planets: newPlanets.results });
			}
            
		}
	};
};

export default getState;
