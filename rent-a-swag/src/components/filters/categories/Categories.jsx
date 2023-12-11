import React from 'react'
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@mui/material'
import { addCategories, removeCategories } from '../../../features/filters/filtersSlice';
import { useDispatch } from 'react-redux';

const Categories = () => {
    const dispatch = useDispatch();
    const handleCategoriesChange = (event) => {
        event.target.checked ?
            dispatch(addCategories(event.target.name)) :
            dispatch(removeCategories(event.target.name));
    }

    return (
        <FormControl sx={{ m: 3 }} component="fieldset" size="small" className='filter-container'>
            <FormLabel component="legend">{'Categories'}</FormLabel>
            <FormGroup>
                <FormControlLabel
                    control={
                    <Checkbox name="Work" className="filter-item"  onChange={handleCategoriesChange}/>
                }
                    label="Work"
                />
                <FormControlLabel
                    control={
                    <Checkbox name="Night Out" className="filter-item"  onChange={handleCategoriesChange}/>
                    }
                    label="Night Out"
                />
                <FormControlLabel
                    control={
                        <Checkbox name="Holiday" className="filter-item"  onChange={handleCategoriesChange}/>
                    }
                    label="Holiday"
                />
                <FormControlLabel
                    control={
                        <Checkbox name="Wedding Guest" className="filter-item"  onChange={handleCategoriesChange}/>
                    }
                    label="Wedding Guest"
                />
                <FormControlLabel
                    control={
                        <Checkbox name="Casual" className="filter-item"  onChange={handleCategoriesChange}/>
                    }
                    label="Casual"
                />
            </FormGroup>
        </FormControl>
    )
}

export default Categories