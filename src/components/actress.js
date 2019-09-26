import React from 'react';
import { Link } from 'react-router-dom';
import { ActressList } from '../data/actress';

const Actress = (props) => {
  let actress = ActressList.map((person) => {
    return (
      <div className="actor-container">
        <a>
          <div className="actor-image" style={{ backgroundImage: "url(" + person.img_src + ")" }}>
          </div>
          <h3>{person.name}</h3>
        </a>
      </div>
    );
  });

  return (
    <div className="main-content">
      <div><Link to="/" className="back">Back</Link></div>
      <h2>{props.title}</h2>
      <div className="container">
        {actress}
      </div>
    </div>
  )
}

export default Actress