import { Button, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import ProductCard from '../product-card/ProductCard';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import './Lending.scss'
import { useGetLendingsMutation } from '../../features/apiSlice';


const Lending = () => {
    const [getLendings, {data, isMutation}] = useGetLendingsMutation();

    useEffect(() => {
        getLendings();
    }, [])

    return (
        <div className='main-layout'>
            <fieldset className='lending-container'>
                <legend>Lending</legend>
                <Typography variant='h6' className='renting-headings'>{'My Lends'}</Typography>

                <div className='my-lending-cards'>
                    {data && data.length && data.map((attributes) => (
                        <ProductCard attributes={attributes} ></ProductCard>
                    ))}
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