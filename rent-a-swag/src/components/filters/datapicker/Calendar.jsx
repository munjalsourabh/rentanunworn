import React, {useState} from 'react'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import '../../filters/Filters.scss'
import { Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addAvailability } from '../../../features/filters/filtersSlice';

const Calendar = () => {

    const dispatch = useDispatch()

    const updateCalendarDate = (val) => {
        dispatch(addAvailability(val))
    }

    const [value, setValue] = React.useState(null);

    const updateDateVal = (newValue) => {
        updateCalendarDate(newValue);
        setValue(newValue);

    }
    return (
        <div className='calendar-container'>
            <Typography>{'Availability'}</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker value={value} onChange={updateDateVal} />
                </DemoContainer>
            </LocalizationProvider>
        </div>
        )

}

export default Calendar