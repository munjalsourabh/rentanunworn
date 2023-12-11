import { Typography } from '@mui/material'
import React from 'react'
import { Box } from '@mui/system';
import UserHelp from '../user-help/UserHelp';
import Content from '../rent-lend-content/Content';
import SiteCaption from '../site-caption/SiteCaption';
import Footer from '../footer/Footer';

const TopNavigation = () => {
    return (
        <div>
            <span className='navigation-links'>
                <li>{"New In"}</li>
                <li>{"Clothing"}</li>
                <li>{"Accessories"}</li>
                <li>{"Brands"}</li>
                <li>{"Occassion"}</li>
            </span> 
            <div className='center-content'>
                <Typography variant="caption" sx={{fontSize: '1.5rem', marginTop: 2}} gutterBottom>
                    {'Rent, Lend, Renew'}
                </Typography>
            </div>
            <div className='center-content'>
                <Box component="section" sx={{ p: 2, border: '1px solid grey', bgcolor: 'primary.main' }}>
                    {'15% off on your first order or 0% fees on your first lend'}
                </Box>
            </div>

            <UserHelp></UserHelp>

            <Content>
                
            </Content>

            <SiteCaption></SiteCaption>
            <Footer></Footer>
        </div>
    )
}

export default TopNavigation