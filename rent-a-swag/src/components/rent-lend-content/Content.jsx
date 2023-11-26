import { Typography } from '@mui/material'
import React from 'react'
import './Content.scss';
const The_boys = require('../../../src/assets/the-boys.png');
const Cam_girl = require('../../../src/assets/cam-girl.png');

const Content = () => {
    return (
        <div className='content-container'>
            <div className='sections'>
                <div>
                    <div className='rent-heading'>
                    <Typography variant="h3" gutterBottom>
                        Rent
                    </Typography>
                    </div>
                    <div className='rent-content'>
                        <Typography variant='body1'>
                            {'Revamp your wardrobe without the clutter. Rent top brands'}
                        </Typography>
                        <Typography variant='body1'>
                            {'and unique finds on our platform. Express yourself'}
                        </Typography>
                        <Typography variant='body1'>
                            {'sustainibly, and hassle-free. Your style, your way - start renting'}
                        </Typography>
                        <Typography variant='body1'>
                            {'today'}
                        </Typography>
                    </div>
                </div>
                <div className='peeps'>
                    <div>
                        <img src={The_boys} alt="" />
                    </div>
                </div>
            </div>
            <div className='sections cam-girls-container'>
                <div className='cam-girl'>
                    <div>
                        <img src={Cam_girl} alt="" />
                    </div>
                </div>
                <div className='lending-content'>
                    <div className='lend-heading'>
                        <Typography variant='h3'>
                            Lend
                        </Typography>
                    </div>
                    <div className='lend-content'>
                        <div>{'Unlock the earning potential of your closet by becoming a lender.'}</div>
                        <div>{'Share your style, making fashion accessible to others while earning'}</div>
                        <div>{'effortlessly. Your wardrobe transormation begins now, start lending '}</div>
                        <div>{'today'}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content