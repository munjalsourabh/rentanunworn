import { Paper, Typography } from '@mui/material'
import React from 'react'
import './ProductCard.scss'

const ProductCard = ({attributes}) => {
    const {brand, imageUrl, rentPrice, rrp, dateFrom, dateTo} = attributes;

    return (
        <div className='product-container'>
            <Paper elevation={1} sx={{minWidth: 125}} key={1} >
                {/* <div className='category-heading'>
                    Gucci
                </div> */}

                <Typography color="text.secondary">
                    {brand}
                </Typography>
                <hr />
                <div className='category-image gucci'>
                    <img src={imageUrl} alt="" />
                </div>
                <hr />
                <Typography color="text.secondary" sx={{pl: '4px'}}>
                    Rent From ${rentPrice}
                </Typography>
                <hr />
                <Typography color="text.secondary" sx={{pl: '4px'}}>
                    RRP ${rrp}
                </Typography>
                {dateFrom && (
                    <>
                    <hr />
                        <Typography color="text.secondary" sx={{pl: '4px'}}>
                            From: {dateFrom}
                        </Typography>
                    </>
                )}
                {dateTo && (
                    <>
                        <hr />
                        <Typography color="text.secondary" sx={{pl: '4px'}}>
                            To: {dateTo}
                        </Typography>
                    </>
                )}

            </Paper>
        </div>
    )
}

export default ProductCard