import React from "react";

import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Count from "../Count/Count";

const Item = ({ product }) => {
  return (
    <div className="contItems">
      (product && products.lenght ? products.map((product) =>
      {
        <Card key={product.id} style={{ width: "18rem", margin: "10px" }}>
          <Link to={`/item/${product.id}`} className="Links">
            <Card.Img variant="top" src={product.thumbnail} />
          </Link>
          <Card.Body>
            <Link to={`/item/${product.id}`} className="Links">
              <Card.Title className="price">{product.price}</Card.Title>
            </Link>
            <div className="count">
              <Count min="0" max="20">
                Agregar
              </Count>
            </div>
          </Card.Body>
        </Card>
      }{" "}
      : )
    </div>
  );
};
export default Item;
