import { ExternalLayout, InternalLayout } from "components";

import { Landing, Login } from "pages";

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
        ],
    },
];

export default routes;
