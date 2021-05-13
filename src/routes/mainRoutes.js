import { lazy } from "react";

const mainRoutes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: lazy(() =>
      import("../pages/HomePage" /*webpackChunkName:'HomePage'*/)
    ),
  },
  {
    name: "Products",
    path: "/Products",
    exact: false,
    component: lazy(() =>
      import("../pages/ProductsPage" /*webpackChunkName:'ProductsPage'*/)
    ),
  },
  {
    name: "Admin",
    path: "/Admin",
    exact: false,
    component: lazy(() => import("../pages/AdminPage")),
  },
  {
    name: "Registation",
    path: "/Registation",
    exact: true,
    component: lazy(() => import("../pages/AuthPage")),
  },
  {
    name: "Login",
    path: "/Login",
    exact: true,
    component: lazy(() => import("../pages/AuthPage")),
  },
];

export default mainRoutes;
