import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import '../../filters/Filters.scss'

const ClothesShoesFilter = () => {
    const [clothesSize, setClothesSize] = useState('');

    return (
        <div className='clothes-shoes-filter'>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
                    <InputLabel id="demo-simple-select-standard-label">Clothes</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={clothesSize}
                        onChange={(e) => {setClothesSize(e.target.value)}}
                        label="Age"
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
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
                    <InputLabel id="demo-simple-select-standard-label">Shoes</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={clothesSize}
                        onChange={(e) => {setClothesSize(e.target.value)}}
                        label="Age"
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'UK 2 / EU 35 '}>UK 2 / EU 35 </MenuItem>
                        <MenuItem value={'UK 2.5 / EU 35.5 '}>UK 2.5 / EU 35.5 </MenuItem>
                        <MenuItem value={'UK 3 / EU 36 '}>UK 3 / EU 36 </MenuItem>
                        <MenuItem value={'UK 3.5 / EU 36.5 '}>UK 3.5 / EU 36.5 </MenuItem>
                        <MenuItem value={'UK 4 / EU 37 2'}>UK 4 / EU 37 </MenuItem>
                        <MenuItem value={'UK 4.5 / EU 37.5 4'}>UK 4.5 / EU 37.5 </MenuItem>
                        <MenuItem value={'UK 5 / EU 38 6'}>UK 5 / EU 38 </MenuItem>
                        <MenuItem value={'UK 5.5 / EU 39.5 8'}>UK 5.5 / EU 39.5 </MenuItem>
                        <MenuItem value={'UK 6 / EU 39 0'}>UK 6 / EU 39 </MenuItem>
                        <MenuItem value={'UK 6.5 / EU 39.5 2'}>UK 6.5 / EU 39.5 </MenuItem>
                        <MenuItem value={'UK 7 / EU 40 4'}>UK 7 / EU 40 </MenuItem>
                        <MenuItem value={'UK 7.5 / EU 40.5 6'}>UK 7.5 / EU 40.5 </MenuItem>
                        <MenuItem value={'UK 8 / EU 41 8'}>UK 8 / EU 41 </MenuItem>
                        <MenuItem value={'UK 8.5 / EU 41.5 0'}>UK 8.5 / EU 41.5 </MenuItem>
                        <MenuItem value={'UK 9 / EU 422'}>UK 9 / EU 42</MenuItem>
                    </Select>
                </FormControl>
            </div>
    )
}

export default ClothesShoesFilter