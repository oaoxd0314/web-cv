import React from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import { Container } from "@material-ui/core";
import Detail from "./component/project/Detail";
import { Route, Switch } from "react-router-dom";
import Index from "./component/index";

const Home = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Header title="web cv" />
        <Switch>
          <Route path="/:pid" component={Detail}/>
          <Route path="/" component={Index} />
        </Switch>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
