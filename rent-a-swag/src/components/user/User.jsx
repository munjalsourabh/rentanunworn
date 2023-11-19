import React, { useEffect, useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { useDispatch } from 'react-redux';
import { hideAuth, showAuth } from '../../features/auth/authSlice';
import { Button } from '@mui/material';

export function User () {

    let accessToken = localStorage.getItem('accessToken');

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [userName, setUserName] = useState('');
    const open = Boolean(anchorEl);
    const dispatch = useDispatch();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        dispatch(showAuth());
    };

    useEffect(() => {
        if (accessToken) {
            setUserName(' sourabh')
        }
    }, [accessToken])

    const opneAuth = () => {
        dispatch(showAuth())
    }

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

        <Button onClick={opneAuth} >Login/Register</Button>
    </div>
    )
}

