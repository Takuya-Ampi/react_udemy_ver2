import { Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { Page1Routes } from "./Page1Routes";
import { Page2 } from "../Page2";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/page1"
        render={(
          { match: { url } } // propsの中にmatchオブジェクトがある
        ) => (
          <Switch>
            {Page1Routes.map((route) => {
              return (
                <Route
                  key={route.path}
                  path={`${url}${route.path}`}
                  exact={route.exact}
                >
                  {route.child}
                </Route>
              );
            })}
            {/* <Route exact path={url}>
              <Page1 />
            </Route>
            <Route path={`${url}/detailA`}>
              <Page1DetailA />
            </Route>
            <Route path={`${url}/detailB`}>
              <Page1DetailB />
            </Route> */}
          </Switch>
        )}
      />
      <Route path="/page2">
        <Page2 />
      </Route>
    </Switch>
  );
};
