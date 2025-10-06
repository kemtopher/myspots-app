import React from 'react';
import { Grid, IconButton } from '@mui/material';
import { List, AddLocationAlt } from '@mui/icons-material';
import { SearchField } from '../search-field/search-field';

export const SpotlistHeader = ({ setEventsFormState, eventsFormState }) => {
  const styles = {
    actionContainer: {
      height: '56px',
      width: '100%',
      background: 'var(--light-10)'
    },
    actionButton: {
      height: '100%',
      color: 'var(--dark-10)',

      '&.Mui-disabled': {
        color: 'var(--primary-20)'
      }
    }
  };

  return (
    <Grid container sx={styles.actionContainer}>
      <Grid item xs={10}>
        <SearchField sx={{ border: '0px solid #fff' }} />
      </Grid>
      <Grid item xs={2}>
        <IconButton
          variant="comtained"
          aria-label="View Locations List"
          disabled={eventsFormState === 'add-spot'}
          disableFocusRipple
          disableRipple
          sx={styles.actionButton}
          onClick={() => setEventsFormState('add-spot')}
        >
          <AddLocationAlt />
        </IconButton>
        <IconButton
          variant="comtained"
          aria-label="Add Location Form"
          disabled={eventsFormState === null || eventsFormState === 'show-all'}
          disableFocusRipple
          disableRipple
          sx={styles.actionButton}
          onClick={() => setEventsFormState('show-all')}
        >
          <List />
        </IconButton>
      </Grid>
    </Grid>
  );
};
