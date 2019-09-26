import React from 'react';
import { NavLink } from 'react-router-dom';

const navbar = (props) => {
  return (
    <nav>
      <h2 className="logo"><a className="logo-link" href="#">{props.title}</a></h2>
      <ul className="nav-menu">
        <li><NavLink className="nav-menu__link" exact to="/">Home</NavLink></li>
        <li><NavLink className="nav-menu__link" to="/actors">Best Actors</NavLink></li>
        <li><NavLink className="nav-menu__link" to="/actress">Best Actress</NavLink></li>
        <li><NavLink className="nav-menu__link" to="/films">Best Films</NavLink></li>
      </ul>
    </nav>
  )
}

export default navbar;