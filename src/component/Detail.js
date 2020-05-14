import React,{useState} from "react";
import Header from './Header'
import { Container } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { Home, Books, Electronics } from './page';
import {sections} from './data'
import CssBaseline from "@material-ui/core/CssBaseline";


export default function Detail(props) {
  const {count,setcount}=useState(props)
  return (
    <>
    <CssBaseline />
      <Container maxWidth="lg">
      <Header title="Web CV" sections={sections} />
      <h1>Detail</h1>
      <h2>{count}</h2>
      <Switch>
        {/* The component will show here if the current URL matches the path */}
        <Route path="/Detail/a" component={Home} />
        <Route path="/Detail/b" component={Books} />
        <Route path="/Detail/c" component={Electronics} />
      </Switch>
      <Link to='/Detail/a'>Home</Link>
      <Link to='/Detail/b'>Books</Link>
      <Link to='/Detail/c'>Electronics</Link>
      </Container>
    </>
  );
}
