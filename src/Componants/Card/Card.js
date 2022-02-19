import React,{useEffect,useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from './../../Images/1.png'
import { Box, Grid, IconButton } from '@mui/material';
import "./Card.css"
import { GitHub } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const MediaCard = () => {
    const [projects,setProjects] = React.useState([]);

    useEffect(() => {
        fetch('https://shad-islam-alvee.herokuapp.com/projects')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])


  return (
      <>
                    

       <Box sx={{ flexGrow: 1,bgcolor:'#112240' }}>
         <Grid container spacing={2}>
          {
            projects.map((project)=> (
              <Grid item xs={12} md={12} lg={4}>
                <div className="card-container" sx={{boxShadow : 3}}>
                      <div className="card u-clearfix">
                        <div className="card-body">
                          <span className="card-number card-circle subtle">01</span>
                          <span className="card-author subtle">John Smith</span>
                          <h4 className="card-title">{project.title}</h4>
                          <span className="card-description subtle">These last few weeks I have been working hard on a new brunch recipe for you all.</span>
                          <div className="card-read"><a href={project.live}>Live Demo</a></div>
                          <a href={project.github}>
                            <GitHub className="card-tag card-circle subtle"/>
                          </a>
                        </div>
                        <CardMedia componant='img' sx={{boxShadow : 3}} image={project.img} alt="" className="card-media" />
                      </div>
                      <div className="card-shadow"></div>
                    </div>
              </Grid>
            ))
          }
          </Grid>
        </Box>
      </>

   
  );
}


export default MediaCard