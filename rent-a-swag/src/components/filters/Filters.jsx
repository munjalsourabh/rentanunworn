import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, IconButton, Slider, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FiltersSearch from './filters-search/FiltersSearch';
import ClothesShoesFilter from './clothes-shoes-filter/ClothesShoesFilter';
import Calendar from './datapicker/Calendar';


import './Filters.scss'
import Location from './location/Location';
import PriceRange from './price-range/PriceRange';
import { addCategories, removeCategories, setCategories } from '../../features/filters/filtersSlice';
import Categories from './categories/Categories';
import Occassion from './occasion/Occassion';

const Filters = () => {

    const location = useSelector(state => state.location);

    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const dispatch = useDispatch();

    const [fit, setFit] = useState({
        'Tall': false,
        'Petite': false,
        'Maternity': false,
        'Plus': false,
    })


    const toggleDrawer = (anchor, open) => (event) => {
        if (
        event &&
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
        ) {
        return;
        }

        setState({ ...state, [anchor]: open });
    };

    useEffect(() => {
        console.log('location ', location);
    }, [location])

    const list = (anchor) => (
        <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        >
            <Categories></Categories>

            <Divider></Divider>

            <Occassion></Occassion>

            <Divider></Divider>

            <FormControl sx={{ m: 3 }} component="fieldset" size="small" className='filter-container'>
                <FormLabel component="legend">{'Fit'}</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={
                        <Checkbox checked={fit['Tall']} onChange={(event) => {setFit({...fit, 'Tall': event.target.checked })}} name="Tall" className="filter-item"/>
                    }
                        label="Tall"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox checked={fit['Petite']} onChange={(event) => {setFit({...fit, 'Petite': event.target.checked })}} name="Petite" className="filter-item"/>
                        }
                        label="Petite"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={fit['Maternity']} onChange={(event) => {setFit({...fit, 'Maternity': event.target.checked })}} name="Maternity" className="filter-item"/>
                        }
                        label="Maternity"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={fit['Plus']} onChange={(event) => {setFit({...fit, 'Plus': event.target.checked })}} name="Plus" className="filter-item"/>
                        }
                        label="Plus"
                    />
                </FormGroup>
            </FormControl>

            <FiltersSearch></FiltersSearch>
            <ClothesShoesFilter></ClothesShoesFilter>
            
            <PriceRange></PriceRange>
            <Calendar></Calendar>

            <Location></Location>

        </Box>
    );

    return (
        <div>
        {['left'].map((anchor) => (
            <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}></Button>

            <IconButton
                aria-label="toggle password visibility"
                onClick={toggleDrawer(anchor, true)}
                // onMouseDown={handleMouseDownPassword}
                edge="end"
                >
                <MenuIcon></MenuIcon>
            </IconButton>
            <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
            >
                {list(anchor)}
            </SwipeableDrawer>
            </React.Fragment>
        ))}
        </div>
    );
}

export default Filters