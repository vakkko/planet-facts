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
  radius: string;
  rotation: string;
  revolution: string;
  temperature: string;
}

export type PlanetInfo = {
  content?: string;
  source?: string;
  image?: string;
};
