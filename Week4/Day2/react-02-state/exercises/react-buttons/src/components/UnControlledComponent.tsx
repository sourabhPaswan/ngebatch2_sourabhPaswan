import React, { useRef, useState } from "react";

function UnControlledComponent() {
  const ref = useRef();
  const [name, setName] = useState();

  return (
    <div>
      <input></input>
    </div>
  );
}

export default UnControlledComponent;
