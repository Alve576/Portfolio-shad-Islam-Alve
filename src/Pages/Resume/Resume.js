import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import './style.css'
export default function Resume() {
  const theme = useTheme();

  return (
    <Card style={{backgroundColor : "transparent",border:"1px solid #64ffda"}}>
      <Box sx={{ 
          backgroundImage : "url('https://i.ibb.co/khsD22q/SHAD-ISLAM-ALVEE-2.png')",
          display: 'flex',
          flexDirection: 'column',
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          display: "flex",
          backgroundPosition: "center",
          alignItems : "center",
          justifyContent : "center"
    }}>
        
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          
          <IconButton aria-label="play/pause">
            <button className="text"><a style={{color :'#64ffda'}} href='https://drive.google.com/file/d/15nKkErQw8iWiG3qRMnkVMNeFiDsggAl2/view?usp=sharing'>Resume</a></button>
          </IconButton>
          
        </Box>
      </Box>
    </Card>
  );
}






