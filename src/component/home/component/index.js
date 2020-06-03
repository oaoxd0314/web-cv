import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Introduction from "./Introduction";
import Aboutme from "./Aboutme";
import Experience from "./Experience";
import Showprojecr from "./Showprojecr";
import { Grid } from "@material-ui/core";
import data from "../../../data/data";

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

 const Mainpage = () => {
  const classes = useStyles();
  return (
    <>
      <main>
        <Introduction />
        <Grid container>
          <Aboutme />
        </Grid>
        <Grid container className={classes.mainGrid}>
          <Experience />
        </Grid>
        <h2 align="left" className={classes.mainGrid}>
          {data.titles.title}
        </h2>
        <Grid container spacing={4}>
          {data.project.map((post) => (
            <Showprojecr key={post.id} post={post} />
          ))}
        </Grid>
      </main>
    </>
  );
}

export default Mainpage;
