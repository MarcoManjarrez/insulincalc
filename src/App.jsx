import "./App.css";
import React, { useState } from "react";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Calculator from "./components/Calculator";
import { Routes, Route, Navigate } from "react-router-dom";
import AboutTab from "./components/AboutTab";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function changeLoggedState() {
    setIsLoggedIn(!isLoggedIn);
  }

  function CheckLogStatus(props) {
    return isLoggedIn ? (
      <props.component status={isLoggedIn} listener={changeLoggedState} />
    ) : (
      <Navigate to="/" />
    );
  }

  return (
    <div id="App">
      <CheckLogStatus component={Navbar} />
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/calculator" />
            ) : (
              <Login listener={changeLoggedState} />
            )
          }
        />
        <Route
          path="/information"
          element={<CheckLogStatus component={Carousel} />}
        />
        <Route
          path="/calculator"
          element={<CheckLogStatus component={Calculator} />}
        />
        <Route
          path="/aboutus"
          element={<CheckLogStatus component={AboutTab} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
