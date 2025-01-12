import "./planetDetails.css";
import PlanetStats from "./PlanetStats/PlanetStats";
import { PlanetData } from "../../App.modal";
import { useLoaderData, useParams, NavLink } from "react-router";
import { getPlanetInfo } from "../../utils";

export default function PlanetDetails() {
  const planetData = useLoaderData() as PlanetData[];
  const params = useParams<{ planetName: string; info: string }>();
  const planet = planetData.find((planet) => {
    return planet.name.toLowerCase() === params?.planetName;
  });
  const info = params.info;
  const planetName = planet?.name.toLowerCase();
  const planetInfos = getPlanetInfo(planet, info);

  return (
    <>
      <div className="planet-container">
        <div className="info-images">
          {info !== "geology" ? (
            <img className="planet-pic" src={planetInfos?.image} alt="planet" />
          ) : (
            <>
              <img
                className="planet-pic"
                src={planet?.images.planet}
                alt="geology"
              />
              <img
                className="planet-geology"
                src={planetInfos?.image}
                alt="planet"
              />
            </>
          )}
        </div>
        <div className="planet-info">
          <h1 className="planet-name">{planetName?.toUpperCase() || ""}</h1>
          <p className="planet-description">{planetInfos?.content}</p>
          <div className="source-container">
            <span>Source : </span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={planetInfos?.source}
            >
              Wikipedia <img src="/assets/icon-source.svg" alt="source" />
            </a>
          </div>
          <div className="info-list">
            <NavLink
              className={`info ${planetName}`}
              to={`/${planetName}/overview`}
            >
              <button>
                <span className="list-number">01</span> <span>OVERVIEW</span>
              </button>
            </NavLink>
            <NavLink
              className={`info ${planetName}`}
              to={`/${planetName}/internal`}
            >
              <button>
                <span className="list-number">02</span>
                <span>INTERNAL STRUCTURE</span>
              </button>
            </NavLink>
            <NavLink
              className={`info ${planetName}`}
              to={`/${planetName}/geology`}
            >
              <button>
                <span className="list-number">03</span>
                <span>SURFACE GEOLOGY</span>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <PlanetStats
        radius={planet?.radius}
        temperature={planet?.temperature}
        revolution={planet?.revolution}
        rotation={planet?.rotation}
      />
    </>
  );
}
