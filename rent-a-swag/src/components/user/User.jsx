import React, { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { useDispatch } from 'react-redux';
import { hideAuth, showAuth } from '../../features/auth/authSlice';

export function User () {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const dispatch = useDispatch();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        dispatch(showAuth());
    };

    return (
    <div>
        <PersonIcon onClick={handleClick}></PersonIcon>
        <Menu
        id="user-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
            'aria-labelledby': 'basic-button',
        }}
        >
            <MenuItem onClick={handleClose}>Login/Register</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
        </Menu>
    </div>
    )
}

