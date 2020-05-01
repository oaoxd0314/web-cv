import React from "react";
import { Container } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footer: {
      backgroundColor: theme.palette.background.paper,
      // marginTop: theme.spacing(8),
      padding: theme.spacing(6, 0),
    },
  }));

export default function Footer(props) {
  const classes = useStyles();
  const {post} = props;
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {post.title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          {post.description}
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );

  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://github.com/oaoxd0314">
          Chris Wang
        </Link>
        {new Date().getFullYear()}
        {" ."}
      </Typography>
    );
  }
}
