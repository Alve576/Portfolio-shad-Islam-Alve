import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typical from 'react-typical';
import { Button, CardMedia, Grid, Typography } from '@mui/material';
import { Facebook, GitHub, LinkedIn } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';

export default function Display() {
  return (
    <div id="home">
      <Box
        sx={{
          textAlign : 'left',
          bgcolor: '#112240',
          color: '#64ffda',
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
        <h1>Hi, I am Shad Islam a</h1>
         <Typical
            steps={['Fullstack', 1000, 'Web App!', 500, 'Developer', 500]}
            loop={Infinity}
            wrapper="h1"
           
        />
      </Box>
      <Box
        sx={{
          display : 'flex',
          alignItems : 'center',
          justifyContent : 'space-evenly',
          bgcolor:  '#112240',
          color:'#64ffda',
           height : '70vh',
          fontSize: '0.8rem',
          fontWeight: '700',
        }}
      >
        <Box
        >
          <Typography>
            <span>Name</span>
            <h2>Shad Islam Alvee</h2>
          </Typography>
          <Typography>
            <span>Profession</span>
            <h2>A Full Stack Web Developer</h2>
          </Typography>
          <Typography>
            <span>Contact</span>
            <h2>Dhaka,Bangladesh <br/>shadmanzz656@gmail.com <br/> 01995595975</h2>
          </Typography>
          <Box>
            <span>Social</span><br/>
            <Link to=''>
              <IconButton sx={{ p: 2,color:"#64ffda"}}>  
                <Facebook/>
              </IconButton>
              </Link>
              <Link to='https://www.HashLinkedin.com/in/shadmanalve/'>
              <IconButton sx={{ p: 2,color:"#64ffda"}}>
                <LinkedIn/>
              </IconButton>
              </Link>
              <Link to='https://github.com/Alve576  '>
              <IconButton sx={{ p: 2,color:"#64ffda  "}}>
                <GitHub/>
              </IconButton>
              </Link>
          </Box>
          
         
        </Box>
     
          <CardMedia 
            sx = {{borderRadius : '50%',
            width : '30%',
            borderColor : "#64ffda",
            border : "5px solid",
            boxShadow : 16 
          }}
            component="img"
            image='https://i.ibb.co/yqdncG0/Picsart-22-02-05-22-00-55-588www.jpg'
            alt="green iguana"
            
          />
       

      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          p: 1,
          bgcolor:'#112240',
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: '#64ffda',
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
              <img alt="Remy Sharp" style={{boxShadow : 3, width : 50, borderRadius : '50%'}} src="https://icon2.cleanpng.com/20180402/cjw/kisspng-mongodb-inc-computer-software-business-software-d-bay-leaves-5ac2915d780ea2.2723311115227006374918.jpg" />
              <img alt="Remy Sharp" style={{boxShadow : 3, width : 50, borderRadius : '50%'}} src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png" />
              <img alt="Remy Sharp" style={{boxShadow : 3, width : 50, borderRadius : '50%'}} src="https://w1.pngwing.com/pngs/885/534/png-transparent-green-grass-nodejs-javascript-react-mean-angularjs-logo-symbol.png" />
              <img alt="Remy Sharp" style={{boxShadow : 3, width : 50, borderRadius : '50%'}} src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" />
      </Box>
    </div>
  );
}