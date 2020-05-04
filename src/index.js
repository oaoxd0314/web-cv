import "bootstrap/dist/css/bootstrap.min.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Detail from "./component/Detail"
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

ReactDOM.render(
  <React.StrictMode>
  <Router>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/Detail">
        <Detail />
        </Route>
      </Switch>
    </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
