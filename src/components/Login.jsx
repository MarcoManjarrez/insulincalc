import React, { useState, useEffect } from "react";
import axios from "axios";
import { CSSTransition } from "react-transition-group";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Login.css";
import logoPath from "../img/Imagen de WhatsApp 2023-09-21 a las 09.18.09.jpg";

function Login(props) {
  const [showComponent, setShowComponent] = useState(true);
  //const [userProfile, setUserProfile] = useState({user: "", password: ""});
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const errorStyle = {marginTop: "10px", color: "red"};

  useEffect(() => {
    setShowComponent(true);
  }, []);

  /*function userProfileListener(event) {
    const {value, name} = event.target;
    setUserProfile((prevValue) => {
        return { ...prevValue, [name]: value }
    });
  }*/

  function userListener(event) {
    setUser(event.target.value);
  }

  function passwordListener(event) {
    setPassword(event.target.value);
  }

  function submitForm(event) {
    var apiPath = "";
    if (process.env.NODE_ENV === "production") {
        apiPath = "/api";
    }

    axios
        .post(apiPath+"/login", {
            user: user,
            password: password,
        })
        .then((res) => {
            console.log("Response from server");
            if (res.data.authorization === 1) {
                console.log("Logged in");
                setMessage("");
                props.listener();
            } else {
                console.log("Wrong data");
                setMessage("Wrong data");
            }
        })
        .catch((err) => {
            console.error(err.error);
        });
    
      /*if (user === "1234@gmail.com" && password==="1234") {
        console.log("Logged in");
        setMessage("");
        props.listener();
      } else {
        console.log("Wrong data");
        setMessage("Wrong data");
      }*/

    event.preventDefault();
  }

  return (
    <CSSTransition
      in={showComponent}
      timeout={500}
      classNames="fade"
      unmountOnExit
    >
      <div className={showComponent ? "fade-in show" : "fade-in"}>
        <section className="vh-100">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img id="logo_login" src={logoPath} className="img-fluid" alt="..." />
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form onSubmit={submitForm}>
                  <div className="divider d-flex align-items-center my-4"></div>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control form-control-lg"
                      placeholder="Enter a valid email address"
                      onChange={userListener}
                      value={user}
                    />
                    <label className="form-label" for="form3Example3">
                      Email address
                    </label>
                  </div>
                  <div className="form-outline mb-3">
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control form-control-lg"
                      placeholder="Enter password"
                      onChange={passwordListener}
                      value={password}
                    />
                    <label className="form-label" for="form3Example4">
                      Password
                    </label>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3"
                      />
                      <label className="form-check-label" for="form2Example3">
                        Remember me
                      </label>
                    </div>
                    <div style={errorStyle}>{message}</div>
                    <a href="#!" className="text-body">
                      Forgot password?
                    </a>
                  </div>

                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button
                      type="submit"
                      className="btn custom-btn btn-lg"
                      style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                    >
                      Login
                    </button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">
                      Don't have an account?{" "}
                      <a href="#!" className="link-danger">
                        Register
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div
            className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary"
            style={{ backgroundColor: "#42708a" }}
          >
            <div className="text-white mb-3 mb-md-0">
              Copyright © 2023. All rights reserved.
            </div>
            <div>
              <a href="#!" className="text-white me-4">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#!" className="text-white me-4">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#!" className="text-white me-4">
                <i className="fab fa-google"></i>
              </a>
              <a href="#!" className="text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
    </CSSTransition>
  );
}

export default Login;
