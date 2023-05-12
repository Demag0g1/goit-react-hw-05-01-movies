import React from 'react';
import { NavLink } from 'react-router-dom';
// import { navbar } from 'bootstrap';

const Header = ({ showModal }) => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link text-white" to="/">
              Home
            </NavLink>
            <NavLink className="nav-item nav-link text-white" to="/movies">
              Movies
            </NavLink>
            <NavLink
              className="nav-item nav-link text-white"
              to="/movies/:movieId"
            >
              MovieDetails
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
