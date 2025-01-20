import { createContext } from "react";
import { PlanetContextType } from "../App.modal";

const planetContext = createContext<PlanetContextType>({
  hidePlanetsList: false,
  setHidePlanetsList: () => {},
});

export default planetContext;
