import React, { useState } from "react";

export const Context = React.createContext();

const CartContext = (props) => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Context.Provider value={[cartItems, setCartItems]}>
      {props.children}
    </Context.Provider>
  );
};

export default CartContext;
