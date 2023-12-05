import React, { useState, useEffect } from "react";
import axios from "axios";
import { CSSTransition } from "react-transition-group";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Login.css";
import logoPath from "../img/Imagen de WhatsApp 2023-09-21 a las 09.18.09.jpg";

function Login(props) {
  const [showComponent, setShowComponent] = useState(true);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isRegisterMode, setRegisterMode] = useState(false);
  const errorStyle = {marginTop: "10px", color: "red"};

  useEffect(() => {
    setShowComponent(true);
  }, []);

  function userListener(event) {
    setUser(event.target.value);
  }

  function passwordListener(event) {
    setPassword(event.target.value);
  }

  function confirmPasswordListener(event) {
    setConfirmPassword(event.target.value);
  }

  function toggleMode() {
    setRegisterMode(!isRegisterMode);
    setUser("");
    setPassword("");
    setConfirmPassword("");
    setMessage("");
  }

  function submitForm_Login(event) {
    var apiPath = "";
    if (process.env.NODE_ENV === "production") apiPath = "/api";

    axios
        .post(apiPath+"/login", {
            user: user,
            password: password,
        })
        .then((res) => {
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

    event.preventDefault();
  }

  function submitForm_Register(event) {
    var apiPath = "";
    if (process.env.NODE_ENV === "production") {
        apiPath = "/api";
    }
    
    if (password === confirmPassword) {
      axios
        .post(apiPath+"/register", {
            user: user,
            password: password,
        })
        .then((res) => {
            if (res.data.user_coincidence === 1) {
              console.log("User already extists");
              setMessage("User already extists");
            } else {
              console.log("Registered and Logged in");
              setMessage("");
              props.listener();
            }
        })
        .catch((err) => {
            console.error(err.error);
        });

      event.preventDefault();
    } else {
      setMessage("No coincidence on passwords");
      event.preventDefault();
    }
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
              <button className="btn custom-btn btn-lg" onClick={toggleMode}>
                {isRegisterMode ? "Switch to Login" : "Switch to Register"}
              </button>
              {isRegisterMode ? 
                <form onSubmit={submitForm_Register}>
                  <div className="divider d-flex align-items-center my-4"></div>
                  <div id="user" className="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control form-control-lg"
                      placeholder="Enter a valid email address"
                      onChange={userListener}
                      value={user}
                      required
                    />
                    <label className="form-label" for="form3Example3">
                      Email address
                    </label>
                  </div>
                  <div id="password" className="form-outline mb-3">
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control form-control-lg"
                      placeholder="Enter password"
                      onChange={passwordListener}
                      value={password}
                      required
                    />
                    <label className="form-label" for="form3Example4">
                      Password
                    </label>
                  </div>
                  <div id="confirm_password" className="form-outline mb-3">
                    <input
                      type="password"
                      id="form3Example5"
                      className="form-control form-control-lg"
                      placeholder="Confirm password"
                      onChange={confirmPasswordListener}
                      value={confirmPassword}
                      required
                    />
                    <label className="form-label" for="form3Example4">
                      Confirm password
                    </label>
                  </div>
                  
                  <div id="login_error" style={errorStyle}>{message}</div>

                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button
                      type="submit"
                      className="btn custom-btn btn-lg"
                      style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              :
                <form onSubmit={submitForm_Login}>
                  <div className="divider d-flex align-items-center my-4"></div>
                  <div id="user" className="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control form-control-lg"
                      placeholder="Enter a valid email address"
                      onChange={userListener}
                      value={user}
                      required
                    />
                    <label className="form-label" for="form3Example3">
                      Email address
                    </label>
                  </div>
                  <div id="password" className="form-outline mb-3">
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control form-control-lg"
                      placeholder="Enter password"
                      onChange={passwordListener}
                      value={password}
                      required
                    />
                    <label className="form-label" for="form3Example4">
                      Password
                    </label>
                  </div>
                  <div id="login_error" style={errorStyle}>{message}</div>
                  <div id="other_data" className="d-flex justify-content-between align-items-center">
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
                  </div>
                </form>
              }
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
