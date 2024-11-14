import React, { useEffect, useState } from 'react';
import { 
  Autocomplete,
  TextField
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { setCurrent } from '../../store/slices/coordinates';
import { setLocation } from '../../store/slices/search-location';

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
      sx={{width: '100%'}}
      freeSolo
      options={locationsList}
      getOptionLabel={(option) => option.place_name || ''}
      onChange={(event, value) => {
        if (!value?.center) return;

        if (value.center !== null) {
          dispatch(
            setLocation({
              coords: [value.center[0], value.center[1]],
              name: value.text,
              address: value.place_name
            })
          );
          dispatch(setCurrent([value.center[0], value.center[1]]));
        }
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Search For A Location"
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '0px',
              backgroundColor: 'var(--light-40)'
            }
          }}
          value={fieldText}
          onChange={(event) => {
            setFieldText(event.target.value);
          }}
        />
      )}
    />
  );
};
