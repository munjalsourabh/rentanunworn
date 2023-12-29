import React from 'react'
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@mui/material'
import { addOccasssion, removeOccassion } from '../../../features/filters/filtersSlice';
import { useDispatch } from 'react-redux';

const Occassion = () => {
    const dispatch = useDispatch();
    const handleOccassionChange = (event) => {
        event.target.checked ?
            dispatch(addOccasssion(event.target.name)) :
            dispatch(removeOccassion(event.target.name));
    }

    return (
        <FormControl sx={{ m: 3 }} component="fieldset" size="small" className='filter-container'>
            <FormLabel component="legend">{'Occassion'}</FormLabel>
            <FormGroup>
                <FormControlLabel
                    control={
                    <Checkbox name="Work" className="filter-item"  onChange={handleOccassionChange}/>
                }
                    label="Work"
                />
                <FormControlLabel
                    control={
                    <Checkbox name="Night Out" className="filter-item"  onChange={handleOccassionChange}/>
                    }
                    label="Night Out"
                />
                <FormControlLabel
                    control={
                        <Checkbox name="Holiday" className="filter-item"  onChange={handleOccassionChange}/>
                    }
                    label="Holiday"
                />
                <FormControlLabel
                    control={
                        <Checkbox name="Wedding Guest" className="filter-item"  onChange={handleOccassionChange}/>
                    }
                    label="Wedding Guest"
                />
                <FormControlLabel
                    control={
                        <Checkbox name="Casual" className="filter-item"  onChange={handleOccassionChange}/>
                    }
                    label="Casual"
                />
            </FormGroup>
        </FormControl>
    )
}

export default Occassion