import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Greeter from "./components/Greeter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>React Learnings</h1>
      <Greeter />
      <Greeter name={"sp"} isBirthday={true} />
    </>
  );
}

export default App;
