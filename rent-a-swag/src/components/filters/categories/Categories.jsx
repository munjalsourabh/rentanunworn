import React from 'react'
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@mui/material'
import { useDispatch } from 'react-redux'
import { addCategories, removeCategories } from '../../../features/filters/filtersSlice';

const Categories = () => {
    const dispatch = useDispatch();
    const  handleCategoriesChange = (event) => {
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
                    <Checkbox name="Dresses" className="filter-item" onChange={handleCategoriesChange}/>
                }
                    label="Dresses"
                />
                <FormControlLabel
                    control={
                    <Checkbox name="Jewellery" className="filter-item" onChange={handleCategoriesChange}/>
                    }
                    label="Jewellery"
                />
                <FormControlLabel
                    control={
                        <Checkbox name="Handbags" className="filter-item" onChange={handleCategoriesChange}/>
                    }
                    label="Handbags"
                />
                <FormControlLabel
                    control={
                        <Checkbox name="handbags" className="filter-item" onChange={handleCategoriesChange}/>
                    }
                    label="Handbags"
                />
                <FormControlLabel
                    control={
                        <Checkbox name="Tops" className="filter-item" onChange={handleCategoriesChange}/>
                    }
                    label="Tops"
                />
                <FormControlLabel
                    control={
                        <Checkbox name="Bottoms" className="filter-item" onChange={handleCategoriesChange}/>
                    }
                    label="Bottoms"
                />
                <FormControlLabel
                    control={
                        <Checkbox name="Jackets & Coats" className="filter-item" onChange={handleCategoriesChange}/>
                    }
                    label="Jackets & Coats"
                />
                <FormControlLabel
                    control={
                        <Checkbox name="Shoes" className="filter-item" onChange={handleCategoriesChange}/>
                    }
                    label="Shoes"
                />
            </FormGroup>
        </FormControl>
    )
}

export default Categories