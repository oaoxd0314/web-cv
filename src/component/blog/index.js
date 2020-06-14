import React from "react";
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <Container maxWidth="lg">
        <div style={{textAlign:"center",marginTop:"25%"}}>
          <h1>comming soon.........</h1>
          <h2>it's not ready</h2>
         <Link to="/"> <h3> just go back</h3></Link>
        </div>
      </Container>
    </>
  );
};

export default Blog;
