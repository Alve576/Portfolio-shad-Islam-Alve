import { Button, TextField,Typography } from "@mui/material";


const FromField = () => {
    return (
        <form
         onSubmit=''
         > 
            <Typography variant='h5' color='#64ffda'>Want give me message ? </Typography>
            <TextField
                id="outlined-multiline-flexible"
                label="Name"
                multiline
                maxRows={4}
                sx={{
                    m : 2,
                    color:"#64ffda" 
                }}
                focused
                />
            <TextField
                id="outlined-multiline-flexible"
                label="Email"
                multiline
                maxRows={4}
                sx={{
                    m : 2,
                    color:"#64ffda" 
                }}
                focused
                /><br/>
            <TextField
                id="outlined-multiline-flexible"
                label="Phone"
                multiline
                maxRows={4}
                sx={{
                    m : 2,
                    color:"#64ffda" 
                }}
                focused
                />
            <TextField
                id="outlined-multiline-flexible"
                label="Adress"
                multiline
                maxRows={4}
                sx={{
                    m : 2,
                    color:"#64ffda" 
                }}
                focused
                /><br/>
            <TextField sx={{m : 2, width : '25%',color:"#64ffda"}}  label="Write Us"  focused /><br/>
            <Button sx={{m : 2,bgcolor:"#64ffda"}}  type='submit' variant="contained" >Submit</Button>
        </form>
    )
}



export default FromField;