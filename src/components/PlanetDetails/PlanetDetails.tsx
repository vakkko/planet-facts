import "./planetDetails.css";
import PlanetStats from "./PlanetStats/PlanetStats";
import { PlanetData, PlanetInfo } from "../../App.modal";
import { useLoaderData, useParams, NavLink } from "react-router";

export default function PlanetDetails() {
  const planetData = useLoaderData() as PlanetData[];
  const params = useParams<{ planetName: string; info: string }>();
  const planet = planetData.find((planet) => {
    return planet.name.toLowerCase() === params?.planetName;
  });
  const info = params.info;
  const planetName = planet?.name.toLowerCase();
  let planetInfos: PlanetInfo = {};
  (function content() {
    if (info === "overview") {
      return (planetInfos = {
        content: planet?.overview.content,
        source: planet?.overview.source,
        image: planet?.images.planet,
      });
    } else if (info === "internal") {
      return (planetInfos = {
        content: planet?.structure.content,
        source: planet?.structure.source,
        image: planet?.images.internal,
      });
    } else if (info === "geology") {
      return (planetInfos = {
        content: planet?.geology.content,
        source: planet?.geology.source,
        image: planet?.images.geology,
      });
    }
  })();

  return (
    <>
      <div className="planet-container">
        <img src={planetInfos.image} alt="planet" />
        <div className="planet-info">
          <p className="planet-name">{planetName?.toUpperCase() || ""}</p>
          <p className="planet-description">{planetInfos?.content}</p>
          <div className="source-container">
            <span>Source : </span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={planetInfos.source}
            >
              Wikipedia
            </a>
            <img src="/assets/icon-source.svg" alt="source" />
          </div>
          <div className="info-list">
            <NavLink className={"info"} to={`/${planetName}/overview`}>
              <button>
                <span className="list-number">01</span> <span>OVERVIEW</span>
              </button>
            </NavLink>
            <NavLink className={"info"} to={`/${planetName}/internal`}>
              <button>
                <span className="list-number">02</span>
                <span>INTERNAL STRUCTURE</span>
              </button>
            </NavLink>
            <NavLink className={"info"} to={`/${planetName}/geology`}>
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
