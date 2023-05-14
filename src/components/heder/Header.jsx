import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: #fff5f5;
  font-size: 25px;

  &.active {
    color: orange;
  }
`;

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-secondary navbar-expand-lg">
      <div className="container-fluid">
        <div
          className="collapse navbar-collapse"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <StyledLink
              className="nav-item nav-link "
              to="/"
              end
            >
              Home
            </StyledLink>
            <StyledLink
              className="nav-item nav-link "
              to="movies"
            >
              Movies
            </StyledLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
