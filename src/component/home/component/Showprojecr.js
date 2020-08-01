import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";

const useStyles = makeStyles({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 345,
  },
});

export default function Showproject({post:{ id, image, title, description, url }}) {
  const classes = useStyles();

  const handleClick = (id) => {
    window.location.assign(`/${id}`);
  };

  return (
    <>
      <Grid item xs={12} md={4}>
        <Card className={classes.cardMedia}>
          <CardActionArea onClick={() => handleClick(id)}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={image}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>

              <Typography variant="body2" color="textSecondary" component="p">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>

          <CardActions>
            <Button size="small" color="primary" href={url} target="_blanket">
              Watch On GitHub
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}
