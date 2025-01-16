import { Link, NavLink, useParams } from "react-router";
import "./header.css";
import PlanetsList from "./PlanetsList/PlanetsList";
import { useContext } from "react";
import PlanetContext from "../../PlanetContext";

export default function Header() {
  const params = useParams<{ planetName: string }>();
  const planetName = params.planetName?.toLowerCase();
  const hidePlanetContext = useContext(PlanetContext);
  const hidePlanetsList = hidePlanetContext.hidePlanetsList;
  const setHidePlanetsList = hidePlanetContext.setHidePlanetsList;

  const handleButtonClick = () => {
    setHidePlanetsList(!hidePlanetsList);
  };

  return (
    <>
      <header>
        <span className="logo">THE PLANETS</span>
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
        <Link onClick={handleButtonClick} to={"/"}>
          <button className="btn-hamburger">
            <img src="/assets/icon-hamburger.svg" alt="hamburger-icon" />
          </button>
        </Link>
      </header>

      <PlanetsList />
    </>
  );
}
