import { NavLink, Link } from "react-router-dom";
import pxpLogo from "../assets/pxp-logo.png";

const linkStyle = ({ isActive }) => ({
  opacity: isActive ? 1 : 0.9,
  outline: "none",
});

export default function Navbar() {
  return (
    <header className="navWrap">
      <div className="container navRow">
        <Link to="/" className="brand" aria-label="Project X Projects Home">
          <img src={pxpLogo} alt="Project X Projects Logo" className="brandMark"/>
        </Link>

        <nav className="navLinks" aria-label="Primary navigation">
          <NavLink to="/about" style={linkStyle}>About us</NavLink>
          <NavLink to="/projects" style={linkStyle}>Projects</NavLink>
          <NavLink to="/get-involved" style={linkStyle}>Get involved</NavLink>
        </nav>

        <div className="navActions">
          {/*<button className="btn" type="button">Sign up</button>*/}
          <button className="btn btnPrimary" type="button">Donate</button>
        </div>
      </div>
    </header>
  );
}
