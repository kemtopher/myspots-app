import React, {useState} from 'react';
import { Grid, IconButton } from '@mui/material';
import {
  List,
  Feed,
  LocationSearching,
  AddLocationAlt
} from '@mui/icons-material';
import { SearchField } from '../search-field/search-field';

export const SpotlistHeader = ({ setEventsFilter, eventsFilter }) => {
  const styles = {
    actionContainer: {
      height: '56px',
      width: '100%',
      background: 'var(--light-10)'
    },
    actionButton: {
      height: '100%',
      color: 'var(--primary-20)',

      '&.Mui-disabled': {
        color: 'var(--primary-40)',
      },
    },
  };

  return (
    <Grid
      container
      sx={styles.actionContainer}
    >
      <Grid item xs={10}>
          <SearchField />
      </Grid>
      <Grid item xs={2}>
          <IconButton
            variant="comtained"
            aria-label="View Locations List"
            disabled={eventsFilter === 'add-spot'}
            disableFocusRipple
            disableRipple
            sx={styles.actionButton}
            onClick={() => setEventsFilter('add-spot')}
          >
            <AddLocationAlt />
          </IconButton>
          <IconButton
            variant="comtained"
            aria-label="Add Location Form"
            disabled={eventsFilter === 'show-all'}
            disableFocusRipple
            disableRipple
            sx={styles.actionButton}
            onClick={() => setEventsFilter('show-all')}
          >
          <List />
        </IconButton>
      </Grid>
    </Grid>
  );
};
