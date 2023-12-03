import React from "react";
import logoPath from "../img/Imagen de WhatsApp 2023-09-21 a las 09.18.09.jpg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div class="mt-5 pt-5 pb-5 footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 col-xs-12 about-company">
            <img
              alt="logo"
              src={logoPath}
              style={{ height: "100px", width: "auto" }}
            />
            <p class="pr-5 text-white-50">
              Insulin calculator - For better health awareness
            </p>
            <p>
              <a href="#">
                <i class="fa fa-facebook-square mr-1"></i>
              </a>
              <a href="#">
                <i class="fa fa-linkedin-square"></i>
              </a>
            </p>
          </div>
          <div class="col-lg-3 col-xs-12 links">
            <h4 class="mt-lg-0 mt-sm-3">Links</h4>
            <Link to="/cards" className="nav-link " aria-current="page">
              Information
            </Link>
            <Link to="/calculator" className="nav-link " aria-current="page">
              Calculator
            </Link>
            <Link to="/aboutus" className="nav-link " aria-current="page">
              About us
            </Link>
            <Link
              to="https://sdgs.un.org/es/goals"
              className="nav-link "
              aria-current="page"
            >
              UN's sustainability goals
            </Link>
          </div>
          <div class="col-lg-4 col-xs-12 location">
            <h4 class="mt-lg-0 mt-sm-4">Location</h4>
            <p>Guadalajara, Jal, Mexico</p>
            <p class="mb-0">
              <i class="fa fa-phone mr-3"></i>(541) 754-3010
            </p>
            <p>
              <i class="fa fa-envelope-o mr-3"></i>info@hsdf.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
