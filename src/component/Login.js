import React, { useState } from "react";
import { Typography ,Grid, Paper, Avatar, TextField,Button ,Link } from "@mui/material";
import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded';
import { Link as RouterLink } from "react-router-dom";
import '../App.css';


const Login = () => {
    const paperStyle = { padding:40, height: '75vh', width: 280,margin:"40px auto ", backgroundColor: '#F8FFF9'};
    const avatarStyle = { backgroundColor: '#66b9bf' };
    const btnstyle = { margin:'8px 0px'};
    const Fieldkstyle = { margin:'8px 0px'}
    

    return (
        <Grid className="background-gradient"> {/* Apply the CSS class here */}
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <LockOpenRoundedIcon />
                    </Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField id="UserNAme" label="First Name" variant="filled" style={Fieldkstyle} fullWidth required />
                <TextField id="Password" label="Enter Password" variant="filled" type='password' fullWidth required />
                <Button type="submit" color="primary" variant='contained' style={btnstyle} fullWidth>Sign In</Button>
                <Typography>
                <Link href="#basics">Forgot Password?</Link>
                </Typography>
                <Typography>
                    Do you have an Account?
                    <RouterLink to="/signup"> Sign up</RouterLink>
                </Typography>
            </Paper>
        </Grid>
    );
};

export default Login;
