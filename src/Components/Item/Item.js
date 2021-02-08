import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ item: { id, name, description, img } }) => (
  <Card className="card" flexDirection="colum">
    <h2>{name}</h2>
    <Link to={`/item/${id}`}>
      <img src={img} alt="img" width="350" />
    </Link>
    <p>{description}</p>
  </Card>
);

export default Item;
