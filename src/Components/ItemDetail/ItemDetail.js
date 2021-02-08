import React from "react";
import ItemCount from "../Count/Count";
import Item from "../Item/Item";
import { Button } from "react-bootstrap";

import CartContext from "../../Context/CartContext";

const ItemDetail = ({ item }) => {
  const [count, setCount] = React.useState(1);
  const { productsAdd } = React.useContext(CartContext);

  const handleClickComprar = () => {
    if (count > 0) {
      productsAdd({
        id: item.id,
        name: item.name,
        img: item.img,
        count,
        price: item.price,
      });
    }
  };

  return (
    <div className="container">
      <div className="col-4">
        <div className="row mr-2">
          <Item item={item} />
          <div className="box" margin={10}>
            <ItemCount setCount={setCount} count={count} min={1} max={30} />
            <Button className="btn btn-success" onClick={handleClickComprar}>
              Comprar
            </Button>
            <p>Precio: $ {Intl.NumberFormat().format(item.price)}</p>
            <p>Stock disponible: {item.stock}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
