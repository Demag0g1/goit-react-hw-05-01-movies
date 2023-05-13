import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link text-white-solid " to="/">
              Home
            </NavLink>
            <NavLink
              className="nav-item nav-link text-white-solid "
              to="/movies"
            >
              Movies
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
