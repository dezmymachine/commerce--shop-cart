import React from "react";
import "./navbar.css";
import carticon from "../../assets/img/carticon.png";
// import agramain from "../../assets/img/agramain.png";
const Navbar = ({ size, setShow }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          {/* <img src={agramain} className="logo" /> */}
          <button className="my_shop">Click Here to Cart-Page/Shop</button>
        </span>
        <span className="available">PRODUCTS</span>
        <div className="cart" onClick={() => setShow(false)}>
          <span className="cart-icon">
            <img src={carticon} alt="" />
          </span>
          <span className="count">{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
