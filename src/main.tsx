import "./index.css";
import PlanetDetails from "./components/PlanetDetails/PlanetDetails";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router";
import App from "./App";

const root = createRoot(document.getElementById("root")!);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Navigate to="/mercury/overview" replace />} />
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
