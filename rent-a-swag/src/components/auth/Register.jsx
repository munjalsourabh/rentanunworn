import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { useSignUpMutation } from '../../features/apiSlice';
import './Register.scss'
import { Typography, stepLabelClasses } from '@mui/material';
import { showAlert } from '../../features/alert/alertSlice';


export function Register({setShowRegister}) {

    const [showPassword, setShowPassword] = React.useState(false);

    const dispatch = useDispatch()

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const [signUp, { data, isSuccess: isMutationSuccess }] = useSignUpMutation()

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [fNameObj, setFnameObj] = useState({
        value: '',
    })

    const [lNameObj, setLNameObj] = useState({
        value: '',
    })

    const [email, setEmail] = useState('')

    const EMAIL_REGEX = /^[^@]+@[^.]+[.].+$/;

    const [password, setPassword] = useState('');

    const [confirmPassword, setConfirmPassword] = useState('');

    const isFormValid = () => {
        return (fNameObj.value && lNameObj.value && EMAIL_REGEX.test(email) && password === confirmPassword)
    }

    const validateAndSaveForm = () => {
        if (isFormValid) {
            signUp({
                "firstName": fNameObj.value,
                "lastName": lNameObj.value,
                "email": email,
                "password": password
            })
        }
    }



    useEffect(() => {
        if (isMutationSuccess) {
            dispatch(showAlert('Registration successful, please Login to continue'));
        }
    }, [isMutationSuccess])

    return (
    <div className='registration-form'>
        <Typography variant="h4" color="#59ab6e" sx={{p:4}}>Register</Typography>

        <div className='name-container'>
            <FormControl sx={{  }}>
                <TextField id="firstName" label="First Name" variant="standard"
                    value={fNameObj.value} error={!fNameObj.value.length} onChange={(e) => setFnameObj({...fNameObj, value: e.target.value})} />
            </FormControl>
            <FormControl sx={{ pl: 5  }}>
                <TextField id="lastName" label="Last Name" variant="standard" 
                    value={lNameObj.value} error={!lNameObj.value.length} onChange={(e) => setLNameObj({...lNameObj, value: e.target.value})} />
            </FormControl>
        </div>
    

        <FormControl fullWidth sx={{ m: 1, width: '90%', pt: 2 }} variant="standard">
            <InputLabel htmlFor="standard-adornment-amount" error={!EMAIL_REGEX.test(email)}>Email</InputLabel>
            <Input
                id="username"
                error={!EMAIL_REGEX.test(email)}
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                type={'email'}
                startAdornment={<InputAdornment position="start">@</InputAdornment>}
            />
        </FormControl>

        <FormControl sx={{ m: 1, width: '90%' }} variant="standard">
            <InputLabel htmlFor="filled-adornment-password" error={password.length == 0}>Password</InputLabel>
            <FilledInput
                autoComplete="off"
                error={password.length == 0}
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
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
            <InputLabel htmlFor="filled-adornment-password" error={confirmPassword.length === 0}>Confirm Password</InputLabel>
            <FilledInput
                autoComplete="off"
                error={confirmPassword.length == 0 || confirmPassword !== password}
                onChange={(e) => {
                    setConfirmPassword(e.target.value)
                }}
                endAdornment={
                <InputAdornment position="end">
                    
                </InputAdornment>
                }
            />
        </FormControl>

        <div className='submit-button-container'>    
            <Button variant="contained"
                onClick={validateAndSaveForm}
                sx={{
                ':hover': {
                bgcolor: 'primary.main', // theme.palette.primary.main
                color: 'white',
                },
            }}>Register</Button>
        </div>
        <div>
            {'Already a member ? '} <span className='navigate' onClick={() => setShowRegister(false)}>Login</span>
        </div>
    </div>
    ) 
}
