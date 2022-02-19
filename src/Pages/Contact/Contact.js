import { Box, Container, IconButton, Typography } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Paper from '@mui/material/Paper';
import Map from '../../Componants/Map/Map';
import FromField from '../../Componants/FromField/FromField';

const Contact = () => {

    return (
            <Box sx={{
                    height : '100vh',
                    bgcolor : "#112240",
                    color:'#64ffda',
                    mt : 5,
                    border: '1px solid',
                    borderColor:'#64ffda',
                    borderRadius: 2,
                    fontSize: '0.875rem',
                    fontWeight: '700',
                    mb : 5,
                    textAlign : 'center'}} id="contact">
                    <Typography variant='h3'>Contact Me</Typography>
                    <Container sx={{display :'flex',
                    alignItems : 'center',
                    justifyContent : 'space-between',mt : 5}}>
                        
                    <Map/>
                    <FromField/>
                    </Container>
                    <Container
                            sx={{
                                display :'flex',
                                alignItems : 'center',
                                justifyContent : 'space-between',
                                textAlign : 'center',
                                '& > :not(style)': {
                                mt: 5,
                                width: 128,
                                height: 128,
                                },
                            }}
                            >
                            <Box>
                                <IconButton sx={{ p: 2,color : "#64ffda"}}>
                                    <LocationOnOutlinedIcon/>
                                </IconButton>
                                    <h4>Dhaka,Bangladesh</h4>
                            </Box>
                            <Box>
                                <IconButton sx={{ p: 2,color:"#64ffda"}}>
                                    <CallOutlinedIcon/>
                                </IconButton>
                                    <h4>01995595975</h4>
                            </Box>
                                <Box>
                                <IconButton sx={{ p: 2,color: "#64ffda"}}>
                                    <EmailOutlinedIcon/>
                                </IconButton>
                                    <h4>shadman@gmail.com</h4>
                            </Box>   
                            <Box>
                                <IconButton sx={{ p: 2,color: "#64ffda"}}>
                                    <FacebookOutlinedIcon/>
                                </IconButton>
                                    <h4>facebook.com</h4>
                            </Box>
                            </Container>
            </Box>
        )
}




export default Contact;