import React, { useState } from "react";

function Counter() {
  const [count, setcount] = useState<number>(0);
  return (
    <>
      <button onClick={() => setcount(count + 1)}>counter is {count}</button>
      <button onClick={() => setcount(0)}>reset</button>
    </>
  );
}

export default Counter;
