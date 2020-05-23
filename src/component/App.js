import React from "react";
import { Route, Switch } from "react-router-dom";
import Detail from "./Detail";
import Home from "./home/Home";

 const App = () => (
  <div>
    <Switch>
      <Route path="/Detail" component={Detail} />
      <Route path="/" component={Home} />
    </Switch>
  </div>
);

export default App;