import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Image from "react-bootstrap/Image";
import { aboutme } from "../component/data";

const useStyles = makeStyles((theme) => ({
  layout: {
    marginLeft: theme.spacing(4),
    marginTop: theme.spacing(3),
  },
  top: {
    marginTop: theme.spacing(4),
  },
  left: {
    marginLeft: theme.spacing(4),
  },
}));

export default class Aboutme extends React.Component {
  render() {
    return (
      <Grid container spacing={8}>
        <Text post={aboutme.post} title={aboutme.title} />
        <Person img={aboutme.img} social={aboutme.social} />
      </Grid>
    );
  }
}

const Text = (props) => {
  const { title, post } = props;
  const classes = useStyles();
  return (
    <Grid item xs={12} md={8}>
      <div className={classes.top}>
        <Typography component="h1" variant="h5" align="center">
          {title}
        </Typography>
        <Typography variant="subtitle1" paragraph align="center">
          {post}
        </Typography>
      </div>
    </Grid>
  );
};

const Person = (props) => {
  const { img, social } = props;
  const classes = useStyles();
  return (
    <Grid item xs={12} md={4}>
      <Image
        src={img}
        roundedCircle
        width="123"
        height="123"
        className={classes.left}
      />
      <Container className={classes.layout}>
        {social.map((network) => (
          <Link
            display="block"
            variant="body1"
            href={network.href}
            key={network}
            target="_blank"
          >
            <Grid container xs={5}>
              <Grid item>
                <network.icon />
              </Grid>
              <Grid item>{network.name}</Grid>
            </Grid>
          </Link>
        ))}
      </Container>
    </Grid>
  );
};
