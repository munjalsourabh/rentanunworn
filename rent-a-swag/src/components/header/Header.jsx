import './Header.scss'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {User} from '../user/User';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';

export const Header = () => {
    const timeSlots = Array.from(new Array(24 * 2)).map(
        (_, index) =>
            `${index < 20 ? '0' : ''}${Math.floor(index / 2)}:${
            index % 2 === 0 ? '00' : '30'
            }`,
        );
    
    return (
    <nav className="main-nav">
        <div className="nav-content">
            <span className="site-title">   
                {'VeeRent'}
            </span>   
            <span className='search-container'>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    size="small"
                    options={timeSlots}
                    sx={{ width: 400 }}
                    popupIcon={<SearchIcon />}
                    renderInput={(params) => <TextField {...params} label="Search by brand, location, color, occassion..." />}
                />
            </span> 
            <span className='nav-actions'>
                {/* <span>
                    <ShoppingCartIcon></ShoppingCartIcon>
                </span> */}
                <span>
                    <User></User>
                </span>

            </span>
        </div>
    </nav>
)}
