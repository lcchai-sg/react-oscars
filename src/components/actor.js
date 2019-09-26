import React from 'react';
import { Link } from 'react-router-dom';

const Actor = (props) => {
  return (
    <div className="main-content">
      <div><Link to="/actors" className="back">Back</Link></div>
      <div className="container">
        <div className="image-profile" style={{ backgroundImage: "url(" + props.image + ")" }}></div>
        <h2>{props.name}</h2>
        <p>{props.details}</p>
      </div>
    </div>
  )
}

export default Actor;