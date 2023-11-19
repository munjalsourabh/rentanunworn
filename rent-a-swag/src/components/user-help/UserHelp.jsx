import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Paper, Typography } from '@mui/material'
import './UserHelp.scss'
import Categories from '../categories/Categories';

const UserHelp = () => {
    return (
    <>
    <div className='user-help-container'>
        <Paper elevation={3} sx={{ minWidth: 120}}>
            <Card variant="outlined">
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        How it works
                    </Typography>
                </CardContent>
            </Card>
        </Paper>
        <Paper elevation={3} sx={{ minWidth: 120}}>
            <Card variant="outlined">
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Sustainability
                    </Typography>
                </CardContent>
            </Card>
        </Paper>
        <Paper elevation={3} sx={{ minWidth: 120}}>
            <Card variant="outlined">
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Community
                    </Typography>
                </CardContent>
            </Card>
        </Paper>
        <Paper elevation={3} sx={{ minWidth: 120}}>
            <Card variant="outlined">
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        FAQs
                    </Typography>
                </CardContent>
            </Card>
        </Paper>
        <Paper elevation={3} sx={{ minWidth: 120}}>
            <Card variant="outlined">
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Charity
                    </Typography>
                </CardContent>
            </Card>
        </Paper>

        
    </div>
    <div>
        <Categories></Categories>
    </div>
    </>
    
    )
}

export default UserHelp