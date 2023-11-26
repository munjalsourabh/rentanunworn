import React from 'react'
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

import './ForgotPassword.scss'


const ForgotPassword = ({redirectLogin}) => {
    return (
        <div className='forgot-password-form'>
            <Typography variant="h4" color="#59ab6e" sx={{p:4}}>Login</Typography>
            <FormControl fullWidth sx={{ m: 1, width: '90%' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-amount">Email</InputLabel>
                <Input
                    id="username"
                    startAdornment={<InputAdornment position="start">@</InputAdornment>}
                />
            </FormControl>
            <div className='submit-button-container'>    
                <Button variant="contained" sx={{
                    ':hover': {
                    bgcolor: 'primary.main', // theme.palette.primary.main
                    color: 'white',
                    },
                }}>Get new password</Button>
            </div>

            <div className='register-link'>
                <a  className="" href={() => null}><span className='navigate' onClick={redirectLogin}>Login</span></a>
            </div>
        </div>
        )}

export default ForgotPassword
