import "bootstrap/dist/css/bootstrap.min.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Detail from "./component/Detail";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import history from "./history";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
          <Route history={history}>
            <Route exact path="/" component={App}></Route>
            <Route path="/Detail" component={Detail}></Route>
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
