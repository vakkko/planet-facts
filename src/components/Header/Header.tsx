import { Link, Outlet } from "react-router";
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
          <Link
            className="planet-link"
            style={linkStyle}
            to={"mercury/overview"}
          >
            {" "}
            MERCURY
          </Link>
          <Link className="planet-link" style={linkStyle} to={"venus/overview"}>
            VENUS
          </Link>
          <Link className="planet-link" style={linkStyle} to={"earth/overview"}>
            EARTH
          </Link>
          <Link className="planet-link" style={linkStyle} to={"mars/overview"}>
            MARS
          </Link>
          <Link
            className="planet-link"
            style={linkStyle}
            to={"saturn/overview"}
          >
            SATURN
          </Link>
          <Link
            className="planet-link"
            style={linkStyle}
            to={"jupiter/overview"}
          >
            JUPITER
          </Link>
          <Link
            className="planet-link"
            style={linkStyle}
            to={"uranus/overview"}
          >
            URANUS
          </Link>
          <Link
            className="planet-link"
            style={linkStyle}
            to={"neptune/overview"}
          >
            NEPTUNE
          </Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
