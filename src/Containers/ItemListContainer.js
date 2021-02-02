import React, { useState, useEffect } from "react";
import Item from "../Components/Item/Item";

const ItemListContainer = ({ min, max }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = fetch(
      "https://api.mercadolibre.com/sites/MLA/search?category=MLA1743&limit=20"
    );
    getProducts
      .then((response) => {
        const data = response.json();
        return data;
      })
      .then((data) => {
        setProducts(data.results);
      });
  }, []);

  useEffect(() => {
    console.log(products, "products");
  }, [products]);

  return (
    <div>
      <div>
        {products.length &&
          products.map((product) => (
            <Item
              title={product.title}
              id={product.id}
              price={product.price}
              image={product.image}
            />
          ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
