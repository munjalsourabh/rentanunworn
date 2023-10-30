import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';


import './Register.scss'
import { Typography } from '@mui/material';

export const Register = () => {

    const showLogin = useSelector((state) => state.authentication.showAuth);
    const [showPassword, setShowPassword] = React.useState(false);
    const [showRegister, setShowRegister] = useState(false)

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    

    return (
    <div className='registration-form'>
        <Typography variant="h4" color="#59ab6e" sx={{p:4}}>Register</Typography>

        <div className='name-container'>
            <FormControl sx={{  }}>
                <TextField id="firstName" label="First Name" variant="standard" />
            </FormControl>
            <FormControl sx={{ pl: 5  }}>

                <TextField id="lastName" label="Last Name" variant="standard" />
            </FormControl>
        </div>
    

        <FormControl fullWidth sx={{ m: 1, width: '90%', pt: 2 }} variant="standard">
            <InputLabel htmlFor="standard-adornment-amount">Email</InputLabel>
            <Input
                id="username"
                startAdornment={<InputAdornment position="start">@</InputAdornment>}
            />
        </FormControl>

        <FormControl sx={{ m: 1, width: '90%' }} variant="standard">
            <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
            <FilledInput
                autoComplete="off"
                id="login-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
                }
            />
        </FormControl>

        <FormControl sx={{ m: 1, width: '90%' }} variant="standard">
            <InputLabel htmlFor="filled-adornment-password">Confirm Password</InputLabel>
            <FilledInput
                autoComplete="off"
                id="login-password"
                endAdornment={
                <InputAdornment position="end">
                    
                </InputAdornment>
                }
            />
        </FormControl>

        <div className='submit-button-container'>    
            <Button variant="contained" sx={{
                ':hover': {
                bgcolor: 'primary.main', // theme.palette.primary.main
                color: 'white',
                },
            }}>Register</Button>
        </div>
    </div>
    ) 
}