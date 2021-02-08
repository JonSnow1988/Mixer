import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import listProducts from '../../listProducts';

import ItemDetail from "../Components/ItemDetail/ItemDetail";
import { getFirestore } from "../Firebase/firebase";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(false);

  const [item, setItem] = useState([]);
  const { productId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const docRef = db.collection("items").doc(productId);

    docRef.get().then((querySnapshot) => {
      setLoading(false);
      setItem({ id: querySnapshot.id, ...querySnapshot.data() });
    });
  }, [productId]);

  return <>{loading ? <div /> : <ItemDetail item={item} />}</>;
};
export default ItemDetailContainer;
