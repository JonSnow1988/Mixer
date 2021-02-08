import React from "react";
import { Button } from "react-bootstrap";
import { Badge } from "react-bootstrap";
import CartContext from "../Context/CartContext";

const CartIcon = () => {
  const { cantTotal } = React.useContext(CartContext);

  return (
    <>
      <Button>
        <Badge
          badgecontent={cantTotal()}
          className="badge rounded-pill bg-danger"
          showzero="true"
        >
          <i className="bi bi-basket" />
        </Badge>
      </Button>
    </>
  );
};
export default CartIcon;
