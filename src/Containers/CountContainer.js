import React, { useState } from "react";
import Count from "../Components/Count/Count";

export default function CountContainer({ min, max }) {
  const [count, setCount] = useState(0);

  const onAdd = (sign) => {
    if (sign === "+" && count < max) setCount(count + 1);
    else if (sign === "-" && count > min) setCount(count - 1);
  };
  return <Count count={count} onAdd={onAdd} />;
}
