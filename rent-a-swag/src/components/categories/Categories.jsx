
import { Paper, Typography } from '@mui/material'
import React from 'react'
import './Categories.scss'
const Gucci_cap = require('../../../src/assets/gucci_cap_r.png');
const Nike_camo = require('../../../src/assets/nike_camo_r.png');
const Asos = require('../../../src/assets/asos_r.png');
const All_saints = require('../../../src/assets/all_saints_r.png');
const Sabyasachi = require('../../../src/assets/sabyasachi.png');

const Categories = () => {
    return (
        <div className='categories-container'>
            <Paper elevation={1} sx={{width: 120, height: 200}}>
                {/* <div className='category-heading'>
                    Gucci
                </div> */}

                <Typography color="text.secondary">
                    Gucci
                </Typography>
                <hr />
                <div className='category-image gucci'>
                    <img src={Gucci_cap} alt="" />
                </div>
                <hr />
                <Typography color="text.secondary" sx={{pl: '4px'}}>
                    Rent From $50
                </Typography>
                <hr />
                <Typography color="text.secondary" sx={{pl: '4px'}}>
                    RRP $300
                </Typography>
            </Paper>


            <Paper elevation={1} sx={{width: 120, height: 200}}>
                {/* <div className='category-heading'>
                    Gucci
                </div> */}

                <Typography color="text.secondary">
                    Nike
                </Typography>
                <hr />
                <div className='category-image nike'>
                    <img src={Nike_camo} alt="" />
                </div>
                <hr />
                <Typography color="text.secondary" sx={{pl: '4px'}}>
                    Rent From $50
                </Typography>
                <hr />
                <Typography color="text.secondary" sx={{pl: 1}} sx={{pl: '4px'}}>
                    RRP $300
                </Typography>
            </Paper>


            <Paper elevation={1} sx={{width: 120, height: 200}}>
                {/* <div className='category-heading'>
                    Gucci
                </div> */}

                <Typography color="text.secondary">
                    Asos
                </Typography>
                <hr />
                <div className='category-image asos'>
                    <img src={Asos} alt="" />
                </div>
                <hr />
                <Typography color="text.secondary" sx={{pl: '4px'}}>
                    Rent From $50
                </Typography>
                <hr />
                <Typography color="text.secondary" sx={{pl: '4px'}}>
                    RRP $300
                </Typography>
            </Paper>


            <Paper elevation={1} sx={{width: 120, height: 200}}>
                {/* <div className='category-heading'>
                    Gucci
                </div> */}

                <Typography color="text.secondary">
                    All Saints
                </Typography>
                <hr />
                <div className='category-image all-saints'>
                    <img src={All_saints} alt="" />
                </div>
                <hr />
                <Typography color="text.secondary" sx={{pl: '4px'}}>
                    Rent From $50
                </Typography>
                <hr />
                <Typography color="text.secondary" sx={{pl: '4px'}}>
                    RRP $300
                </Typography>
            </Paper>


            <Paper elevation={1} sx={{width: 120, height: 200}}>
                {/* <div className='category-heading'>
                    Gucci
                </div> */}

                <Typography color="text.secondary">
                    Sabhyasachi
                </Typography>
                <hr />
                <div className='category-image'>
                    <img src={Sabyasachi} alt="" />
                </div>
                <hr />
                <Typography color="text.secondary" sx={{pl: '4px'}}>
                    Rent From $50
                </Typography>
                <hr />
                <Typography color="text.secondary" sx={{pl: '4px'}}>
                    RRP $300
                </Typography>
            </Paper>
        </div>
    )
}

export default Categories