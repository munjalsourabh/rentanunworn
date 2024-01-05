import { Autocomplete, FormControl, TextField, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Select, Typography, Button, Input } from '@mui/material'
import React, { useState } from 'react';
import './ListItem.scss';
import SearchIcon from '@mui/icons-material/Search';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextareaAutosize } from '@mui/base';
import Pincode from '../filters/pincode/Pincode';
import { useUploadItemMutation } from '../../features/apiSlice';
import dayjs from 'dayjs';
import { EventNote } from '@mui/icons-material';

const ListAnItem = () => {

  const [itemDetails, setItemDetails] = useState({
    "productName": "",
    "rrp": '',
    "rentPrice": '',
    "brand": "",
    "occasion": "",
    "category": "",
    "size": "",
    "fit": "",
    "type": "",
    "gender": "",
    "latitude": '',
    "longitude": '',
    "availableFrom": '',
    "securityDeposit": '',
    "delivery": '',
    "deliveryMethod": ''
  });

  const [uploadItem] = useUploadItemMutation()

  const [files, setFiles] = useState([]);

  const timeSlots = Array.from(new Array(24 * 2)).map(
    (_, index) =>
        `${index < 20 ? '0' : ''}${Math.floor(index / 2)}:${
        index % 2 === 0 ? '00' : '30'
        }`,
    );

  const handleImageChange = (event) => {
    setFiles([...event.target.files]);
  }

  const uploadItems = () => {
    const form = new FormData();
    for (const file of files) {
      form.append('file', file)
       // appending every file to formdata
      
    }
    // files[0].forEach((file) => {
    //   form.append("file", file);
    // })
    
    uploadItem({form, itemDetails: {
      "productName": "shoes",
      "rrp": itemDetails.rrp,
      "rentPrice": itemDetails.rentPrice,
      "brand": "adidas",
      "occasion": "casual",
      "category": itemDetails.category,
      "size": itemDetails.size,
      "fit": itemDetails.fit,
      "type": "shoes",
      "gender": "men",
      "latitude": itemDetails.latitude,
      "longitude": itemDetails.longitude,
      "availableFrom": itemDetails.avaibleFrom,
      "securityDeposit": itemDetails.securityDeposit
  }});
  }

  const categoryChange = (event) => {
    setItemDetails({...itemDetails, category: event.target.value})
  }

  const sizeChange = (event) => {
    setItemDetails({...itemDetails, size: event.target.value})
  }

  const fitChange = (event) => {
    setItemDetails({...itemDetails, fit: event.target.value})
  }

  const onPlaceSelect = (latitude, longitude) => {
    setItemDetails((itemDetails) =>  ({...itemDetails, latitude, longitude}));
  }

  const setRetailPrice = (event) => {
    setItemDetails({...itemDetails, rrp: event.target.value});
  }

  const setSecurity = (event) => {
    setItemDetails({...itemDetails, securityDeposit: event.target.value});
  }
    
  const setDelivery = (event) => {
    setItemDetails({...itemDetails, delivery: event.target.value});
  }

  const setAvailaibility = (value) => {
    const stringValue = dayjs(value.$d).format('YYYY-MM-DD');
    setItemDetails({...itemDetails, avaibleFrom: stringValue});
  }

  const setDeliveryMethod = (event) => {
    setItemDetails({...itemDetails, deliver: event.target.value});
  };

  const setBrand = (event) => {
    setItemDetails({...itemDetails, brand: event.target.value});
  }

  const setGender = (event) => {
    setItemDetails({...itemDetails, gender: event.target.value})
    
  }

  return (
    <div className='main-layout'>
      <div className='list-item-container'>
        <Typography variant='h6' className='renting-headings'>{'List an Item'}</Typography>
        <div className='photos-container'>
          <fieldset>
            <legend>Upload Photos</legend>
            <FormControl>
              <input id="upload-photos" type="file" aria-describedby="my-helper-text" accept="image/*" onChange={handleImageChange} name='files[]' multiple/>
            </FormControl>
          </fieldset>
        </div>

        <div className='info-n-price'>
          <fieldset>
            <legend>Item Info</legend>
            <div className='flex-column'>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
                    <InputLabel>Category</InputLabel>
                    <Select
                        onChange={categoryChange}
                        label="Category"
                        >
                        <MenuItem value={"Dresses"}>{"Dresses"}</MenuItem>
                        <MenuItem value={"Jewellery"}>{"Jewellery"}</MenuItem>
                        <MenuItem value={"Handbags"}>{"Handbags"}</MenuItem>
                        <MenuItem value={"Handbags"}>{"Handbags"}</MenuItem>
                        <MenuItem value={"Tops"}>{"Tops"}</MenuItem>
                        <MenuItem value={"Bottoms"}>{"Bottoms"}</MenuItem>
                        <MenuItem value={"Jackets & Coats"}>{"Jacket & Coats"}</MenuItem>
                        <MenuItem value={"Shoes"}>{"Shoes"}</MenuItem>
                    </Select>
            </FormControl>

            {/* <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  size="small"
                  options={timeSlots}
                  sx={{ width: 300, mt: 2 }}
                  popupIcon={<SearchIcon />}
                  renderInput={(params) => <TextField {...params} label="Search by brand" />}
                  /> */}

          <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
            <TextField id="brand" label="Brand" variant="standard" onChange={setBrand} />
          </FormControl>

          <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
                    <InputLabel>Gender</InputLabel>
                    <Select
                        onChange={setGender}
                        label="Gender"
                        >
                        <MenuItem value={"Men"}>{"Men"}</MenuItem>
                        <MenuItem value={"Women"}>{"Women"}</MenuItem>
                        <MenuItem value={"Uninsex"}>{"Unisex"}</MenuItem>
                    </Select>
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
                    <InputLabel>Size</InputLabel>
                    <Select
                        onChange={sizeChange}
                        label="Size"
                        >
                        <MenuItem value={'UK 2'}>UK 2</MenuItem>
                        <MenuItem value={'UK 4'}>UK 4</MenuItem>
                        <MenuItem value={'UK 6'}>UK 6</MenuItem>
                        <MenuItem value={'UK 8'}>UK 8</MenuItem>
                        <MenuItem value={'UK 12'}>UK 12</MenuItem>
                        <MenuItem value={'UK 14'}>UK 14</MenuItem>
                        <MenuItem value={'UK 16'}>UK 16</MenuItem>
                        <MenuItem value={'UK 18'}>UK 18</MenuItem>
                        <MenuItem value={'UK 20'}>UK 20</MenuItem>
                        <MenuItem value={'UK 22'}>UK 22</MenuItem>
                        <MenuItem value={'UK 24'}>UK 24</MenuItem>
                        <MenuItem value={'UK 26'}>UK 26</MenuItem>
                        <MenuItem value={'UK 28'}>UK 28</MenuItem>
                        <MenuItem value={'UK 30'}>UK 30</MenuItem>
                        <MenuItem value={'UK 32'}>UK 32</MenuItem>
                        <MenuItem value={'XS'}>XS</MenuItem>
                        <MenuItem value={'S'}>S</MenuItem>
                        <MenuItem value={'L'}>L</MenuItem>
                        <MenuItem value={'XL'}>XL</MenuItem>
                        <MenuItem value={'XXL'}>XXL</MenuItem>
                        <MenuItem value={'XXXL'}>XXXL</MenuItem>
                    </Select>
            </FormControl>

            
            

            <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
                    <InputLabel>Fit</InputLabel>
                    <Select
                        onChange={fitChange}
                        label="Fit"
                        >
                        <MenuItem value={"Tall"}>{"Tall"}</MenuItem>
                        <MenuItem value={"Petite"}>{"Petite"}</MenuItem>
                        <MenuItem value={"Maternity"}>{"Maternity"}</MenuItem>
                        <MenuItem value={"Plus"}>{"Plus"}</MenuItem>
                    </Select>
            </FormControl>

            <div className='dates-hired'>
                    <Typography variant='standard' className='renting-headings'>{'Availability'}</Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker format="YYYY-MM-DD" onChange={setAvailaibility}/>
                        </DemoContainer>
                    </LocalizationProvider>
            </div>
            <div>
              <Pincode elementId={'list-item-location-search'}  onPlaceSelect={onPlaceSelect}></Pincode>
            </div>
    

            <div className='flex-column item-description'>
              <Typography variant='standard' className='renting-headings'>{'Item Description'}</Typography>
              <TextareaAutosize sx={{width: 300}}></TextareaAutosize>
            </div>
            </div>

            </fieldset>
              
            <div>

              <fieldset>
                <legend>{'Price'}</legend>
                <div>
                  <div>
                    {/* <Typography variant='standard' className='renting-headings'>{'Retail Price'}</Typography> */}
                    <FormControl sx={{ml: 2, width: '40%'}}>
                        <TextField id="retailPrice" label="Retail Price" variant="standard" type='number'
                            onChange={setRetailPrice} />
                    </FormControl>
                    <FormControl sx={{ml: 2, width: '40%'}}>
                        <TextField id="retailPrice" label="Security Details" variant="standard"
                            onChange={setSecurity} />
                    </FormControl>
                  </div>
                  <div>
                    {/* <Typography variant='standard' className='renting-headings'>{'Security Deposit'}</Typography> */}
                    <FormControl sx={{ml: 2, width: '40%'}}>
                        <TextField id="retailPrice" label="Daily Rate" variant="standard" type='number'
                            onChange={() => {}} />
                    </FormControl>
                    <FormControl sx={{ml: 2, width: '40%'}}>
                        <TextField id="retailPrice" label="Your Earnings" variant="standard" type='number'
                            onChange={setRetailPrice} />
                    </FormControl>
                  </div>

                  <div>
                    <FormControl sx={{ml: 2, width: '40%'}}>
                        <TextField id="delivery" label="Delivery" variant="standard" type='number'
                            onChange={setDelivery} />
                    </FormControl>

                    <FormControl variant="standard" sx={{ml:2, width: '40%' }}>
                      <InputLabel>Delivery Method</InputLabel>
                      <Select
                          onChange={setDeliveryMethod}
                          label="Delivery Method"
                          >
                          <MenuItem value={"Pick Up"}>{"Pick Up"}</MenuItem>
                          <MenuItem value={"Courier"}>{"Courier"}</MenuItem>
                      </Select>
              </FormControl>
                  </div>

                </div>  
              </fieldset>

              <div className='flex-row-center'>
                  <Button variant="contained" sx={{
                      marginTop: 20,
                      ':hover': {
                      bgcolor: 'primary.main', // theme.palette.primary.main
                      color: 'white',
                      },    
                  }}
                  onClick={uploadItems}
                  >List My Item</Button>
              </div>
            </div>

          </div>
      </div>
    </div>
  )
}

export default ListAnItem