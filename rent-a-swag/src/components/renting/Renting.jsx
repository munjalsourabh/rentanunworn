import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import ProductCard from '../product-card/ProductCard';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


import './Renting.scss'
import { useGetRenterMutation } from '../../features/apiSlice';

const Renting = () => {
    const [getRenter, {data, isSuccess}] = useGetRenterMutation()
    useEffect(() => {
        getRenter().then((r) => {
            console.log('responseee ', r);
        });
    }, []);

    useEffect(() => {
        console.log('data   dd', data);
    }, [data])


    return (
        <div className='main-layout'>
            <fieldset className='renting-container'>
                <legend>Renting</legend>
                <Typography variant='h6' className='renting-headings'>{'My Rentals'}</Typography>
                <div className='my-rentals-cards'>
                    {data && data.length && data.map(({imageUrl, rentPrice, rrp}) => (
                        <ProductCard brand='Gucci' productImageUrl={imageUrl[0]} rentPrice={rentPrice} rrp={rrp} />
                    ))}
                </div>

                <div className='renting-info'>
                    <div className='dates-hired'>
                        <Typography variant='h6' className='renting-headings'>{'Dates Pending'}</Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker  />
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>
                    <div className='returns-info'>
                        <Typography variant='h6' className='renting-headings'>{'Returns Due'}</Typography>


                        <FormControl sx={{ m: 3 }} component="fieldset" size="small" className='filter-container'>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                    <Checkbox name="Gucci Hat" className="filter-item"/>
                                }
                                    label="Gucci Hat"
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                    <Checkbox name="Sabyasachi Saree" className="filter-item"/>
                                }
                                    label="Sabyasachi Saree"
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                    <Checkbox name="Fendi Bag" className="filter-item"/>
                                }
                                    label="Fendi Bag"
                                />
                            </FormGroup>
                        </FormControl>
                    </div>

                </div>
            </fieldset>
        </div>
    )
}

export default Renting