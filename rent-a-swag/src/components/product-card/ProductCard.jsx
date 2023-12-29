import { Paper, Typography } from '@mui/material'
import React from 'react'
import './ProductCard.scss'

const ProductCard = ({brand, productImageUrl, rentPrice, rrp}) => {
    return (
        <div className='product-container'>
            <Paper elevation={1} sx={{minWidth: 120, height: 200}} key={1} >
                {/* <div className='category-heading'>
                    Gucci
                </div> */}

                <Typography color="text.secondary">
                    {brand}
                </Typography>
                <hr />
                <div className='category-image gucci'>
                    <img src={productImageUrl} alt="" />
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
        </div>
    )
}

export default ProductCard