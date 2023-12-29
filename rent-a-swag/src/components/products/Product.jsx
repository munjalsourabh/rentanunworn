import React, { useEffect } from 'react'
import { CircularProgress, Paper, Typography } from '@mui/material';
import useFilter from '../../hooks/useFilter';
import './Product.scss';

const Product = () => {

    const [products, isLoading] = useFilter();
    useEffect(() => {
        console.log('products ', products)
    }, [products]);

    // useEffect(() => {
    //     console.log('isloading ', isLoading);
    // }, [isLoading])

    return (
        <>
        {isLoading &&(
            <div>
                <CircularProgress></CircularProgress>
            </div>
        )}
                
        
        <div className='main-layout'>
        {products.length !== 0 ? (

        <div className='product-container'>
            {products.map(({rrp, brand, rentPrice, imageUrls}, index) => (
                    <Paper elevation={1} sx={{minWidth: 120, height: 200}} key={index}>
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
        </div>
        </>
        )

}

export default Product