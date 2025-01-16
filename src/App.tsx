import { Outlet } from "react-router";
import Header from "./components/Header/Header";
import { useState } from "react";
import PlanetContext from "./PlanetContext";

export default function App() {
  const [hidePlanetsList, setHidePlanetsList] = useState<boolean>(false);
  return (
    <PlanetContext.Provider value={{ hidePlanetsList, setHidePlanetsList }}>
      <Header />
      <main>
        <Outlet />
      </main>
    </PlanetContext.Provider>
  );
}
