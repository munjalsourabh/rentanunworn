
import { Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './Categories.scss'
import { useGetProductsMutation } from '../../features/apiSlice';
import useFilter from '../../hooks/useFilter';


const Categories = () => {
    const [products] = useFilter();

    const [filteredProducts, setFilteredProducts] = useState([]);
    useEffect(() => {
        setFilteredProducts([...products.splice(0, 5)])
    }, [products]);

    return (
        <>
        {filteredProducts.length !== 0 ? (
        <div className='categories-container'>
            {filteredProducts.map(({rrp, brand, rentPrice, imageUrls}, index) => (
                    <Paper elevation={1} sx={{width: 120, height: 200}} key={index}>
                        {/* <div className='category-heading'>
                            Gucci
                        </div> */}

                        <Typography color="text.secondary">
                            {brand}
                        </Typography>
                        <hr />
                        <div className='category-image gucci'>
                            <img src={imageUrls[0]} alt="" />
                        </div>
                        <hr />
                        <Typography color="text.secondary" sx={{pl: '4px'}}>
                            Rent From ${rentPrice}
                        </Typography>
                        <hr />
                        <Typography color="text.secondary" sx={{pl: '4px'}}>
                            RRP ${rrp}
                        </Typography>
                    </Paper>
                )
            )}
        </div>
        ) : ''}
        </>
        )
    }

export default Categories