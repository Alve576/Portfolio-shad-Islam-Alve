import Box from '@mui/material/Box';
import { Facebook, GitHub, LinkedIn } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const Footer = () => {
    return (
        <Box
            sx={{display: 'flex',
            mt : 10,
            border: '1px solid',
            borderColor: '#64ffda',
            borderRadius: 2,
            fontSize: '0.875rem',
            fontWeight: '700',
            color : '#64ffda',
            justifyContent: 'space-around',}}
        >
            <p>@2022 ALL RIGHT RESERVED</p>
            <p>MYPORTFOLIO</p>
            <p>
                <IconButton sx={{ color : '#64ffda',p: 0 }}>
                <Facebook/>
                </IconButton>
                <IconButton sx={{ color : '#64ffda',p: 0 }}>
                    <LinkedIn/>
                </IconButton>
                <IconButton sx={{ color : '#64ffda',p: 0 }}>
                    <GitHub/>
                </IconButton>
              </p>
        </Box>
    )
}



export default Footer;