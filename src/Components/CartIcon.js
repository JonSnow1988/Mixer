import React from "react";
import cart from "../images/cart.svg";
import "./CartIcon.css";

const CartIcon = () => {
  return <img src={cart} className="cart" alt="cart" />;
};

export default CartIcon;
