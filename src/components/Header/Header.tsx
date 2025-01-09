import { NavLink, Outlet, useParams } from "react-router";
import "./header.css";

export default function Header() {
  const params = useParams<{ planetName: string }>();
  const planetName = params.planetName?.toLowerCase();

  return (
    <>
      <header>
        <p className="logo">THE PLANETS</p>
        <nav className="planets-navigation">
          <NavLink
            to={"/mercury/overview"}
            className={`link ${planetName === "mercury" ? "link-mercury" : ""}`}
          >
            {" "}
            MERCURY
          </NavLink>
          <NavLink
            className={`link ${planetName === "venus" ? "link-venus" : ""}`}
            to={"venus/overview"}
          >
            VENUS
          </NavLink>
          <NavLink
            className={`link ${planetName === "earth" ? "link-earth" : ""}`}
            to={"earth/overview"}
          >
            EARTH
          </NavLink>
          <NavLink
            className={`link ${planetName === "mars" ? "link-mars" : ""}`}
            to={"mars/overview"}
          >
            MARS
          </NavLink>
          <NavLink
            className={`link ${planetName === "saturn" ? "link-saturn" : ""}`}
            to={"saturn/overview"}
          >
            SATURN
          </NavLink>
          <NavLink
            className={`link ${planetName === "jupiter" ? "link-jupiter" : ""}`}
            to={"jupiter/overview"}
          >
            JUPITER
          </NavLink>
          <NavLink
            className={`link ${planetName === "uranus" ? "link-uranus" : ""}`}
            to={"uranus/overview"}
          >
            URANUS
          </NavLink>
          <NavLink
            className={`link ${planetName === "neptune" ? "link-neptune" : ""}`}
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
