
import { Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './Categories.scss'
import { useGetProductsMutation } from '../../features/apiSlice';
const Gucci_cap = require('../../../src/assets/gucci_cap_r.png');
const Nike_camo = require('../../../src/assets/nike_camo_r.png');
const Asos = require('../../../src/assets/asos_r.png');
const All_saints = require('../../../src/assets/all_saints_r.png');
const Sabyasachi = require('../../../src/assets/sabyasachi.png');

const Categories = () => {
    const [getProduct, {data, isSuccess}] = useGetProductsMutation();
    const [tempdata, setTempdata] = useState([]);
    useEffect(() => {
        getProduct();
        console.log(isSuccess);
    }, [])

    return (
        <>
        {isSuccess ? (
        <div className='categories-container'>
            {data.map(({rrp, brand, rentPrice, productImageUrls}) => (
                    <Paper elevation={1} sx={{width: 120, height: 200}}>
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