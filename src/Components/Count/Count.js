// import React from "react";
// import { Card } from "react-bootstrap";

// const ItemCount = ({ min, max, count, setCount }) => {
//   const add = () => {
//     if (count < max) setCount(count + 1);
//   };

//   const subtract = () => {
//     if (count > min) setCount(count - 1);
//   };

//   return (
//     <Card className="card">
//       <Card className="card-body">
//         <i className="bi bi-x-octagon" onClick={subtract}></i>
//         <span>{count}</span>
//         <i disabled={count === max} onClick={add}></i>
//       </Card>
//     </Card>
//   );
// };

// export default ItemCount;

import React from "react";
import { Button } from "react-bootstrap";
import "./Count.css";

function ItemCount({
  count,
  handleCount,
  disableMinusButton,
  disableAddButton,
}) {
  return (
    <div className="count">
      <Button
        variant="danger"
        className={`${disableMinusButton ? "btn-disabled" : null} mr-4`}
        onClick={() => handleCount("-")}
      >
        -
      </Button>
      <div>{count}</div>
      <Button
        as="input"
        type="submit"
        value="Submit"
        className={`${disableAddButton ? "btn-disabled" : null} ml-4`}
        onClick={() => handleCount("+")}
      >
        +
      </Button>
    </div>
  );
}

export default ItemCount;
