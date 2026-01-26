import { createBrowserRouter } from "react-router";
import Home from "../Home";
import Root from "../../../Root/Root";
import ErrorElement from "../../../components/ErrorElement/ErrorElement";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorElement></ErrorElement>,
        hydrateFallbackElement: <div>Loading...</div>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: async () => {
                    const plantsRes = fetch('plants.json');
                    const topRatedRes = fetch('toprated.json');
                    const plantCareRes = fetch('plantcare.json');
                    const greenExpertRes = fetch('greenexperts.json');

                    const [plants, topRated, plantCare, greenExpert] = await Promise.all([
                        plantsRes.then(res => res.json()),
                        topRatedRes.then(res => res.json()),
                        plantCareRes.then(res => res.json()),
                        greenExpertRes.then(res => res.json()),
                    ])

                    return { plants, topRated, plantCare, greenExpert };
                },
                errorElement: <div>Error loading home page data.</div>,
            },
        ],
    },

]);

export default router;
