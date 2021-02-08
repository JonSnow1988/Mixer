import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Containers/Home";
import Cart from "./Components/Cart/Cart";
import ItemDetailContainer from "./Containers/ItemDetailContainer";
import CartContext from "./Context/CartContext";
import { conversor } from "./Components/Cart/conversor";

function App() {
  const [cartItem, setCartItem] = useState([]);

  const productsAdd = (itemCount) => {
    if (cartItem.find((item) => item.id === itemCount.id)) {
      const newCartItem = cartItem.map((item) => {
        if (item.id === itemCount.id) {
          return { ...item, count: itemCount.count + item.count };
        }
        return item;
      });
      setCartItem(newCartItem);
    } else {
      setCartItem((state) => {
        return [...state, itemCount];
      });
    }
  };

  const costoTotal = () => {
    const cost = cartItem.reduce(
      (acumulador, item) => acumulador + item.price * item.count,
      0
    );
    return conversor(cost);
  };
  const cantTotal = () => {
    return cartItem.reduce((acumulador, item) => acumulador + item.count, 0);
  };
  const resetCantCart = () => {
    setCartItem([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItem,
        productsAdd,
        costoTotal,
        cantTotal,
        resetCantCart,
      }}
    >
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/categories/:categoryId">
            <Home />
          </Route>
          <Route exact path="/Cart">
            <Cart />
          </Route>
          <Route exact path="/Item/:productId">
            <ItemDetailContainer />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
