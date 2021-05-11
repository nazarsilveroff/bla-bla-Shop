import { exact } from "prop-types";
import React from "react";

import { NavLink, Switch, Route } from "react-router-dom";
import Clients from "../Components/clients/Clients";
import Products from "../Components/products/Products";

const adminRoutes = [
  {
    name: "Products",
    path: "/products",
    exact: true,
    component: Products,
  },
  {
    name: "Clients",
    path: "/clients",
    exact: true,
    component: Clients,
  },
];

const AdminPage = ({ match }) => {
  return (
    <>
      <h2>Admin</h2>
      <nav>
        <ul>
          {adminRoutes.map((item) => (
            <li key={item.path}>
              <NavLink to={match.url + item.path}>{item.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Switch>
        {adminRoutes.map((item) => (
          <Route
            path={match.url + item.path}
            component={item.component}
            key={item.path}
          />
        ))}
      </Switch>
    </>
  );
};

export default AdminPage;
