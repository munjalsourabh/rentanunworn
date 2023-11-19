import React, { useEffect, useState } from 'react';
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
import { Typography } from '@mui/material';
import { Register } from './Register';

import { useDispatch } from 'react-redux';
import { hideAuth } from '../../features/auth/authSlice';
import { useLoginMutation } from '../../features/apiSlice';
import { showAlert } from '../../features/alert/alertSlice';

const ecoGreen = require('../../../src/assets/login.png');

export const Login = () => {
    const showLogin = useSelector((state) => state.authentication.showAuth);
    const [showPassword, setShowPassword] = React.useState(false);
    const [showRegister, setShowRegister] = useState(false)
    const dispatch = useDispatch();

    const [login, {data, isSuccess: isMutationSuccess}] = useLoginMutation();

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const containerRef = React.useRef(null);

    const loginUser = () => {
        const email = document.getElementById('username').value;
        const password = document.getElementById('login-password').value;
        login({email, password});
    }

    useEffect(() => {
        if (isMutationSuccess) {
            console.log('succ mutation')
            dispatch(showAlert('Login Success'));
            localStorage.setItem('accessToken', data['accessToken'])
        }
    }, [ isMutationSuccess])

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
                                                <Button variant="contained" onClick={loginUser} sx={{
                                                    ':hover': {
                                                    bgcolor: 'primary.main', // theme.palette.primary.main
                                                    color: 'white',
                                                    },
                                                }}>Login</Button>
                                            </div>

                                            <div className='register-link'>
                                                {"Not having an account "} <a  className="" href={() => null}
                                                onClick={() => setShowRegister(true)}><span className='navigate'>Register</span></a>
                                            </div>
                                        </div>) :
                                            (
                                                <Register setShowRegister={setShowRegister}/>
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