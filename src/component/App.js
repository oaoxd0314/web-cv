import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import Other from "./other/other";

const App = () => (
  <div>
    <Switch>
      <Route path="/other" component={Other} />
      <Route path="/" component={Home} />
    </Switch>
  </div>
);

export default App;
