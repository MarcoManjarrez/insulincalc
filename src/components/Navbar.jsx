import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import logoPath from "../img/Imagen de WhatsApp 2023-09-21 a las 09.18.09.jpg";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(props) {
  function logOut() {
    props.listener();
  }

  function searchListener(event) {
    console.log(event.target.value);
  }

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary navbar_header"
      style={{ width: "100%" }}
    >
      <div className="container-fluid " style={{ backgroundColor: "#42708a" }}>
        <img
          src={logoPath}
          alt="logo"
          style={{ height: "100px", width: "auto" }}
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/cards" className="nav-link " aria-current="page">
                Information
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/calculator" className="nav-link ">
                Calculator
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Learn More
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item "
                    href="https://sdgs.un.org/es/goals"
                  >
                    UN's sustainability goals
                  </a>
                </li>
                <li>
                  <Link
                    className="dropdown-item "
                    to="/aboutus"
                    aria-current="page"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <a className="nav-link disabled">Coming soon</a>
                </li>
              </ul>
            </li>
          </ul>
          <form
            id="search"
            onSubmit={searchListener}
            className="d-flex"
            role="search"
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              disabled
            />
            <button className="nav-link" type="submit" disabled>
              Search
            </button>
          </form>
          {!props.status ? (
            <Link id="login" to="/" className="nav-link">
              Login
            </Link>
          ) : (
            <Link id="logout" to="/" className="nav-link" onClick={logOut}>
              Logout
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
