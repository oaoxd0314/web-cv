import React, { useState, useEffect } from "react";
import { Container, Typography } from "@material-ui/core";
import locolData from "../../../../data/data.json";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import img from "../../../../img/01.jpeg";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  image: {
    marginTop: theme.spacing(6),
    height: "465px",
    width: "1150px",
  },
  grid :{
    padding: theme.spacing(2),
  }
}));

export default function Detail(props) {
  const [pdata, setdatas] = useState({});
  const {
    match: { params },
  } = props;

  useEffect(
    () => {
      // componentDidMount is here!
      setdatas(
        locolData.project.find((item) => {
          return item.id === params.pid;
        })
      );

      return () => {
        // componentWillUnmount is here!
      };
    }, // 當 params.pid 變更就執行
    [params.pid]
  );


  console.log(pdata.install)

  const classes = useStyles();
  return (
    
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <h1>{pdata.title}</h1>

        <Grid className={classes.grid} color="black">
          <img className={classes.image} src={img} alt="圖片失效" />
        </Grid>

        <Grid className={classes.grid}>
        <h2>Introduction</h2>
        <Typography  variant="h6" align="center">
        {pdata.description}
        </Typography>
        </Grid>

        <Grid className={classes.grid}>
        <h2>install</h2>
        <Typography  variant="h6" align="center">
        {pdata.install}
        </Typography>
        </Grid>

        <Grid className={classes.grid}>
        <h2>How to use</h2>
        <Typography  variant="h6" align="center">
        {pdata.demo}
        </Typography>
        </Grid>
      </Container>
    </>
  );
}
