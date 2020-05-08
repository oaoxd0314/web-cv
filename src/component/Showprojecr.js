import React from 'react';
import Detail from '../component/Detail';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter, Route, Link } from "react-router-dom"
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';


const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 345,
  },
});

export default function Showproject(props) {
  const classes = useStyles();
  const { post } = props;
  
  const handleClick = (event) => {
    window.location.assign('/Detail')
  };


  return (
    <BrowserRouter>
    <Grid item xs={12} md={4}>
       <Card className={classes.cardMedia}>

      <CardActionArea onClick={(props)=>handleClick()}>
      <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={post.image}
          title="Contemplative Reptile"
        />
        <CardContent>

          <Typography gutterBottom variant="h5" component="h2">
            {post.title}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
          {post.description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button size="small" color="primary" href={post.url} target="_blanket">
          Watch On GitHub
        </Button>
      </CardActions>

    </Card>
    </Grid>
    </BrowserRouter>
  );
}
