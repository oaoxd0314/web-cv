import React from "react";
import Introduction from "./component/Introduction";
import { makeStyles } from "@material-ui/core/styles";
import Aboutme from "./component/Aboutme";
import Experience from "./component/Experience";
import Footer from "./component/Footer";
import Header from "./component/Header";
import { Container, Grid } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Showprojecr from "./component/Showprojecr";
import CV from "./img/CV.pdf";
import Detail from "./component/Detail"
import {sections,mainimg,aboutme,project,experience,footer,titles} from "./component/data"

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(4),
    
  },
  space: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));



export default function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Web CV" sections={sections} />
        <main>
          <Introduction post={mainimg} CV={CV} />
          <Grid container>
            <Aboutme
              title={aboutme.title}
              post={aboutme.post}
              img={aboutme.img}
              social={aboutme.social}
            />
          </Grid>
          <Grid container className={classes.mainGrid}>
            <Experience title="Experience" posts={experience} />
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
      <Footer post={footer} />
    </>
  );
}
