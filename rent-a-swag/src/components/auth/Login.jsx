import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import { useSelector } from 'react-redux';
import Paper from '@mui/material/Paper';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import HighlightOffSharpIcon from '@mui/icons-material/HighlightOffSharp';
import Button from '@mui/material/Button';


import './Login.scss'
import { Typography, useRadioGroup } from '@mui/material';
import { Register } from './Register';

import { useDispatch } from 'react-redux';
import { hideAuth } from '../../features/auth/authSlice';

const ecoGreen = require('../../../src/assets/login.png');


export const Login = () => {
    const showLogin = useSelector((state) => state.authentication.showAuth);
    const [showPassword, setShowPassword] = React.useState(false);
    const [showRegister, setShowRegister] = useState(false)
    const dispatch = useDispatch();

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const containerRef = React.useRef(null);
    return (
        <>
            {showLogin && (
                <div className="login-container">                    
                    <Box sx={{ display: 'flex', flexDirection:'column', p: 2, overflow: 'hidden', width: '70%' ,height: '80%', }} ref={containerRef}>
                        <Paper elevation={3} sx={{height: '100%'}}>
                            <span className='close-auth'><HighlightOffSharpIcon onClick={() => dispatch(hideAuth())}></HighlightOffSharpIcon></span>
                            <Slide in={showLogin} container={containerRef.current}>
                                <div className='auth-main-container'>
                                    <div className='main-logo-container'>
                                        <img src={ecoGreen} alt="" className='' />
                                    </div>

                                        {!showRegister ? (<div className='login-form'>
                                            <Typography variant="h4" color="#59ab6e" sx={{p:4}}>Login</Typography>
                                            <FormControl fullWidth sx={{ m: 1, width: '90%' }} variant="standard">
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
                                            <div className='submit-button-container'>    
                                                <Button variant="contained" sx={{
                                                    ':hover': {
                                                    bgcolor: 'primary.main', // theme.palette.primary.main
                                                    color: 'white',
                                                    },
                                                }}>Submit</Button>
                                            </div>

                                            <div className='register-link'>
                                                {"Not having an account "} <a  className="" href={() => null}
                                                onClick={() => setShowRegister(true)}>Register</a>
                                            </div>
                                        </div>) :
                                            (
                                                <Register />
                                            )
                                        }
                                </div>
                            </Slide>
                        </Paper>
                    </Box>
                </div>
            )}
            
        </>
    )
}