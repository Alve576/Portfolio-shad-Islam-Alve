
import { Box } from '@mui/material';
import Card from './../Card/Card'

 const Section = () => {
    return (
        <Box
        id="portfolio"
        sx={{
          p: 1,
          bgcolor: '#112240',
          color: '#64ffda',
          border: '1px solid',
          borderColor: '#64ffda',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          textAlign : 'center',
        }}
      >
            <h1>My Projects</h1>
            <Card/>
        </Box>
    )

}



export default Section;