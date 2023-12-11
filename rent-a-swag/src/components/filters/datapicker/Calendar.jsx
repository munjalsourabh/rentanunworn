import React, {useState} from 'react'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import '../../filters/Filters.scss'
import { Typography } from '@mui/material';

const Calendar = () => {
    const [value, setValue] = React.useState(null);
    return (
        <div className='calendar-container'>
            <Typography>{'Availability'}</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker value={value} onChange={(newValue) => setValue(newValue)} />
                </DemoContainer>
            </LocalizationProvider>
        </div>
        )

}

export default Calendar