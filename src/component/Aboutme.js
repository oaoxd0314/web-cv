import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Image from "react-bootstrap/Image";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
  overlay: {
    marginTop: theme.spacing(4),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  paper: {
    Color: theme.palette.grey[200],
  },
  post: {},
}));

export default function Aboutme(props) {
  const { title, post, social, img } = props;
  return (
      <Grid container spacing={8}>
        <Text post={post} title={title} />
        <Person img={img} social={social} />
      </Grid>
  );
}

function Text(props) {
  const { title, post } = props;
  const classes = useStyles();
  return (
    <Grid item xs={12} md={8}>
      <div className={classes.overlay}>
        <Grid xs={12} md={6}>
          <Typography component="h1" variant="h5" align='left'>
            {title}
          </Typography>
        </Grid>
        <Grid xs={12} md={8}>
          <Typography variant="subtitle1" paragraph align="left">
            {post}
          </Typography>
        </Grid>
      </div>
    </Grid>
  );
}

function Person(props) {
  const { img, social } = props;

  const classes = useStyles();
  return (
    <Grid item xs={12} md={4}>
      <Image src={img} roundedCircle width="123" height="123" />
      <Container className={classes.sidebarAboutBox}>
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
}
