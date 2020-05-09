import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Home, Books, Electronics } from './page';
import {sections} from './data'
export default function Detail() {

  return (
    <>
    <Header title="Web CV" sections={sections} />
      <h1>Detail</h1>
      <Switch>
        {/* The component will show here if the current URL matches the path */}
        <Route path="/Detail/a" component={Home} />
        <Route path="/Detail/b" component={Books} />
        <Route path="/Detail/c" component={Electronics} />
      </Switch>
      <Link to='/Detail/a'>Home</Link>
      <Link to='/Detail/b'>Books</Link>
      <Link to='/Detail/c'>Electronics</Link>
    </>
  );
}
