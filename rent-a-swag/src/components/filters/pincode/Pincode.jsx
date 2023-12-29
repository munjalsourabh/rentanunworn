import { FormControl, Input, InputAdornment, InputLabel } from '@mui/material'
import React, { useEffect } from 'react'
import { initGooglePlacesAutocomplete } from './googleMapHelper'

const Pincode = ({elementId}) => {
    useEffect(() => {
        initGooglePlacesAutocomplete(elementId, function(placeConfig) {
            const selectedPlace = placeConfig.getPlace();
            console.log('selected place ', selectedPlace);
        });
        console.log('mounted');
    }, [])
    return (
        <FormControl fullWidth sx={{ m: 1, width: '90%' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-amount">Search Location</InputLabel>
            <Input
                id={elementId}
            />
        </FormControl>
    )
}

export default Pincode