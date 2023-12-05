import React from "react";
import { Link } from "react-router-dom";
import unPath from "../img/unimage.png";

function AboutTab() {
  return (
    <div>
      <div className="image-aboutus-banner" style={{ marginTop: "70px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="lg-text">About Us</h1>
              <p className="image-aboutus-para">
                We are two students committed to help make a difference in
                health awareness for the world.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bread-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Link to="/calculator" className="nav-link">
                To the calculator
              </Link>
              <Link to="/carousel" className="nav-link">
                Info
              </Link>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <hr className="hr" style={{ width: "80%", margin: "auto" }} />
      <br />
      <br />
      <div className="aboutus-secktion paddingTB60">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="strong">
                Who we are and
                <br />
                what we do
              </h1>
              <p className="lead">
                This calculator aims to help
                <br />
                both the afflicted and those around them
              </p>
            </div>
            <div className="col-md-6">
              <p>
                Close connection to illness is a hard thing to live with. Be it
                going through the illness or living with someone that does, it
                is something that requires awareness and close acquaintance
                with. After all, something like diabetes is in every sense of
                the words, life changing.
              </p>
              <p>
                It is for that reason that we recognize the need to have an
                accessible source of information for those in close proximity
                with the illness, as it could be quite dangerous to not know
                much of this disease that plagues so many of our compatriots in
                Mexico and the world.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <br />
              <br />
              <hr className="hr" style={{ width: "80%", margin: "auto" }} />
              <br />
              <br />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h1 className="strong">
                Our commitment with UN's
                <br />
                17 sustainability goals
              </h1>
              <p className="lead">
                For a brighter
                <br />
                and healthier future
              </p>
            </div>
            <div className="col-md-6 text-center">
              <img
                src={unPath}
                alt="un"
                style={{ maxWidth: "100%", marginTop: "20px" }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p>
                The UN established its 17 goals for sustainability in 2015 with
                a clear goal: To help change the world for everyone. Each goal
                helps tackle one of the many pressing issues humanity faces,
                including climate change, racism, and, of course, health.
              </p>
              <p>
                We decided to contribute to this noble cause by implementing an
                app that could help shape a healthier future, ensuring
                well-being and bright futures for everyone, no matter where they
                are.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container team-sektion paddingTB60">
        <div className="row"></div>
        <div className="row"></div>
      </div>
    </div>
  );
}

export default AboutTab;
