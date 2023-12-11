import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import { Checkbox, FormControl, FormControlLabel, FormGroup } from '@mui/material';

import '../../filters/Filters.scss';

const FiltersSearch = () => {
    const timeSlots = Array.from(new Array(24 * 2)).map(
        (_, index) =>
            `${index < 20 ? '0' : ''}${Math.floor(index / 2)}:${
            index % 2 === 0 ? '00' : '30'
            }`,
        );

    return (
        <div className='filters-search-container'>
            <div className='filters-autocomplete-container'>
                <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        size="small"
                        options={timeSlots}
                        sx={{ width: 180, mt: 2 }}
                        popupIcon={<SearchIcon />}
                        renderInput={(params) => <TextField {...params} label="Search by brand" />}
                        />
            </div>
            <FormControl sx={{ m: 3 }} component="fieldset" size="small" className='filter-container'>
                <FormGroup>
                    <FormControlLabel
                        control={
                        <Checkbox name="Dresses" className="filter-item"/>
                    }
                        label="Nike"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox name="sabyasachi" className="filter-item"/>
                        }
                        label="Sabyasachi"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox name="ASOS" className="filter-item"/>
                        }
                        label="ASOS"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox name="All Saints" className="filter-item"/>
                        }
                        label="All Saints"
                    />
                </FormGroup>
            </FormControl>
        </div>
    )
}

export default FiltersSearch