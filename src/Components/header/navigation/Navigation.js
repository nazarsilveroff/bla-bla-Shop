import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import mainRoutes from "../../../routes/mainRoutes";
import { NavigationContainer } from "./NavigationStyled";

const Navigation = ({ location }) => {
  return (
    <NavigationContainer>
      <ul className="list">
        {mainRoutes.map((item) => (
          <li className="listItem" key={item.path}>
            <NavLink
              to={{
                pathname: item.path,
                state: { from: location.pathname },
              }}
              className="link"
              activeClassName="activeLink"
              exact={item.exact}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </NavigationContainer>
  );
};

export default withRouter(Navigation);
