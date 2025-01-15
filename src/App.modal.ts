import React, { SetStateAction } from "react";

export interface PlanetData {
  name: string;
  overview: {
    content: string;
    source: string;
  };
  structure: {
    content: string;
    source: string;
  };
  geology: {
    content: string;
    source: string;
  };
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: {
    planet: string;
    internal: string;
    geology: string;
  };
}

export interface PlanetStatsProps {
  radius: string | undefined;
  rotation: string | undefined;
  revolution: string | undefined;
  temperature: string | undefined;
}

export interface PlanetsListProps {
  hidePlanetsList: boolean;
  setHidePlanetsList: React.Dispatch<SetStateAction<boolean>>;
}

export interface PlanetInfoProps {
  planetName: string | undefined;
  className: string;
}
