import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter, } from "react-router-dom"
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
  const data = {}
  const path = {pathname:'/Detail',state:data}
  const { post } = props;
  const [count,setpost]=useState(100);
  
  const handleClick = (event) => {
    setpost(event)
    alert(count)
    window.location.assign('/Detail')
    
  }

  return (
    <BrowserRouter>
    <Grid item xs={12} md={4}>
       <Card className={classes.cardMedia}>
       <p>You clicked {count} times</p>

      <CardActionArea onClick={()=>handleClick({count})}>
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
