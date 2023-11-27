import './App.css';
import React, { useState } from "react";
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from "./components/Login";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function changeLoggedState() {
    setIsLoggedIn(!isLoggedIn);
  }

  function CheckLogStatus(props) {
    return isLoggedIn ? <props.component status={isLoggedIn} listener={changeLoggedState}/> : <Navigate to="/"/>;
  }

  return (
    <div>
      <CheckLogStatus component={Navbar}/>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/cards" /> : <Login listener={changeLoggedState} />} />
        <Route path='/cards' element={<CheckLogStatus component={Cards} />} />
        <Route path='/calculator' element={<CheckLogStatus component={Cards} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
