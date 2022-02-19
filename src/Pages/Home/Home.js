import Navbar from './../../Componants/SharedCompo/Navbar/Navbar';
import Main from './../../Componants/Main/Main'
import Section from '../../Componants/Section/Section';
import Footer from '../../Componants/SharedCompo/Footer/Footer';
import Contact from './../Contact/Contact';
import Resume from './../Resume/Resume'
import { Box } from '@mui/material';
const Home = () => {
    return ( 
        <Box sx={{bgcolor : '#112240'}} className='App'>
            <Navbar/>
            <Main/>
            <Resume/>
            <Section/>
            <Contact/>
            <Footer/>
        </Box >
    )

}


export default Home;