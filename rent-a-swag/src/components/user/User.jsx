import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { showAuth } from '../../features/auth/authSlice';
import { Button, Typography } from '@mui/material';
import { useGetUserMutation } from '../../features/apiSlice';

export function User () {

    let accessToken = localStorage.getItem('accessToken');

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [getUser, {data: userData}] = useGetUserMutation();
    const open = Boolean(anchorEl);
    const dispatch = useDispatch();    

    const opneAuth = () => {
        dispatch(showAuth())
    }

    useEffect(() => {
        window.addEventListener('storage', () => {
            if (localStorage.getItem('accessToken')) {
                getUser();
            }
        });
    }, [])
    return (
    <div>
        {/* <PersonIcon onClick={handleClick}></PersonIcon>
        <Menu
        id="user-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
            'aria-labelledby': 'basic-button',
        }}
        >

            {userName ? <MenuItem onClick={handleClose}>{userName}</MenuItem> : <MenuItem onClick={handleClose}>Login/Register</MenuItem>}
            <MenuItem onClick={handleClose}>My account</MenuItem>
        </Menu> */}
        {userData ?
        (
            <Typography variant="overline">
                {userData.firstName}
            </Typography>
        ) : (
            <Button onClick={opneAuth} >Login/Register</Button>
        )}
    </div>
    )
}

