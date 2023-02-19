import React from "react";
import Home from "../Home";
import { Link } from "react-router-dom";

const Reduxindex = () => {
  return (
    <>
      <Home />
      <h1>Reduxindex</h1>

      <div className="container">
      
        <br /> 
        <Link to="/reduxindex">reduxindex </Link>
      </div>
    </>
  );
};

export default Reduxindex;
