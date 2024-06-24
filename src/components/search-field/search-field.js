import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrent } from '../../store/slices/coordinates';


export const SearchField = () => {
  const [ fieldText, setFieldText ] = useState('');
  const [ locationsList, setLocationsList ] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
		const getLocations = setTimeout(() => {
			fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${fieldText}.json?access_token=pk.eyJ1IjoiYXF1YXllIiwiYSI6ImNrN3NjdTdmczBkZmQzZnIyenZ1djR1dXkifQ.chRGR88GhxPG1Yk-2DDzqw`)
			.then(res => res.json())
			.then(data => {
				setLocationsList(data.features);
			})
		}, 500);

		return () => clearTimeout(getLocations);
	}, [fieldText]);


  return (
      <Autocomplete
        freeSolo
        options={locationsList}
        getOptionLabel={option => option.place_name || ""}
        onChange={(event, value) => {
          if(value.center !== null) {
            dispatch(setCurrent({lon: value.center[0], lat: value.center[1]}))
            console.log(
              "val: ", value
            )
          }
          console.log(value)
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Location" 
            value={fieldText}
            onChange={event => setFieldText(event.target.value)}
          />
        )}
      />
  )
}
