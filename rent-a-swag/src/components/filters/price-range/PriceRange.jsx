import { Slider, Typography } from '@mui/material'
import React from 'react'
import { addPriceRange } from '../../../features/filters/filtersSlice';
import { useDispatch } from 'react-redux';

const PriceRange = () => {
    const dispatch = useDispatch();
    const marks = [
        {
            value: 0,
            label: '0$',
        },
        {
            value: 1000,
            label: '1000$',
        },
    ];

    const updatePriceFilter = (event, value) => {
        dispatch(addPriceRange(value));
    }
    return (
        <div className='price-range'>
            <Typography variant='outlined'>Price Range</Typography>
            <Slider sx={{width: '80%' }} defaultValue={2} getAriaValueText={() => (10)}
                onChange={updatePriceFilter}
                min={0} step={100} max={1000} marks={marks}
                aria-label="Default" valueLabelDisplay="auto" />
        </div>

    )
}

export default PriceRange