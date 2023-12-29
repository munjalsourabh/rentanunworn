import React from 'react';
import './CategoryNavigation.scss'

const CategoryNavigation = () => {
    return (
            <span className='category-navigation navigation-links'>
                <li>{"New In"}</li>
                <li>{"Clothing"}</li>
                <li>{"Accessories"}</li>
                <li>{"Brands"}</li>
                <li>{"Occassion"}</li>
            </span> 
        
    )
}

export default CategoryNavigation