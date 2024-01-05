import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import {IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FiltersSearch from './filters-search/FiltersSearch';
import ClothesShoesFilter from './clothes-shoes-filter/ClothesShoesFilter';
import Calendar from './datapicker/Calendar';


import './Filters.scss'
import Location from './location/Location';
import PriceRange from './price-range/PriceRange';
import Categories from './categories/Categories';
import Occassion from './occassion/Occassion';
import Fit from './fit/Fit';
import Pincode from './pincode/Pincode';
import Gender from './gender/Gender';

const Filters = () => {

    const location = useSelector(state => state.location);

    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const dispatch = useDispatch();




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

            <FiltersSearch></FiltersSearch>
            
            <Divider></Divider>

            <Gender></Gender>

            <ClothesShoesFilter></ClothesShoesFilter>

            <Fit></Fit>

            <PriceRange></PriceRange>

            <Calendar></Calendar>

            <Location></Location>

            <Pincode elementId={'location-search-filter'}></Pincode>
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