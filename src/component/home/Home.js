import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Introduction from "../Introduction";
import Aboutme from "../Aboutme";
import Experience from "../Experience";
import Footer from "../Footer";
import Header from "../Header";
import Showprojecr from "../Showprojecr";
import { Container, Grid } from "@material-ui/core";
import { project, titles } from "../data";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(4),
  },
  space: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg">
        <Header />
        <main>
          <Introduction />
          <Grid container>
            <Aboutme />
          </Grid>
          <Grid container className={classes.mainGrid}>
            <Experience />
          </Grid>
          <h2 align="left" className={classes.mainGrid}>
            {titles.title}
          </h2>
          <Grid container spacing={4}>
            {project.map((post) => (
              <Showprojecr key={post.title} post={post} />
            ))}
          </Grid>
        </main>
      </Container>
      <Footer />

      <div className="routes"></div>
    </>
  );
};

export default Home;
