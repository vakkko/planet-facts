import { PlanetData } from "./App.modal";

export function getPlanetInfo(
  planet: PlanetData | undefined,
  info: string | undefined
) {
  if (info === "overview") {
    return {
      content: planet?.overview.content,
      source: planet?.overview.source,
      image: planet?.images.planet,
    };
  } else if (info === "internal") {
    return {
      content: planet?.structure.content,
      source: planet?.structure.source,
      image: planet?.images.internal,
    };
  } else if (info === "geology") {
    return {
      content: planet?.geology.content,
      source: planet?.geology.source,
      image: planet?.images.geology,
    };
  }
}
