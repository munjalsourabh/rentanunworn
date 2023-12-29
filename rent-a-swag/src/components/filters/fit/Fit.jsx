import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@mui/material';
import React, { useState } from 'react'
import { addFit, removeFit } from '../../../features/filters/filtersSlice';
import { useDispatch } from 'react-redux';

const Fit = () => {

    const dispatch = useDispatch();
    const handleFitChange = (event) => {
        event.target.checked ? dispatch(addFit(event.target.name)) : dispatch(removeFit(event.target.name));
    }

    return (
        <FormControl sx={{ m: 3 }} component="fieldset" size="small" className='filter-container'>
            <FormLabel component="legend">{'Fit'}</FormLabel>
            <FormGroup>
                <FormControlLabel
                    control={
                    <Checkbox onChange={handleFitChange} name="Tall" className="filter-item"/>
                }
                    label="Tall"
                />
                <FormControlLabel
                    control={
                    <Checkbox onChange={handleFitChange} name="Petite" className="filter-item"/>
                    }
                    label="Petite"
                />
                <FormControlLabel
                    control={
                        <Checkbox onChange={handleFitChange} name="Maternity" className="filter-item"/>
                    }
                    label="Maternity"
                />
                <FormControlLabel
                    control={
                        <Checkbox onChange={handleFitChange} name="Plus" className="filter-item"/>
                    }
                    label="Plus"
                />
            </FormGroup>
        </FormControl>
    )
}

export default Fit