import React, { useEffect, useState } from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { SearchField } from '../search-field/search-field';
import { useDispatch, useSelector } from 'react-redux';
import { createEvent } from '../../store/slices/events';

export const EventsForm = () => {
  const initialFormState = {
    name: '',
    address: '',
    description: ''
  };
  const [formData, setFormData] = useState(initialFormState);
  const [formBusy, setFormBusy] = useState(false);
  const locationInfo = useSelector((state) => state.searchLocation.location);
  const dispatch = useDispatch();

  const classes = {
    formHeader: {
      marginBottom: '2em'
    },
    formContainer: {
      padding: '3em 1em 1em'
    }
  };

  useEffect(() => {
    setFormData({ ...locationInfo, description: '' });
  }, [locationInfo]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleFormSubmit = () => {
    setFormBusy(true);

    dispatch(
      createEvent({
        name: formData.name,
        address: formData.address,
        description: formData.description,
        datetime: JSON.stringify(new Date()),
        id: Math.random() * (122 - 1) + 1,
        location: {
          coordinates: [locationInfo.coords[0], locationInfo.coords[1]]
        }
      })
    );

    setFormData(initialFormState);
    setFormBusy(false);
  };

  return (
    <Grid sx={classes.formContainer} container spacing={4}>
      <Grid container item xs={12} spacing={2}>
        <Grid sx={classes.formHeader} item xs={12}>
          <Typography variant="h4" gutterBottom>
            Add a new Spot
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <SearchField />
        </Grid>
      </Grid>

      <Grid container item xs={12} spacing={2}>
        <Grid item xs={12}>
          <TextField
            value={formData?.name || ''}
            onChange={handleChange}
            sx={classes.formField}
            label={'Name'}
            name="name"
            id="margin-normal"
            margin="dense"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={formData?.address || ''}
            onChange={handleChange}
            sx={classes.formField}
            label={'Address'}
            name="address"
            id="margin-normal"
            margin="dense"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={formData?.description || ''}
            onChange={handleChange}
            sx={classes.formField}
            label={'What To Know'}
            name="description"
            id="margin-normal"
            margin="dense"
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            onClick={handleFormSubmit}
            disabled={formBusy}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
