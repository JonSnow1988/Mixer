import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../Components/ItemList/ItemList";
import { getFirestore } from "../Firebase/firebase";

const ItemListContainer = () => {
  const [list, setList] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();

    let docRef;

    if (categoryId) {
      docRef = db.collection("items").where("categoryId", "==", categoryId);
    } else {
      docRef = db.collection("items");
    }

    docRef.get().then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log("No hay en existencia");
      }
      setList(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, [categoryId]);
  return (
    <div className="container">
      <div className="col-12 mr-2">
        <div className="row">
          <ItemList list={list} />
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
