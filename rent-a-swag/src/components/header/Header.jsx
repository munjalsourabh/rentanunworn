import './Header.scss'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {User} from '../user/User';

export const Header = () => (
    <nav className="main-nav">
        <div className="nav-content">
            <span className="site-title">   
                {'UnTagged'}
            </span>   
            <span className='navigation-links'>
                <li>{"Home"}</li>
                <li>{"About"}</li>
                <li>{"Shop"}</li>
                <li>{"Contact"}</li>
            </span> 
            <span className='nav-actions'>
                <span>
                    <ShoppingCartIcon></ShoppingCartIcon>
                </span>
                <span>
                    <User></User>
                </span>

            </span>
        </div>
    </nav>
)
