/**
=========================================================
* Soft UI Dashboard PRO React - v4.0.2
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Soft UI Dashboard PRO React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

import Login from "pages/login";

const routes = [
    {
        type: "collapse",
        name: "Dashboards",
        key: "dashboards",
        icon: <div></div>,
        collapse: [
            {
                name: "Login",
                key: "login",
                route: "/login",
                component: <Login />,
            },
            {
                name: "Default",
                key: "default",
                route: "/dashboards/default",
                component: <Login />,
            },
            {
                name: "Automotive",
                key: "automotive",
                route: "/dashboards/automotive",
                component: <Login />,
            },
            {
                name: "Smart Home",
                key: "smart-home",
                route: "/dashboards/smart-home",
                component: <Login />,
            },
        ],
    },
];

export default routes;
