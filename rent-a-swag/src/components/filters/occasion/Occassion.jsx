import React from 'react'
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@mui/material'
import { useDispatch } from 'react-redux'
import { addOccasssion, removeOccassion } from '../../../features/filters/filtersSlice';

const Occassion = () => {
    const dispatch = useDispatch();
    const  handleOccassionChange = (event) => {
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
                    <Checkbox name="Dresses" className="filter-item" onChange={handleOccassionChange}/>
                }
                    label="Dresses"
                />
                <FormControlLabel
                    control={
                    <Checkbox name="Jewellery" className="filter-item" onChange={handleOccassionChange}/>
                    }
                    label="Jewellery"
                />
                <FormControlLabel
                    control={
                        <Checkbox name="Handbags" className="filter-item" onChange={handleOccassionChange}/>
                    }
                    label="Handbags"
                />
                <FormControlLabel
                    control={
                        <Checkbox name="handbags" className="filter-item" onChange={handleOccassionChange}/>
                    }
                    label="Handbags"
                />
                <FormControlLabel
                    control={
                        <Checkbox name="Tops" className="filter-item" onChange={handleOccassionChange}/>
                    }
                    label="Tops"
                />
                <FormControlLabel
                    control={
                        <Checkbox name="Bottoms" className="filter-item" onChange={handleOccassionChange}/>
                    }
                    label="Bottoms"
                />
                <FormControlLabel
                    control={
                        <Checkbox name="Jackets & Coats" className="filter-item" onChange={handleOccassionChange}/>
                    }
                    label="Jackets & Coats"
                />
                <FormControlLabel
                    control={
                        <Checkbox name="Shoes" className="filter-item" onChange={handleOccassionChange}/>
                    }
                    label="Shoes"
                />
            </FormGroup>
        </FormControl>
    )
}

export default Occassion