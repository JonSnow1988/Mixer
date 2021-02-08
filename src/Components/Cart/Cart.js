import React, { useState } from "react";

import { Table, Button, Card } from "react-bootstrap";

import Formulario from "../Form/Form";
import CartContext from "../../Context/CartContext";
import { Container } from "react-bootstrap";
//import { Link } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import firebase from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "../../Firebase/firebase";
import { conversor } from "../Cart/conversor";

const Cart = () => {
  const { cartItem, costoTotal, resetCantCart } = React.useContext(CartContext);

  const [showForm, setShowForm] = useState(false);
  const [orderId, setOrderId] = useState(null);

  if (cartItem.length === 0 && orderId === null) {
    return (
      <Alert variant="danger">¡Aun no has selccionado ningun Producto!</Alert>
    );
  }

  const handleCheckout = () => {
    setShowForm(true);
  };

  async function createOrder(buyer) {
    const db = getFirestore();

    const orders = db.collection("orders");
    const newOrder = {
      buyer,
      cartItem,
      date: firebase.firestore.FieldValue.serverTimestamp(),
      total: costoTotal(),
    };
    try {
      const { id } = await orders.add(newOrder);
      setOrderId(id);
    } catch (err) {
      console.log("Error");
    }

    const itemsToUpdate = db.collection("items").where(
      firebase.firestore.FieldPath.documentId(),
      "in",
      cartItem.map((i) => i.id)
    );
    const query = await itemsToUpdate.get();
    const batch = db.batch();

    const outOfStock = [];
    query.docs.forEach((docSnapshot, idx) => {
      if (docSnapshot.data().stock >= cartItem[idx].count) {
        batch.update(docSnapshot.ref, {
          stock: docSnapshot.data().stock - cartItem[idx].count,
        });
      } else {
        outOfStock.push({ ...docSnapshot.data(), id: docSnapshot.id });
      }
    });
    if (outOfStock.length === 0) {
      await batch.commit();
    }
    resetCantCart();
  }

  if (orderId) {
    return <Alert severity="danger">Tu orden de compra es: {orderId}</Alert>;
  }

  return (
    <>
      <Container>
        <Table aria-label="simple table">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Nombre</th>
              <th align="right">Cantidad</th>
              <th align="right">precio</th>
            </tr>
          </thead>
          <tbody>
            {cartItem.map((item) => (
              <tr key={item.id}>
                <th component="th" scope="row">
                  <img src={item.img} alt="img" style={{ width: "82px" }} />
                </th>
                <th>{item.name}</th>
                <th align="right">{item.count}</th>
                {<th align="right">{conversor(item.price)}</th>}
              </tr>
            ))}
          </tbody>
        </Table>
        <Card display="flex" justifyContent="flex-end" p={1}>
          Costo total: {costoTotal()}
        </Card>
      </Container>

      <Card display="flex" justifyContent=" flex-end" p={1}>
        <Button variant="primary" onClick={handleCheckout}>
          checkout
        </Button>
      </Card>

      {/* <Link to={"/"}>
        <Button variant="success"> Volver a Home</Button>
      </Link> */}

      {showForm ? <Formulario createOrder={createOrder} /> : null}
    </>
  );
};
export default Cart;
