import React, {useContext} from "react";
import "../../styles/home.css";
import Card from "../Card.js";
import { Context } from "../store/appContext";

export const Home = () => {
	const {store, actions} = useContext(Context)
	return(
	<div className="text-center mt-5">
		<h1>Mundo de Harry</h1>

		{store.gryffindor[0]?.name}

		<h3> Personajes</h3>
		<div classNAme="row">
			{store.gryffindor?.map((persona)=>{return ( <li>{persona.name}</li> )})}
		{/* <div className="col-4-lg"><Card/></div>
		<div className="col-4-lg"><Card/></div>
		<div className="col-4-lg"><Card/></div>
		<div className="col-4-lg"><Card/></div> */}
		<h3>Casas</h3>
		</div>
	</div>

	
);}

<div className="col-4"></div>