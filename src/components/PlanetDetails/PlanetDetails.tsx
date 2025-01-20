import "./planetDetails.css";
import PlanetStats from "./PlanetStats/PlanetStats";
import { PlanetData } from "../../App.modal";
import { useLoaderData, useParams } from "react-router";
import { getPlanetInfo } from "../../utils";
import PlanetInfo from "./PlanetInfo/PlanetInfo";
import { useContext } from "react";
import planetContext from "../../context/planetContext";

export default function PlanetDetails() {
  const planetData = useLoaderData() as PlanetData[];
  const params = useParams<{ planetName: string; info: string }>();
  const planet = planetData.find((planet) => {
    return planet.name.toLowerCase() === params?.planetName;
  });
  const info = params.info;
  const planetName = planet?.name.toLowerCase();
  const planetInfos = getPlanetInfo(planet, info);
  const hidePlanetsList = useContext(planetContext);

  return (
    <>
      {hidePlanetsList && (
        <>
          <div className="planet-container">
            <PlanetInfo
              className={"info-list-mobile"}
              planetName={planetName}
            />
            <div className="info-images">
              {info !== "geology" ? (
                <img
                  className="planet-pic"
                  src={planetInfos?.image}
                  alt="planet"
                />
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
              <div>
                <h1 className="planet-name">
                  {planetName?.toUpperCase() || ""}
                </h1>
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
              </div>
              <PlanetInfo className={"info-list"} planetName={planetName} />
            </div>
          </div>
          <PlanetStats
            radius={planet?.radius}
            temperature={planet?.temperature}
            revolution={planet?.revolution}
            rotation={planet?.rotation}
          />
        </>
      )}
    </>
  );
}
