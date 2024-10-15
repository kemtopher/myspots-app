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
  const [listView, setListView] = useState(true);

  const styles = {
    actionContainer: {
      height: '56px',
      width: '100%',
      background: '#1565c0'
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
        color: '#fdfdfd',
      },
    },
  };

  return (
    <Grid
      container
      sx={styles.actionContainer}
    >
      <Grid item xs={10}>
          <SearchField 
            sx={{
              backgroundColor: "#ffffff",
              color: '#ffffff'
            }}
          />
      </Grid>
      <Grid item xs={2}>
          <IconButton
            variant="comtained"
            aria-label="View Locations List"
            disabled={eventsFilter === 'add-spot'}
            disableFocusRipple
            disableRipple
            sx={{height: '100%', color: '#ffffff'}}
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
            sx={{height: '100%', color: '#ffffff'}}
            onClick={() => setEventsFilter('show-all')}
          >
          <Feed />
        </IconButton>
      </Grid>
    </Grid>
    // <ButtonGroup
    //   variant="contained"
    //   color="primary"
    //   aria-label="contained primary button group"
    //   sx={styles.actionContainer}
    // >
    //   <Button
    //     variant="contained"
    //     fullWidth
    //     size="large"
    //     disabled={eventsFilter === 'show-all'}
    //     disableElevation
    //     disableRipple
    //     aria-label="Edit Event"
    //     sx={styles.actionButton}
    //     onClick={() => setEventsFilter('show-all')}
    //   >
    //     Show All
    //   </Button>
    //   <Button
    //     variant="contained"
    //     fullWidth
    //     size="large"
    //     disabled={eventsFilter === 'add-spot'}
    //     disableElevation
    //     disableRipple
    //     sx={styles.actionButton}
    //     onClick={() => setEventsFilter('add-spot')}
    //   >
    //     Add Spot
    //   </Button>
    // </ButtonGroup>
  );
};
