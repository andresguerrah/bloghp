import React, {useContext} from "react";
import "../../styles/home.css";
import Card from "../Card.js";
import { Context } from "../store/appContext";

export const Home = () => {
	const {store, actions} = useContext(Context)
	return(
	<div className="text-center mt-5">
		<h1>Mundo de Harry</h1>


		
		<div classNAme="container">
		<div className="row">{store.gryffindor?.map((persona)=>{return ( <Card casa={persona.house}img={persona.image}nombre={persona.name} gender={persona.gender}/> )})}</div>
		<div className="row">{store.hufflepuff?.map((persona)=>{return ( <Card casa={persona.house}img={persona.image}nombre={persona.name} gender={persona.gender}/> )})}</div>
		<div className="row">{store.slytherin?.map((persona)=>{return ( <Card casa={persona.house}img={persona.image}nombre={persona.name} gender={persona.gender}/> )})}</div>
		</div>
	</div>

	
);}

