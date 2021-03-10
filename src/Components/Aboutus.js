import React from 'react';
import {  Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import './Aboutus.css';
import atifpic from './Images/atif.jfif';
import hassanpic from './Images/hassan.jpeg';
import obaidpic from './Images/obaid.jfif';
import saudpic from './Images/saud.jpg';
import img1 from './Images/c.jpg';


const useStyles = makeStyles((theme) => ({
   
    mainPage:
    {
      alignContent: 'center',
      textAlign: 'center',
      color: '#fff',
    },
    image: {
      width: 200,
      height: 200,
    },
    root: {
      maxWidth: 300,
    },
    roundImages: {
      borderRadius: 60 ,
      width: 200,
      height:200,
      margin:15,

    }
    
    
  }));

function About() {
    
 
    const classes = useStyles();
  return (
    <div className="App" class="bod2" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${img1})`}}>
        <div container spacing={3} className={classes.mainPage} >
        
          {/*now project members*/}
        
        <table class="table1">
        <br/>
        <tr>
        <td>
          <h2 class="h2head"><b>Decentralized Health Care System Using Block Chain</b></h2>
        </td>
        </tr>

        <br/>
        
        <tr>
        <td>
          <h3 class="h3d">
            Project Developed By
          </h3>
        </td>
        </tr>
        <br/>
      <tr>
        <td>
          <figure>
          <img src={atifpic} className={classes.roundImages}/>
          <img src={hassanpic} className={classes.roundImages}/>
          <img src={obaidpic} className={classes.roundImages}/>
          <figcaption class="name1">Muhammad Atif &nbsp;&nbsp;&nbsp; &nbsp;  &nbsp;  &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Muhammad Hassan &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;    Obaid Raza</figcaption>

          </figure>
        </td>
      </tr>
        
        {/*now supervisors*/}
        <br/>
        <tr>
        <td>
          <h3 class="h3s">
            Project Supervised By
          </h3>
        </td>
        </tr>

        <br/>
        
        <tr>
        <td>
          <figure>
          <img src={saudpic} className={classes.roundImages}/>
          
          <figcaption>Dr. Saud Altaf</figcaption>
          </figure>
        </td>
      </tr>
        
        </table>
        </div>  
       
    </div>
  );
}

export default About;