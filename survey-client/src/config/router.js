import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const Router = ({ navLinks }) => {
  return (
    <div>
      <BrowserRouter>
        {(navLinks ? navLinks : []).map(item => {
          return (
            <Route
              exact
              path={item.url}
              component={item.component}
              key={item.url}
            />
          );
        })}
      </BrowserRouter>
    </div>
  );
};

export default Router;
