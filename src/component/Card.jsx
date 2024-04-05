import React from 'react';
import '../App.css'; // Assuming your CSS is here. Adjust the path as necessary.

function Card(props) {
  return (
    <div className="cardContainer">
      <div className="cardBody" key={props.id}>
        <img className="cardPhoto" src={props.url} alt="" />
        <h1>{props.title}</h1>
        <h3>{props.phone}</h3>
        <h3>{props.email}</h3>
        <h6>{props.address}</h6>
        <p className="cardPostDescription">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
