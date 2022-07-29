const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			gryffindor:[],
			slytherin: [],
			hufflepuff:[],
			ravenclaw: [],


			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
					getGriffindor:()=>{					//para llamar y guardar los datos de la appi
						fetch("https://hp-api.herokuapp.com/api/characters/house/gryffindor")
						.then(result=>result.json())
						.then(data=>setStore({gryffindor:data})) 
					},
					getSlytherin:()=>{					//para llamar y guardar los datos de la appi
						fetch("https://hp-api.herokuapp.com/api/characters/house/slytherin")
						.then(result=>result.json())
						.then(data=>setStore({slytherin:data})) 
					},

					getHufflepuff:()=>{					//para llamar y guardar los datos de la appi
						fetch("https://hp-api.herokuapp.com/api/characters/house/hufflepuff")
						.then(result=>result.json())
						.then(data=>setStore({hufflepuff:data})) 
					},

					getRavenclaw:()=>{					//para llamar y guardar los datos de la appi
						fetch("https://hp-api.herokuapp.com/api/characters/house/gryftindor")
						.then(result=>result.json())
						.then(data=>setStore({ravenclaw:data})) 
					},


			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
