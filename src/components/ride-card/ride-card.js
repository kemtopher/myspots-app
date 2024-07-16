import React from 'react';
import { useFormatTime } from '../../hooks/useFormatTime';
import { useFormatDate } from '../../hooks/useFormatDate';
import { Typography, Grid } from '@mui/material';
import { Place } from '@mui/icons-material';

export const RideCard = ({ data }) => {
  const classes = {
    card: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      padding: '1em'

      // "&:last-child": {
      //     borderBottom: '0px solid #fff'
      // }
    },
    actions: {
      flexWrap: 'nowrap'
    },
    rideTitle: {
      fontSize: '1.15em',
      color: 'var(--primary-40)',
      fontWeight: 700,
      textDecoration: 'none'

      // "&:hover": {
      //     textDecoration: 'none',
      //     color: 'var(--primary-40)'
      // }
    },
    ridePlace: {
      color: 'var(--primary-40)',
      display: 'flex',
      alignItems: 'center',
      lineHeight: '2'
    },
    rideTime: {
      justifyContent: 'flext-start'
    },
    secondaryText: {
      color: 'var(--primary-40)'
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
      <Grid item xs={5}>
        <Typography component="h2" sx={classes.rideTitle}>
          {data.name}
        </Typography>

        <Typography component="h2" sx={classes.ridePlace}>
          <Place fontSize="medium" />
          {data.address}
        </Typography>
      </Grid>

      <Grid item xs={4} sx={classes.rideTime}>
        <Typography component="h2" sx={classes.secondaryText}>
          {useFormatTime(data.datetime)}
        </Typography>
        <Typography component="h2" sx={classes.secondaryText}>
          {useFormatDate(data.datetime)}
        </Typography>
      </Grid>
    </Grid>
  );
};
