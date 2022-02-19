import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Facebook, GitHub, LinkedIn } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { HashLink, NavHashLink } from 'react-router-hash-link';

const pages = ['Home', 'Features', 'Portfolio','Resume','Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" sx={{backgroundColor : '#112240',color : '#64ffda', boxShadow: 0,border: '1px solid',
    borderColor: '#64ffda',
    borderRadius: 2,}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              sx={{color :'#64ffda'}}
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
             <HashLink style={{textDecoration : 'none'}} smooth to='#home' >
                <Typography 
                  sx={{ m: 2, color: '#64ffda', display: 'block' }}
                  >
                    Profile
                </Typography>
           </HashLink><br/>
           <HashLink style={{textDecoration : 'none'}} smooth to='#features'>
                <Typography 
                  sx={{ m: 2, color: '#64ffda', display: 'block' }}
                  >
                    Features
                </Typography>
           </HashLink><br/>
           <HashLink style={{textDecoration : 'none'}} smooth to='#portfolio'>
                <Typography 
                  sx={{ m: 2, color: '#64ffda', display: 'block' }}
                  >
                    Portfolio
                </Typography>
           </HashLink><br/>
            <HashLink style={{textDecoration : 'none'}} smooth to='#resume'>
                  <Typography 
                    sx={{ m: 2, color: '#64ffda', display: 'block' }}
                    >
                      Resume
                  </Typography>
            </HashLink><br/>
            <HashLink style={{textDecoration : 'none'}} smooth to='#contact'>
                  <Typography 
                    sx={{ m: 2, color: '#64ffda', display: 'block' }}
                    >
                      Contact
                  </Typography>
            </HashLink><br/>
            </Menu>
          </Box>
         
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
           <HashLink style={{textDecoration : 'none'}} smooth to='#home' color="#64ffda">
                <Typography 
                  sx={{ m: 2, color: '#64ffda', display: 'block' }}
                  >
                    Profile
                </Typography>
           </HashLink>
           <HashLink style={{textDecoration : 'none'}} smooth to='#features'>
                <Typography 
                  sx={{ m: 2, color: '#64ffda', display: 'block' }}
                  >
                    Features
                </Typography>
           </HashLink>
           <HashLink style={{textDecoration : 'none'}} smooth to='#portfolio'>
                <Typography 
                  sx={{ m: 2, color: '#64ffda', display: 'block' }}
                  >
                    Portfolio
                </Typography>
           </HashLink>
            <HashLink style={{textDecoration : 'none'}} smooth to='#resume'>
                  <Typography 
                    sx={{ m: 2, color: '#64ffda', display: 'block' }}
                    >
                      Resume
                  </Typography>
            </HashLink>
            <HashLink style={{textDecoration : 'none'}} smooth to='#contact'>
                  <Typography 
                    sx={{ m: 2, color: '#64ffda', display: 'block' }}
                    >
                      Contact
                  </Typography>
            </HashLink>
          </Box>
         
          <Box sx={{ flexGrow: 0 }}>
              <Link to=''>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 2,color:"#64ffda"}}>  
                <Facebook/>
              </IconButton>
              </Link>
              <Link to='https://www.HashLinkedin.com/in/shadmanalve/'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 2,color:"#64ffda"}}>
                <LinkedIn/>
              </IconButton>
              </Link>
              <Link to='https://github.com/Alve576  '>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 2,color:"#64ffda  "}}>
                <GitHub/>
              </IconButton>
              </Link>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;