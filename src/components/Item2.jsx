import React, { memo } from "react";

const Item2 = ({ val2, incHandler }) => {
  console.log("Item2 Called");
  return (
    <div>
      <h3>Count-2 : {val2}</h3>
      <button onClick={incHandler}>Count2</button>
    </div>
  );
};

export default memo(Item2); //changes alias
