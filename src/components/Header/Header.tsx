import { NavLink, Outlet } from "react-router";
import "./header.css";

const linkStyle = {
  fontSize: "1.1rem",
  fontWeight: 700,
  lineHeight: "2.5rem",
  letterSpacing: "0.1rem",
  color: "white",
  paddingTop: "2rem",
};

export default function Header() {
  return (
    <>
      <header>
        <p className="logo">THE PLANETS</p>
        <nav className="planets-navigation">
          <NavLink
            to={"/mercury/overview"}
            className="planet-link"
            style={linkStyle}
          >
            {" "}
            MERCURY
          </NavLink>
          <NavLink
            className="planet-link"
            style={linkStyle}
            to={"venus/overview"}
          >
            VENUS
          </NavLink>
          <NavLink
            className="planet-link"
            style={linkStyle}
            to={"earth/overview"}
          >
            EARTH
          </NavLink>
          <NavLink
            className="planet-link"
            style={linkStyle}
            to={"mars/overview"}
          >
            MARS
          </NavLink>
          <NavLink
            className="planet-link"
            style={linkStyle}
            to={"saturn/overview"}
          >
            SATURN
          </NavLink>
          <NavLink
            className="planet-link"
            style={linkStyle}
            to={"jupiter/overview"}
          >
            JUPITER
          </NavLink>
          <NavLink
            className="planet-link"
            style={linkStyle}
            to={"uranus/overview"}
          >
            URANUS
          </NavLink>
          <NavLink
            className="planet-link"
            style={linkStyle}
            to={"neptune/overview"}
          >
            NEPTUNE
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
