import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import AppRoutes from "./components/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <h1>Routes</h1>
      <NavBar></NavBar>
      <AppRoutes></AppRoutes>
    </BrowserRouter>
  );
}

export default App;
