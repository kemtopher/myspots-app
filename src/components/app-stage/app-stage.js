import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Global } from '@emotion/react';
import { Grid, SwipeableDrawer, useMediaQuery } from '@mui/material';
import { Map } from '../map/map';
import { MapLoader } from '../map-loader/map-loader';
import { EventsDrawerHeader } from '../events-drawer-header/events-drawer-header';
import { EventsList } from '../events-list/events-list';
import { EventsForm } from '../events-form/events-form';

export const AppStage = ({ loading, error }) => {
  const events = useSelector((state) => state.events.value);
  const [eventsFormState, setEventsFormState] = useState(null);
  const [formView, setFormView] = useState(false);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [open, setOpen] = useState(true);
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

  // useEffect(() => {
  //   mobileDrawer ? setOpen(false) : setOpen(true);
  // }, [mobileDrawer]);

  useEffect(() => {
    if (eventsFormState === null || eventsFormState === 'show-all') {
      setFilteredEvents(events);
      setFormView(false);
    } else if (eventsFormState === 'add-spot') {
      setFilteredEvents(events);
      setFormView(true);
    } else {
      setFilteredEvents(events);
      setFormView(false);
    }
  }, [events, eventsFormState]);

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
          open={true}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          swipeAreaWidth={56}
          disableSwipeToOpen={false}
          hideBackdrop
          sx={{ left: 'unset' }}
        >
          <EventsDrawerHeader
            eventsFormState={eventsFormState}
            setEventsFormState={setEventsFormState}
          />
          {formView ? <EventsForm /> : <EventsList nodes={filteredEvents} />}
        </SwipeableDrawer>
      </Grid>
    </Grid>
  );
};
