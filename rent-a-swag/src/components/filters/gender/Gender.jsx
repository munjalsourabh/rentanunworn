import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { addGender, removeGender } from '../../../features/filters/filtersSlice';

const Gender = () => {
    const dispatch = useDispatch();
    const handleGenderChange = (event) => {    
            event.target.checked ?
                dispatch(addGender(event.target.name)) :
                dispatch(removeGender(event.target.name));
    }

    return (
        <FormControl sx={{ m: 3 }} component="fieldset" size="small" className='filter-container'>
            <FormLabel component="legend">{'Gender'}</FormLabel>
            <FormGroup>
                <FormControlLabel
                    control={
                    <Checkbox name="Men" className="filter-item" onChange={handleGenderChange}/>
                }
                    label="Men"
                />
                <FormControlLabel
                    control={
                    <Checkbox name="Women" className="filter-item" onChange={handleGenderChange}/>
                    }
                    label="Women"
                />
                <FormControlLabel
                    control={
                        <Checkbox name="Unisex" className="filter-item" onChange={handleGenderChange}/>
                    }
                    label="Unisex"
                />
            </FormGroup>
        </FormControl>
    )
}

export default Gender