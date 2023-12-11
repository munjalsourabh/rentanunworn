
import { Paper, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import './Categories.scss'
import { useGetProductsMutation } from '../../features/apiSlice';
import useFilter from '../../hooks/useFilter';


const Categories = () => {
    // const [getProduct, {data, isSuccess}] = useGetProductsMutation();
    // useEffect(() => {
    //     getProduct();
    //     console.log(isSuccess);
    // }, [])

    const products = useFilter();
    useEffect(() => {
        console.log('products ', products)
        // return function() {}
    }, [products]);

    return (
        <>
        {products.length !== 0 ? (
        <div className='categories-container'>
            {products.map(({rrp, brand, rentPrice, productImageUrls}, index) => (
                    <Paper elevation={1} sx={{width: 120, height: 200}} key={index}>
                        {/* <div className='category-heading'>
                            Gucci
                        </div> */}

                        <Typography color="text.secondary">
                            {brand}
                        </Typography>
                        <hr />
                        <div className='category-image gucci'>
                            <img src={productImageUrls[0]['imageUrl']} alt="" />
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