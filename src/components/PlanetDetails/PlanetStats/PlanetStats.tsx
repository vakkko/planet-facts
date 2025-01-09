import "./planetStats.css";
import type { PlanetStatsProps } from "~/App.modal";

export default function PlanetStats({
  radius,
  temperature,
  rotation,
  revolution,
}: PlanetStatsProps) {
  return (
    <div className="planet-stats">
      <div>
        <p className="stat-name">ROTATION TIME</p>
        <p className="stat">{rotation}</p>
      </div>
      <div>
        <p className="stat-name">REVOLUTION TIME</p>
        <p className="stat">{revolution}</p>
      </div>
      <div>
        <p className="stat-name">RADIUS</p>
        <p className="stat">{radius}</p>
      </div>
      <div>
        <p className="stat-name">AVERAGE TEMP.</p>
        <p className="stat">{temperature}</p>
      </div>
    </div>
  );
}
