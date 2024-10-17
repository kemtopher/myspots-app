import React from 'react';
import { Delete, Edit, Place } from '@mui/icons-material';
import {
  AccordionActions,
  Grid,
  IconButton,
  Rating,
  Typography
} from '@mui/material';
import { editEvent, removeEvent } from '../../store/slices/events';
import { useDispatch } from 'react-redux';

export const SpotCard = ({ data, node }) => {
  const dispatch = useDispatch();
  const classes = {
    card: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      padding: '1em'
      // borderBottom: '1px solid var(--light-40)',

      // "&:last-child": {
      //     borderBottom: '0px solid #fff'
      // }
    },
    actions: {
      flexWrap: 'nowrap'
    },
    spotName: {
      fontSize: '1.15em',
      color: 'var(--primary-40)',
      fontWeight: 700,
      textDecoration: 'none'
    },
    location: {
      color: 'var(--primary-40)',
      display: 'flex',
      alignItems: 'center',
      lineHeight: '2'
    },
    inactive: {
      color: 'var(--light-40)'
    },
    active: {
      color: 'var(--primary-40)'
    }
  };

  return (
    <Grid container sx={classes.card}>
      <Grid
        container
        item
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={9}>
          <Typography component="h2" sx={classes.spotName}>
            {data.name}
          </Typography>

          <Typography component="h2" sx={classes.location}>
            <Place fontSize="medium" />
            {data.address}
          </Typography>
        </Grid>

        <Grid item xs={3} sx={classes.actions}>
          {/* <Rating name="read-only" value={3} precision={0.5} size="small" readOnly /> */}
          <AccordionActions>
            <IconButton
              variant="contained"
              sx={node.rsvp ? classes.active : classes.inactive}
              aria-label="Edit Event"
              disableFocusRipple
              disableRipple
              onClick={() => {
                dispatch(editEvent(node));
              }}
            >
              <Edit />
            </IconButton>
            <IconButton
              variant="comtained"
              sx={classes.dangerIcon}
              aria-label="Delete Event"
              disableFocusRipple
              disableRipple
              onClick={() => {
                dispatch(removeEvent(node));
              }}
            >
              <Delete />
            </IconButton>
          </AccordionActions>
        </Grid>
      </Grid>
    </Grid>
  );
};
