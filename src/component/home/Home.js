import React,{useState,useEffect} from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import { Container } from "@material-ui/core";
import Detail from "./component/project/Detail";
import { Route, Switch } from "react-router-dom";
import Index from "./component/index";
import Projects from "./component/project/projects";

function  Home() {
  useEffect(
    () => {
      // componentDidMount is here!
      return () => {
        // componentWillUnmount is here!
      };
    }, // 當 params.pid 變更就執行
    []
  );
  
  return (
    <>
      <Container maxWidth="lg">
        <Header title="web cv" />
        <Switch>
          <Route path="/projects" component={Projects} />
          <Route path="/:pid" component={Detail} />
          <Route path="/" component={Index} />
        </Switch>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
