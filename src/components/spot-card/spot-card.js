import React from 'react';
import { Place } from '@mui/icons-material';
import { ThumbUp, Delete, Edit } from '@mui/icons-material';
import {
  removeEvent,
  setRsvp,
  editEvent
} from '../../store/slices/events';
import {
  AccordionActions,
  Grid,
  Typography,
  IconButton,
  Rating
} from '@mui/material';
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
      <Grid container item rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={9}>
          <Typography component="h2" sx={classes.rideTitle}>
            {data.name}
          </Typography>

          <Typography component="h2" sx={classes.ridePlace}>
            <Place fontSize="medium" />
            {data.address}
          </Typography>
        </Grid>

        <Grid item xs={3} sx={classes.actions}>
          <Rating name="read-only" value={3} precision={0.5} size="small" readOnly />
          <AccordionActions>
            {/* <IconButton
              variant="contained"
              sx={node.rsvp ? classes.checkedIcon : classes.uncheckedIcon}
              aria-label="RSVP to Event"
              disableFocusRipple
              disableRipple
              onClick={() => {
                dispatch(setRsvp(node));
              }}
            >
              <ThumbUp />
            </IconButton> */}
            <IconButton
              variant="contained"
              sx={node.rsvp ? classes.checkedIcon : classes.uncheckedIcon}
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
