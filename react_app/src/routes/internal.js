import { InternalLayout } from "components";

import {
    Dashboard,
    SavedFilters,
    Campaigns,
    MarketSelectionCourse,
    Subscription,
    ContactUs,
    FeatureIdea,
    AdminDashboard,
} from "pages";

const routes = [
    {
        path: "/home",
        element: <InternalLayout />,
        children: [
            {
                path: "",
                element: <Dashboard />,
            },
            {
                path: "market_research",
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
            {
                path: "market_selection_course",
                element: <MarketSelectionCourse />,
            },
            {
                path: "subscription",
                element: <Subscription />,
            },
            {
                path: "contact_us",
                element: <ContactUs />,
            },
            {
                path: "feature_idea",
                element: <FeatureIdea />,
            },
            {
                path: "admin",
                element: <AdminDashboard />,
            },
        ],
    },
];

export default routes;
