import React from "react";

const Card = (props)=>{


  return (  
    <div className="card" style={{width:"18rem"}}>
  <img className="card-img-top" src={props.img} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{props.nombre}</h5>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Gender: {props.gender}</li>
    <li className="list-group-item">House: {props.casa}</li>

  </ul>
  <div className="card-body">
    
    <a href="#">ver mas</a>
    <a button="#">favoritos</a> *//*para añadir a arrey de favoritos falta codigo*//*
    
  </div>
</div>)
}

export default Card;