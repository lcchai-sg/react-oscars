import React from 'react';
import { Link } from 'react-router-dom';
import { FilmsList } from '../data/films';

const Films = (props) => {
  let films = FilmsList.map((film) => {
    return (
      <div className="actor-container">
        <a>
          <div className="actor-image" style={{ backgroundImage: "url(" + film.img_src + ")" }}>
          </div>
          <h3>{film.name}</h3>
        </a>
      </div>
    );
  });

  return (
    <div className="main-content">
      <div><Link to="/" className="back">Back</Link></div>
      <h2>{props.title}</h2>
      <div className="container">
        {films}
      </div>
    </div>
  )
}

export default Films