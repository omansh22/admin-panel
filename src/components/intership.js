import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import data from '../data/dummy';
import { Link } from "react-router-dom";
import './webinar.css';
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });




const Intership = ()=> {
    const classes = useStyles();
   return(

       <div class="matter">
           <h3 class='wi'>Intership</h3>
           {
               data.map(da=>
                <div class='content'> 
                 <Card className={classes.root}>
              <CardActionArea>
                <img
                  component="img"
                  alt="Interactor"
                  height="80"
                  width="70"
                  class="fig"
                  src = {da.img}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" >
                    <Link to={`webinar-view/${da.id}`}>{da.name}</Link>
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {da.Description}
                  </Typography>
                  <div id="dat">
                  <div><Typography variant="body2" color="textPrimary" component="p">
                    {da.date} - {da.time} 
                  </Typography></div>
                  
                  </div>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <Link to={`webinar-view/${da.id}`}>Edit</Link>
                </Button>
                
              </CardActions>
            </Card>
                </div>
                )
           }
       </div>
   )
   


}

export default Intership;