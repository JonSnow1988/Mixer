import React from "react";
import Cart from "../CartIcon";
import "./navBar.css";

const NavBar = () => {
  return (
    <div className="navStyle">
      <ul className="uL">
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Cart</li>
        <Cart />
      </ul>
    </div>
  );
};

export default NavBar;
