import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react';
import './Location.scss';

const Location = () => {
    const [distance, setDistance] = useState('');

    const handleChange = (event) => {
        setDistance(event.target.value);
    };
    return (
    <div className='location-container'>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Radius</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={distance}
            label="Age"
            onChange={handleChange}
        >
            <MenuItem value={10}>10 miles</MenuItem>
            <MenuItem value={25}>25 miles</MenuItem>
            <MenuItem value={50}>50 miles</MenuItem>
            <MenuItem value={100}>100 miles</MenuItem>
            <MenuItem value={500}>500 miles</MenuItem>
            <MenuItem value={1000}>1000 miles</MenuItem>
        </Select>
        </FormControl>
    </div>
    )
}

export default Location