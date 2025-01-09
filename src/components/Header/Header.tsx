import { NavLink, Outlet } from "react-router";
import "./header.css";

export default function Header() {
  return (
    <>
      <header>
        <p className="logo">THE PLANETS</p>
        <nav className="planets-navigation">
          <NavLink to={"/mercury/overview"} className="planet-link">
            {" "}
            MERCURY
          </NavLink>
          <NavLink className="planet-link" to={"venus/overview"}>
            VENUS
          </NavLink>
          <NavLink className="planet-link" to={"earth/overview"}>
            EARTH
          </NavLink>
          <NavLink className="planet-link" to={"mars/overview"}>
            MARS
          </NavLink>
          <NavLink className="planet-link" to={"saturn/overview"}>
            SATURN
          </NavLink>
          <NavLink className="planet-link" to={"jupiter/overview"}>
            JUPITER
          </NavLink>
          <NavLink className="planet-link" to={"uranus/overview"}>
            URANUS
          </NavLink>
          <NavLink className="planet-link" to={"neptune/overview"}>
            NEPTUNE
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
