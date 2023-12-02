import { ExternalLayout, InternalLayout } from "components";

import { Landing, Login, Logout } from "pages";

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
];

export default routes;
