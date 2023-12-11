import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { showAuth } from '../../features/auth/authSlice';
import { Button, Menu, MenuItem } from '@mui/material';
import { useGetUserMutation } from '../../features/apiSlice';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import './User.scss'

export function User () {
    const [anchorEl, setAnchorEl] = useState(null);
    const [getUser, {data: userData}] = useGetUserMutation();
    const open = Boolean(anchorEl);
    const dispatch = useDispatch();    

    const opneAuth = () => {
        dispatch(showAuth())
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        window.addEventListener('storage', () => {
            if (localStorage.getItem('accessToken')) {
                getUser();
            }
        });
        if (localStorage.getItem('accessToken')) {
            getUser();
        }
    }, [])
    return (
    <div>
    {   userData ? <>
        <div className='action-icons'>
            <PersonOutlineOutlinedIcon onClick={handleClick}></PersonOutlineOutlinedIcon>
            <FavoriteBorderOutlinedIcon onClick={handleClick}></FavoriteBorderOutlinedIcon>
            <ShoppingCartOutlinedIcon onClick={handleClick}></ShoppingCartOutlinedIcon>
        </div>
        <Menu
        id="user-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
            'aria-labelledby': 'basic-button',
        }}
        >

            {userData ? <MenuItem onClick={handleClose}>{userData.firstName}</MenuItem> : <MenuItem onClick={handleClose}>Login/Register</MenuItem>}
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Inbox</MenuItem>
            <MenuItem onClick={handleClose}>Renting</MenuItem>
            <MenuItem onClick={handleClose}>Lending</MenuItem>
            <MenuItem onClick={handleClose}>Wardrobe</MenuItem>
            <MenuItem onClick={handleClose}>Fashion Footprint</MenuItem>
        </Menu> </> :
        <Button onClick={opneAuth} >Login/Register</Button>}
    </div>
    )
}

