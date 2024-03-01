import React from "react";
import { Link } from "react-router-dom";
import agramain from "../../assets/img/agramain.png";
import "./navlinks.css";

const NavLinks = () => {
  return (
    <div className="links-container">
      <div>
        <Link to="/">
          <img src={agramain} className="logo" />
        </Link>
      </div>
      <div className="links">
        <Link to="/render">
          <span>Shop</span>
        </Link>
        <Link to="/about">
          <span>About</span>
        </Link>
        <Link to="/sell">
          <span>Sell</span>
        </Link>
      </div>
    </div>
  );
};

export default NavLinks;
