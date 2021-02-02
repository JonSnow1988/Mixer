import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./Containers/Home";
import NavBar from "./Components/NavBar/NavBar";
import CartContainer from "./Containers/CartContainer";
import ItemDetailContainer from "./Containers/ItemDetailContainer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/cart" render={() => <CartContainer />} />
        <Route exact path="/item:id" render={() => <ItemDetailContainer />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
