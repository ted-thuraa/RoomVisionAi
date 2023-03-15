import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./views/login";

import Signup from "./views/signup";
import NotFound from "./views/notfound";
import Visiondash from "./views/visiondash";

import GuestLayout from "./components/GuestLayout";

import Home from "./views/home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/design",
        element: <Visiondash />,
    },

    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
