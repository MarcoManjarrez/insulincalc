import './App.css';
import React, { useState } from "react";
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from "./components/Login";
import Calculator from './components/Calculator';
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function changeLoggedState() {
    setIsLoggedIn(!isLoggedIn);
  }

  function CheckLogStatus(props) {
    console.log(isLoggedIn);
    return isLoggedIn ? <props.component status={isLoggedIn} listener={changeLoggedState}/> : <Navigate to="/"/>;
  }

  return (
    <div id='App'>
      <CheckLogStatus component={Navbar}/>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/calculator" /> : <Login listener={changeLoggedState} />} />
        <Route path='/cards' element={<CheckLogStatus component={Cards} />} />
        <Route path='/calculator' element={<CheckLogStatus component={Calculator} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
