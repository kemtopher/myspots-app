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
      borderRight: '0px solid #fff',

      '&.Mui-disabled': {
        background: '#1565c0',
        border: '0px solid #ffffff',
        borderRight: '0px solid #ffffff !important',
        color: '#ffffff',
      },
    },
  };

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
        disabled={eventsFilter === 'show-all'}
        disableElevation
        disableRipple
        aria-label="Edit Event"
        sx={styles.actionButton}
        onClick={() => setEventsFilter('show-all')}
      >
        Show All
      </Button>
      {/* <Button
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
      </Button> */}
      <Button
        variant="contained"
        fullWidth
        size="large"
        disabled={eventsFilter === 'add-spot'}
        disableElevation
        disableRipple
        sx={styles.actionButton}
        onClick={() => setEventsFilter('add-spot')}
      >
        Add Spot
      </Button>
    </ButtonGroup>
  );
};
