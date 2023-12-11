import { ExternalLayout, InternalLayout } from "components";

import { Landing, Login, Logout, Dashboard, SavedFilters, Campaigns } from "pages";

function set_page_details(title, description, image) {
    if (!window.secret_react_vars) {
        window.secret_react_vars = {};
    }

    window.secret_react_vars.page_title = title;
    window.secret_react_vars.page_description = description;
    window.secret_react_vars.page_image = image;

    return null;
}

const routes = [
    {
        path: "/",
        element: <ExternalLayout />,
        children: [
            {
                index: true,
                path: "",
                element: <Landing />,
                loader: async ({ request, params }) => {
                    return set_page_details(
                        "Land Insights",
                        "Landing Page Goes Here",
                        "/static/template_assets/img/curved-images/curved9.jpg"
                    );
                },
            },
            {
                path: "login",
                element: <Login />,
                loader: async ({ request, params }) => {
                    return set_page_details(
                        "Welcome to Land Insights",
                        "Login Here",
                        "/static/template_assets/img/curved-images/curved9.jpg"
                    );
                },
            },
            {
                path: "logout",
                element: <Logout />,
                loader: async ({ request, params }) => {
                    return set_page_details(
                        "See Ya Later",
                        "Logout",
                        "/static/template_assets/img/curved-images/curved9.jpg"
                    );
                },
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
            {
                path: "my_markets",
                element: <Dashboard saved_markets={true} />,
            },
            {
                path: "saved_filters",
                element: <SavedFilters />,
            },
            {
                path: "campaigns",
                element: <Campaigns />,
            },
        ],
    },
];

export default routes;
