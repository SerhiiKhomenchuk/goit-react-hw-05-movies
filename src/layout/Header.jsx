import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className=" fixed-top">
      <div className="align-items-end justify-content-between container-fluid d-flex  bg-dark-subtle   shadow-sm pb-3">
        <Link to="/" className="text-decoration-none  ">
          <i
            className="bi bi-camera-reels me-2 "
            style={{ fontSize: '2rem', color: 'cornflowerblue' }}
          />
          MoviesFinder
        </Link>

        <ul className="nav  gap-5  ">
          <li className="nav-item">
            <NavLink
              className="  fw-bold d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2 icon-link-hover  "
              aria-current="page"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className=" fw-bold d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2 "
              to="movies"
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
