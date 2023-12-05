import React, { useState } from "react";
import Item2 from "./Item2";

const Item1 = () => {
  const [value1, setValue1] = useState(0);
  const [val2, setVal2] = useState(0);
  const incHandler = () => {
    setVal2(val2 + 1);
  };
  return (
    <div>
      <h3>Count-1 : {value1}</h3>
      <button onClick={() => setValue1(value1 + 2)}>Count1</button>
      <Item2 val2={val2} incHandler={incHandler} />
    </div>
  );
};

export default Item1;
