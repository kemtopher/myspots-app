import React from 'react';
import { Grid } from '@mui/material';

export const CardDescription = ({ data }) => {
  const classes = {
    actions: {
      flexWrap: 'nowrap',
      justifyContent: 'flex-end'
    },
    uncheckedIcon: {
      color: 'var(--light-40)'
    },
    checkedIcon: {
      color: 'var(--primary-40)'
    }
  };
  return (
    <Grid container sx={classes.card}>
      <Grid item xs={12}>
        {data.description.substring(0, 144)}
      </Grid>
    </Grid>
  );
};
