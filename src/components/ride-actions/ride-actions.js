import React from 'react';
import { Button, ButtonGroup } from '@mui/material';

export const RideActions = ({ setEventsFilter, eventsFilter }) => {
  const styles = {
    actionContainer: {
      height: '56px',
      width: '100%'
    },
    actionButton: {
      width: '100%',
      height: '56px',
      borderRadius: '0',

      '&.Mui-disabled': {
        background: '#1565c0',
        color: '#ffffff'
    },
    },
    // '&.Mui-disabled:hover': { background:theme.palette.secondary.main },
  };

  console.log(eventsFilter)

  return (
    <ButtonGroup
      variant="contained"
      color="primary"
      aria-label="contained primary button group"
      sx={styles.actionContainer}
    >
      <Button
        variant="contained"
        fullWidth
        size="large"
        disabled={eventsFilter === 'nearby'}
        disableElevation
        disableRipple
        aria-label="Edit Event"
        sx={styles.actionButton}
        onClick={() => setEventsFilter('nearby')}
      >
        Nearby
      </Button>
      <Button
        variant="contained"
        fullWidth
        size="large"
        disabled={eventsFilter === 'rsvp'}
        disableElevation
        disableRipple
        destination="/rides/going"
        sx={styles.actionButton}
        onClick={() => setEventsFilter('rsvp')}
      >
        RSVP'd
      </Button>
      <Button
        variant="contained"
        fullWidth
        size="large"
        disabled={eventsFilter === 'hosting'}
        disableElevation
        disableRipple
        sx={styles.actionButton}
        onClick={() => setEventsFilter('hosting')}
      >
        Hosting
      </Button>
    </ButtonGroup>
  );
};
