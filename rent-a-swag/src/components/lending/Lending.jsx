import { Button, Typography } from '@mui/material'
import React from 'react'
import ProductCard from '../product-card/ProductCard';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import './Lending.scss'


const Lending = () => {
    return (
        <div className='main-layout'>
            <fieldset className='renting-container'>
                <legend>Renting</legend>
                <Typography variant='h6' className='renting-headings'>{'My Lends'}</Typography>

                <div className='my-lending-cards'>
                    <ProductCard brand='Gucci' productImageUrl={'https://fashionapp-bucket.s3.eu-north-1.amazonaws.com/gucci_cap.png'} rentPrice={60} rrp={3000} />
                    <ProductCard brand='Nike' productImageUrl={'https://fashionapp-bucket.s3.eu-north-1.amazonaws.com/nike_camo_r.png'} rentPrice={60} rrp={3000} />
                    <ProductCard brand='Asos' productImageUrl={'https://fashionapp-bucket.s3.eu-north-1.amazonaws.com/asos_r.png'} rentPrice={60} rrp={3000} />
                    <ProductCard brand='Asos' productImageUrl={'https://fashionapp-bucket.s3.eu-north-1.amazonaws.com/asos_r.png'} rentPrice={60} rrp={3000} />
                </div>
                <div className='dates-lend'>
                    <div className='dates-hired'>
                            <Typography variant='h6' className='renting-headings'>{'Availability'}</Typography>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker  />
                                </DemoContainer>
                            </LocalizationProvider>
                    </div>
                    <div className='earnings'>
                        <div className=''>
                            <div className='flex-row-center'>
                                <Typography variant='h6' className='renting-headings'>{'Your Earnings'}</Typography>    
                            </div>
                            <div className='flex-row-center'>{'$75'}</div>
                        </div>
                        <div className='list-item-button'>
                            <Button sx={{
                                ':hover': {
                                bgcolor: 'primary.main', // theme.palette.primary.main
                                color: 'white',
                                },
                            }}>List an Item</Button>
                        </div>
                    </div>
                </div>

            </fieldset>
        </div>
    )
}

export default Lending