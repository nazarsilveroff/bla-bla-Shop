import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import mainRoutes from "../../routes/mainRoutes";

const Main = () => {
  return (
    <main>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          {mainRoutes.map((item) => (
            <Route
              path={item.path}
              exact={item.exact}
              component={item.component}
              key={item.path}
            />
          ))}
        </Switch>
      </Suspense>
    </main>
  );
};

export default Main;
