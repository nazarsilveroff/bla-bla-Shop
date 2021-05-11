import React from "react";
import { Route, Switch } from "react-router-dom";
import mainRoutes from "../../routes/mainRoutes";


const Main = () => {
  return (
    <main>
      <Switch>
        {mainRoutes.map(item => (
          <Route path={item.path} exact={item.exact} component={item.component} key={item.path} />
        ))}
      </Switch>
    </main>
  );
};

export default Main;



