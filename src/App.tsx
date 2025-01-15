import { Outlet } from "react-router";
import Header from "./components/Header/Header";
import { useState } from "react";

export default function App() {
  const [hidePlanetsList, setHidePlanetsList] = useState<boolean>(true);
  return (
    <>
      <Header
        hidePlanetsList={hidePlanetsList}
        setHidePlanetsList={setHidePlanetsList}
      />

      <main>
        <Outlet />
      </main>
    </>
  );
}
