import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useDispatch } from 'react-redux';
import { setCurrent } from '../../store/slices/coordinates';

export const SearchField = () => {
  const [fieldText, setFieldText] = useState('');
  const [locationsList, setLocationsList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getLocations = setTimeout(() => {
      fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${fieldText}.json?access_token=pk.eyJ1IjoiYXF1YXllIiwiYSI6ImNrN3NjdTdmczBkZmQzZnIyenZ1djR1dXkifQ.chRGR88GhxPG1Yk-2DDzqw`
      )
        .then((res) => res.json())
        .then((data) => {
          setLocationsList(data.features);
        });
    }, 500);

    return () => clearTimeout(getLocations);
  }, [fieldText]);

  return (
    <Autocomplete
      freeSolo
      options={locationsList}
      getOptionLabel={(option) => option.place_name || ''}
      onChange={(event, value) => {
        if (value.center !== null) {
          console.log("value.center: ", value.center)
          dispatch(setCurrent([value.center[0], value.center[1]]));
        }
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Location"
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '0px'
            }
          }}
          value={fieldText}
          onChange={(event) => {
            console.log("Event: ", event.target)
            setFieldText(event.target.value)
          }}
        />
      )}
    />
  );
};
