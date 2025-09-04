import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg bg-primary navbar-dark shadow-sm px-4 py-3 rounded-bottom">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold fs-3" to="/">
          TrendyNews
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-2">
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/login' ? 'active text-warning' : 'text-white'}`}
                to="/login"
              >
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/signup' ? 'active text-warning' : 'text-white'}`}
                to="/signup"
              >
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/newsapp' ? 'active text-warning' : 'text-white'}`}
                to="/newsapp"
              >
                NewsApp
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
