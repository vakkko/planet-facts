import { NavLink } from "react-router";
import "./planetsList.css";
import { PlanetsListProps } from "../../../App.modal";

export default function PlanetsList({
  hidePlanetsList,
  setHidePlanetsList,
}: PlanetsListProps) {
  const handleListClick = () => {
    setHidePlanetsList(!hidePlanetsList);
  };

  return (
    <>
      {hidePlanetsList && (
        <div className="planets-list">
          <NavLink onClick={handleListClick} to={"/mercury/overview"}>
            <div>
              <img
                className="list-img"
                src="/assets/planet-mercury.svg"
                alt="planet"
              />{" "}
              <span>MERCURY</span>
            </div>
            <img src="/assets/icon-chevron.svg" alt="chevron-icon" />
          </NavLink>
          <NavLink onClick={handleListClick} to={"venus/overview"}>
            <div>
              {" "}
              <img
                className="list-img"
                src="/assets/planet-venus.svg"
                alt="planet"
              />{" "}
              <span>VENUS</span>{" "}
            </div>
            <img src="/assets/icon-chevron.svg" alt="chevron-icon" />
          </NavLink>
          <NavLink onClick={handleListClick} to={"earth/overview"}>
            {" "}
            <div>
              <img
                className="list-img"
                src="/assets/planet-earth.svg"
                alt="planet"
              />{" "}
              <span>EARTH</span>{" "}
            </div>
            <img src="/assets/icon-chevron.svg" alt="chevron-icon" />
          </NavLink>
          <NavLink onClick={handleListClick} to={"mars/overview"}>
            {" "}
            <div>
              <img
                className="list-img"
                src="/assets/planet-mars.svg"
                alt="planet"
              />{" "}
              <span>MARS</span>{" "}
            </div>
            <img src="/assets/icon-chevron.svg" alt="chevron-icon" />
          </NavLink>
          <NavLink onClick={handleListClick} to={"saturn/overview"}>
            {" "}
            <div>
              <img
                className="list-img"
                src="/assets/planet-saturn.svg"
                alt="planet"
              />{" "}
              <span>SATURN</span>{" "}
            </div>
            <img src="/assets/icon-chevron.svg" alt="chevron-icon" />
          </NavLink>
          <NavLink onClick={handleListClick} to={"jupiter/overview"}>
            {" "}
            <div>
              <img
                className="list-img"
                src="/assets/planet-jupiter.svg"
                alt="planet"
              />{" "}
              <span>JUPITER</span>{" "}
            </div>
            <img src="/assets/icon-chevron.svg" alt="chevron-icon" />
          </NavLink>
          <NavLink onClick={handleListClick} to={"uranus/overview"}>
            {" "}
            <div>
              <img
                className="list-img"
                src="/assets/planet-uranus.svg"
                alt="planet"
              />{" "}
              <span>URANUS</span>{" "}
            </div>
            <img src="/assets/icon-chevron.svg" alt="chevron-icon" />
          </NavLink>
          <NavLink onClick={handleListClick} to={"neptune/overview"}>
            {" "}
            <div>
              <img
                className="list-img"
                src="/assets/planet-neptune.svg"
                alt="planet"
              />{" "}
              <span>NEPTUNE</span>{" "}
            </div>
            <img src="/assets/icon-chevron.svg" alt="chevron-icon" />
          </NavLink>
        </div>
      )}
    </>
  );
}
