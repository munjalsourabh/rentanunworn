import React, { useEffect } from 'react'

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { hideAlert } from '../../features/alert/alertSlice';

const AppAlert = () => {
    const alert = useSelector((state) => state.alert)
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            dispatch(hideAlert());
        }, 5000);
    }, [alert.showAlert])
    return (
        <>
        {alert.showAlert && (
            <div className='alert-container'>
                <Stack sx={{ width: '60%', zIndex:99999 }} spacing={2}>
                    <Alert severity="success">{alert.payload}</Alert>
                </Stack>
            </div>
        )}
    </>
    )
}

export default AppAlert