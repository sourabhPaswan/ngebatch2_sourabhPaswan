import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="home">home </Link>
      <Link to="about">about </Link>
      <Link to="contact">contact </Link>
    </nav>
  );
}

export default NavBar;
