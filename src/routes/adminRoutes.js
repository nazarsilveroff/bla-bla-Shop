import { lazy } from "react";

const adminRoutes = [
  {
    name: "products",
    path: "/products",
    exact: true,
    component: lazy(() =>
      import("../Components/products/Products" /*webpackChunkName:'Products'*/)
    ),
  },
  {
    name: "clients",
    path: "/clients",
    exact: true,
    component: lazy(() =>
      import("../Components/clients/Clients" /*webpackChunkName:'Clients'*/)
    ),
  },
];

export default adminRoutes;
