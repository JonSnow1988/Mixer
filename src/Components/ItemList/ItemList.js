import React from "react";
import Item from "../Item/Item";

const ItemList = ({ list }) => {
  return (
    <div className="container">
      <div className="col-6">
        <div className="row">
          <div className="card">
            <div className="card-body">
              {list.map((product) => (
                <Item key={product.id} item={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
