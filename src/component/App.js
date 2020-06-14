import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import Blog from "./blog";

const App = () => (
  <div>
    <Switch>
      <Route path="/blog" component={Blog} />
      <Route path="/" component={Home} />
    </Switch>
  </div>
);

export default App;
