import "./App.css";
import { useState } from "react";
import ClickerButton from "./components/ClickerButton";
import ColourButton from "./components/ColourButton";
import ControlledComponent from "./components/ControlledComponent";

const App = () => {
  // Our global state
  const [clicks, setClicks] = useState(0);
  const [color, setColor] = useState<string>();

  // Our clicks state mutation function
  const handleCounterClick = () => {
    setClicks(clicks + 1);
  };

  const handleColorClick = () => {
    setColor("red");
  };

  // Render the ClickerButton component and pass down state value as a prop, as well as the function to update the state
  // Render the ColourButton component - TODO: pass down state value as a prop, as well as the function to update the state
  return (
    <>
      <ClickerButton clicks={clicks} handleClick={handleCounterClick} />
      <ColourButton colour={color} handleClick={handleColorClick} />
      <ControlledComponent />
    </>
  );
};

export default App;
