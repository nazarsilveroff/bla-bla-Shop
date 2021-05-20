import { lazy } from "react";

const mainRoutes = [
  {
    name: "home",
    path: "/",
    exact: true,
    component: lazy(() =>
      import("../pages/HomePage" /*webpackChunkName:'HomePage'*/)
    ),
  },
  {
    name: "products",
    path: "/products",
    exact: false,
    component: lazy(() =>
      import("../pages/ProductsPage" /*webpackChunkName:'ProductsPage'*/)
    ),
  },
  {
    name: "admin",
    path: "/admin",
    exact: false,
    component: lazy(() => import("../pages/AdminPage")),
  },
  {
    name: "registration",
    path: "/registration",
    exact: true,
    component: lazy(() => import("../pages/AuthPage")),
  },
  {
    name: "login",
    path: "/login",
    exact: true,
    component: lazy(() => import("../pages/AuthPage")),
  },
];

export default mainRoutes;
