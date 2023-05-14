import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Loader from 'components/loader/Loader';

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark col-xl-12">
        <div
          className="collapse navbar-collapse"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <NavLink
              className="nav-item nav-link text-white-solid "
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="nav-item nav-link text-white-solid"
              to="movies"
            >
              Movies
            </NavLink>
          </div>
        </div>
      </nav>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
