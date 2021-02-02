import React from "react";
import CountContainer from "./CountContainer";
import ItemListContainer from "./ItemListContainer";

const Home = ({ greeting }) => {
  return (
    <div>
      <header className="app-header">
        <p>{greeting}</p>
        <CountContainer min="0" max="20" />
        <ItemListContainer />
      </header>
    </div>
  );
};

export default Home;
