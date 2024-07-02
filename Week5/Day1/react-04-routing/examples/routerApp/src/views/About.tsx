import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const useNavigation = useNavigate();
  const handleClick = () => {
    useNavigation("/home");
  };
  return (
    <>
      About us
      <button onClick={handleClick}>Home</button>
    </>
  );
}

export default About;
