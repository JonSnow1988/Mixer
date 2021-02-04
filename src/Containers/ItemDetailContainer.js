import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context/cartContext";
import ItemDetail from "../Components/ItemDetail/ItemDetail ";

function ItemDetailContainer() {
  const { id } = useParams();

  useEffect(() => {
    console.log("id--->", id);
  }, [id]);
  return <ItemDetail />;
}
export default ItemDetailContainer;
