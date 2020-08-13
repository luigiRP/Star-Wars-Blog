const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			starShips: [],
			planets: [],
			people: [],
			details: [
				{
					char: "Sample Char1",
					title: "Sample Title1"
				},
				{
					char: "Sample Char2",
					title: "Sample Title2"
				},
				{
					char: "Sample Char3",
					title: "Sample Title3"
				},
				{
					char: "Sample Char4",
					title: "Sample Title4"
				},
				{
					char: "Sample Char5",
					title: "Sample Title5"
				}
			],
			name: "Sample Name",
			img:
				"https://mediad.publicbroadcasting.net/p/wuis/files/styles/x_large/public/202002/marvel-star-wars-allegiance.jpg"
		},

		actions: {
			getVehicles: async () => {
				let next;
				let link = "https://swapi.dev/api/starships/?page=";
				for (let i = 1; next !== null; i++) {
					let response = await fetch(link.concat(i.toString()));
					let newStarShips = await response.json();
					next = newStarShips.next;
					previousStarShips = getStore().starShips;

					// newStarShips.results.map((ship, index) => {
					// 	console.log(previousStarShips);
					// });

					setStore({ starShips: newStarShips.results });
				}
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
			},
			setDetails: (name, char1, char2, char3, char4, char5, title1, title2, title3, title4, title5, img) => {
				setStore({
					details: [
						{ char: char1, title: title1 },
						{ char: char2, title: title2 },
						{ char: char3, title: title3 },
						{ char: char4, title: title4 },
						{ char: char5, title: title5 }
					]
				});
				setStore({ name: name });
				setStore({ img: img });
			}
		}
	};
};

export default getState;
