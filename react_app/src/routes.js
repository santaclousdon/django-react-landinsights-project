import { ExternalLayout, InternalLayout } from "components";

import { Landing, Login, Logout, Dashboard } from "pages";

const routes = [
    {
        path: "/",
        element: <ExternalLayout />,
        children: [
            {
                index: true,
                path: "",
                element: <Landing />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "logout",
                element: <Logout />,
            },
        ],
    },
    {
        path: "/home",
        element: <InternalLayout />,
        children: [
            {
                index: true,
                path: "",
                element: <Dashboard />,
            },
        ],
    },
];

export default routes;
