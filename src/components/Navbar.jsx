import { NavLink } from "react-router-dom";

function Navbar() {
  const navStyle = {
    display: "flex",
    gap: "20px",
    padding: "15px",
    background: "#111827",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
  };

  const activeStyle = {
    borderBottom: "2px solid #38bdf8",
  };

  return (
    <nav style={navStyle}>
      <NavLink to="/" style={({ isActive }) => isActive ? {...linkStyle, ...activeStyle} : linkStyle}>
        Home
      </NavLink>

      <NavLink to="/product" style={({ isActive }) => isActive ? {...linkStyle, ...activeStyle} : linkStyle}>
        Product
      </NavLink>

      <NavLink to="/library" style={({ isActive }) => isActive ? {...linkStyle, ...activeStyle} : linkStyle}>
        Library
      </NavLink>

      <NavLink to="/person" style={({ isActive }) => isActive ? {...linkStyle, ...activeStyle} : linkStyle}>
        Person
      </NavLink>
    </nav>
  );
}

export default Navbar;