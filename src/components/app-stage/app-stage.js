import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Global } from '@emotion/react';
import { Grid, SwipeableDrawer, useMediaQuery } from '@mui/material';
import { Map } from '../map/map';
import { MapLoader } from '../map-loader/map-loader';
import { SpotlistHeader } from '../spotlist-header/spotlist-header';
import { SpotList } from '../spot-list/spot-list';
import { SpotForm } from '../spot-form/spot-form';

export const AppStage = ({ loading, error }) => {
  const events = useSelector((state) => state.events.value);
  const [eventsFilter, setEventsFilter] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [open, setOpen] = useState(false);
  const mobileDrawer = useMediaQuery('(max-width: 1024px)');

  const styles = {
    muiDrawer: {
      '.MuiDrawer-root > .MuiPaper-root': {
        width: mobileDrawer ? '100%' : '35%',
        height: mobileDrawer ? '50%' : '100%',
        overflow: 'scroll'
      },
      '.MuiDrawer-paper': {
        visibility: 'visible'
      }
    }
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  useEffect(() => {
    mobileDrawer ? setOpen(false) : setOpen(true);
  }, [mobileDrawer]);

  useEffect(() => {
    if (eventsFilter === null || eventsFilter === 'show-all') {
      setFilteredEvents(events);
      setShowForm(false);
    } else if (eventsFilter === 'add-spot') {
      setFilteredEvents(events);
      setShowForm(true);
    } else {
      setFilteredEvents(events);
      setShowForm(false);
    }
  }, [events, eventsFilter]);

  return (
    <Grid container spacing={0} sx={{ height: '100%' }}>
      <Grid item xs={12} sx={{ height: '100%' }}>
        <Grid container sx={{ height: '100%' }}>
          <Grid item xs={12}>
            <MapLoader loading={loading} error={error}>
              <Map events={filteredEvents} />
            </MapLoader>
          </Grid>
        </Grid>

        <Global styles={styles.muiDrawer} />

        <SwipeableDrawer
          anchor={mobileDrawer ? 'bottom' : 'right'}
          open={false}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          swipeAreaWidth={20}
          disableSwipeToOpen={false}
          hideBackdrop
          sx={{ left: 'unset' }}
        >
          <SpotlistHeader
            eventsFilter={eventsFilter}
            setEventsFilter={setEventsFilter}
          />
          {showForm ? <SpotForm /> : <SpotList nodes={filteredEvents} />}
        </SwipeableDrawer>
      </Grid>
    </Grid>
  );
};
