import { createContext } from "react";
import { PlanetContextType } from "./App.modal";

const PlanetContext = createContext<PlanetContextType>({
  hidePlanetsList: false,
  setHidePlanetsList: () => {},
});

export default PlanetContext;
