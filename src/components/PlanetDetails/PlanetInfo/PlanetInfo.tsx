import { NavLink } from "react-router";
import { PlanetInfoProps } from "../../../App.modal";
import "./planetInfo.css";

export default function PlanetInfo({ planetName, className }: PlanetInfoProps) {
  return (
    <div className={className}>
      <NavLink className={`info ${planetName}`} to={`/${planetName}/overview`}>
        <button>
          {className !== "info-list-mobile" && (
            <span className="list-number">01</span>
          )}
          <span>OVERVIEW</span>
        </button>
      </NavLink>
      <NavLink className={`info ${planetName}`} to={`/${planetName}/internal`}>
        <button>
          {className !== "info-list-mobile" && (
            <span className="list-number">02</span>
          )}
          <span>INTERNAL STRUCTURE</span>
        </button>
      </NavLink>
      <NavLink className={`info ${planetName}`} to={`/${planetName}/geology`}>
        <button>
          {className !== "info-list-mobile" && (
            <span className="list-number">03</span>
          )}
          <span>SURFACE GEOLOGY</span>
        </button>
      </NavLink>
    </div>
  );
}
