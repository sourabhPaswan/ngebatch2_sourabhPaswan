import { useEffect, useState } from "react";
import "./App.css";
import Times from "./TimeClicks";
import FetchCall from "./FetchData";
import Category, { CategoryDisplay } from "./components/Catalog";

const App = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    // create an interval on mount
    // const timer = setInterval(() => {
    //   console.log("time is up");
    // }, 1000);

    // clear interval task on unmount
    // uncomment clearInterval to correctly clean up the interval
    return () => {
      // clearInterval(timer);
    };
  }, [value]);

  return (
    <div className="app">
      {/* <button onClick={() => setValue((curr) => (curr += "a"))}>
        update state
      </button> */}
      {/* <p>{value}</p> */}
      {/* <Times /> */}
      {/* <FetchCall /> */}
      <Category />
    </div>
  );
};

export default App;
