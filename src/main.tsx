import "./index.css";
import Header from "./components/Header/Header";
import PlanetDetails from "./components/PlanetDetails/PlanetDetails";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";

const root = createRoot(document.getElementById("root")!);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route
        path="/:planetName/:info"
        element={<PlanetDetails />}
        loader={async () => {
          return fetch("/data.json");
        }}
      />
    </Route>
  )
);

root.render(<RouterProvider router={router} />);
