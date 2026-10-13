import { Link } from "react-router-dom";

export const Nav = () => {
  return <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link to={"/"} className="navbar-brand">
      Herrerman parrillas
    </Link>
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to={"/"} className="nav-link">Home</Link>
      </li>
      <li className="nav-item">
        <Link to={"/cart"} className="nav-link">Carrito</Link>
      </li>
    </ul>
  </nav>
}