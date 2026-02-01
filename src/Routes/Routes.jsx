import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";
import ErrorElement from "../components/ErrorElement/ErrorElement";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import PlantDetails from "../Pages/PlantDetails/PlantDetails";
import Profile from "../Pages/Profile/Profile";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorElement></ErrorElement>,
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
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
            {
                path: "profile",
                element: <Profile></Profile>,
            },
            {
                path: "login",
                element: <Login></Login>,
                errorElement: <ErrorElement></ErrorElement>,
            },
            {
                path: "register",
                element: <Register></Register>,
                errorElement: <ErrorElement></ErrorElement>,
            },
            {
                path: "plant-details",
                element: <ProtectedRoute>
                    <PlantDetails></PlantDetails>
                </ProtectedRoute>,
                loader: async () => await fetch('plantDetails.json'),
            }



        ],
    },


]);

export default router;
