import { Box, Slider, Typography } from '@mui/material'
import React from 'react'
import { addPriceRange } from '../../../features/filters/filtersSlice';
import { useDispatch } from 'react-redux';

const PriceRange = () => {
    function valuetext(value) {
        return `${value} $`;
    }

    const dispatch = useDispatch();

    const minDistance = 10;
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

    const [value1, setValue1] = React.useState([200, 400]);

    const handleChange1 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }
    
        if (activeThumb === 0) {
            setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
        } else {
            setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
        }
        dispatch(addPriceRange(value1));
    };

    return (
        <div className='price-range'>
            <Typography variant='outlined'>Price Range</Typography>
            {/* <Slider sx={{width: '80%' }} defaultValue={2} getAriaValueText={() => (10)}
                onChange={updatePriceFilter}
                min={0} step={100} max={1000} marks={marks}
                aria-label="Default" valueLabelDisplay="auto" /> */}

            <Box sx={{ width: 200 }}>
                <Slider
                    getAriaLabel={() => 'Minimum distance'}
                    value={value1}
                    min={0} step={100} max={1000} marks={marks}
                    onChange={handleChange1}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    disableSwap
                    />
            </Box>
        </div>

    )
}

export default PriceRange