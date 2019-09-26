import React from 'react';
import { Link } from 'react-router-dom';
import { ActorList } from '../data/actors';

const Actors = (props) => {
  let actors = ActorList.map((person) => {
    return (
      <div className="actor-container">
        <Link to={`/actors/${person.url}`}>
          <div className="actor-image" style={{ backgroundImage: "url(" + person.img_src + ")" }}>
          </div>
          <h3>{person.name}</h3>
        </Link>
      </div>
    );
  });

  return (
    <div className="main-content">
      <div><Link to="/" className="back">Back</Link></div>
      <h2>{props.title}</h2>
      <div className="container">
        {actors}
      </div>
    </div>
  )
}

export default Actors