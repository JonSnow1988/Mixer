import React from "react";
import { Button } from "react-bootstrap";
import "./count.css";

function Count({ count, handleCount, disableMinusButton, disableAddButton }) {
  return (
    <div className="count">
      <Button
        variant="danger"
        className={`${disableMinusButton ? "btn-disabled" : null} mr-4`}
        onClick={() => handleCount("-")}
      >
        {" "}
        -{" "}
      </Button>
      <div>{count}</div>
      <Button
        variant="success"
        className={`${disableAddButton ? "btn-disabled" : null} ml-4`}
        onClick={() => handleCount("+")}
      >
        {" "}
        +{" "}
      </Button>
    </div>
  );
}

export default Count;
