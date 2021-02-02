import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Cart() {
  return (
    <div>
      <h2>No hay items aun</h2>
      <Link to={"/"} className="links">
        <Button variant="success"> Volver a Home</Button>
      </Link>
    </div>
  );
}
