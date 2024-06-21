import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setRadius } from '../../store/slices/locator';

export const RadiusSelect = () => {
    const radius = useSelector(state => state.locator.radius);
    const dispatch = useDispatch();

  return (
        <FormControl variant="filled" sx={{width: '100%'}}>
            <InputLabel id="search-radius-label">Radius</InputLabel>
            <Select
                labelId="search-radius-label"
                id="search-radius"
                value={radius}
                defaultValue={5}
                onChange={(e) => dispatch(setRadius(e.target.value))}
            >
                {[2, 5, 10, 25, 50].map((rad) => {
                    return (
                        <MenuItem key={rad} value={rad}>
                            {rad}
                        </MenuItem>
                    );
                })}
            </Select>
        </FormControl>
  )
}
