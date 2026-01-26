import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import Root from "./Root/Root";
import Home from "./Pages/Home/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        loader: async () => {
          const plantsRes = fetch('plants.json');
          const topRatedRes = fetch('toprated.json');

          const [plants, topRated] = await Promise.all([
            plantsRes.then(res => res.json()),
            topRatedRes.then(res => res.json()),
          ])

          return { plants, topRated };
        },
        Component: Home,
      },
    ],
  },

]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
